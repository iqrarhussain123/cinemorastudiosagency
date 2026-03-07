'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const caseStudies = [
    {
        id: '01',
        title: 'Elite Coach Brand',
        category: 'Personal Branding',
        result: '$1.2M generated from organic content',
        description: 'Full brand identity, content strategy, and 6-month execution for a fitness coach scaling to 7-figures.',
        bgColor: '#1a1a1a',
    },
    {
        id: '02',
        title: 'PropScale Realty',
        category: 'Real Estate Marketing',
        result: '340% increase in qualified leads',
        description: 'Personal brand build + paid ads + short-form video strategy for a 12-agent real estate team.',
        bgColor: '#141414',
    },
    {
        id: '03',
        title: 'Business Coach Authority',
        category: 'Paid Ads + Content',
        result: '$3.8M in course sales in 8 months',
        description: 'Full-funnel strategy from content engine to VSL funnels and paid traffic for a business coach.',
        bgColor: '#1a1a1a',
    },
    {
        id: '04',
        title: 'Luxury RE Brand',
        category: 'Brand + Content',
        result: '2,800% Instagram growth in 6mo',
        description: 'Luxury positioning, listing videos, and authority content for a high-end residential agent.',
        bgColor: '#141414',
    },
];

function CaseStudyCard({ item, index }) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ['start end', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative w-full border-t border-[rgba(255,255,255,0.08)] py-12 flex flex-col md:flex-row md:items-center gap-8 md:gap-16 cursor-pointer"
        >
            {/* Number */}
            <div className="w-16 shrink-0">
                <span
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 500, letterSpacing: '0.1em', fontSize: 12 }}
                    className="text-[rgba(255,255,255,0.32)] uppercase"
                >
                    {item.id}
                </span>
            </div>

            {/* Category */}
            <div className="w-48 shrink-0 hidden md:block">
                <span
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, letterSpacing: '0.1em', fontSize: 11 }}
                    className="text-[rgba(255,255,255,0.32)] uppercase"
                >
                    {item.category}
                </span>
            </div>

            {/* Title + Description */}
            <div className="flex-1 flex flex-col gap-3">
                <div className="overflow-hidden">
                    <h3
                        style={{ fontFamily: 'var(--font-mattone, serif)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: '0.9em' }}
                        className="text-white uppercase text-[32px] md:text-[44px] lg:text-[56px] group-hover:text-[#b23411] transition-colors duration-500"
                    >
                        {item.title}
                    </h3>
                </div>
                <p
                    style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, letterSpacing: '-0.005em', lineHeight: '1.3em' }}
                    className="text-[rgba(255,255,255,0.48)] text-base max-w-xl hidden md:block"
                >
                    {item.description}
                </p>
            </div>

            {/* Result badge */}
            <div className="shrink-0 md:text-right">
                <p
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 13, letterSpacing: '0.05em' }}
                    className="text-[#b23411] uppercase"
                >
                    {item.result}
                </p>
                <motion.span
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 700, fontSize: 12, letterSpacing: '0.1em' }}
                    className="text-[rgba(255,255,255,0.32)] uppercase group-hover:text-white transition-colors duration-300 flex md:justify-end items-center gap-2 mt-1"
                >
                    View Case Study <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
                </motion.span>
            </div>
        </motion.div>
    );
}

export default function WorkSlider() {
    return (
        <section id="work" className="section-wrapper bg-[#0e0e0e]">
            <div className="max-w-container">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20 md:mb-24">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-6 bg-[rgba(255,255,255,0.08)] flex items-center justify-center">
                                <div className="w-2 h-2 bg-[rgba(255,255,255,0.32)]" />
                            </div>
                            <span
                                style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 500, fontSize: 12, letterSpacing: '0.1em' }}
                                className="text-[rgba(255,255,255,0.48)] uppercase"
                            >
                                002 — Featured Work
                            </span>
                        </div>
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: '100%' }}
                                whileInView={{ y: '0%' }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                style={{ fontFamily: 'var(--font-mattone, serif)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: '0.818em' }}
                                className="text-white uppercase text-[48px] md:text-[72px] lg:text-[88px]"
                            >
                                Our Work
                            </motion.h2>
                        </div>
                    </div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        style={{ fontFamily: 'var(--font-space-grotesk)', fontWeight: 400, letterSpacing: '-0.005em', lineHeight: '1.2em' }}
                        className="text-[rgba(255,255,255,0.48)] text-lg max-w-sm"
                    >
                        Real results for real clients. Every project is built around one objective: growth.
                    </motion.p>
                </div>

                {/* Case study list */}
                <div className="flex flex-col">
                    {caseStudies.map((item, i) => (
                        <CaseStudyCard key={item.id} item={item} index={i} />
                    ))}
                </div>

                {/* View all button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 flex justify-center"
                >
                    <a href="#" className="btn-primary">
                        See All Case Studies →
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
