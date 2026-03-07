'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';
import RevealWords from '@/components/RevealWords';

const faqs = [
    {
        id: '01',
        question: 'How does the template customization work?',
        answer:
            'Customizing the site is fast and fully visual. We can adapt copy, layouts, colors, imagery, and motion to fit your brand without rebuilding the entire experience from scratch.',
    },
    {
        id: '02',
        question: 'Is the site fully responsive on all devices?',
        answer:
            'Yes. Every section is tuned for desktop, tablet, and mobile so the experience stays clear, fast, and visually consistent across breakpoints.',
    },
    {
        id: '03',
        question: 'Can I replace the demo content with my own easily?',
        answer:
            'Absolutely. Text, imagery, testimonials, pricing, FAQs, and article cards are all structured so your team can swap content without disturbing the layout system.',
    },
    {
        id: '04',
        question: 'Is the site optimized for fast loading speed?',
        answer:
            'The build is performance-aware: compressed imagery, lean layouts, predictable motion, and a Next.js delivery model that can be extended with caching and CDN optimization.',
    },
    {
        id: '05',
        question: 'Is support available if I need help after launch?',
        answer:
            'Yes. We can continue with design iterations, development support, growth experiments, and technical maintenance after launch when needed.',
    },
];

export default function FAQSection() {
    const [openId, setOpenId] = useState(faqs[0].id);

    return (
        <section id="faq" className="section-light faq-section">
            <div className="h-rule-light" />

            <div className="px faq-shell">
                <motion.div
                    className="faq-intro"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="faq-kicker">010 FAQ</span>
                    <h2 className="faq-title">Need Help?</h2>
                    <RevealWords
                        as="p"
                        className="faq-copy"
                        text="Find quick answers to the most frequently asked questions."
                        amount={0.45}
                        startDelay={0.12}
                        step={0.03}
                    />
                </motion.div>

                <div className="faq-list">
                    {faqs.map((item, index) => {
                        const isOpen = openId === item.id;

                        return (
                            <motion.div
                                key={item.id}
                                className={`faq-item${isOpen ? ' is-open' : ''}`}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.06,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                            >
                                <button
                                    type="button"
                                    className="faq-trigger"
                                    onClick={() => setOpenId(isOpen ? '' : item.id)}
                                    aria-expanded={isOpen}
                                >
                                    <span className="faq-index">{item.id}</span>
                                    <span className="faq-question">{item.question}</span>
                                    <span className="faq-icon" aria-hidden="true">
                                        {isOpen ? <Minus size={16} strokeWidth={1.75} /> : <Plus size={16} strokeWidth={1.75} />}
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {isOpen ? (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            className="faq-answer-wrap"
                                        >
                                            <div className="faq-answer">{item.answer}</div>
                                        </motion.div>
                                    ) : null}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="h-rule-light" />
        </section>
    );
}
