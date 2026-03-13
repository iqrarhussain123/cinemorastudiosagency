import Link from 'next/link';
import SiteFrame from '@/components/SiteFrame';
import StudioForm from '@/components/StudioForm';

const supportFields = [
  { name: 'name', label: 'Name', placeholder: 'Your name', required: true },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@company.com', required: true },
  { name: 'company', label: 'Company', placeholder: 'Your company', required: true },
  {
    name: 'priority',
    label: 'Priority',
    type: 'select',
    required: true,
    placeholder: 'Select urgency',
    options: ['Standard', 'Priority', 'Critical'],
  },
  {
    name: 'topic',
    label: 'Support topic',
    type: 'select',
    required: true,
    placeholder: 'Choose a topic',
    options: ['Design revisions', 'Website issue', 'Checkout or billing', 'Automation / n8n', 'Content update'],
  },
  { name: 'pageUrl', label: 'Relevant URL', type: 'url', placeholder: 'https://yourdomain.com/page' },
  {
    name: 'details',
    label: 'Describe the issue',
    type: 'textarea',
    rows: 6,
    span: 2,
    placeholder: 'Tell us what happened, what you expected, and anything urgent the team should know.',
  },
];

export const metadata = {
  title: 'Support | Cinemora Studios',
  description:
    'Get premium website, checkout, design, and automation support from Cinemora Studios with a structured support intake page.',
};

export default function SupportPage() {
  return (
    <SiteFrame>
      <div className="premium-page section-dark">
        <div className="h-rule" style={{ opacity: 0.1 }} />

        <section className="premium-shell">
          <div className="premium-hero">
            <div className="premium-hero-copy">
              <span className="premium-kicker">016 Support</span>
              <h1 className="premium-title">
                <span>Client</span>
                <span>Support</span>
              </h1>
            </div>

            <div className="premium-hero-aside">
              <p className="premium-dek">
                Use this page for updates, priority changes, technical issues, billing support, or automation questions tied to your active project.
              </p>
            </div>
          </div>

          <div className="premium-stage premium-content-grid">
            <div className="premium-panel">
              <span className="premium-kicker">Support model</span>
              <h2 className="premium-section-title">Structured, calm, and easy to route</h2>
              <div className="premium-stat-grid">
                <div className="premium-stat-card">
                  <strong>&lt; 1 day</strong>
                  <span>Standard first response</span>
                </div>
                <div className="premium-stat-card">
                  <strong>Priority lane</strong>
                  <span>For active launch windows</span>
                </div>
              </div>
              <ul className="premium-list">
                <li><span>Support requests can be routed into n8n for assignment and follow-up</span></li>
                <li><span>Billing, checkout, and onboarding issues can share the same operational pipeline</span></li>
                <li><span>Use the enquiry page if you’re not an existing client yet</span></li>
              </ul>
              <div className="premium-inline-links">
                <Link href="/enquiry" className="premium-link">
                  New project enquiry
                </Link>
              </div>
            </div>

            <div className="premium-panel">
              <StudioForm
                endpoint="/api/intake/support"
                submitLabel="Send support request"
                successTitle="Support request received"
                successMessage="Your support request has been captured and can now be routed into your operations flow."
                fields={supportFields}
              />
            </div>
          </div>
        </section>

        <div className="h-rule" style={{ opacity: 0.1 }} />
      </div>
    </SiteFrame>
  );
}
