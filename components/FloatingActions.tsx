'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingActions = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const phoneNumber = "919899873877";
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Hello Ginix Fertility, I am interested in learning more about your surrogacy program.`;

    // Show tooltip after a small delay
    useEffect(() => {
        const timer = setTimeout(() => setShowTooltip(true), 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4 pointer-events-none">

            {/* 1. CHAT WIDGET POPUP */}
            <AnimatePresence>
                {isChatOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20, transformOrigin: 'bottom right' }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="pointer-events-auto mb-2 w-[300px] md:w-[350px] bg-white rounded-2xl md:rounded-[1.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden border border-slate-100"
                    >
                        {/* Header */}
                        <div className="bg-[#25D366] p-5 text-white text-left">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                    <MessageCircle size={22} fill="white" />
                                </div>
                                <h3 className="text-lg font-bold">Start a Conversation</h3>
                            </div>
                            <p className="text-[13px] text-white/90 leading-snug">
                                Hi! Click one of our member below to chat on <span className="font-bold">WhatsApp</span>
                            </p>
                        </div>

                        {/* Body */}
                        <div className="p-4 bg-slate-50/50">
                            <p className="text-[10px] text-slate-400 font-medium mb-3 text-center uppercase tracking-wider">
                                The team typically replies in a few minutes.
                            </p>

                            {/* Agent Row */}
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 bg-white p-3 rounded-xl border-l-[3px] border-[#25D366] shadow-sm hover:shadow-md transition-all group"
                            >
                                <div className="relative">
                                    <div className="w-11 h-11 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
                                        <MessageCircle size={22} className="text-[#25D366]" fill="#25D366" />
                                    </div>
                                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-[13px] font-bold text-slate-700">Ginix Fertility Care</p>
                                    <p className="text-[10px] text-slate-400">Online Specialist</p>
                                </div>
                                <MessageCircle size={16} className="text-[#25D366] opacity-30 group-hover:opacity-100 transition-opacity" />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 2. MAIN BUTTON GROUP */}
            <div className="flex flex-col items-end gap-3 pointer-events-auto">

                {/* TOOLTIP (Need Help?) */}
                <AnimatePresence>
                    {showTooltip && !isChatOpen && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0 }}
                            className="bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 mb-1"
                        >
                            <span className="text-xs font-semibold text-slate-500">Need Help? Chat with us</span>
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="flex items-center gap-3">
                    {/* Secondary Call Button for conversion */}
                    <a
                        href={`tel:+${phoneNumber}`}
                        className="bg-white text-slate-600 p-3 rounded-full shadow-xl border border-slate-100 hover:text-primary transition-all active:scale-90"
                    >
                        <Phone size={20} fill="currentColor" />
                    </a>

                    {/* Main WhatsApp Toggle */}
                    <button
                        onClick={() => {
                            setIsChatOpen(!isChatOpen);
                            setShowTooltip(false);
                        }}
                        className={`w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isChatOpen ? 'bg-slate-800 text-white' : 'bg-[#25D366] text-white hover:scale-105 active:scale-90'
                            }`}
                    >
                        {isChatOpen ? <X size={24} /> : <MessageCircle size={30} fill="white" />}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FloatingActions;
