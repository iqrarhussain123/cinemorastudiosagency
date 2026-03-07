'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
    const dotRef = useRef(null);
    const followerRef = useRef(null);
    const pos = useRef({ x: 0, y: 0 });
    const followerPos = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);

    useEffect(() => {
        const dot = dotRef.current;
        const follower = followerRef.current;
        if (!dot || !follower) return;

        const onMove = (e) => {
            pos.current.x = e.clientX;
            pos.current.y = e.clientY;
            dot.style.left = `${e.clientX}px`;
            dot.style.top = `${e.clientY}px`;
        };

        const animate = () => {
            const dx = pos.current.x - followerPos.current.x;
            const dy = pos.current.y - followerPos.current.y;
            followerPos.current.x += dx * 0.14;
            followerPos.current.y += dy * 0.14;
            follower.style.left = `${followerPos.current.x}px`;
            follower.style.top = `${followerPos.current.y}px`;
            rafRef.current = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', onMove);
        rafRef.current = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', onMove);
            cancelAnimationFrame(rafRef.current);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor" />
            <div ref={followerRef} className="cursor-follower" />
        </>
    );
}
