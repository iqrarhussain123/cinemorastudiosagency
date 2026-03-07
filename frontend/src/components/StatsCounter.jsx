'use client';

import { useRef, useEffect, useState } from 'react';
import { useInView } from 'framer-motion';

export default function StatsCounter({ target, suffix = '', duration = 1800 }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isInView) return;
        const start = performance.now();
        // Extract numbers from target string (e.g., "150+" -> 150)
        const end = Number(target.replace(/[^0-9]/g, ''));

        // requestAnimationFrame for a buttery smooth 60/120fps counter
        const step = (now) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // easeOut cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));

            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [isInView, target, duration]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}
