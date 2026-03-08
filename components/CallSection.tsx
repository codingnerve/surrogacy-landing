'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Clock, ShieldCheck } from 'lucide-react';

const CallSection = () => {
    const phoneNumber = "917303301239";

    return (
        <section className="py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
                >
                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -mr-32 -mt-32" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] -ml-32 -mb-32" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                        <div className="text-center lg:text-left flex-1">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 mb-6">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                <span className="text-sm font-medium">Expert Coordinators Available Now</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Want to speak with <br /> our specialists?
                            </h2>
                            <p className="text-slate-400 text-lg max-w-xl">
                                Our dedicated team is ready to answer all your questions about our surrogacy program, legal processes, and medical coordination.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-6">
                            <motion.a
                                href={`tel:+${phoneNumber}`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="group flex flex-col items-center bg-white text-slate-900 p-8 md:p-10 rounded-[2rem] shadow-xl hover:shadow-primary/20 transition-all border border-slate-100"
                            >
                                <div className="w-16 h-16 bg-red-50 text-primary rounded-2xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <Phone size={32} />
                                </div>
                                <span className="text-slate-500 font-medium text-sm mb-1 uppercase tracking-widest">Global Support Line</span>
                                <span className="text-2xl md:text-4xl font-black tabular-nums tracking-tighter">
                                    7303301239
                                </span>
                            </motion.a>

                            <div className="flex items-center gap-8">
                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <Clock size={16} className="text-primary" />
                                    <span>Mon - Sat 9:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 text-sm">
                                    <ShieldCheck size={16} className="text-primary" />
                                    <span>100% Confidential</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CallSection;
