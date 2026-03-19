'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Scale } from 'lucide-react';
import heroImage from '@/public/images/surrogacy_hero_image_1772283196097.png';
import CompactEnquiry from './CompactEnquiry';

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-linear-to-br from-red-50/40 via-white to-red-50/30 md:min-h-[80vh] flex items-center py-7 md:py-0">
            {/* soft radial background */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(220,38,38,0.08),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(220,38,38,0.06),transparent_40%)]" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-6 md:gap-12 items-center w-full px-3 sm:px-4 md:px-12 lg:px-24">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center lg:text-left"
                >
                    <span className="inline-block px-3 py-1.5 mb-3 md:mb-6 text-[9px] md:text-xs font-black tracking-[0.12em] text-primary uppercase bg-red-50 border border-primary/10 rounded-full shadow-sm">
                        Altruistic Surrogacy Program in Delhi NCR
                    </span>

                    <h1 className="mb-3 md:mb-6 text-[1.75rem] md:text-5xl lg:text-6xl font-semibold leading-tight text-text-main">
                        Trusted Altruistic Surrogacy Care at Our{" "}
                        <span className="bg-linear-to-r from-red-600 to-red-400 bg-clip-text text-transparent">
                            Surrogacy Hospital
                        </span>
                    </h1>

                    <p className="text-sm md:text-lg text-text-muted mb-5 md:mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Ethical <span className="text-primary font-bold">surrogacy treatment delhi</span>, compassionate surrogate services, and globally supported solutions at our surrogacy centre designed to bring the joy of parenthood to your family.
                    </p>

                    {/* TRUST ROW */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-5">
                        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-text-main">
                            <ShieldCheck className="w-5 h-5 text-primary" />
                            Ethical Care
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-text-main">
                            <Globe className="w-5 h-5 text-primary" />
                            Global Parents
                        </div>
                        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-medium text-text-main">
                            <Scale className="w-5 h-5 text-primary" />
                            Legal Support
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE + FORM */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative w-full max-w-xl mx-auto"
                >
                    {/* image */}
                    <div className="relative overflow-hidden rounded-3xl shadow-xl border-4 border-white">
                        <Image
                            src={heroImage}
                            alt="Happy parenthood journey"
                            width={700}
                            height={700}
                            className="w-full h-auto object-cover"
                            priority
                        />
                    </div>

                    {/* floating form */}
                    <div className="absolute -bottom-8 md:-bottom-10 left-1/2 -translate-x-1/2 w-[94%] sm:w-[92%]">
                        <CompactEnquiry />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;