'use client';

import { useEffect, useState } from 'react';

export default function useViewport() {
    const [width, setWidth] = useState(1440);

    useEffect(() => {
        const updateWidth = () => setWidth(window.innerWidth);

        updateWidth();
        window.addEventListener('resize', updateWidth, { passive: true });

        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    return {
        width,
        isMobile: width < 810,
        isTablet: width < 1200,
    };
}
