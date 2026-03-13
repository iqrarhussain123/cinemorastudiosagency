'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function TrueClarity() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
    const textScale = useTransform(scrollYProgress, [0, 0.5], [0.92, 1.02]);
    const leftImgY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
    const rightImgY = useTransform(scrollYProgress, [0, 1], ['-4%', '5%']);

    return (
        <section ref={sectionRef} className="section-dark clarity-section">
            <div className="h-rule" style={{ opacity: 0.1 }} />

            <div className="px clarity-shell">
                <div className="clarity-layout">
                    <div className="clarity-panel clarity-panel-left">
                        <div className="clarity-media clarity-media-left">
                            <motion.img
                                src="/linie-clarity-left.jpg"
                                alt="Smiling creative director"
                                className="clarity-image clarity-image-left"
                                style={{ y: leftImgY }}
                            />
                            <span className="clarity-media-tint" aria-hidden="true" />
                        </div>
                    </div>

                    <div className="clarity-panel clarity-panel-center">
                        <motion.div className="clarity-copy" style={{ scale: textScale }}>
                            <h2 className="clarity-title">
                                <span>True</span>
                                <span>Clarity</span>
                            </h2>

                            <motion.p
                                className="clarity-text"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                            >
                                Where every decision is driven by purpose, precision, and measurable impact.
                            </motion.p>
                        </motion.div>
                    </div>

                    <div className="clarity-panel clarity-panel-right">
                        <div className="clarity-media clarity-media-right">
                            <motion.img
                                src="/linie-clarity-right.jpg"
                                alt="Strategist reviewing plans"
                                className="clarity-image clarity-image-right"
                                style={{ y: rightImgY }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-rule" style={{ opacity: 0.1 }} />
        </section>
    );
}
