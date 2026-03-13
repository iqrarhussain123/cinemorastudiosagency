'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, animate, motion, useInView } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const revealEase = [0.16, 1, 0.3, 1];
const money = new Intl.NumberFormat('en-US');

const billingModes = [
    { id: 'monthly', label: 'Monthly' },
    { id: 'project', label: 'Per Project' },
];

const pricingByMode = {
    monthly: [
        {
            id: 'basic',
            name: 'Basic',
            audience: 'For individuals',
            price: 799,
            cycle: 'month',
            cta: 'Start with Basic',
            features: [
                'Up to 20h',
                '1 landing page',
                'Unlimited small updates',
                'Cancel or pause anytime',
            ],
        },
        {
            id: 'pro',
            name: 'Pro',
            audience: 'For startups or creators',
            badge: 'Popular',
            price: 2499,
            cycle: 'month',
            cta: 'Start with Pro',
            featured: true,
            features: [
                'Up to 40h',
                'Monthly UX strategy session',
                'A/B testing and CRO improvements',
                'Analytics and SEO optimization',
                'Ongoing development and maintenance',
                'Priority task queue access',
                'Cancel or pause anytime',
            ],
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            audience: 'For established brands',
            price: 8499,
            cycle: 'month',
            cta: 'Start with Enterprise',
            features: [
                'Unlimited design and requests',
                'Same-week delivery for most tasks',
                'Dedicated designer and developer duo',
                'Private Slack channel',
                'Monthly analytics and optimization review',
                'Cancel or pause anytime',
            ],
        },
    ],
    project: [
        {
            id: 'launch',
            name: 'Launch',
            audience: 'For one-off sprints',
            price: 2900,
            cycle: 'project',
            cta: 'Start with Launch',
            features: [
                'Focused strategy workshop',
                'One premium landing page',
                'Messaging and offer structure',
                'Lightweight motion system',
                'Launch support for 14 days',
            ],
        },
        {
            id: 'scale',
            name: 'Scale',
            audience: 'For growth websites',
            badge: 'Popular',
            price: 6500,
            cycle: 'project',
            cta: 'Start with Scale',
            featured: true,
            features: [
                'Multi-page site architecture',
                'Conversion-first copy direction',
                'Advanced motion and transitions',
                'CMS and analytics integration',
                'QA plus launch checklist',
                'Two revision rounds',
            ],
        },
        {
            id: 'flagship',
            name: 'Flagship',
            audience: 'For premium launches',
            price: 12000,
            cycle: 'project',
            cta: 'Start with Flagship',
            features: [
                'High-end art direction',
                'Custom sales funnel flow',
                'Full-stack implementation handoff',
                'Automation and CRM integration',
                'Priority support for 30 days',
                'Dedicated launch partner',
            ],
        },
    ],
};

function AnimatedPrice({ value, cycleKey }) {
    const ref = useRef(null);
    const inView = useInView(ref, { amount: 0.6 });
    const [displayValue, setDisplayValue] = useState(value);

    useEffect(() => {
        if (!inView) {
            return undefined;
        }

        const resetFrame = requestAnimationFrame(() => {
            setDisplayValue(0);
        });

        const controls = animate(0, value, {
            duration: 1.1,
            ease: revealEase,
            onUpdate(latest) {
                setDisplayValue(Math.round(latest));
            },
        });

        return () => {
            cancelAnimationFrame(resetFrame);
            controls.stop();
        };
    }, [cycleKey, inView, value]);

    return (
        <span ref={ref} className="pricing-price-value">
            {money.format(displayValue)}
        </span>
    );
}

function PricingCard({ plan, index, cycleKey }) {
    const checkoutHref = `/checkout?billing=${cycleKey}&plan=${plan.id}`;

    return (
        <motion.article
            className={`pricing-card${plan.featured ? ' is-featured' : ''}`}
            initial={{ opacity: 0, y: 54, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            whileHover={{ y: -10 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
                duration: 0.75,
                delay: index * 0.08,
                ease: revealEase,
            }}
        >
            {plan.featured ? <span className="pricing-card-bar" aria-hidden="true" /> : null}
            <span className="pricing-card-glow" aria-hidden="true" />

            <div className="pricing-card-header">
                <div className="pricing-card-copy">
                    <h3 className="pricing-plan-name">{plan.name}</h3>
                    <p className="pricing-plan-audience">{plan.audience}</p>
                </div>
                {plan.badge ? <span className="pricing-badge">{plan.badge}</span> : null}
            </div>

            <div className="pricing-price-block">
                <span className="pricing-currency">$</span>
                <AnimatedPrice value={plan.price} cycleKey={cycleKey} />
                <span className="pricing-cycle">/{plan.cycle}</span>
            </div>

            <a href={checkoutHref} className="pricing-cta">
                <span className="pricing-cta-rail" aria-hidden="true" />
                <span className="pricing-cta-label">{plan.cta}</span>
                <span className="pricing-cta-arrow" aria-hidden="true">
                    <ArrowRight size={14} strokeWidth={1.75} />
                </span>
            </a>

            <ul className="pricing-features">
                {plan.features.map((feature) => (
                    <li key={feature} className="pricing-feature">
                        <Check size={14} strokeWidth={1.7} aria-hidden="true" />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>
        </motion.article>
    );
}

export default function Pricing() {
    const [billing, setBilling] = useState('monthly');

    return (
        <section id="pricing" className="section-dark pricing-section" aria-labelledby="pricing-title">
            <div className="h-rule" style={{ opacity: 0.1 }} />

            <div className="px pricing-shell">
                <div className="pricing-stage">
                    <motion.div
                        className="pricing-header"
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.9, ease: revealEase }}
                    >
                        <span className="pricing-kicker">009 Pricing</span>

                        <h2 id="pricing-title" className="pricing-title">
                            <span>Pricing</span>
                            <span>Plans</span>
                        </h2>

                        <p className="pricing-intro">
                            Choose a plan that fits your goals or request a custom quote anytime.
                        </p>

                        <div className="pricing-toggle" role="tablist" aria-label="Pricing mode">
                            {billingModes.map((mode) => {
                                const active = billing === mode.id;

                                return (
                                    <button
                                        key={mode.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={active}
                                        className={`pricing-toggle-button${active ? ' is-active' : ''}`}
                                        onClick={() => setBilling(mode.id)}
                                    >
                                        {active ? <motion.span layoutId="pricing-toggle-pill" className="pricing-toggle-pill" /> : null}
                                        <span>{mode.label}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={billing}
                            className="pricing-grid"
                            initial={{ opacity: 0, y: 18 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -18 }}
                            transition={{ duration: 0.4, ease: revealEase }}
                        >
                            {pricingByMode[billing].map((plan, index) => (
                                <PricingCard key={`${billing}-${plan.name}`} plan={plan} index={index} cycleKey={billing} />
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <div className="h-rule" style={{ opacity: 0.1 }} />
        </section>
    );
}
