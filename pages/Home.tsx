import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Testimonial } from '../types';

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


const heroBackground = new URL('../assets/images/24-hour-breakdown-recovery-service.JPG', import.meta.url).href;

const workshopGallery = [
  {
    src: new URL('../assets/images/southport-breakdown-recovery-services.jpg', import.meta.url).href,
    alt: 'breakdown-recovery-services-near-me',
  },
  {
    src: new URL('../assets/images/cars-breakdown-recovery-services-southport.JPG', import.meta.url).href,
    alt: 'breakdown-towing-&-recovery-services-southport',
  },
  {
    src: new URL('../assets/images/vehicle-breakdown-recovery-services-southport.jpg', import.meta.url).href,
    alt: 'Car-Breakdown-Recovery-Southport',
  },
];

const featuredTestimonials: Testimonial[] = [
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
    quote: "Outstanding breakdown assistance service! Quick, efficient, and great value. Saved me when I needed it most. The driver was courteous and professional throughout.",
    name: 'Michael Thompson',
    car: 'Ormskirk'
  }
];

const faqData = [
  {
    question: "What areas do you cover for breakdown recovery?",
    answer: "Alpha Vehicle Breakdown Recovery covers Southport, Formby, Ormskirk, and all surrounding Merseyside and Lancashire areas. We provide 24/7 recovery services throughout the region and can transport your vehicle anywhere in the UK."
  },
  {
    question: "How quickly can you respond to a breakdown?",
    answer: "Our average response time is within 30 minutes of your call. Our recovery vehicles are equipped with satellite navigation to reach you in the quickest time possible, 24 hours a day, 365 days a year."
  },
  {
    question: "What types of vehicles can you recover?",
    answer: "We operate a broad fleet of different recovery vehicles and can transport all types of cars, vans, and 4x4 vehicles. From small cars to larger commercial vehicles, we have the equipment to handle your recovery needs."
  },
  {
    question: "Do you work with insurance companies?",
    answer: "Yes, we work directly with insurance companies to coordinate repairs or salvage collection. Our service is fast and efficient, making the claims process as smooth as possible."
  },
  {
    question: "What services do you offer besides breakdown recovery?",
    answer: "In addition to 24-hour breakdown recovery, we offer vehicle storage and rental, transport for classic and vintage cars, locksmith services, motorway accident recovery, and roadside assistance across Merseyside and Lancashire."
  },
  {
    question: "How much does breakdown recovery cost?",
    answer: "For a free, no-obligation quote, please call us at 07908 714163. Our pricing is competitive and transparent, with swift and low-cost breakdown recovery solutions tailored to your needs."
  }
];

