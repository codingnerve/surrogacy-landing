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
        interest: 'Surrogacy Program',
        confirmEmail: '', // Honeypot field
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

    const validate = () => {
        const newErrors: Record<string, string> = {};
        if (!formData.name) newErrors.name = 'Full name is required';
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Spam protection: check honeypot
        if (formData.confirmEmail) {
            console.warn("Spam detected");
            return;
        }

        if (!validate()) return;

        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    message: formData.message,
                    source: 'Main Contact Form',
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true, message: 'Thank you! Your message has been sent.' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    interest: 'Surrogacy Program',
                    confirmEmail: '',
                });
                // Redirect after brief delay
                setTimeout(() => {
                    router.push('/thank-you');
                }, 2000);
            } else {
                setSubmitStatus({ 
                    success: false, 
                    message: result.error || 'Something went wrong. Please try again later.' 
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus({ 
                success: false, 
                message: 'Connection error. Please check your internet and try again.' 
            });
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
                            <h2 className="mb-1.5 md:mb-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
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
                                <p className="text-slate-500 text-[10px] md:text-xs font-semibold">Let&apos;s help you get started on your journey with detailed information on surrogacy charges in delhi and the total surrogacy cost in delhi ncr.</p>
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
                                {/* Honeypot field (hidden) */}
                                <div className="hidden">
                                    <input
                                        type="email"
                                        name="confirmEmail"
                                        value={formData.confirmEmail}
                                        onChange={handleChange}
                                        tabIndex={-1}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="space-y-1">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 md:px-4 md:py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-xs sm:text-sm bg-white"
                                        required
                                    />
                                    {errors.name && <span className="text-[10px] text-red-500 ml-2 font-medium">{errors.name}</span>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    <div className="space-y-1">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 md:px-4 md:py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-xs sm:text-sm bg-white"
                                            required
                                        />
                                        {errors.email && <span className="text-[10px] text-red-500 ml-2 font-medium">{errors.email}</span>}
                                    </div>

                                    <div className="space-y-1">
                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-3.5 py-2.5 md:px-4 md:py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-xs sm:text-sm bg-white"
                                            required
                                        />
                                        {errors.phone && <span className="text-[10px] text-red-500 ml-2 font-medium">{errors.phone}</span>}
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <textarea
                                        name="message"
                                        placeholder="How can we help you? (Add details about your inquiry)"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-3.5 py-2.5 md:px-4 md:py-3 rounded-lg border border-slate-200/60 focus:outline-none focus:ring-2 focus:ring-primary/10 transition-all text-xs sm:text-sm bg-white min-h-[84px] md:min-h-[100px] resize-none"
                                        required
                                    />
                                    {errors.message && <span className="text-[10px] text-red-500 ml-2 font-medium">{errors.message}</span>}
                                </div>

                                <div className="space-y-1.5 mt-3 md:mt-4">
                                    <label className="flex items-start gap-2 cursor-pointer group">
                                        <input type="checkbox" required defaultChecked className="mt-1 accent-primary scale-90" />
                                        <span className="text-[11px] text-slate-500 leading-tight">
                                            I want to receive latest news and program updates from SurrogacyCare.
                                        </span>
                                    </label>
                                    <label className="flex items-start gap-2 cursor-pointer group">
                                        <input type="checkbox" required defaultChecked className="mt-1 accent-primary scale-90" />
                                        <span className="text-[11px] text-slate-500 leading-tight">
                                            I agree to the <span className="text-primary font-medium hover:underline">Terms & Privacy Policy</span>.
                                        </span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-primary hover:bg-red-700 text-white py-3 md:py-3.5 rounded-lg font-bold text-[11px] md:text-xs uppercase tracking-[0.12em] md:tracking-widest transition-all mt-3 md:mt-4 flex items-center justify-center gap-2 shadow-lg shadow-red-200/50 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={16} className="animate-spin" /> 
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Get Started Now <Send size={14} className="ml-1" />
                                        </>
                                    )}
                                </button>
                                
                                {submitStatus && (
                                    <div className={`mt-4 p-3 rounded-lg text-center text-xs md:text-sm font-medium ${submitStatus.success ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                        {submitStatus.success && <CheckCircle size={14} className="inline mr-2" />}
                                        {submitStatus.message}
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
