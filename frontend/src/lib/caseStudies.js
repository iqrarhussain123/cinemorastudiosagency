export const caseStudies = [
  {
    slug: 'luxury-real-estate-lead-generation',
    title: 'Luxury Real Estate Lead Generation System',
    seoTitle: 'Luxury Real Estate Lead Generation Case Study | Cinemora Studios',
    description:
      'How we repositioned a luxury real estate brand with conversion-focused website design, SEO messaging, and paid traffic landing pages that increased qualified property leads.',
    category: 'Real Estate Marketing',
    client: 'Northline Estates',
    heroImage: '/linie-service-design.jpg',
    publishedAt: '2026-02-10',
    metrics: [
      { value: '312%', label: 'Qualified lead growth' },
      { value: '41%', label: 'Landing page conversion lift' },
      { value: '19 days', label: 'Sales-cycle reduction' },
    ],
    summary:
      'Northline needed a premium digital sales system that could attract affluent buyers, clarify their value proposition, and convert more website traffic into warm conversations.',
    problem:
      'The old website looked respectable but underperformed in search, produced weak inquiry quality, and failed to communicate trust for high-ticket listings. Traffic was coming in, but lead intent was low and follow-up wasted time.',
    strategy: [
      'Rebuilt the website architecture around luxury real estate SEO, neighborhood landing pages, and higher-intent property search journeys.',
      'Introduced premium visual hierarchy, proof-driven messaging, and shorter inquiry paths that improved conversion rate optimization for property buyers and sellers.',
      'Connected campaign pages to a cleaner lead qualification flow so the sales team could segment by budget, location, and readiness.',
    ],
    execution: [
      'Developed a luxury brand narrative focused on credibility, market expertise, and concierge-level service.',
      'Created conversion landing pages for buyer leads, seller leads, and investment property inquiries.',
      'Optimized service copy for terms like luxury real estate marketing, high-end property listings, property lead generation, and real estate conversion design.',
    ],
    impact:
      'The new system improved both visibility and trust. Organic search traffic started attracting better-fit buyers, and paid campaigns converted at a much stronger rate because the digital experience finally matched the quality of the listings.',
    keywords: [
      'luxury real estate marketing',
      'property lead generation',
      'real estate website design',
      'conversion rate optimization',
      'high-end brand strategy',
    ],
  },
  {
    slug: 'b2b-saas-demo-conversion-engine',
    title: 'B2B SaaS Demo Conversion Engine',
    seoTitle: 'B2B SaaS Website Redesign Case Study | Demo Conversion Growth',
    description:
      'A B2B SaaS case study showing how strategic messaging, UX clarity, and SEO-focused product pages helped improve demo requests and pipeline quality.',
    category: 'B2B SaaS Growth',
    client: 'SignalLayer',
    heroImage: '/linie-showreel.jpg',
    publishedAt: '2026-01-22',
    metrics: [
      { value: '2.4x', label: 'Demo request increase' },
      { value: '38%', label: 'Higher sales-qualified lead rate' },
      { value: '27%', label: 'Lower bounce rate' },
    ],
    summary:
      'SignalLayer needed a sharper SaaS website that could explain a technical product faster, improve SEO visibility, and move more mid-market buyers into booked demos.',
    problem:
      'The company had traffic and product maturity, but the website buried the value proposition under feature lists and generic positioning. Search visibility was weak for commercial-intent queries, and visitors bounced before understanding the product.',
    strategy: [
      'Reframed the website around demand generation, product marketing clarity, and commercial search intent.',
      'Built tighter homepage, product, integration, and use-case flows that made the product easier to understand for both buyers and procurement stakeholders.',
      'Added richer proof architecture with ROI metrics, testimonials, integration depth, and stronger demo CTAs.',
    ],
    execution: [
      'Mapped navigation to core search clusters such as B2B SaaS platform, workflow automation software, and enterprise operations analytics.',
      'Created modular page sections for use cases, objections, migration concerns, and buyer confidence signals.',
      'Aligned internal linking and metadata around high-intent SEO phrases that supported both branded and non-branded acquisition.',
    ],
    impact:
      'Within one quarter, the site stopped acting like a brochure and started behaving like a pipeline asset. Better positioning plus stronger UX made paid traffic, organic search, and outbound follow-up much easier to convert.',
    keywords: [
      'b2b saas website redesign',
      'demo conversion optimization',
      'product marketing strategy',
      'saas seo content',
      'demand generation website',
    ],
  },
  {
    slug: 'executive-coach-authority-funnel',
    title: 'Executive Coach Authority Funnel',
    seoTitle: 'Executive Coach Funnel Case Study | Personal Brand Website Growth',
    description:
      'An executive coaching case study covering personal brand positioning, authority-focused website design, and search-driven funnel content for more premium client inquiries.',
    category: 'Personal Brand Growth',
    client: 'Mason Reed Advisory',
    heroImage: '/linie-clarity-left.jpg',
    publishedAt: '2025-12-14',
    metrics: [
      { value: '186%', label: 'Consultation booking growth' },
      { value: '4.1x', label: 'Newsletter opt-in improvement' },
      { value: '22%', label: 'Higher close rate' },
    ],
    summary:
      'Mason Reed wanted a premium coaching funnel that positioned him like a category leader, ranked for strategic thought-leadership terms, and converted credibility into high-ticket conversations.',
    problem:
      'The original website relied too heavily on biography and lacked a clear point of view. It didn’t capture enough organic search intent around executive coaching, leadership advisory, and performance strategy, and it failed to build authority fast.',
    strategy: [
      'Developed a sharper personal brand narrative built around leadership transformation, executive decision-making, and measurable business outcomes.',
      'Designed a premium funnel that moved visitors from authority content to consultation requests with less friction.',
      'Published service architecture and case-story language optimized for executive coaching SEO, leadership consultant keywords, and personal brand discovery.',
    ],
    execution: [
      'Rebuilt page hierarchy to support speaking, advisory, coaching programs, and newsletter capture.',
      'Added proof modules, selective testimonials, and positioning copy that supported trust without sounding generic.',
      'Created a content structure that made search, referrals, and LinkedIn traffic all land in a more commercial environment.',
    ],
    impact:
      'The new funnel helped Mason look more established, convert more premium inquiries, and create stronger continuity between social proof, SEO traffic, and booked strategy calls.',
    keywords: [
      'executive coaching website',
      'personal brand funnel',
      'leadership consultant seo',
      'high-ticket coaching leads',
      'authority website design',
    ],
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}
