'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import Image from 'next/image';

const CompactEnquiry = () => {
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
        if (!formData.name) newErrors.name = 'Name required';
        if (!formData.email) {
            newErrors.email = 'Email required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email';
        }
        if (!formData.phone) newErrors.phone = 'Phone required';
        if (!formData.message) newErrors.message = 'Message required';
        
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
                    source: 'Compact Enquiry Form',
                }),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus({ success: true, message: 'Sent! Redirecting...' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                    interest: 'Surrogacy Program',
                    confirmEmail: '',
                });
                setTimeout(() => {
                    router.push('/thank-you');
                }, 1500);
            } else {
                setSubmitStatus({ 
                    success: false, 
                    message: result.error || 'Failed to send.' 
                });
            }
        } catch (error) {
            console.error("Submission error:", error);
            setSubmitStatus({ 
                success: false, 
                message: 'Connection error.' 
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors(prev => {
                const n = { ...prev };
                delete n[name];
                return n;
            });
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/95 backdrop-blur-xl p-4 sm:p-5 md:p-7 rounded-2xl shadow-2xl border border-red-100"
        >
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-900 mb-0.5 md:mb-1">
                Start Your Surrogacy Journey
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-3 md:mb-4">
                Speak with our care coordinator
            </p>

            {/* Guaranteed programme highlight */}
            <div className="mb-2 overflow-hidden rounded-xl bg-linear-to-r from-red-600 to-red-500 px-4 py-4 shadow-lg shadow-red-300/40">
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
                        <span className="whitespace-nowrap text-yellow-200 text-lg sm:text-xl font-extrabold drop-shadow-sm">₹15 Lakh*</span>
                    </p>
                </div>
            </div>

            {/* Offer banner */}
            <div className="mb-3 flex items-start gap-2 rounded-lg border border-red-200/70 bg-red-50/90 px-3 py-2">
                <span className="mt-0.5 text-base leading-none">🎁</span>
                <p className="text-[10px] sm:text-[11px] font-semibold leading-snug text-red-700">
                    Free Ultrasound &amp; TVS Scan Worth ₹4500/- and avail 25% Discount on Fertility Analysis Test!!
                </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-2.5 md:gap-3">
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

                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full h-10 sm:h-11 px-3 sm:px-4 rounded-lg border text-xs sm:text-sm ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white'
                            } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                        required
                    />
                    {errors.name && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full h-10 sm:h-11 px-3 sm:px-4 rounded-lg border text-xs sm:text-sm ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white'
                                } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                            required
                        />
                        {errors.email && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.email}</p>}
                    </div>

                    <div>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className={`w-full h-10 sm:h-11 px-3 sm:px-4 rounded-lg border text-xs sm:text-sm ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-200 bg-white'
                                } focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all`}
                            required
                        />
                        {errors.phone && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.phone}</p>}
                    </div>
                </div>

                <div>
                    <textarea
                        name="message"
                        placeholder="How can we help you?"
                        value={formData.message}
                        onChange={handleChange}
                        className={`w-full p-2.5 sm:p-3 rounded-lg border text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white min-h-[72px] sm:min-h-[80px] resize-none shadow-sm transition-all ${
                            errors.message ? 'border-red-500 bg-red-50' : 'border-slate-200'
                        }`}
                        required
                    />
                    {errors.message && <p className="text-[10px] text-red-500 mt-1 ml-1">{errors.message}</p>}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 sm:h-11 rounded-full bg-primary text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={16} className="animate-spin" />
                            Processing...
                        </>
                    ) : (
                        <>
                            <Send size={16} /> Get Free Consultation
                        </>
                    )}
                </button>
                
                {submitStatus && (
                    <div className={`p-2.5 rounded-lg text-center text-[10px] sm:text-xs font-medium border ${submitStatus.success ? 'bg-green-50 text-green-700 border-green-200' : 'bg-red-50 text-red-700 border-red-200'}`}>
                        {submitStatus.message}
                    </div>
                )}
            </form>

            <p className="text-[10px] sm:text-[11px] text-slate-500 mt-2.5 md:mt-3 text-center">
                Your information is confidential and secure
            </p>
        </motion.div>
    );
};

export default CompactEnquiry;
