'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
    const steps = [
        {
            number: "01",
            title: "Consultation",
            description: "Initial meeting to understand your needs and explain the surrogacy process."
        },
        {
            number: "02",
            title: "Parent Screening & Planning",
            description: "Medical and financial planning to ensure a smooth journey ahead."
        },
        {
            number: "03",
            title: "Surrogate Matching",
            description: "Carefully matching you with a screened and compassionate surrogate mother."
        },
        {
            number: "04",
            title: "Embryo Transfer & Pregnancy",
            description: "Medical procedures and confirmation of pregnancy through gestational surrogacy."
        },
        {
            number: "05",
            title: "Pregnancy Monitoring",
            description: "Regular checkups and updates throughout the pregnancy period."
        },
        {
            number: "06",
            title: "Birth & Parenthood",
            description: "Celebrating the arrival of your baby and completing legal documentation."
        }
    ];

    return (
        <section className="section-padding bg-secondary-bg">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="mb-4">Your Surrogacy Journey</h2>
                    <p className="text-sm md:text-base text-text-muted">A step-by-step guide to bringing your dream of parenthood to life.</p>
                </div>

                <div className="relative">
                    {/* Vertical line for desktop */}
                    <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-red-100 -translate-x-1/2"></div>
                    {/* Vertical line for mobile */}
                    <div className="lg:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-red-100"></div>

                    <div className="space-y-12 lg:space-y-0">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-start lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                                <div className={`w-full lg:w-1/2 px-8 pl-12 lg:px-8 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                    >
                                        <span className="text-4xl md:text-5xl font-black text-red-500/10 mb-1 md:mb-2 block">{step.number}</span>
                                        <h3 className="text-xl md:text-2xl font-bold mb-3">{step.title}</h3>
                                        <p className="text-sm md:text-base text-text-muted max-w-md mx-0 lg:mx-0">{step.description}</p>
                                    </motion.div>
                                </div>

                                {/* Center circle */}
                                <div className="absolute left-4 lg:relative lg:left-0 z-10 w-4 h-4 rounded-full bg-primary border-4 border-red-100 -translate-x-1/2 lg:translate-x-0 mt-10 lg:mt-0"></div>

                                <div className="lg:w-1/2"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Process;
