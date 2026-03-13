import Link from 'next/link';
import CheckoutExperience from '@/components/CheckoutExperience';
import SiteFrame from '@/components/SiteFrame';

export const metadata = {
  title: 'Checkout | Cinemora Studios',
  description:
    'Secure your Cinemora Studios design retainer or project package with a premium Stripe checkout experience built for high-trust brands.',
};

export default async function CheckoutPage({ searchParams }) {
  const params = await searchParams;
  const initialBilling = params.billing ?? 'monthly';
  const initialPlan = params.plan ?? 'pro';

  return (
    <SiteFrame>
      <div className="premium-page section-dark">
        <div className="h-rule" style={{ opacity: 0.1 }} />

        <section className="premium-shell">
          <div className="premium-hero">
            <div className="premium-hero-copy">
              <span className="premium-kicker">013 Checkout</span>
              <h1 className="premium-title">
                <span>Secure</span>
                <span>Checkout</span>
              </h1>
            </div>

            <div className="premium-hero-aside">
              <p className="premium-dek">
                Choose the package that matches your current growth stage, then move into a secure Stripe-hosted payment flow.
              </p>
              <div className="premium-inline-links">
                <Link href="/enquiry" className="premium-link">
                  Need a custom quote?
                </Link>
                <Link href="/support" className="premium-link is-muted">
                  Questions before paying
                </Link>
              </div>
            </div>
          </div>

          <div className="premium-stage">
            <CheckoutExperience initialBilling={initialBilling} initialPlan={initialPlan} />
          </div>

          <div className="premium-note-grid">
            <article className="premium-note-card">
              <span className="premium-kicker">What happens next</span>
              <p>
                Once payment is successful, we’ll send you directly into the onboarding flow so your brand assets, goals, and access details land in one place.
              </p>
            </article>
            <article className="premium-note-card">
              <span className="premium-kicker">Operational handoff</span>
              <p>
                The checkout, enquiry, onboarding, and support pages are designed to feed n8n webhooks, so your client intake can move into a workflow instead of a messy inbox.
              </p>
            </article>
          </div>
        </section>

        <div className="h-rule" style={{ opacity: 0.1 }} />
      </div>
    </SiteFrame>
  );
}
