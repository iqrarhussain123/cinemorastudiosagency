'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
    {
        id: '01',
        title: 'Personal\nBranding',
        description: 'We build authority-first personal brands that make your audience choose you before you even speak.',
        img: '/img-branding.png',
        tag: 'Brand',
    },
    {
        id: '02',
        title: 'Content\nCreation',
        description: 'From scripting to editing — a full content engine producing 30+ pieces per month.',
        img: '/img-content.png',
        tag: 'Content',
    },
    {
        id: '03',
        title: 'Paid\nAds',
        description: 'Meta & TikTok campaigns engineered for ROI. No guesswork — data-driven every step.',
        img: '/img-ads.png',
        tag: 'Ads',
    },
    {
        id: '04',
        title: 'Sales\nStrategy',
        description: 'VSL funnels, offer positioning, and closing scripts built to convert cold traffic into clients.',
        img: '/img-branding.png',
        tag: 'Sales',
    },
];

export default function WhatWeDo() {
    return (
        <section id="services" className="section-light">
            {/* Top rule */}
            <div className="h-rule-light" />

            <div className="px py">
                {/* Section header row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 56 }}>
                    <div>
                        <p className="counter-label" style={{ marginBottom: 16, color: 'rgba(0,0,0,0.36)' }}>02 — What We Do</p>
                        <div style={{ overflow: 'hidden' }}>
                            <motion.h2
                                className="heading-lg"
                                initial={{ y: '110%' }}
                                whileInView={{ y: '0%' }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                style={{ color: 'var(--black)' }}
                            >
                                Our Services
                            </motion.h2>
                        </div>
                    </div>
                    <a href="#contact" className="link-arrow" style={{ color: 'var(--black)', paddingBottom: 8 }}>
                        All Services →
                    </a>
                </div>

                {/* 2-column grid of services */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1px', background: 'rgba(0,0,0,0.10)' }}>
                    {services.map((s, i) => (
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                            className="group"
                            style={{ background: 'var(--white)', padding: 32, display: 'flex', flexDirection: 'column', gap: 24 }}
                        >
                            {/* Top row: number + tag */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span className="counter-label" style={{ color: 'rgba(0,0,0,0.32)' }}>{s.id}</span>
                                <span className="label-sm" style={{ color: 'var(--accent)', letterSpacing: '0.12em' }}>{s.tag}</span>
                            </div>

                            {/* Thumbnail */}
                            <div style={{ width: '100%', aspectRatio: '16/9', overflow: 'hidden', position: 'relative' }}>
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    style={{
                                        width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                                        transform: 'scale(1)', transition: 'transform 0.6s ease'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
                                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>

                            {/* Title + description */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16 }}>
                                <h3
                                    style={{
                                        fontFamily: 'var(--font-space-grotesk)', fontWeight: 700, fontSize: 24,
                                        letterSpacing: '-0.03em', lineHeight: '1em', textTransform: 'uppercase',
                                        color: 'var(--black)', whiteSpace: 'pre-line'
                                    }}
                                >
                                    {s.title}
                                </h3>
                                <p className="body-copy" style={{ color: 'rgba(0,0,0,0.52)', fontSize: 13, maxWidth: 220, textAlign: 'right' }}>
                                    {s.description}
                                </p>
                            </div>

                            {/* Hover CTA */}
                            <div style={{ borderTop: '1px solid rgba(0,0,0,0.08)', paddingTop: 16 }}>
                                <a href="#contact" className="link-arrow" style={{ color: 'var(--black)' }}>Learn More →</a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="h-rule-light" />
        </section>
    );
}
