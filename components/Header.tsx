'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import ginixLogo from '@/public/images/ginix.webp';
import whatsappIcon from '@/public/images/icons8-whatsapp.svg';

const Header = () => {
    const phoneNumber = "919899873877";

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100">
            <div className="px-4 md:px-12 lg:px-24 h-16 md:h-20 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center">
                    <div className="relative h-10 w-28 md:h-16 md:w-48 transition-transform hover:scale-105 duration-300">
                        <Image
                            src={ginixLogo}
                            alt="Ginix Fertility"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* Action Group */}
                <div className="flex items-center gap-2 sm:gap-4 font-sans">
                    {/* Call Action */}
                    <motion.a
                        href={`tel:+${phoneNumber}`}
                        whileHover={{ y: -1 }}
                        className="flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-md border border-slate-200 text-slate-700 hover:border-primary/30 hover:bg-slate-50 transition-all duration-200"
                    >
                        <Phone size={16} className="text-primary" />
                        <span className="text-xs md:text-sm font-semibold tracking-tight tabular-nums">9899873877</span>
                    </motion.a>

                    {/* WhatsApp Action */}
                    <motion.a
                        href={`https://wa.me/${phoneNumber}?text=Hello, I am interested in your surrogacy program.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -1 }}
                        className="flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-md border border-green-100 bg-green-50/30 text-green-700 hover:bg-green-50 hover:border-green-200 transition-all duration-200"
                    >
                        <Image src={whatsappIcon} alt="WhatsApp" width={20} height={20} className="object-contain md:w-6 md:h-6" />
                        <span className="hidden sm:inline text-xs md:text-sm font-semibold uppercase tracking-wider">WhatsApp</span>
                    </motion.a>

                    {/* Consultation - Hidden on Mobile */}
                    <motion.a
                        href="#contact"
                        whileHover={{ y: -1 }}
                        className="hidden sm:flex bg-primary hover:bg-red-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-md text-[10px] md:text-sm font-bold uppercase tracking-widest shadow-sm hover:shadow-md transition-all duration-200 whitespace-nowrap"
                    >
                        Consultation
                    </motion.a>
                </div>
            </div>
        </header>

    );
};

export default Header;
