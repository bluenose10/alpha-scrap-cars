
import React from 'react';
import { Service } from '../types';
import PageHero from '../components/PageHero';

const servicesData: Service[] = [
  {
    title: 'Scrap Car Collection Southport',
    description: 'Our core service. We offer free scrap car collection across Southport, Ormskirk, Preston and all surrounding Merseyside and Lancashire areas. We collect your scrap, damaged or unwanted vehicle at a time that suits you, and pay you the best price for it.',
    details: [
      'Free collection within our service areas',
      'Same day or next day collection available',
      'We collect at a time convenient for you',
      'All makes and models accepted',
      'Cash or bank transfer payment on collection'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
  },
  {
    title: 'Scrap My Car For Cash',
    description: 'Get the best price for your scrap car in Southport. We offer competitive instant quotes with no hidden fees. The price we quote is the price you receive. No middleman — we are the end buyer, so you always get top dollar for your scrap vehicle.',
    details: [
      'Instant quotes via phone or online',
      'Best prices paid for scrap vehicles',
      'No hidden fees or deductions',
      'Quotes guaranteed for 10 days',
      'Payment within 24 hours via bank transfer'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: 'Salvage Vehicle Collection',
    description: 'We buy and collect all types of salvage vehicles across Southport and surrounding areas. Whether your car has been in an accident, failed its MOT, or is simply beyond economical repair, we will give you a fair price and collect it for free.',
    details: [
      'Accident damaged vehicles collected',
      'MOT failures accepted',
      'Vehicles beyond economical repair',
      'Fair and competitive valuations',
      'Free collection service included'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  },
  {
    title: 'DVLA Paperwork & Certificate of Destruction',
    description: 'As a registered Authorized Treatment Facility (ATF), we handle all the DVLA paperwork for you. Every scrapped vehicle receives a Certificate of Destruction, giving you complete peace of mind that your vehicle has been legally and responsibly recycled.',
    details: [
      'Full DVLA paperwork handled on your behalf',
      'Certificate of Destruction issued for every vehicle',
      'Registered Authorized Treatment Facility (ATF)',
      'Legal recycling in line with environmental guidelines',
      'Complete peace of mind and compliance'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
  },
  {
    title: 'Sell Your Old Vehicle',
    description: 'Got an old, unwanted vehicle taking up space? We buy all types of old vehicles regardless of condition. Whether it runs or not, we will give you a competitive quote and arrange free collection at your convenience.',
    details: [
      'Running or non-running vehicles accepted',
      'Any age, make, or model considered',
      'No obligation free quotes',
      'Hassle-free process from start to finish',
      'We come to you — no need to bring the vehicle to us'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    title: 'Commercial Vehicle Scrap',
    description: 'We don\'t just buy scrap cars — we also offer great quotes for commercial vehicles including vans, trucks, and fleet vehicles. If you have a commercial vehicle that needs scrapping, contact us for a competitive quote.',
    details: [
      'Vans, trucks, and commercial vehicles accepted',
      'Fleet vehicle disposal available',
      'Competitive quotes for all commercial vehicles',
      'Free collection for commercial vehicles',
      'All paperwork handled professionally'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
  },
  {
    title: 'Scrap Car Valuation Southport',
    description: 'Get an instant scrap car valuation by calling or texting your registration number to us. Our quotes are provided by humans, not computers, meaning we take more into account and can often offer you a better price than automated online services.',
    details: [
      'Human-generated quotes, not computer algorithms',
      'Call or text your registration number for a fast response',
      'Accurate valuations based on current scrap prices',
      'No obligation — get your quote and decide in your own time',
      'Quotes guaranteed for 10 days'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
  },
  {
    title: 'Vehicle Breakdown Recovery',
    description: 'Alongside our scrap car buying service, we also offer 24-hour vehicle breakdown recovery across Southport and surrounding areas. If your vehicle has broken down and you decide it\'s not worth repairing, we can offer you a scrap price on the spot.',
    details: [
      '24/7 breakdown recovery available',
      'Serving Southport, Ormskirk, Preston and surrounding areas',
      'Option to scrap your broken-down vehicle on the spot',
      'Professional and friendly recovery operatives',
      'Fast response times across the region'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="Comprehensive scrap car collection and buying services across Southport, Merseyside and Lancashire. Best prices paid with free collection."
      />

      <main className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-10">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl border-2 border-brand-red-600/30 bg-white/80 p-10 shadow-xl shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50 via-transparent to-brand-red-100 opacity-0 transition-opacity duration-300 group-hover:opacity-80"></div>
                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-brand-red-50 text-brand-red-600 border border-brand-red-100 shadow-inner shadow-white">
                      {service.icon}
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.35em] text-brand-red-500/70">
                        Service {index + 1}
                      </p>
                      <h2 className="text-3xl font-bold text-brand-darker">{service.title}</h2>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <div className="rounded-2xl border border-gray-200/70 bg-white/90 p-6 shadow-inner shadow-gray-100">
                    <ul className="space-y-3">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-700">
                          <span className="mt-1 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400 shadow-[0_0_10px_rgba(239,0,0,0.4)]"></span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServicesPage;
