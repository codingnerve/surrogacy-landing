'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import Image from 'next/image'; // Added Image import

import contactBg from '@/public/images/contact_full_bg.png';

const ContactForm = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        interest: 'Surrogacy Program'
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = 'Required';
        if (!formData.email) newErrors.email = 'Required';
        else if (!/\S+@\S+\.\S/.test(formData.email)) newErrors.email = 'Invalid';
        if (!formData.phone) newErrors.phone = 'Required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;

        setIsSubmitting(true);
        try {
            // Your exact Form ID
            const formId = "2901";

            // The correct .com WordPress API URL
            const wpApiUrl = `https://genixfertility.com/wp-json/metform/v1/entries/insert/${formId}`;

            // Appending the exact Elementor field names you found!
            const submitData = new FormData();
            submitData.append('contact_name', formData.name);
            submitData.append('contact_email', formData.email);
            submitData.append('contact_phone', formData.phone);
            submitData.append('contact_message', formData.message);

            const response = await fetch(wpApiUrl, {
                method: 'POST',
                body: submitData,
            });

            const result = await response.json();

            // Status 1 means success!
            if (result.status === 1) {
                router.push('/thank-you'); // Redirects to your thank you page
            } else {
                console.error("Metform Error:", result);
                alert("Something went wrong. Please check the console.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            alert("Connection error. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error when user types
        if (errors[name]) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    return (
        <section className="section-padding bg-[#f4f7ff]" id="contact">
            <div className="max-w-7xl mx-auto relative overflow-hidden bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl min-h-[400px] md:min-h-[600px] border border-white/50">

                {/* FULL WIDTH BACKGROUND IMAGE */}
                <div className="absolute inset-0">
                    <Image
                        src={contactBg}
                        alt="Background"
                        fill
                        className="object-cover object-left md:object-center opacity-60 md:opacity-100"
                        priority
                    />
                    <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px] lg:backdrop-blur-0" />
                    {/* Gradient overlay to ensure form readability on the right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-white/95 hidden lg:block" />
                    <div className="absolute inset-0 bg-white/85 lg:hidden" />
                </div>

                <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[1fr_1.1fr] min-h-[400px] md:min-h-[600px]">
                    {/* LEFT SIDE: CONTENT OVERLAY */}
                    <div className="p-6 md:p-10 lg:p-16 flex flex-col justify-end min-h-[150px] md:min-h-[300px] lg:min-h-full text-center lg:text-left">
                        <div className="max-w-md mx-auto lg:mx-0">
                            <span className="inline-block px-3 py-1 mb-2 md:mb-4 text-[10px] font-bold tracking-[0.2em] text-primary uppercase bg-white/80 backdrop-blur-md rounded-full shadow-sm">
                                Join the Program
                            </span>
                            <h2 className="mb-2 md:mb-4 text-2xl md:text-3xl lg:text-4xl">
                                Begin Your <br className="hidden md:block" />
                                <span className="text-primary">Journey</span>
                            </h2>
                            <p className="text-slate-700 font-medium text-sm md:text-lg leading-relaxed">
                                Ethical, synchronized, and compassionate <br className="hidden md:block" />
                                guidance for your path to family.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE: FORM PANEL */}
                    <div className="p-4 md:p-10 lg:p-16 flex flex-col justify-center">
                        <div className="max-w-md mx-auto w-full bg-white/40 backdrop-blur-xl lg:bg-transparent p-4 md:p-8 lg:p-0 rounded-2xl md:rounded-3xl border border-white/40 lg:border-none shadow-xl lg:shadow-none">
                            <div className="mb-4 md:mb-8 text-center md:text-left">
                                <h3 className="text-lg md:text-2xl font-bold text-slate-800 mb-0.5 md:mb-1">Welcome to Care.</h3>
                                <p className="text-slate-500 text-[10px] md:text-xs">Let&apos;s help you get started on your journey.</p>
                            </div>


                            <form onSubmit={handleSubmit} className="space-y-3">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Full Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white/60"
                                        />
                                        {errors.name && <span className="text-[10px] text-red-500 ml-2">{errors.name}</span>}
                                    </div>
                                    <div className="space-y-1">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white/60"
                                        />
                                        {errors.email && <span className="text-[10px] text-red-500 ml-2">{errors.email}</span>}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white/60"
                                    />
                                    {errors.phone && <span className="text-[10px] text-red-500 ml-2">{errors.phone}</span>}
                                </div>

                                {/* <div className="space-y-1">
                                    <select
                                        name="interest"
                                        value={formData.interest}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white/60 appearance-none"
                                    >
                                        <option value="Surrogacy Program">Surrogacy Program Inquiry</option>
                                        <option value="Process Details">Process & Methodology</option>
                                        <option value="Legal Guidance">Legal & Global Support</option>
                                    </select>
                                </div> */}

                                <div className="space-y-1">
                                    <textarea
                                        name="message"
                                        placeholder="Your Message (Optional)"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-sm bg-white/60 min-h-[100px] resize-none"
                                    />
                                </div>

                                <div className="space-y-1.5 mt-4">
                                    <label className="flex items-start gap-2 cursor-pointer group">
                                        <input type="checkbox" required className="mt-1 accent-primary scale-90" />
                                        <span className="text-[11px] text-slate-500 leading-tight">
                                            I want to receive latest news and program updates from SurrogacyCare.
                                        </span>
                                    </label>
                                    <label className="flex items-start gap-2 cursor-pointer group">
                                        <input type="checkbox" required className="mt-1 accent-primary scale-90" />
                                        <span className="text-[11px] text-slate-500 leading-tight">
                                            I agree to the <span className="text-primary font-medium hover:underline">Terms & Privacy Policy</span>.
                                        </span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-red-700 text-white py-3.5 rounded-lg font-bold text-xs uppercase tracking-widest transition-all mt-4 flex items-center justify-center gap-2 shadow-lg shadow-red-200/50"
                                >
                                    {isSubmitting ? <Loader2 size={14} className="animate-spin" /> : 'Get Started Now'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
