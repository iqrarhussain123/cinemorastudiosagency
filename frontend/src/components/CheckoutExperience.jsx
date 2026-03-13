'use client';

import Link from 'next/link';
import { useEffect, useState, useTransition } from 'react';
import { ArrowRight, Check, ShieldCheck } from 'lucide-react';
import { checkoutCatalog, defaultCheckoutSelection, getPlanBySelection, getPlansForBilling } from '@/lib/checkoutCatalog';

const assurances = [
  'Stripe-hosted card checkout',
  'Secure billing details collection',
  'Clear success and onboarding handoff',
];

export default function CheckoutExperience({ initialBilling, initialPlan }) {
  const startingBilling = checkoutCatalog[initialBilling] ? initialBilling : defaultCheckoutSelection.billing;
  const [billing, setBilling] = useState(startingBilling);
  const [planId, setPlanId] = useState(initialPlan);
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [error, setError] = useState('');
  const [isPending, startTransition] = useTransition();

  const plans = getPlansForBilling(billing);
  const activePlan = getPlanBySelection(billing, planId);

  useEffect(() => {
    if (!plans.some((plan) => plan.id === planId)) {
      setPlanId(plans[0].id);
    }
  }, [billing, planId, plans]);

  function beginCheckout() {
    setError('');

    startTransition(async () => {
      try {
        const response = await fetch('/api/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            billing,
            planId: activePlan.id,
            email,
            company,
          }),
        });

        const payload = await response.json();

        if (!response.ok || !payload.url) {
          throw new Error(payload.error ?? 'Unable to create a checkout session.');
        }

        window.location.assign(payload.url);
      } catch (nextError) {
        setError(nextError instanceof Error ? nextError.message : 'Unable to create a checkout session.');
      }
    });
  }

  return (
    <div className="checkout-experience">
      <div className="checkout-toolbar">
        <div className="checkout-toggle" role="tablist" aria-label="Billing mode">
          {Object.keys(checkoutCatalog).map((entry) => {
            const active = billing === entry;

            return (
              <button
                key={entry}
                type="button"
                className={`checkout-toggle-button${active ? ' is-active' : ''}`}
                onClick={() => setBilling(entry)}
              >
                {entry}
              </button>
            );
          })}
        </div>

        <Link href="/enquiry" className="premium-link">
          Request a custom quote
        </Link>
      </div>

      <div className="checkout-layout">
        <div className="checkout-plan-list">
          {plans.map((plan) => {
            const active = activePlan.id === plan.id;

            return (
              <button
                key={plan.id}
                type="button"
                className={`checkout-plan-card${active ? ' is-active' : ''}${plan.featured ? ' is-featured' : ''}`}
                onClick={() => setPlanId(plan.id)}
              >
                <div className="checkout-plan-card-top">
                  <div>
                    <strong>{plan.name}</strong>
                    <span>{plan.audience}</span>
                  </div>
                  {plan.featured ? <em>Most Popular</em> : null}
                </div>
                <div className="checkout-plan-price">
                  <span>{plan.priceLabel}</span>
                  <small>{plan.cycleLabel}</small>
                </div>
                <p>{plan.summary}</p>
              </button>
            );
          })}
        </div>

        <aside className="checkout-summary-card">
          <div className="checkout-summary-head">
            <span className="premium-kicker">Selected plan</span>
            <h3>{activePlan.name}</h3>
            <p>{activePlan.outcome}</p>
          </div>

          <div className="checkout-summary-price">
            <strong>{activePlan.priceLabel}</strong>
            <span>{activePlan.cycleLabel}</span>
          </div>

          <div className="checkout-summary-fields">
            <label className="studio-field">
              <span>Work email</span>
              <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" />
            </label>
            <label className="studio-field">
              <span>Company</span>
              <input type="text" value={company} onChange={(event) => setCompany(event.target.value)} placeholder="Your company" />
            </label>
          </div>

          <ul className="premium-checklist">
            {activePlan.features.map((feature) => (
              <li key={feature}>
                <Check size={14} strokeWidth={1.8} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button type="button" className="studio-submit is-full" disabled={isPending} onClick={beginCheckout}>
            <span>{isPending ? 'Opening Stripe...' : 'Continue to secure checkout'}</span>
            <ArrowRight size={14} strokeWidth={1.8} />
          </button>

          {error ? <p className="premium-error">{error}</p> : null}

          <div className="checkout-assurance">
            <p>
              <ShieldCheck size={14} strokeWidth={1.8} />
              <span>Secure checkout setup</span>
            </p>
            <ul className="checkout-assurance-list">
              {assurances.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
