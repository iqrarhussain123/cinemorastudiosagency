'use client';

import { motion } from 'framer-motion';

const motionElements = {
    div: motion.div,
    p: motion.p,
    span: motion.span,
};

export default function RevealWords({
    as = 'p',
    text,
    className,
    style,
    trigger = 'view',
    amount = 0.35,
    once = true,
    startDelay = 0,
    step = 0.035,
    duration = 0.9,
    wordGap = '0.28em',
    rowGap = '0.12em',
}) {
    const Component = motionElements[as] || motion.p;
    const words = String(text).trim().split(/\s+/);
    const animationProps = trigger === 'mount'
        ? { initial: 'hidden', animate: 'visible' }
        : {
            initial: 'hidden',
            whileInView: 'visible',
            viewport: { once, amount },
        };

    return (
        <Component
            className={className}
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                columnGap: wordGap,
                rowGap,
                ...style,
            }}
            {...animationProps}
        >
            {words.map((word, index) => (
                <span
                    key={`${word}-${index}`}
                    style={{ display: 'inline-block', overflow: 'hidden' }}
                >
                    <motion.span
                        variants={{
                            hidden: { y: '112%', opacity: 0.001 },
                            visible: {
                                y: '0%',
                                opacity: 1,
                                transition: {
                                    delay: startDelay + index * step,
                                    duration,
                                    ease: [0.16, 1, 0.3, 1],
                                },
                            },
                        }}
                        style={{ display: 'inline-block', willChange: 'transform' }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </Component>
    );
}
