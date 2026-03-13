import { caseStudies } from '@/lib/caseStudies';

export default function sitemap() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || 'http://localhost:3000';
  const staticPages = ['', '/checkout', '/enquiry', '/onboarding', '/support', '/case-studies'];

  return [
    ...staticPages.map((pathname) => ({
      url: `${siteUrl}${pathname}`,
      lastModified: new Date(),
    })),
    ...caseStudies.map((study) => ({
      url: `${siteUrl}/case-studies/${study.slug}`,
      lastModified: new Date(study.publishedAt),
    })),
  ];
}
