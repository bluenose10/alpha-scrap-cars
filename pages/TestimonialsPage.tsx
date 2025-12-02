
import React from 'react';
import { Testimonial } from '../types';
import PageHero from '../components/PageHero';

const StarRating = ({ rating }: { rating: number }) => (
    <div className="flex items-center">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-brand-red-600' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
);

const testimonialsData: Testimonial[] = [
    {
        quote: "Absolutely fantastic service! Had a breakdown late at night and they arrived within 30 minutes. Professional, friendly, and got me sorted out quickly. Would highly recommend Alpha Recoveries to anyone.",
        name: 'John Davies',
        car: 'Southport'
    },
    {
        quote: "Cannot recommend Alpha Recoveries enough. Their service is exceptional and the team really know what they're doing. Genuine experts who care about their customers.",
        name: 'Sarah Mitchell',
        car: 'Formby'
    },
    {
        quote: "First class service from start to finish. Called them out for a flat battery and they were there in no time. Professional team who really know their stuff.",
        name: 'Emma Richardson',
        car: 'Ainsdale'
    },
    {
        quote: "Outstanding breakdown assistance service! Quick, efficient, and great value. Saved me when I needed it most. The driver was courteous and professional throughout.",
        name: 'Michael Thompson',
        car: 'Ormskirk'
    },
    {
        quote: "Very impressed with the service I received. Professional, friendly, and reasonably priced. They took great care of my vehicle and kept me informed throughout. Highly recommended.",
        name: 'Lisa Anderson',
        car: 'Crosby'
    },
    {
        quote: "Excellent recovery service. My car broke down on the motorway and they responded incredibly quickly. The whole process was smooth and stress-free. Thank you Alpha!",
        name: 'David Wilson',
        car: 'Birkdale'
    },
    {
        quote: "Brilliant service! Had a puncture late at night and they came out quickly to help. The technician was professional and got me back on the road safely. Will definitely use again.",
        name: 'Robert Brown',
        car: 'Southport'
    },
    {
        quote: "Alpha Recoveries saved the day when my car wouldn't start. Quick response, professional service, and fair pricing. Really appreciate their help and would recommend to anyone.",
        name: 'Jennifer Clarke',
        car: 'Formby'
    },
    {
        quote: "Top-notch breakdown recovery service. They were efficient, professional, and very reasonably priced. The driver was friendly and explained everything clearly. Excellent experience overall.",
        name: 'Mark Stevens',
        car: 'Ormskirk'
    }
];

const TestimonialsPage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            <PageHero
              eyebrow="Testimonials"
              title="Customer Testimonials"
              subtitle="Don't just take our word for it - read what our satisfied customers have to say about our breakdown recovery services."
            />

            <main className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonialsData.map((testimonial, index) => (
                           <div key={index} className="bg-white/90 p-8 rounded-3xl border-2 border-brand-red-600/30 shadow-xl flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                                <div className="flex-grow mb-4">
                                   <div className="flex items-center gap-3">
                                     <StarRating rating={5} />
                                     <span className="text-xs uppercase tracking-[0.35em] text-brand-red-600">Verified</span>
                                   </div>
                                    <p className="text-gray-600 italic mt-4 leading-relaxed">"{testimonial.quote}"</p>
                                </div>
                                <div className="mt-auto pt-4 border-t border-gray-200">
                                    <p className="font-bold text-brand-darker">{testimonial.name}</p>
                                    <p className="text-sm text-gray-500">{testimonial.car}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default TestimonialsPage;