const FaqAccordion: React.FC<{ faq: { question: string; answer: string }[]; }> = ({ faq }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faq.map((item, index) => (
        <div key={index} className="border-2 border-brand-red-600/30 bg-white/90 rounded-2xl shadow-lg shadow-gray-200/80 overflow-hidden">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
          >
            <h3 className="text-lg font-bold text-brand-darker pr-4">{item.question}</h3>
            <svg
              className={`w-6 h-6 text-brand-red-600 transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      {/* Hero Section */}
      <section className="relative bg-brand-darker text-white overflow-hidden">
        <img
          src={heroBackground}
          alt="cars-breakdown-recovery-services-southport"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker/60 via-brand-dark/40 to-black/50"></div>
        <div className="pointer-events-none absolute -top-24 -right-16 h-96 w-96 rounded-full bg-brand-red-600/25 blur-[140px] animate-float"></div>
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-brand-red-500/20 blur-[120px] animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center z-10 space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-brand-red-600 uppercase leading-tight tracking-wide animate-fade-in-up">
              Alpha Recovery
              <span className="block text-2xl md:text-3xl font-semibold text-brand-red-600 tracking-normal mt-4">
                Vehicle Breakdown Recovery Southport
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-200 animate-fade-in-up [animation-delay:0.12s]">
            Alpha  Vehicle Breakdown Recovery Service Southport offers 24-hour car breakdown recovery 7 days a week, 365 days a year.
            </p>
            <div className="mt-6 flex justify-center items-center gap-4 flex-wrap animate-fade-in-up [animation-delay:0.24s]">
              <Link to="/contact" className="group bg-gradient-to-r from-brand-red-600 via-[#ff6a00] to-brand-red-700 text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 text-lg shadow-[0_20px_45px_rgba(239,0,0,0.35)] hover:shadow-[0_25px_60px_rgba(239,0,0,0.45)] hover:-translate-y-1">
                Get Your Free Quote
              </Link>
               <Link to="/services" className="rounded-full border border-white/30 text-white/90 font-semibold py-3.5 px-10 transition-all duration-300 text-lg hover:text-white hover:border-white hover:-translate-y-1 hover:bg-white/10 backdrop-blur">
                View Our Services
              </Link>
            </div>
        </div>
        <div className="relative z-10 bg-white/5 border-t border-white/10 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center py-8">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 animate-float">
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h2 className="text-xl font-semibold">24/7 Availability</h2>
                    <p className="text-gray-300 mt-2 text-sm">Round-the-clock emergency recovery</p>
                </div>
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 animate-float [animation-delay:0.15s]">
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h2 className="text-xl font-semibold">Professional Team</h2>
                    <p className="text-gray-300 mt-2 text-sm">Fully trained Vehicle Recovery Operatives</p>
                </div>
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 animate-float [animation-delay:0.3s]">
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    </div>
                    <h2 className="text-xl font-semibold">Fast Response</h2>
                    <p className="text-gray-300 mt-2 text-sm">Average 30 minute response time</p>
                </div>
            </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">24-Hour Breakdown Recovery Services</h2>
          <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Alpha  Vehicle Breakdown Recovery Service Southport offers 24-hour car breakdown recovery 7 days a week, 365 days a year. Our vehicles are equipped with satellite navigation so we can get to you in the quickest time possible 
             and our average response time is within 30 minutes of the original call.</p>
          <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Alpha Car Breakdown Recovery Services Southport operates a broad fleet of different types of breakdown and recovery vehicles. We are a reliable, prompt, and specialized company and are well known throughout Merseyside and Lancashire. 
                    </p> 
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Service Item */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">24-Hour Vehicle Recovery</h3>
                <p className="text-gray-600 text-sm text-center">Round-the-clock emergency breakdown recovery services across Southport and surrounding areas.</p>
              </div>
            </div>
            {/* Service Item */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">Motorway Recovery</h3>
                <p className="text-gray-600 text-sm text-center">Fast response motorway recovery services with satellite navigation for quick assistance.</p>
              </div>
            </div>
            {/* Service Item */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
               <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">Vehicle Storage</h3>
                <p className="text-gray-600 text-sm text-center">Long-term and short-term vehicle storage at competitive rates in secure facilities.</p>
               </div>
            </div>
            {/* Service Item */}
            <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
               <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
               <div className="relative">
                <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">Insurance Liaison</h3>
                <p className="text-gray-600 text-sm text-center">We work directly with insurance companies to coordinate repairs or salvage collection.</p>
               </div>
            </div>
          </div>
          <Link to="/services" className="mt-12 inline-block bg-brand-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-brand-red-700 transition-colors">
            View All Services
          </Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">Why Choose Alpha?</h2>
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Here at Alpha Vehicle Recovery our goal is to offer swift and low cost car breakdown recovery solutions in Southport and adjoining areas.  We take the hassle out of breakdowns and get you back on the road in no time.</p>
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Our commitment to excellent customer care is deeply rooted in all our services which include: car breakdown recovery, car transportation, 
               vehicle delivery, car recycling and scrap car purchase.
            </p>  
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Open 24 hours a day, our fully trained and skilled Vehicle Recovery Operatives (VROs) recover you and your vehicle to anywhere you wish within the United Kingdom. The VROs all carry id, are fully trained in car recovery and breakdown and pride themselves in delivering a professional, friendly service. 
            </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-red-600/15 to-brand-red-600/5 text-brand-darker border border-brand-red-100 shadow-inner">
                      <svg className="h-10 w-10 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-darker text-center">Modern Fleet</h3>
                    <p className="text-gray-600 mt-2 text-center">Well-maintained recovery vehicles with satellite navigation for efficient response</p>
                </div>
                 <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-red-600/15 to-brand-red-600/5 text-brand-darker border border-brand-red-100 shadow-inner">
                      <svg className="h-10 w-10 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-darker text-center">Licensed & Insured</h3>
                    <p className="text-gray-600 mt-2 text-center">Fully licensed recovery service with comprehensive insurance coverage</p>
                </div>
                 <div className="p-6 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/70 transition-all duration-300 hover:-translate-y-2">
                    <div className="flex items-center justify-center h-20 w-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-brand-red-600/15 to-brand-red-600/5 text-brand-darker border border-brand-red-100 shadow-inner">
                      <svg className="h-10 w-10 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div>
                    <h3 className="text-xl font-bold text-brand-darker text-center">Trained Professionals</h3>
                    <p className="text-gray-600 mt-2 text-center">Fully trained Vehicle Recovery Operatives who deliver friendly, professional service</p>
                </div>
                </div> 
               </div>
      </section>

      {/* Workshop Section */}
      <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">Our Commitment</h2>
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Alpha's customer service sets us apart. We value our clients and strive to build lasting relationships, ensuring that every interaction reflects our dedication to quality and support.</p>
               <p className="mt-2 text-gray-600 max-w-4xl mx-auto">From your initial call to complete vehicle recovery, we're here to answer questions, provide honest advice, and ensure you're completely satisfied with your breakdown recovery experience in Southport and surrounding areas.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
                {workshopGallery.map((image, index) => (
                  <img
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    width="400"
                    height="300"
                    loading="lazy"
                    decoding="async"
                    className="rounded-2xl shadow-2xl shadow-gray-900/40 aspect-[4/3] object-cover w-full transition-transform duration-500 hover:-translate-y-2 hover:scale-[1.02]"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  />
                ))}
            </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker text-center">What Our Customers Say</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-center">Don't just take our word for it - read what our satisfied customers have to say about our breakdown recovery services.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center gap-3">
                  <StarRating rating={5} />
                  <span className="text-xs uppercase tracking-[0.3em] text-brand-darker">Verified</span>
                </div>
                <p className="text-gray-600 italic mt-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="font-bold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.car}</p>
                </div>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/testimonials" className="inline-block bg-brand-red-600 text-white rounded-md px-6 py-3 font-semibold hover:bg-brand-red-700 transition-all duration-300">
                Read More Reviews
            </Link>
           </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-red-600 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Got questions about vehicle breakdown recovery in Southport? Here are answers to our most common queries.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <FaqAccordion faq={faqData} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-brand-red-600 text-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Need Emergency Recovery Services?</h2>
            <p className="mt-2 text-white/80 max-w-2xl mx-auto">Contact us today for 24/7 breakdown recovery assistance. We're here to help get you back on the road quickly and safely.</p>
            <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
              <Link to="/contact" className="group bg-white text-brand-darker font-bold py-3.5 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100">
                Contact Us Today
              </Link>
              <Link to="/about" className="rounded-full border border-white/50 text-white font-semibold py-3.5 px-10 transition-all duration-300 hover:bg-white/15 hover:-translate-y-1">
                Learn More About Us
              </Link>
            </div>
          </div>
      </section>
    </div>
  );
};

export default Home;