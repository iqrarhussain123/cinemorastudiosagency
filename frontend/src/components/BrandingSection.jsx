'use client';

import { motion } from 'framer-motion';

export default function BrandingSection() {
    return (
        <section className="section-dark" style={{ overflow: 'hidden' }}>
            <div className="h-rule-dark" />

            {/* Giant name */}
            <div style={{ padding: '60px 0 0' }}>
                <div style={{ overflow: 'hidden' }}>
                    <motion.p
                        className="heading-centered"
                        style={{
                            color: 'transparent',
                            WebkitTextStroke: '1.5px rgba(255,255,255,0.16)',
                            paddingLeft: 20,
                            paddingRight: 20,
                        }}
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Cinemora
                    </motion.p>
                </div>
                <div style={{ overflow: 'hidden' }}>
                    <motion.p
                        className="heading-centered"
                        style={{
                            color: 'var(--white)',
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginTop: '-0.1em',
                        }}
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    >
                        Studios
                    </motion.p>
                </div>
            </div>

            {/* Ruled description row */}
            <div className="h-rule-dark" style={{ marginTop: 56 }} />
            <div
                className="px"
                style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: 0,
                    paddingTop: 32,
                    paddingBottom: 56,
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    <p className="counter-label" style={{ color: 'rgba(255,255,255,0.24)' }}>Established</p>
                    <p style={{
                        fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 20,
                        letterSpacing: '-0.02em', color: 'var(--white)'
                    }}>2019</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderLeft: '1px solid rgba(255,255,255,0.10)', paddingLeft: 40 }}>
                    <p className="counter-label" style={{ color: 'rgba(255,255,255,0.24)' }}>Specialty</p>
                    <p style={{
                        fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 20,
                        letterSpacing: '-0.02em', color: 'var(--white)'
                    }}>Elite Coaches & RE</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, borderLeft: '1px solid rgba(255,255,255,0.10)', paddingLeft: 40 }}>
                    <p className="counter-label" style={{ color: 'rgba(255,255,255,0.24)' }}>Result</p>
                    <p style={{
                        fontFamily: 'var(--font-space-grotesk)', fontWeight: 600, fontSize: 20,
                        letterSpacing: '-0.02em', color: 'var(--accent)'
                    }}>$8M+ Revenue</p>
                </div>
            </div>

            <div className="h-rule-dark" />
        </section>
    );
}
