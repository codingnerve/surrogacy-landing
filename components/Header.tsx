'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import GenixLogo from '@/public/images/ginix.webp';
import GenixIcon from '@/public/images/gpt-image-1.5-high-fidelity_a_make_it_professional-removebg-preview.png';
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
                        {/* New Icon/Logo - 100% Result Seal */}
                        <motion.div
                            whileHover={{ 
                                scale: 1.15,
                                rotate: [0, -5, 5, -5, 0],
                            }}
                            animate={{
                                y: [0, -4, 0],
                            }}
                            transition={{
                                y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                            }}
                            className="relative h-12 w-12 sm:h-16 sm:w-16 md:h-28 md:w-28 overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl bg-linear-to-br from-red-50 via-rose-100 to-red-200 ring-2 ring-red-300/70 border border-red-100/60 shrink-0"
                        >
                            <div className="absolute inset-0 bg-radial-[circle_at_30%_30%] from-white/85 via-transparent to-transparent" />
                            <Image
                                src={GenixIcon}
                                alt="Genix Icon"
                                fill
                                className="object-contain p-1.5 sm:p-2 md:p-3 scale-[1.18] saturate-150 contrast-125 drop-shadow-[0_2px_6px_rgba(185,28,28,0.45)]"
                                priority
                            />
                            {/* Shine effect */}
                            <motion.div 
                                className="absolute inset-0 bg-linear-to-tr from-transparent via-white/40 to-transparent -translate-x-full"
                                animate={{ x: ["100%", "-100%"] }}
                                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                            />
                        </motion.div>

                        {/* Text Logo / Main Logo - Genix Fertility */}
                        <div className="relative h-14 w-44 sm:h-16 sm:w-56 md:h-32 md:w-[450px] min-w-0 transition-all duration-500 group-hover:scale-105 origin-left">
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
                        className="flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap rounded-full border-2 border-primary bg-primary px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 text-white shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        <Phone size={16} className="fill-white sm:w-[18px] sm:h-[18px]" />
                        <span className="text-xs sm:text-sm md:text-base leading-none font-extrabold tracking-tight tabular-nums">7303301239</span>
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
