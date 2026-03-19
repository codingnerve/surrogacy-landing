'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';

const CompactEnquiry = () => {
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
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid';
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
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-text-main mb-0.5 md:mb-1">
                Start Your Surrogacy Journey
            </h3>
            <p className="text-xs sm:text-sm text-text-muted mb-3 md:mb-4">
                Speak with our care coordinator
            </p>

            {/* Guaranteed programme highlight */}
            <div className="mb-2 overflow-hidden rounded-lg bg-linear-to-r from-red-600 to-red-500 px-3 py-2 shadow-md shadow-red-200/60">
                <p className="text-center text-[11px] sm:text-xs font-black tracking-wide text-white uppercase">
                     Guaranteed Surrogacy Programme in{" "}
                    <span className="text-yellow-300 text-sm sm:text-base font-black">₹15 Lakhs</span>
                </p>
            </div>

            {/* Offer banner */}
            <div className="mb-3 flex items-start gap-2 rounded-lg border border-red-200/70 bg-red-50/90 px-3 py-2">
                <span className="mt-0.5 text-base leading-none">🎁</span>
                <p className="text-[10px] sm:text-[11px] font-semibold leading-snug text-red-700">
                    Free Ultrasound &amp; TVS Scan Worth ₹4500/- and avail 25% Discount on Fertility Analysis Test!!
                </p>
            </div>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full h-10 sm:h-11 px-3 sm:px-4 rounded-lg border text-xs sm:text-sm ${errors.name ? 'border-red-500' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white`}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full h-10 sm:h-11 px-3 sm:px-4 rounded-lg border text-xs sm:text-sm ${errors.email ? 'border-red-500' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white`}
                />

                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full h-10 sm:h-11 px-3 sm:px-4 rounded-lg border text-xs sm:text-sm ${errors.phone ? 'border-red-500' : 'border-slate-200'
                        } focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white`}
                />

                <textarea
                    name="message"
                    placeholder="Your Message (Optional)"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full sm:col-span-2 p-2.5 sm:p-3 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white min-h-[72px] sm:min-h-[80px] resize-none shadow-sm"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="sm:col-span-2 h-10 sm:h-11 rounded-full bg-primary text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2"
                >
                    {isSubmitting ? (
                        <Loader2 size={16} className="animate-spin" />
                    ) : (
                        <>
                            <Send size={16} /> Get Free Consultation
                        </>
                    )}
                </button>
            </form>

            <p className="text-[10px] sm:text-[11px] text-text-muted mt-2.5 md:mt-3 text-center">
                Your information is confidential and secure
            </p>
        </motion.div>
    );
};

export default CompactEnquiry;
