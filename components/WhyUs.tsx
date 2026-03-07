'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
    Stethoscope,
    HeartHandshake,
    Eye,
    Globe2,
    UserCheck,
    Activity
} from 'lucide-react';

const WhyUs = () => {
    const features = [
        {
            icon: <Stethoscope />,
            title: "Experienced Specialists",
            description: "Our team includes some of the most respected surrogacy coordinators and specialists in the field."
        },
        {
            icon: <HeartHandshake />,
            title: "Compassionate Support",
            description: "We provide emotional and psychological support for both surrogates and intended parents throughout the journey."
        },
        {
            icon: <Eye />,
            title: "Transparent Process",
            description: "No hidden costs or surprises. We maintain complete transparency in medical, legal, and financial aspects."
        },
        {
            icon: <Globe2 />,
            title: "International Assistance",
            description: "Expert guidance for international parents, including travel coordination and citizenship documentation."
        },
        {
            icon: <UserCheck />,
            title: "Dedicated Case Coordination",
            description: "A single point of contact to manage every detail of your surrogacy journey from start to finish."
        },
        {
            icon: <Activity />,
            title: "Safe Pregnancy Care",
            description: "Premium medical monitoring and care to ensure a healthy pregnancy and a safe delivery."
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-4"
                    >
                        Top Surrogacy Clinic Delhi
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-sm md:text-base text-text-muted max-w-2xl mx-auto"
                    >
                        As leading **Surrogacy Experts in Delhi**, we are committed to providing a safe, ethical, and successful path to parenthood with a focus on professional excellence.
                    </motion.p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-all duration-300 hover:shadow-lg group"
                        >
                            <div className="w-12 h-12 bg-white text-primary rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                {React.cloneElement(feature.icon as React.ReactElement<{ size?: number }>, { size: 24 })}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                            <p className="text-text-muted leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;
