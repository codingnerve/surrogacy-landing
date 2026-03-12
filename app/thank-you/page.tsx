'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ThankYou() {
    return (
        <main className="min-h-screen bg-[#4FB1A5] flex items-center justify-center p-4 md:p-6 overflow-hidden">
            {/* Main Container */}
            <div className="relative w-full max-w-2xl">

                {/* Stacked Paper Effect - Layer 1 */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[92%] h-20 bg-white/40 rounded-[2rem] -z-10 shadow-sm" />
                {/* Stacked Paper Effect - Layer 2 */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-[96%] h-20 bg-white/70 rounded-[2rem] -z-10 shadow-sm" />

                {/* Primary Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative bg-white rounded-[1.5rem] md:rounded-[2rem] shadow-2xl overflow-hidden pt-16 pb-32 px-8 text-center"
                >
                    {/* Script Typography Header */}
                    <h1 className="text-6xl md:text-8xl text-[#666] font-serif italic mb-6 select-none opacity-80"
                        style={{ fontFamily: 'var(--font-serif), cursive' }}>
                        Thank you!
                    </h1>

                    <p className="text-slate-500 text-sm md:text-lg max-w-md mx-auto leading-relaxed mb-10">
                        You&apos;re now a member of our list of awesome people. <br className="hidden md:block" />
                        We will message you on <span className="text-[#4FB1A5] font-semibold underline decoration-2 cursor-pointer transition-colors hover:text-[#3d8b82]">genixfertility@gmail.com</span> in order to begin your journey.
                    </p>

                    {/* Styled Button */}
                    <Link href="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#FF4157] text-white px-8 py-3 rounded-full flex items-center justify-center gap-3 mx-auto text-sm font-bold shadow-[0_8px_20px_-4px_rgba(255,65,87,0.6)] group transition-all"
                        >
                            <Play size={14} fill="white" className="group-hover:translate-x-0.5 transition-transform" />
                            Start the journey
                        </motion.button>
                    </Link>

                    {/* Decorative Waves at Bottom */}
                    <div className="absolute inset-x-0 bottom-0 h-24 md:h-32 pointer-events-none">
                        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fillOpacity="0.3"
                                fill="#4FB1A5"
                                d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                            <path
                                fillOpacity="0.5"
                                fill="#4FB1A5"
                                d="M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,213.3C672,203,768,149,864,149.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
