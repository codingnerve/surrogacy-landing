'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "Is surrogacy legal?",
            answer: "Surrogacy laws vary by country and region. Our program operates in jurisdictions where gestational surrogacy is legally recognized and regulated, ensuring a secure framework for intended parents and surrogates."
        },
        {
            question: "How are surrogates selected?",
            answer: "Our surrogates undergo a rigorous multi-stage screening process including medical history review, fertility testing, infectious disease screening, psychological evaluation, and criminal background checks."
        },
        {
            question: "What is the typical timeline?",
            answer: "The timeline can vary based on matching and medical procedures, but typically the journey takes between 12 to 18 months from matching to delivery."
        },
        {
            question: "Do you support international parents?",
            answer: "Yes, we specialize in supporting intended parents globally. We provide coordination for legal documentation, travel arrangements, and ensuring compliance with your home country's laws for return with the baby."
        },
        {
            question: "How is surrogate health monitored?",
            answer: "Surrogates receive premium prenatal care with domestic visits, specialized diet plans, and regular medical checkups with our network of fertility specialists."
        },
        {
            question: "What are parent rights after birth?",
            answer: "We ensure all legal contracts and court orders are in place before birth to ensure that intended parents are recognized as the legal parents immediately upon delivery."
        }
    ];

    return (
        <section className="section-padding bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-12 px-4">
                    <h2 className="mb-2 md:mb-4">Frequently Asked Questions</h2>
                    <p className="text-text-muted max-w-2xl mx-auto text-xs md:text-base">
                        Comprehensive answers to your clinical, legal, and coordination queries.
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-0 md:gap-y-4 items-start px-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="group border-b border-slate-100 last:border-0 lg:last:border-b">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full py-4 md:py-5 text-left flex justify-between items-center gap-4 transition-all"
                            >
                                <span className={`font-bold text-[15px] md:text-lg transition-colors duration-300 ${openIndex === index ? 'text-primary' : 'text-text-main group-hover:text-primary'}`}>
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 transition-transform duration-500 ease-in-out ${openIndex === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown className={`w-4 h-4 md:w-5 md:h-5 ${openIndex === index ? 'text-primary' : 'text-slate-400'}`} />
                                </span>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <div className="pb-4 md:pb-6 text-xs md:text-base text-text-muted leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
