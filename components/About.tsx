'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, FileText, CheckCircle2 } from 'lucide-react';

import aboutImage from '@/public/images/surrogacy_care_specialist_1772283216786.png';

const About = () => {
    const cards = [
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Ethical Surrogate Care",
            description: "Prioritizing the physical and emotional well-being of our surrogates with comprehensive medical and psychological support."
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "Screened Surrogates",
            description: "Rigorous medical, psychological, and background screening to ensure the highest standards of safety and reliability."
        },
        {
            icon: <FileText className="w-6 h-6" />,
            title: "Legal Coordination",
            description: "Full legal support to navigate local and international surrogacy laws, ensuring a secure path to legal parenthood."
        }
    ];

    return (
        <section className="section-padding bg-secondary-bg">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-10 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative order-2 lg:order-1"
                    >
                        <div className="relative overflow-hidden rounded-2xl md:rounded-[2.5rem] shadow-xl border-2 md:border-4 border-white">
                            <Image
                                src={aboutImage}
                                alt="Professional surrogacy care team"
                                width={700}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="order-1 lg:order-2 text-center lg:text-left"
                    >
                        <h2 className="mb-4 md:mb-6">
                            Best Surrogacy Treatment in Delhi
                        </h2>
                        <p className="text-base md:text-lg text-text-muted mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                            Recognized as the **Best Surrogacy Clinic in Delhi**, our **surrogacy centre** is dedicated to bridging the path to parenthood through transparent and ethical **surrogacy treatment**. We offer competitive **surrogacy charges in delhi** while providing world-class **surrogate services**. Our focus is to provide the best **price of surrogacy** without compromising on quality, ensuring that the **surrogacy treatment cost** remains affordable for all families.
                        </p>

                        <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 inline-block text-left">
                            {[
                                "Compassionate surrogate matching process",
                                "Comprehensive pregnancy care and monitoring",
                                "Full legal and administrative coordination",
                                "Global support for international intended parents"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                    <span className="text-sm md:text-base text-text-main font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="premium-card p-6 md:p-8 group"
                        >
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-red-50 text-primary rounded-2xl flex items-center justify-center mb-4 md:mb-6 transition-colors group-hover:bg-primary group-hover:text-white">
                                {card.icon}
                            </div>
                            <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">{card.title}</h3>
                            <p className="text-text-muted leading-relaxed text-sm md:text-base">
                                {card.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
