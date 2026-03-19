'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import GenixLogo from '@/public/images/ginix.webp';
import whatsappIcon from '@/public/images/icons8-whatsapp.svg';

const Header = () => {
    const phoneNumber = "917303301239";

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100">
            <div className="h-20 md:h-32 px-3 sm:px-4 md:px-12 lg:px-24 flex items-center justify-between">
                {/* Logo Section */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                        opacity: 1, 
                        x: 0,
                    }}
                    transition={{ duration: 0.6 }}
                    className="group flex min-w-0 flex-1 cursor-pointer items-center gap-2 sm:gap-4 md:gap-6"
                >
                    <div className="relative flex min-w-0 items-center gap-2 sm:gap-3 md:gap-4">
                        {/* Text Logo / Main Logo - Genix Fertility */}
                        <div className="relative h-16 w-52 sm:h-20 sm:w-64 md:h-32 md:w-[480px] min-w-0 transition-all duration-500 group-hover:scale-105 origin-left">
                            <Image
                                src={GenixLogo}
                                alt="Genix Fertility"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
                {/* Action Group */}
                <div className="flex shrink-0 items-center gap-1.5 sm:gap-4 font-sans">
                    {/* Call Action */}
                    <motion.a
                        href={`tel:+${phoneNumber}`}
                        whileHover={{ y: -1 }}
                        className="flex items-center justify-center gap-2 sm:gap-2.5 whitespace-nowrap rounded-full border-2 border-primary bg-primary px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-white shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        <Phone size={18} className="fill-white sm:w-[20px] sm:h-[20px]" />
                        <span className="text-sm sm:text-base md:text-lg leading-none font-extrabold tracking-tight tabular-nums">7303301239</span>
                    </motion.a>

                    {/* WhatsApp Action */}
                    <motion.a
                        href={`https://wa.me/${phoneNumber}?text=Hello, I am interested in your surrogacy program.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -1 }}
                        className="hidden md:flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-md border border-green-100 bg-green-50/30 text-green-700 hover:bg-green-50 hover:border-green-200 transition-all duration-200"
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
