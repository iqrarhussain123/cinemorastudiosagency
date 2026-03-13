import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SiteFrame from '@/components/SiteFrame';
import { caseStudies } from '@/lib/caseStudies';

export const metadata = {
  title: 'Case Studies | Cinemora Studios',
  description:
    'Original case studies covering conversion design, SEO growth, high-end digital strategy, lead generation systems, and premium brand execution.',
};

export default function CaseStudiesPage() {
  return (
    <SiteFrame>
      <div className="premium-page section-dark">
        <div className="h-rule" style={{ opacity: 0.1 }} />

        <section className="premium-shell">
          <div className="premium-hero">
            <div className="premium-hero-copy">
              <span className="premium-kicker">017 Case Studies</span>
              <h1 className="premium-title">
                <span>Growth</span>
                <span>Stories</span>
              </h1>
            </div>

            <div className="premium-hero-aside">
              <p className="premium-dek">
                Original case studies written for search visibility and buyer trust, covering real estate marketing, B2B SaaS conversion design, and premium personal brand funnels.
              </p>
            </div>
          </div>

          <div className="case-study-card-grid">
            {caseStudies.map((study) => (
              <article key={study.slug} className="case-study-card">
                <div className="case-study-card-image">
                  <Image src={study.heroImage} alt={study.title} fill sizes="(max-width: 809px) 100vw, 33vw" />
                </div>
                <div className="case-study-card-copy">
                  <span className="premium-kicker">{study.category}</span>
                  <h2>{study.title}</h2>
                  <p>{study.description}</p>
                  <div className="case-study-card-metrics">
                    {study.metrics.slice(0, 2).map((metric) => (
                      <div key={metric.label}>
                        <strong>{metric.value}</strong>
                        <span>{metric.label}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={`/case-studies/${study.slug}`} className="premium-link">
                    Read case study <ArrowRight size={14} strokeWidth={1.8} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="h-rule" style={{ opacity: 0.1 }} />
      </div>
    </SiteFrame>
  );
}
