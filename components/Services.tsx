'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
    {
        title: "GUARANTEED SURROGACY PROGRAM WITH DONOR EGG",
        image: "/images/services/donor-egg.png",
        highlight: false
    },
    {
        title: "SURROGACY WITH FROZEN EMBRYOS",
        image: "/images/services/frozen-embryos.png",
        highlight: false
    },
    {
        title: "SURROGACY / IVF Using Own Eggs",
        image: "/images/services/own-eggs.png",
        highlight: false
    },
    {
        title: "SINGLE PARENT SURROGACY",
        image: "/images/services/single-parent.png",
        highlight: true
    },
    {
        title: "GUARANTEED IVF PROGRAM WITH DONOR EGG",
        image: "/images/services/ivf-donor-egg.png",
        highlight: false
    },
    {
        title: "IN VITRO FERTILISATION (IVF)",
        image: "/images/services/ivf-treatment.png",
        highlight: false
    }
];

const Services = () => {
    return (
        <section className="py-8 bg-gradient-to-b from-white to-slate-50/50">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16 md:mb-20">
                  
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-semibold text-text-main leading-tight mb-6"
                    >
                        Experience Safe and Reliable Surrogacy<br className="hidden md:block" />
                        Services in Delhi with Guaranteed Success.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-text-muted max-w-4xl mx-auto text-base md:text-lg leading-relaxed"
                    >
                        Renowned for outstanding Altruistic and Gestational Surrogacy treatments, our center offers world-class services in the heart of India. We ensure a compassionate and successful surrogacy journey.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className={`group bg-white rounded-[2.5rem] overflow-hidden transition-all duration-500 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-100/60 ${service.highlight
                                ? 'ring-[6px] ring-primary shadow-[0_30px_70px_-15px_rgba(220,38,38,0.25)] scale-[1.08] my-8 md:my-0 z-20 md:ring-4 md:scale-[1.05]'
                                : 'hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)]'
                                }`}
                        >
                            <div className="relative h-64 md:h-72 w-full overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {service.highlight && (
                                    <div className="absolute top-6 left-6 z-20">
                                        <div className="bg-primary text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-xl flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                                            Most Requested
                                        </div>
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                            </div>

                            <div className="p-10 text-center flex flex-col items-center justify-center min-h-[140px]">
                                <h3 className={`text-lg md:text-xl font-bold leading-tight tracking-tight uppercase ${service.highlight ? 'text-primary' : 'text-text-main'
                                    }`}>
                                    {service.title}
                                </h3>
                                <div className={`w-12 h-1 mt-6 rounded-full transition-all duration-500 group-hover:w-24 ${service.highlight ? 'bg-primary' : 'bg-slate-200 group-hover:bg-primary'
                                    }`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
