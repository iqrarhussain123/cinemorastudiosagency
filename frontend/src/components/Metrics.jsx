'use client';

import { motion } from 'framer-motion';

const metrics = [
    { value: '$8M+', label: 'Client Sales\nGenerated' },
    { value: '200+', label: 'Projects\nDelivered' },
    { value: '98%', label: 'Client\nRetention' },
    { value: '6yrs', label: 'In The\nMarket' },
];

export default function Metrics() {
    return (
        <section className="section-dark" style={{ overflow: 'hidden' }}>
            <div className="h-rule-dark" />

            {/* Giant centered heading */}
            <div className="px" style={{ paddingTop: 80, paddingBottom: 56 }}>
                <p className="counter-label" style={{ marginBottom: 32, color: 'rgba(255,255,255,0.28)', textAlign: 'center' }}>
                    06 — By The Numbers
                </p>
                <div style={{ overflow: 'hidden' }}>
                    <motion.h2
                        className="heading-centered"
                        initial={{ y: '100%', opacity: 0 }}
                        whileInView={{ y: '0%', opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        style={{ color: 'var(--white)' }}
                    >
                        Client<br />Results
                    </motion.h2>
                </div>
            </div>

            <div className="h-rule-dark" />

            {/* Metrics row */}
            <div
                className="px"
                style={{
                    display: 'grid',
                    gridTemplateColumns: `repeat(${metrics.length}, 1fr)`,
                    borderBottom: '1px solid rgba(255,255,255,0.10)',
                }}
            >
                {metrics.map((m, i) => (
                    <motion.div
                        key={m.value}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: i * 0.1 }}
                        style={{
                            display: 'flex', flexDirection: 'column', gap: 8,
                            padding: '48px 0',
                            borderLeft: i !== 0 ? '1px solid rgba(255,255,255,0.10)' : 'none',
                            paddingLeft: i !== 0 ? 40 : 0,
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'var(--font-space-grotesk)', fontWeight: 700,
                                fontSize: 'clamp(40px,5vw,80px)', letterSpacing: '-0.04em', lineHeight: '1em',
                                color: 'var(--white)'
                            }}
                        >
                            {m.value}
                        </span>
                        <span className="label-sm" style={{ color: 'rgba(255,255,255,0.36)', whiteSpace: 'pre-line', lineHeight: '1.5em' }}>
                            {m.label}
                        </span>
                    </motion.div>
                ))}
            </div>

            <div className="h-rule-dark" />
        </section>
    );
}
