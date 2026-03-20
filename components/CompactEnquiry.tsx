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
                    className="w-full p-2.5 sm:p-3 rounded-lg border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 bg-white min-h-[72px] sm:min-h-[80px] resize-none shadow-sm"
                />

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-10 sm:h-11 rounded-full bg-primary text-white font-semibold text-xs sm:text-sm shadow-md hover:bg-red-700 transition-all flex items-center justify-center gap-2"
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
