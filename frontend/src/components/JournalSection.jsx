'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RevealWords from '@/components/RevealWords';
import RollingText from '@/components/RollingText';

const posts = [
    {
        category: 'Marketing',
        title: 'Why Great Design Drives Business Success',
        date: 'Nov 20, 2025',
        image: '/linie-showreel.jpg',
    },
    {
        category: 'Design',
        title: 'The Power of User-Centered Design in Modern Products',
        date: 'Nov 23, 2025',
        image: '/linie-service-design.jpg',
    },
    {
        category: 'Branding',
        title: 'How Visual Identity Shapes Brand Perception',
        date: 'Nov 25, 2025',
        image: '/linie-clarity-left.jpg',
    },
    {
        category: 'Trends',
        title: 'Why Clear UX Writing Improves Every Digital Experience',
        date: 'Nov 28, 2025',
        image: '/linie-clarity-right.jpg',
    },
];

export default function JournalSection() {
    return (
        <section id="journal" className="section-light journal-section">
            <div className="h-rule-light" />

            <div className="px journal-shell">
                <motion.div
                    className="journal-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div>
                        <span className="journal-kicker">012 News &amp; Insights</span>
                        <h2 className="journal-title">
                            <span>Our</span>
                            <span>Journal</span>
                        </h2>
                    </div>
                    <RevealWords
                        as="p"
                        className="journal-copy"
                        text="Dedicated professionals committed to delivering exceptional results."
                        amount={0.4}
                        startDelay={0.12}
                        step={0.03}
                    />
                </motion.div>

                <div className="journal-grid">
                    {posts.map((post, index) => (
                        <motion.a
                            key={post.title}
                            href="#contact"
                            className="journal-card"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.7,
                                delay: index * 0.06,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <div className="journal-card-frame">
                                <div className="journal-image-wrap">
                                    <img src={post.image} alt={post.title} className="journal-image" />
                                </div>
                            </div>
                            <div className="journal-card-copy">
                                <div className="journal-card-meta">
                                    <span>{post.category}</span>
                                    <span>{post.date}</span>
                                </div>
                                <h3>{post.title}</h3>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <a href="#contact" className="journal-link roll-trigger">
                    <span className="sr-only">See Full Journal</span>
                    <RollingText text="See Full Journal" style={{ textTransform: 'uppercase' }} />
                    <ArrowRight size={14} strokeWidth={1.75} />
                </a>

                <div className="journal-newsletter">
                    <div className="journal-newsletter-copy">
                        <span className="journal-newsletter-kicker">Newsletter</span>
                        <h3>Stay Updated</h3>
                    </div>

                    <form className="journal-newsletter-form">
                        <label className="journal-newsletter-field">
                            <span>Email</span>
                            <input type="email" placeholder="Your email" />
                        </label>
                        <button type="submit" className="roll-trigger">
                            <span className="sr-only">Get Updates</span>
                            <RollingText text="Get Updates" style={{ textTransform: 'uppercase' }} />
                        </button>
                    </form>

                    <p className="journal-newsletter-note">
                        Get expert tips and updates delivered straight to your inbox.
                    </p>
                </div>
            </div>

            <div className="h-rule-light" />
        </section>
    );
}
