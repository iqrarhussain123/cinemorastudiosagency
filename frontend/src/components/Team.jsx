'use client';

import { motion } from 'framer-motion';

const team = [
    { id: '01', name: 'Alex Rivera', role: 'Creative Director', specialty: 'Brand & Visual Identity', img: '/img-team1.png' },
    { id: '02', name: 'Zoe Hartmann', role: 'Head of Content', specialty: 'Short-form & Copywriting', img: '/img-team2.png' },
    { id: '03', name: 'Marcus Bello', role: 'Paid Media Strategist', specialty: 'Meta, TikTok & ROI', img: '/img-team1.png' },
    { id: '04', name: 'Priya Nair', role: 'Brand Manager', specialty: 'Client Relations & QA', img: '/img-team2.png' },
];

export default function Team() {
    return (
        <section id="team" className="section-light team-section">
            <div className="h-rule-light" />

            <div className="px team-shell">
                <motion.div
                    className="team-header"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div>
                        <span className="team-kicker">007 Team &amp; Experts</span>
                        <h2 className="team-title">
                            <span>Our</span>
                            <span>Team</span>
                        </h2>
                    </div>
                    <p className="team-copy">
                        A small, elite team dedicated to delivering exceptional results.
                    </p>
                </motion.div>

                <div className="team-grid">
                    {team.map((member, index) => (
                        <motion.article
                            key={member.id}
                            className="team-card"
                            initial={{ opacity: 0, y: 28 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.72,
                                delay: index * 0.08,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <div className="team-photo-wrap">
                                <img src={member.img} alt={member.name} className="team-photo" />
                            </div>

                            <div className="team-card-copy">
                                <span className="team-id">{member.id}</span>
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <span>{member.specialty}</span>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>

            <div className="h-rule-light" />
        </section>
    );
}
