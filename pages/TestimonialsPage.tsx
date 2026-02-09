
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
        quote: "Really fast with no hassle. Got a great price for my old car and they collected it the same day. Would use this service again.",
        name: 'Adam Jones',
        car: 'Southport'
    },
    {
        quote: "I thought they were very professional and very polite. They handled all the paperwork and paid me on the spot. Excellent service from start to finish.",
        name: 'Jane Ball',
        car: 'Ormskirk'
    },
    {
        quote: "Excellent prompt efficient service. Fully recommend. Best price I was quoted from any scrap car buyer in the area. They turned up when they said they would.",
        name: 'Mike Unsworth',
        car: 'Preston'
    },
    {
        quote: "Called up for a quote and they gave me a really fair price. Collection was arranged for the next day and they paid me straight away. Couldn't ask for more.",
        name: 'Sarah Mitchell',
        car: 'Formby'
    },
    {
        quote: "Very impressed with how easy the whole process was. One phone call, got a quote, they came and collected the car and handed over the cash. Simple as that.",
        name: 'David Wilson',
        car: 'Birkdale'
    },
    {
        quote: "Had an old car sitting on the drive for months. Called Alpha Recovery and they sorted everything out quickly. Great price and they handled all the DVLA paperwork too.",
        name: 'Lisa Anderson',
        car: 'Crosby'
    },
    {
        quote: "Brilliant service! My car failed its MOT and wasn't worth repairing. Alpha gave me a much better price than other scrap dealers I contacted. Highly recommended.",
        name: 'Robert Brown',
        car: 'Southport'
    },
    {
        quote: "Professional, honest, and fair. They were upfront about the price from the start and there were no hidden fees or last-minute reductions. Will definitely recommend to friends.",
        name: 'Jennifer Clarke',
        car: 'Formby'
    },
    {
        quote: "Top-notch scrap car service. They collected my old van and paid a great price for it. The driver was friendly and the whole thing took less than 20 minutes. Excellent experience.",
        name: 'Mark Stevens',
        car: 'Ormskirk'
    }
];

const TestimonialsPage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            <PageHero
              eyebrow="Testimonials"
              title="Customer Reviews"
              subtitle="Don't just take our word for it — read what our satisfied customers have to say about our scrap car buying service in Southport."
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
