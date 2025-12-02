
import React from 'react';
import { Service } from '../types';
import PageHero from '../components/PageHero';

const servicesData: Service[] = [
  {
    title: '24-Hour Vehicle Recovery',
    description: 'Our core service. Round-the-clock emergency breakdown recovery services available 24/7, 365 days a year. Our fully trained Vehicle Recovery Operatives (VROs) will recover you and your vehicle to anywhere within the United Kingdom.',
    details: [
      'Available 24 hours a day, 7 days a week',
      'Average response time within 30 minutes',
      'Satellite navigation equipped vehicles',
      'Fully trained and ID carrying VROs',
      'Recovery to any UK destination'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  {
    title: 'Off-Road Accident Recovery',
    description: 'Specialized recovery for off-road accidents with professional vehicle handling. We coordinate with insurance companies for seamless service and handle all types of accident recovery situations with care and efficiency.',
    details: [
      'Professional vehicle handling and recovery',
      'Insurance company coordination',
      'Specialized equipment for difficult recoveries',
      'Safe and damage-free vehicle transport',
      'Expert team trained in accident recovery'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  },
  {
    title: 'Vehicle Storage & Rental',
    description: 'Long-term and short-term vehicle storage at competitive rates in safe, secure facilities. We offer flexible storage solutions for all vehicle types with easy access and professional service.',
    details: [
      'Long-term and short-term storage options',
      'Safe and secure storage facilities',
      'Competitive pricing',
      'All vehicle types accommodated',
      'Easy access and professional management'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
  },
  {
    title: 'Insurance Company Liaison',
    description: 'We work directly with your insurance company to coordinate repairs or salvage collection. Our efficient service makes the claims process smooth and stress-free, with fast turnaround times.',
    details: [
      'Direct coordination with insurance companies',
      'Fast and efficient claims processing',
      'Professional salvage collection',
      'Repair coordination services',
      'Stress-free experience for customers'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  {
    title: '24-Hour Vehicle Locksmith Service',
    description: 'Emergency locksmith services available 24/7. Get back into your vehicle quickly with our professional locksmith team. We handle all types of vehicle lockouts with minimal disruption.',
    details: [
      'Available 24 hours a day',
      'Quick response times',
      'Professional locksmith team',
      'All vehicle types covered',
      'Non-destructive entry methods'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" /></svg>
  },
  {
    title: 'Transport for Classic/Vintage Cars',
    description: 'Specialized transportation for classic and vintage vehicles. Expert handling ensures your prized possession arrives safely at its destination. We understand the value and care required for collectible vehicles.',
    details: [
      'Specialized handling for classic vehicles',
      'Expert team with vintage car experience',
      'Safe and secure transportation',
      'Climate-controlled options available',
      'Door-to-door delivery service'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" /></svg>
  },
  {
    title: 'Motorway Accident & Breakdown Recovery',
    description: 'Fast response motorway recovery services with satellite navigation ensuring we reach you in the quickest time possible. Specialized in handling motorway breakdowns and accidents safely and efficiently.',
    details: [
      'Fast motorway response service',
      'Satellite navigation equipped vehicles',
      'Safety-first approach to motorway recovery',
      'Experienced in high-speed road recovery',
      'Quick removal from dangerous situations'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
  },
  {
    title: 'A & B Road Accident & Breakdown Recovery',
    description: 'Comprehensive coverage on A roads and B roads across Merseyside and surrounding areas. Quick response guaranteed with our efficient dispatch system and experienced recovery team.',
    details: [
      'Coverage across all A and B roads',
      'Merseyside and Lancashire coverage',
      'Quick response times guaranteed',
      'Experienced recovery team',
      'Professional and courteous service'
    ],
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <PageHero
        eyebrow="Services"
        title="Our Services"
        subtitle="Comprehensive vehicle breakdown and recovery services across Southport and surrounding areas. Available 24/7, 365 days a year."
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