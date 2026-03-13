export const defaultCheckoutSelection = {
  billing: 'monthly',
  plan: 'pro',
};

export const checkoutCatalog = {
  monthly: [
    {
      id: 'basic',
      name: 'Basic',
      audience: 'For individuals',
      mode: 'subscription',
      stripePriceEnv: 'STRIPE_PRICE_BASIC_MONTHLY',
      priceLabel: '$799',
      cycleLabel: '/month',
      summary: 'A focused design retainer for founders who need sharp pages, consistent updates, and fast implementation support.',
      outcome: 'Best for validating offers and keeping a premium brand presence without hiring in-house.',
      features: [
        'Up to 20 hours of design support',
        '1 premium landing page flow',
        'Unlimited small revision rounds',
        'Fast async communication',
      ],
    },
    {
      id: 'pro',
      name: 'Pro',
      audience: 'For startups or creators',
      mode: 'subscription',
      stripePriceEnv: 'STRIPE_PRICE_PRO_MONTHLY',
      priceLabel: '$2,499',
      cycleLabel: '/month',
      summary: 'Our growth-focused retainer for brands that need conversion design, CRO support, and a stronger digital sales engine.',
      outcome: 'Best for operators who want a design partner that also thinks about revenue, positioning, and conversion clarity.',
      featured: true,
      features: [
        'Up to 40 hours each month',
        'Monthly UX and conversion strategy session',
        'A/B testing and CRO improvements',
        'Analytics and SEO optimization support',
        'Priority delivery lane',
      ],
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      audience: 'For established brands',
      mode: 'subscription',
      stripePriceEnv: 'STRIPE_PRICE_ENTERPRISE_MONTHLY',
      priceLabel: '$8,499',
      cycleLabel: '/month',
      summary: 'A premium embedded team for brands that need a high-trust design and growth system across multiple campaigns and funnels.',
      outcome: 'Best for mature teams scaling acquisition, retention, and ongoing experimentation with executive-level support.',
      features: [
        'Unlimited design and requests',
        'Same-week delivery for priority tasks',
        'Dedicated strategist and developer support',
        'Private communication channel',
        'Monthly optimization review',
      ],
    },
  ],
  project: [
    {
      id: 'launch',
      name: 'Launch',
      audience: 'For one-off sprints',
      mode: 'payment',
      stripePriceEnv: 'STRIPE_PRICE_LAUNCH_PROJECT',
      priceLabel: '$2,900',
      cycleLabel: '/project',
      summary: 'A focused launch sprint for premium campaigns, offer pages, and paid traffic landers that need to go live fast.',
      outcome: 'Best for validating a new offer or campaign with a premium one-page experience.',
      features: [
        'Strategy workshop',
        'One premium landing page',
        'Offer and messaging structure',
        'Launch support for 14 days',
      ],
    },
    {
      id: 'scale',
      name: 'Scale',
      audience: 'For growth websites',
      mode: 'payment',
      stripePriceEnv: 'STRIPE_PRICE_SCALE_PROJECT',
      priceLabel: '$6,500',
      cycleLabel: '/project',
      summary: 'A multi-page conversion system designed to increase qualified leads, trust signals, and sales readiness across your brand.',
      outcome: 'Best for service brands rebuilding their website around demand generation and conversion performance.',
      featured: true,
      features: [
        'Multi-page information architecture',
        'Conversion-first copy direction',
        'Premium motion and transitions',
        'CMS and analytics setup',
        'Launch QA plus handoff',
      ],
    },
    {
      id: 'flagship',
      name: 'Flagship',
      audience: 'For premium launches',
      mode: 'payment',
      stripePriceEnv: 'STRIPE_PRICE_FLAGSHIP_PROJECT',
      priceLabel: '$12,000',
      cycleLabel: '/project',
      summary: 'A full high-end launch engagement for brands that need art direction, funnel strategy, automation readiness, and executive polish.',
      outcome: 'Best for premium offers where every touchpoint needs to feel sharp, deliberate, and commercially strong.',
      features: [
        'High-end art direction',
        'Custom sales funnel planning',
        'Automation and CRM integration prep',
        'Priority support for 30 days',
        'Executive launch partner',
      ],
    },
  ],
};

export function getPlansForBilling(billing) {
  return checkoutCatalog[billing] ?? checkoutCatalog[defaultCheckoutSelection.billing];
}

export function getPlanBySelection(billing, planId) {
  return getPlansForBilling(billing).find((plan) => plan.id === planId) ?? getPlansForBilling(billing)[0];
}

export function getAllPlans() {
  return [...checkoutCatalog.monthly, ...checkoutCatalog.project];
}
