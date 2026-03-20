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
        phone: '',
        message: '',
        interest: 'Surrogacy Program'
    });
    const [errors, setErrors] = useState<Record<string, string>>({});

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = 'Required';
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
            <div className="max-w-7xl mx-auto relative overflow-hidden bg-white rounded-2xl md:rounded-[2.5rem] shadow-2xl min-h-[360px] md:min-h-[600px] border border-white/50">

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
                    <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-white/95 hidden lg:block" />
                    <div className="absolute inset-0 bg-white/85 lg:hidden" />
                </div>

                <div className="relative z-10 flex flex-col lg:grid lg:grid-cols-[1fr_1.1fr] min-h-[360px] md:min-h-[600px]">
                    {/* LEFT SIDE: CONTENT OVERLAY */}
                    <div className="p-4 sm:p-5 md:p-10 lg:p-16 flex flex-col justify-end min-h-[120px] md:min-h-[300px] lg:min-h-full text-center lg:text-left">
                        <div className="max-w-md mx-auto lg:mx-0">
                            <span className="inline-block px-2.5 py-1 mb-2 md:mb-4 text-[9px] md:text-[10px] font-bold tracking-[0.14em] md:tracking-[0.2em] text-primary uppercase bg-white/80 backdrop-blur-md rounded-full shadow-sm">
                                Join the Program
                            </span>
                            <h2 className="mb-1.5 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
                                Begin Your <br className="hidden md:block" />
                                <span className="text-primary">Journey</span>
                            </h2>
                            <p className="text-slate-700 font-medium text-xs sm:text-sm md:text-lg leading-relaxed">
                                Ethical, synchronized, and compassionate surrogacy treatment delhi guidance. As one of the top surrogacy companies, we provide clear information on surrogacy cost in delhi for your path to family.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT SIDE: FORM PANEL */}
                    <div className="p-3 sm:p-4 md:p-10 lg:p-16 flex flex-col justify-center">
                        <div className="max-w-md mx-auto w-full bg-white/40 backdrop-blur-xl lg:bg-transparent p-3 sm:p-4 md:p-8 lg:p-0 rounded-2xl md:rounded-3xl border border-white/40 lg:border-none shadow-xl lg:shadow-none">
                            <div className="mb-3 md:mb-8 text-center md:text-left">
                                <h3 className="text-base sm:text-lg md:text-2xl font-bold text-slate-800 mb-0.5 md:mb-1">Welcome to Care.</h3>
                                <p className="text-slate-500 text-[10px] md:text-xs">Let&apos;s help you get started on your journey with detailed information on surrogacy charges in delhi and the total surrogacy cost in delhi ncr.</p>
                            </div>

                            <div className="mb-2 md:mb-3 overflow-hidden rounded-xl bg-linear-to-r from-red-600 to-red-500 px-4 py-4 shadow-lg shadow-red-300/40">
                                <div className="flex items-center justify-center gap-3">
                                    <Image
                                        src="/images/how-do-we-guarantee-our-results-100-result-guaranteed-11562939909snsu9zh59o-removebg-preview.png"
                                        alt="100% Guaranteed"
                                        width={56}
                                        height={56}
                                        className="shrink-0 drop-shadow-md"
                                    />
                                    <p className="text-sm sm:text-base font-bold tracking-wide text-white/95 leading-snug">
                                        Guaranteed Surrogacy Programme in{" "}
                                        <span className="whitespace-nowrap text-yellow-300 text-lg sm:text-xl font-extrabold drop-shadow-sm">₹15 Lakh*</span>
                                    </p>
                                </div>
                            </div>

                            <div className="mb-3 md:mb-5 rounded-xl border border-red-200/70 bg-red-50/80 px-3 py-2.5 md:px-4 md:py-3 text-center md:text-left">
                                <p className="text-[11px] sm:text-xs md:text-sm font-semibold leading-snug text-red-700">
                                    🎁 Free Ultrasound &amp; TVS Scan Worth ₹4500/- and avail 25% Discount on Fertility Analysis Test!!
                                </p>
                            </div>


                            <form onSubmit={handleSubmit} className="space-y-2.5 md:space-y-3">
                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 md:px-4 md:py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-xs sm:text-sm bg-white/60"
                                    />
                                    {errors.name && <span className="text-[10px] text-red-500 ml-2">{errors.name}</span>}
                                </div>

                                <div className="space-y-1">
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 md:px-4 md:py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-xs sm:text-sm bg-white/60"
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
                                        className="w-full px-3.5 py-2.5 md:px-4 md:py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-xs sm:text-sm bg-white/60 min-h-[84px] md:min-h-[100px] resize-none"
                                    />
                                </div>

                                <div className="space-y-1.5 mt-3 md:mt-4">
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
                                    className="w-full bg-primary hover:bg-red-700 text-white py-3 md:py-3.5 rounded-lg font-bold text-[11px] md:text-xs uppercase tracking-[0.12em] md:tracking-widest transition-all mt-3 md:mt-4 flex items-center justify-center gap-2 shadow-lg shadow-red-200/50"
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
