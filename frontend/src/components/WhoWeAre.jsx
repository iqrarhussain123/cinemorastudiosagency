'use client';

import { motion } from 'framer-motion';

export default function WhoWeAre() {
    return (
        <section className="section-light" style={{ overflow: 'hidden' }}>
            <div className="h-rule-light" />

            {/* Two-column: text left, dark image right */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 540 }}>
                {/* Left: text */}
                <div className="px py" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: 48 }}>
                    <div>
                        <p className="counter-label" style={{ marginBottom: 24, color: 'rgba(0,0,0,0.36)' }}>04 — Who We Are</p>
                        <div style={{ overflow: 'hidden' }}>
                            <motion.h2
                                className="heading-lg"
                                initial={{ y: '110%' }}
                                whileInView={{ y: '0%' }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                                style={{ color: 'var(--black)' }}
                            >
                                Built For<br />The Elite
                            </motion.h2>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}
                    >
                        <p className="body-copy" style={{ color: 'rgba(0,0,0,0.60)' }}>
                            Cinemora Studios is a precision marketing agency built for coaches and real estate professionals who refuse to be average. We don't work with everyone — we work with the ones who are serious about scaling.
                        </p>
                        <p className="body-copy" style={{ color: 'rgba(0,0,0,0.60)' }}>
                            Our team has generated over $8M+ in client sales through a combination of personal brand authority, content systems, and high-converting paid campaigns.
                        </p>
                        <a href="#contact" className="link-arrow" style={{ color: 'var(--black)', marginTop: 8 }}>
                            Work With Us →
                        </a>
                    </motion.div>
                </div>

                {/* Right: full-bleed dark image */}
                <motion.div
                    initial={{ opacity: 0, scale: 1.04 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ overflow: 'hidden', position: 'relative', background: '#111' }}
                >
                    <img
                        src="/img-content.png"
                        alt="Cinemora Studios team"
                        style={{
                            width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                            filter: 'grayscale(40%) contrast(1.1)',
                            mixBlendMode: 'luminosity',
                            opacity: 0.85,
                        }}
                    />
                    {/* Dark overlay with quote */}
                    <div style={{
                        position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(0,0,0,0.6) 0%, transparent 60%)',
                        display: 'flex', alignItems: 'flex-end', padding: 40,
                    }}>
                        <p style={{
                            fontFamily: 'var(--font-space-grotesk)', fontWeight: 500, fontSize: 16,
                            fontStyle: 'italic', color: 'rgba(255,255,255,0.72)', lineHeight: '1.4em', maxWidth: 320
                        }}>
                            "We built our reputation one result at a time. Every client is a proof of concept."
                        </p>
                    </div>
                </motion.div>
            </div>

            <div className="h-rule-light" />
        </section>
    );
}
