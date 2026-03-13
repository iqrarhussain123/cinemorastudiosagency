import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SiteFrame from '@/components/SiteFrame';
import { caseStudies, getCaseStudyBySlug } from '@/lib/caseStudies';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: 'Case Study Not Found | Cinemora Studios',
    };
  }

  return {
    title: study.seoTitle,
    description: study.description,
    keywords: study.keywords.join(', '),
  };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export default async function CaseStudyDetailPage({ params }) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.description,
    datePublished: study.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Cinemora Studios',
    },
  };

  return (
    <SiteFrame>
      <div className="premium-page section-dark">
        <div className="h-rule" style={{ opacity: 0.1 }} />

        <section className="premium-shell">
          <div className="premium-hero">
            <div className="premium-hero-copy">
              <span className="premium-kicker">{study.category}</span>
              <h1 className="premium-title is-case-study">{study.title}</h1>
            </div>

            <div className="premium-hero-aside">
              <p className="premium-dek">{study.summary}</p>
              <div className="premium-inline-links">
                <Link href="/enquiry" className="premium-link">
                  Start a similar project
                </Link>
                <Link href="/checkout?billing=project&plan=scale" className="premium-link is-muted">
                  Secure a project package
                </Link>
              </div>
            </div>
          </div>

          <div className="premium-stage">
            <div className="case-study-hero-image">
              <Image src={study.heroImage} alt={study.title} fill sizes="100vw" />
            </div>

            <div className="case-study-metric-grid">
              {study.metrics.map((metric) => (
                <div key={metric.label} className="premium-stat-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>

            <div className="case-study-detail-grid">
              <article className="premium-panel">
                <span className="premium-kicker">Challenge</span>
                <p className="premium-copy">{study.problem}</p>
              </article>

              <article className="premium-panel">
                <span className="premium-kicker">Impact</span>
                <p className="premium-copy">{study.impact}</p>
              </article>
            </div>

            <div className="case-study-detail-grid">
              <article className="premium-panel">
                <span className="premium-kicker">Strategy</span>
                <ul className="premium-list">
                  {study.strategy.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="premium-panel">
                <span className="premium-kicker">Execution</span>
                <ul className="premium-list">
                  {study.execution.map((item) => (
                    <li key={item}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="premium-panel">
              <span className="premium-kicker">SEO focus</span>
              <div className="premium-tag-row">
                {study.keywords.map((keyword) => (
                  <span key={keyword} className="premium-tag">
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
        <div className="h-rule" style={{ opacity: 0.1 }} />
      </div>
    </SiteFrame>
  );
}
