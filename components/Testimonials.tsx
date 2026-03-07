'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
      {
    name: "Rahul & Priya Sharma",
    country: "India",
    quote: "After years of trying to conceive, this surrogacy program gave us the greatest gift of our lives. The doctors and staff supported us at every step of the journey.",
    rating: 5
},
{
    name: "Amit Verma",
    country: "India",
    quote: "The entire team was extremely professional and transparent. They guided us through every stage of the process and made a very emotional journey much easier.",
    rating: 5
},
{
    name: "Neha & Karan Mehta",
    country: "India",
    quote: "We are incredibly thankful to the doctors and coordinators for helping us complete our family. Their care, honesty, and dedication truly made a difference.",
    rating: 5
}
    ];

    return (
        <section className="section-padding bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="mb-4">Success Stories</h2>
                    <p className="text-sm md:text-base text-text-muted">Heartfelt experiences from parents who completed their journey with us.</p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="premium-card p-8 flex flex-col"
                        >
                            <div className="text-primary mb-6">
                                <Quote size={40} className="opacity-20" />
                            </div>
                            <p className="text-text-main italic text-lg mb-8 flex-grow">
                                "{item.quote}"
                            </p>
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                            <div>
                                <h4 className="font-bold text-text-main">{item.name}</h4>
                                <p className="text-sm text-text-muted">{item.country}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
