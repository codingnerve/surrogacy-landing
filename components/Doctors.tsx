'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';

import drSunita from '@/public/images/3team.jpg.webp';
import drSumit from '@/public/images/1team.jpg.webp';
import drArun from '@/public/images/2team.jpg.webp';
import Image from 'next/image';

const Doctors = () => {
    const team = [
        {
            name: "Dr. Sunita Pandit",
            role: "Surrogacy Specialist",
            experience: "10+ Years Experience",
            focus: "Surrogacy- Male-Female Infertility Treatments-Laparoscopy",
            image: drSunita
        },
        {
            name: "Dr. Sumit Kumar",
            role: "Program Coordinator",
            experience: "12+ Years Experience",
            focus: "International Parent Support",
            image: drSumit
        },
        {
            name: "Dr. Arun Sharma",
            role: "Legal Framework Expert",
            experience: "18+ Years Experience",
            focus: "Parental Rights & Contracts",
            image: drArun
        }
    ];

    return (
        <section className="section-padding bg-secondary-bg">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-16 px-4">
                    <h2 className="mb-2 md:mb-4">Best Surrogacy Doctors in Delhi</h2>
                    <p className="text-xs md:text-base text-text-muted">Our surrogacy doctors and Surrogacy Specialists in Delhi at our world-class surrogacy hospital and surrogacy centre are dedicated professionals ensuring the highest standards of care and coordination while offering transparent details about surrogacy treatment cost.</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl mb-3 sm:mb-4 md:mb-6 aspect-4/3 sm:aspect-square shadow-lg md:shadow-xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-4 md:p-6 bg-linear-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                                    <div className="flex gap-3 md:gap-4">
                                        <button title="Email doctor" aria-label="Email doctor" className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                            <Mail size={16} className="md:size-[18px]" />
                                        </button>
                                        <button title="Doctor LinkedIn profile" aria-label="Doctor LinkedIn profile" className="w-8 h-8 md:w-10 md:h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                            <Linkedin size={16} className="md:size-[18px]" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-text-main mb-0.5 md:mb-1">{member.name}</h3>
                                <p className="text-primary text-xs sm:text-sm md:text-base font-semibold mb-1.5 sm:mb-2 md:mb-3">{member.role}</p>
                                <div className="space-y-0.5">
                                    <p className="text-[11px] sm:text-xs md:text-sm text-text-muted">{member.experience}</p>
                                    <p className="text-[10px] sm:text-[11px] md:text-sm font-medium text-text-main">Focus: {member.focus}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Doctors;
