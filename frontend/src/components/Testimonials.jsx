'use client';

import { motion } from 'framer-motion';

const testimonials = [
    {
        id: '01',
        date: 'Jan 2025',
        name: 'Marcus Reid',
        role: 'Executive Business Coach',
        quote:
            'Cinemora took my brand from invisible to undeniable. In eight months we generated $1.2M from organic content alone. The strategy and execution are unmatched.',
    },
    {
        id: '02',
        date: 'Nov 2024',
        name: 'Sarah Voss',
        role: 'Founder, PropScale Realty',
        quote:
            'After three months with Cinemora, we had a fully branded presence and a system that brings in 340% more qualified leads every single month.',
    },
    {
        id: '03',
        date: 'Oct 2024',
        name: 'James Korner',
        role: 'Luxury Real Estate Agent',
        quote:
            'Their content approach is different. They understand high-ticket buyers. Listings get 5x engagement and clients already trust me before we meet.',
    },
    {
        id: '04',
        date: 'Sep 2024',
        name: 'Aisha Thompson',
        role: 'Mindset & Performance Coach',
        quote:
            'After our first campaign I enrolled 14 high-ticket clients at $5,500 each. The numbers speak for themselves.',
    },
];

export default function Testimonials() {
    return (
        <section className="section-light testimonials-section">
            <div className="h-rule-light" />

            <div className="px testimonials-shell">
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div>
                        <span className="testimonials-kicker">006 Testimonials</span>
                        <h2 className="testimonials-title">
                            <span>Client</span>
                            <span>Feedback</span>
                        </h2>
                    </div>
                    <p className="testimonials-copy">
                        Real stories from clients who achieved commercially meaningful results.
                    </p>
                </motion.div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.article
                            key={testimonial.id}
                            className="testimonial-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.06,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <div className="testimonial-card-meta">
                                <span>{testimonial.id}</span>
                                <span>{testimonial.date}</span>
                            </div>

                            <blockquote>{testimonial.quote}</blockquote>

                            <div className="testimonial-card-author">
                                <p>{testimonial.name}</p>
                                <span>{testimonial.role}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="testimonials-rating">
                    <div className="testimonials-rating-score">
                        <strong>4.9</strong>
                        <span>/5</span>
                    </div>
                    <p>Based on 180 verified reviews</p>
                </div>
            </div>

            <div className="h-rule-light" />
        </section>
    );
}
