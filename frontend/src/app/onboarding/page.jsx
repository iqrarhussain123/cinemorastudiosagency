import SiteFrame from '@/components/SiteFrame';
import StudioForm from '@/components/StudioForm';

const onboardingFields = [
  { name: 'name', label: 'Primary contact', placeholder: 'Your full name', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
  { name: 'company', label: 'Brand or company', placeholder: 'Brand name', required: true },
  { name: 'offer', label: 'Core offer', placeholder: 'Main service, product, or package', required: true },
  { name: 'launchDate', label: 'Ideal launch date', placeholder: 'Target delivery date' },
  {
    name: 'priority',
    label: 'Primary priority',
    type: 'select',
    required: true,
    placeholder: 'Choose one',
    options: ['Lead generation', 'Conversion rate optimization', 'SEO visibility', 'Premium rebrand', 'Funnel performance'],
  },
  {
    name: 'audience',
    label: 'Ideal client profile',
    type: 'textarea',
    rows: 4,
    span: 2,
    placeholder: 'Describe your best-fit audience, what they want, and what objections they usually carry.',
  },
  {
    name: 'voice',
    label: 'Brand voice and references',
    type: 'textarea',
    rows: 4,
    span: 2,
    placeholder: 'Share the tone, adjectives, or reference brands that feel closest to the direction you want.',
  },
  {
    name: 'assets',
    label: 'Assets and access',
    type: 'textarea',
    rows: 5,
    span: 2,
    placeholder: 'List current website URLs, analytics access, brand files, media folders, CRM tools, or any other assets we should know about.',
  },
  {
    name: 'notes',
    label: 'Anything the team should know',
    type: 'textarea',
    rows: 5,
    span: 2,
    placeholder: 'Share launch constraints, internal approvals, offer changes, SEO priorities, or anything that will help us move faster.',
  },
];

export const metadata = {
  title: 'Client Onboarding | Cinemora Studios',
  description:
    'Complete your Cinemora Studios onboarding form so strategy, assets, audience insights, and access details flow into a premium client setup.',
};

export default function OnboardingPage() {
  return (
    <SiteFrame>
      <div className="premium-page section-dark">
        <div className="h-rule" style={{ opacity: 0.1 }} />

        <section className="premium-shell">
          <div className="premium-hero">
            <div className="premium-hero-copy">
              <span className="premium-kicker">015 Onboarding</span>
              <h1 className="premium-title">
                <span>Client</span>
                <span>Onboarding</span>
              </h1>
            </div>

            <div className="premium-hero-aside">
              <p className="premium-dek">
                This form gives us the strategic context we need to move quickly, reduce revision friction, and build around the right commercial priorities from day one.
              </p>
            </div>
          </div>

          <div className="premium-stage premium-content-grid">
            <div className="premium-panel">
              <span className="premium-kicker">What we collect</span>
              <h2 className="premium-section-title">Everything your delivery workflow needs in one place</h2>
              <ul className="premium-list">
                <li><span>Audience clarity, offer structure, and positioning context</span></li>
                <li><span>Brand references, assets, access, and launch constraints</span></li>
                <li><span>Inputs that can route directly into n8n-based automation</span></li>
              </ul>
              <p className="premium-copy">
                We’ve designed this to feed a clean onboarding pipeline instead of relying on fragmented email threads, voice notes, and missing logins.
              </p>
            </div>

            <div className="premium-panel">
              <StudioForm
                endpoint="/api/intake/onboarding"
                submitLabel="Submit onboarding"
                successTitle="Onboarding captured"
                successMessage="Your onboarding details are in. We can now route them into production and automation."
                fields={onboardingFields}
              />
            </div>
          </div>
        </section>

        <div className="h-rule" style={{ opacity: 0.1 }} />
      </div>
    </SiteFrame>
  );
}
