import Link from 'next/link';
import SiteFrame from '@/components/SiteFrame';
import StudioForm from '@/components/StudioForm';

const enquiryFields = [
  { name: 'name', label: 'Name', placeholder: 'Your name', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
  { name: 'company', label: 'Company', placeholder: 'Your company', required: true },
  { name: 'website', label: 'Website', type: 'url', placeholder: 'https://yourdomain.com' },
  {
    name: 'service',
    label: 'Primary need',
    type: 'select',
    required: true,
    placeholder: 'Choose one',
    options: ['Website redesign', 'Conversion landing pages', 'Retainer support', 'Brand system', 'Funnel strategy'],
  },
  {
    name: 'budget',
    label: 'Budget',
    type: 'select',
    required: true,
    placeholder: 'Select budget',
    options: ['$2k - $5k', '$5k - $10k', '$10k - $20k', '$20k+'],
  },
  { name: 'timeline', label: 'Timeline', placeholder: 'Launch target or deadline' },
  { name: 'goals', label: 'What are you trying to improve?', type: 'textarea', rows: 6, span: 2, placeholder: 'Share your goals, current bottlenecks, and what success should look like.' },
];

export const metadata = {
  title: 'Enquiry | Cinemora Studios',
  description:
    'Start a premium project enquiry with Cinemora Studios for conversion design, high-trust websites, brand systems, and growth-focused digital experiences.',
};

export default function EnquiryPage() {
  return (
    <SiteFrame>
      <div className="premium-page section-dark">
        <div className="h-rule" style={{ opacity: 0.1 }} />

        <section className="premium-shell">
          <div className="premium-hero">
            <div className="premium-hero-copy">
              <span className="premium-kicker">014 Enquiry</span>
              <h1 className="premium-title">
                <span>Start A</span>
                <span>Project</span>
              </h1>
            </div>

            <div className="premium-hero-aside">
              <p className="premium-dek">
                Tell us what you’re building, where the current experience is falling short, and how you want the brand to perform commercially.
              </p>
            </div>
          </div>

          <div className="premium-stage premium-content-grid">
            <div className="premium-panel">
              <span className="premium-kicker">Best fit clients</span>
              <h2 className="premium-section-title">Premium brands ready for sharper conversion systems</h2>
              <p className="premium-copy">
                We work best with teams that care about positioning, speed, and commercial clarity. If the business is already moving and the brand now needs to catch up, this is the right place to start.
              </p>
              <ul className="premium-list">
                <li><span>Service brands repositioning for better lead quality</span></li>
                <li><span>Founders launching premium offers or paid acquisition campaigns</span></li>
                <li><span>Operators who need a site that supports revenue, trust, and SEO visibility</span></li>
              </ul>
              <div className="premium-inline-links">
                <Link href="/case-studies" className="premium-link">
                  Review case studies
                </Link>
                <Link href="/checkout" className="premium-link is-muted">
                  Prefer to secure a package now
                </Link>
              </div>
            </div>

            <div className="premium-panel">
              <StudioForm
                endpoint="/api/intake/enquiry"
                submitLabel="Send enquiry"
                successTitle="Enquiry received"
                successMessage="We’ve saved your enquiry and will use it to guide the next step."
                fields={enquiryFields}
              />
            </div>
          </div>
        </section>

        <div className="h-rule" style={{ opacity: 0.1 }} />
      </div>
    </SiteFrame>
  );
}
