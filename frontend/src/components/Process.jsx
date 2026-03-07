'use client';

import React from 'react';
import * as framerMotion from 'framer-motion';
import useViewport from '@/components/useViewport';

const steps = [
    {
        num: '01',
        title: 'Discovery',
        desc: 'We dive deep into your business, audience, and goals to build a crystal-clear picture of what success looks like for your project.',
    },
    {
        num: '02',
        title: 'Planning',
        desc: 'We map out a strategic roadmap — wireframes, timelines, and milestones — so every phase moves with purpose and precision.',
    },
    {
        num: '03',
        title: 'Build',
        desc: "Our team crafts every pixel and line of code with meticulous care, keeping you in the loop at every step of the creative process.",
    },
    {
        num: '04',
        title: 'Launch',
        desc: 'We deliver, deploy, and optimize — then continue supporting you to ensure your results compound over time.',
    },
];

function ProcessStep({ step, i, isMobile, isLast }) {
    const ref = React.useRef(null);
    const { scrollYProgress } = framerMotion.useScroll({
        target: ref,
        offset: ['start center', 'end center']
    });

    const pathLength = framerMotion.useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

    return (
        <framerMotion.motion.div
            ref={ref}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] }}
            className="process-step"
            style={{
                gridTemplateColumns: isMobile ? '40px 1fr' : '48px 1fr',
                borderBottom: 'none',
                paddingBottom: isLast ? 0 : (isMobile ? 40 : 64),
                paddingTop: i === 0 ? 0 : (isMobile ? 40 : 64),
                position: 'relative'
            }}
        >
            {/* Step number and vertical progress line */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <span style={{
                    fontFamily: 'var(--font-grotesk)', fontWeight: 700, fontSize: 12,
                    color: 'rgba(0,0,0,0.28)', letterSpacing: '0.12em',
                }}>{step.num}</span>

                {/* Progress bar line connecting to next step */}
                {!isLast && (
                    <div style={{
                        flexGrow: 1, width: 2, background: 'rgba(0,0,0,0.06)',
                        marginTop: 16, marginBottom: -16,
                        position: 'relative', overflow: 'hidden'
                    }}>
                        <framerMotion.motion.div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%',
                            height: '100%', background: '#b23411', transformOrigin: 'top',
                            scaleY: pathLength
                        }} />
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: -4 }}>
                <h3 style={{
                    fontFamily: 'var(--font-grotesk)', fontWeight: 800,
                    fontSize: 'clamp(22px,2.5vw,38px)', letterSpacing: '-0.03em',
                    color: 'var(--text-dark)', lineHeight: '1em',
                }}>{step.title}</h3>
                <p className="body-text" style={{ color: 'rgba(0,0,0,0.52)', fontSize: 14, maxWidth: 480 }}>
                    {step.desc}
                </p>
            </div>
        </framerMotion.motion.div>
    );
}

export default function Process() {
    const { isMobile, isTablet } = useViewport();

    return (
        <section className="section-light">
            <div className="h-rule-light" />
            <div className="px" style={{ paddingTop: isMobile ? 56 : 72, paddingBottom: isMobile ? 56 : 72 }}>
                <div style={{ marginBottom: 48 }}>
                    <span style={{
                        fontFamily: 'var(--font-grotesk)', fontSize: 10, fontWeight: 500,
                        letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(0,0,0,0.38)',
                    }}>
                        ■ 004&nbsp;&nbsp;&nbsp;HOW WE WORK
                    </span>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 2fr',
                    gap: isMobile ? 36 : 80,
                    alignItems: 'start',
                }}>
                    <div style={{ position: isMobile ? 'static' : 'sticky', top: 80 }}>
                        <div style={{ overflow: 'hidden' }}>
                            <framerMotion.motion.h2
                                className="section-heading"
                                style={{ color: 'var(--text-dark)', fontSize: isMobile ? 'clamp(34px, 12vw, 54px)' : 'clamp(36px,4vw,64px)' }}
                                initial={isMobile ? { opacity: 0, y: 14 } : { y: '100%' }}
                                whileInView={isMobile ? { opacity: 1, y: 0 } : { y: '0%' }}
                                viewport={{ once: true, amount: isMobile ? 0.1 : 0.4 }}
                                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            >
                                How<br />We<br />Work
                            </framerMotion.motion.h2>
                        </div>
                        <p className="body-text" style={{ color: 'var(--text-gray)', fontSize: 13, marginTop: 24, maxWidth: 220 }}>
                            A proven four-step process built for clarity, speed, and results.
                        </p>
                    </div>

                    <div>
                        {steps.map((step, i) => (
                            <ProcessStep
                                key={step.num}
                                step={step}
                                i={i}
                                isMobile={isMobile}
                                isLast={i === steps.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="h-rule-light" />
        </section>
    );
}
