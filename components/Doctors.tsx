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
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="mb-4">Best Surrogacy Doctors in Delhi</h2>
                    <p className="text-sm md:text-base text-text-muted">Our **Surrogacy Specialists in Delhi** are dedicated professionals ensuring the highest standards of care and coordination.</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {team.map((member, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square shadow-xl">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10">
                                    <div className="flex gap-4">
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                            <Mail size={18} />
                                        </button>
                                        <button className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors">
                                            <Linkedin size={18} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-2xl font-bold text-text-main mb-1">{member.name}</h3>
                                <p className="text-primary font-semibold mb-3">{member.role}</p>
                                <div className="space-y-1">
                                    <p className="text-sm text-text-muted">{member.experience}</p>
                                    <p className="text-sm font-medium text-text-main">Focus: {member.focus}</p>
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
