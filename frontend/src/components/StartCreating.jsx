'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import RevealWords from '@/components/RevealWords';
import RollingText from '@/components/RollingText';

export default function StartCreating() {
    return (
        <section id="contact" className="section-light start-section">
            <div className="h-rule-light" />

            <div className="px start-shell">
                <div className="start-grid">
                    <motion.div
                        className="start-copy-column"
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <span className="start-kicker">011 Let&rsquo;s Talk</span>
                        <h2 className="start-title">
                            <span>Start</span>
                            <span>Creating</span>
                        </h2>
                        <RevealWords
                            as="p"
                            className="start-copy"
                            text="Start your project now and create something strong, clear, and commercially sharp together."
                            amount={0.4}
                            startDelay={0.1}
                            step={0.03}
                        />
                    </motion.div>

                    <motion.div
                        className="start-form-stack"
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <form className="start-form-card">
                            <div className="start-form-row">
                                <label className="start-field">
                                    <span>Name</span>
                                    <input type="text" name="name" placeholder="Your name" />
                                </label>
                                <label className="start-field">
                                    <span>Email</span>
                                    <input type="email" name="email" placeholder="Your email" />
                                </label>
                            </div>

                            <div className="start-form-row">
                                <label className="start-field">
                                    <span>Budget</span>
                                    <input type="text" name="budget" placeholder="Project range" />
                                </label>
                                <label className="start-field">
                                    <span>Timeline</span>
                                    <input type="text" name="timeline" placeholder="Launch target" />
                                </label>
                            </div>

                            <label className="start-field start-field-full">
                                <span>Project Details</span>
                                <textarea
                                    name="details"
                                    rows={6}
                                    placeholder="Tell us what you’re building, what’s broken now, and what success should look like."
                                />
                            </label>

                            <div className="start-actions">
                                <button type="submit" className="start-submit roll-trigger">
                                    <span className="sr-only">Submit Inquiry</span>
                                    <RollingText text="Submit Inquiry" style={{ textTransform: 'uppercase' }} />
                                    <ArrowRight size={14} strokeWidth={1.75} />
                                </button>
                                <p className="start-disclaimer">
                                    Your info is safe with us. We respond within 1 business day.
                                </p>
                            </div>
                        </form>

                        <aside className="start-quote-card">
                            <div className="start-quote-meta">
                                <img src="/img-team2.png" alt="Emily Chen" />
                                <div>
                                    <p>Emily Chen</p>
                                    <span>Product Manager</span>
                                </div>
                            </div>
                            <blockquote>
                                Fast, reliable, and creative. The team kept every detail sharp and delivered exactly when they said they would.
                            </blockquote>
                        </aside>
                    </motion.div>
                </div>
            </div>

            <div className="h-rule-light" />
        </section>
    );
}
