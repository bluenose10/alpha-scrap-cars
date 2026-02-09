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


const heroBackground = new URL('../assets/images/scrap-car-buyers-southport.JPG', import.meta.url).href;

const workshopGallery = [
  {
    src: new URL('../assets/images/southport-scrap-car-buyers.JPG', import.meta.url).href,
    alt: 'Scrap Car Collection Southport - Free Scrap Vehicle Collection',
  },
  {
    src: new URL('../assets/images/cash-for-scrap-car-southport.JPG', import.meta.url).href,
    alt: 'Scrap Car Buyers Southport Merseyside - Best Prices Paid',
  },
  {
    src: new URL('../assets/images/scrap-car-for-cash-southport.JPG', import.meta.url).href,
    alt: 'Cash For Scrap Cars Southport - Sell Your Scrap Vehicle',
  },
];

const featuredTestimonials: Testimonial[] = [
  {
    quote: "Really fast with no hassle. Got a great price for my old car and they collected it the same day. Would use this service again.",
    name: 'Adam Jones',
    car: 'Southport'
  },
  {
    quote: "I thought they were very professional and very polite. They handled all the paperwork and paid me on the spot. Excellent service.",
    name: 'Jane Ball',
    car: 'Ormskirk'
  },
  {
    quote: "Excellent prompt efficient service. Fully recommend. Best price I was quoted from any scrap car buyer in the area.",
    name: 'Mike Unsworth',
    car: 'Preston'
  }
];

const faqData = [
  {
    question: "What areas do you cover for scrap car collection?",
    answer: "Alpha Recovery covers Southport, Formby, Ormskirk, Preston, and all surrounding Merseyside and Lancashire areas. We provide free scrap car collection throughout the region."
  },
  {
    question: "How quickly can you collect my scrap car?",
    answer: "We aim to collect your scrap vehicle as quickly as possible, often the same day or next day depending on your location and availability. We will turn up at a time and date that's convenient for you."
  },
  {
    question: "What types of vehicles do you buy for scrap?",
    answer: "We buy all types of scrap, salvage, damaged, and unwanted vehicles including cars, vans, and 4x4s. As long as your vehicle is accessible and has four wheels and tyres, we can collect it."
  },
  {
    question: "Do you provide a Certificate of Destruction?",
    answer: "Yes, as a registered Authorized Treatment Facility (ATF), we issue a Certificate of Destruction for every scrapped vehicle. We also handle all DVLA paperwork on your behalf."
  },
  {
    question: "How do I get an instant quote for my scrap car?",
    answer: "Simply call or text your car registration number to 07908 714163 for a fast, no-obligation scrap car quote. You can also use our online contact form for a free valuation."
  },
  {
    question: "How much will I get for my scrap car in Southport?",
    answer: "Scrap car values depend on the make, model, weight, and current scrap metal prices. We always offer the best competitive prices in Southport and guarantee your quote for 10 days. The price you are quoted is what you receive. Contact us for an instant valuation."
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
          alt="scrap-car-buyers-southport"
          className="absolute inset-0 w-full h-full object-cover opacity-35"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-darker/80 via-brand-dark/55 to-black/65"></div>
        <div className="pointer-events-none absolute -top-24 -right-16 h-96 w-96 rounded-full bg-brand-red-600/25 blur-[140px] animate-float"></div>
        <div className="pointer-events-none absolute -bottom-16 -left-10 h-72 w-72 rounded-full bg-brand-red-500/20 blur-[120px] animate-pulse-glow"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center z-10 space-y-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white uppercase leading-tight tracking-wide animate-fade-in-up">
              Alpha Scrap Car Buyers Southport
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-white tracking-normal mt-4 normal-case">
                Sell Your Scrap Vehicle Southport & Surrounding Areas
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-gray-200 animate-fade-in-up [animation-delay:0.12s]">
              Call: 07908 714163
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
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h2 className="text-xl font-semibold">Best Prices Paid</h2>
                    <p className="text-gray-300 mt-2 text-sm">Top cash prices for your scrap vehicle</p>
                </div>
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 animate-float [animation-delay:0.15s]">
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <h2 className="text-xl font-semibold">Licensed & Trusted</h2>
                    <p className="text-gray-300 mt-2 text-sm">Registered Authorized Treatment Facility</p>
                </div>
                 <div className="p-5 rounded-2xl bg-white/5 border border-white/15 backdrop-blur-md shadow-2xl shadow-black/30 transition-transform duration-300 hover:-translate-y-1.5">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 border border-white/20 animate-float [animation-delay:0.3s]">
                      <svg className="h-7 w-7 text-brand-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                    </div>
                    <h2 className="text-xl font-semibold">FREE Collection</h2>
                    <p className="text-gray-300 mt-2 text-sm">We collect your scrap car for free within our areas</p>
                </div>
            </div>
        </div>
      </section>

      {/* Scrap Car Buyers Info Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">Scrap Car Buyers Southport - Top Prices For Scrap Vehicles</h2>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">Alpha scrap car buyers Southport are licensed buyers for scrap cars in Southport, Ormskirk, Preston and adjacent areas. In order to obtain the best offer for your scrap or salvage vehicle, we work with you to make the complete procedure, straightforward, hassle-free and secure. We always go that extra mile to guarantee that our scrap car service offers all of our clients the best conceivable experience.</p>
          <p className="mt-4 text-gray-600 max-w-4xl mx-auto">Our Southport scrap car buyers representatives are committed to providing a top level of service, making sure you get a genuine valuation for your scrap or salvage car.</p>
          <p className="mt-6 text-lg font-bold text-brand-darker">Call Or Text Your Car Registration Number For A Fast Response - 07813 027719</p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">Why Choose Us?</h2>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
              {/* Feature: Quotes By Humans */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">Quotes By Humans</h3>
                  <p className="text-gray-600 text-sm text-center">We take more into account then computer generated quotes.</p>
                </div>
              </div>
              {/* Feature: Licensed & Trusted */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">Licensed & Trusted</h3>
                  <p className="text-gray-600 text-sm text-center">A Certificate of Destruction is issued for every scrapped vehicle.</p>
                </div>
              </div>
              {/* Feature: FREE Collection */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">FREE Collection</h3>
                  <p className="text-gray-600 text-sm text-center">As well as paying for your car we collect it for FREE. Within our areas.</p>
                </div>
              </div>
              {/* Feature: We Turn Up */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-brand-red-600/30 bg-white p-6 shadow-lg shadow-gray-200/80 transition-all duration-300 hover:-translate-y-2 hover:border-brand-red-600/40">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-red-50/60 via-transparent to-brand-red-100/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative">
                  <div className="flex items-center justify-center h-16 w-16 mx-auto mb-4 rounded-2xl bg-brand-red-50 text-brand-darker border border-brand-red-100 shadow-inner shadow-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  </div>
                  <h3 className="text-xl font-bold text-brand-darker mb-3 text-center">We Turn Up</h3>
                  <p className="text-gray-600 text-sm text-center">We will turn up at a time & date thats convenient for you.</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Best Prices CTA Banner */}
      <section className="relative overflow-hidden bg-brand-darker text-white">
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">Best Prices Paid Scrap Car Collection</h2>
            <Link to="/contact" className="group bg-gradient-to-r from-brand-red-600 via-[#ff6a00] to-brand-red-700 text-white font-bold py-3.5 px-10 rounded-full transition-all duration-300 text-lg shadow-[0_20px_45px_rgba(239,0,0,0.35)] hover:shadow-[0_25px_60px_rgba(239,0,0,0.45)] hover:-translate-y-1">
              Contact Us
            </Link>
          </div>
      </section>

      {/* Registered ATF Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker text-center mb-12">Registered Authorized Treatment Facility (ATF)</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">Quotes guaranteed for 10 days</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">No middleman, we are the end buyer</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">Competitive instant quotes any make, model, regardless of condition</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">Quick collection at a time convenient to you</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">The price you are quoted is what you receive</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">Legal recycling in line with environmental guidelines</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">Great quotes for commercial vehicles too</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">We handle all of the DVLA paperwork</p>
              </div>
              <div className="flex items-start gap-3">
                <svg className="h-6 w-6 text-brand-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <p className="text-gray-600">Receive payment for your vehicle within 24 hours via bank transfer</p>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-700 font-bold max-w-4xl mx-auto">Alpha Vehicle Recovery, scrap car buyers Southport offer a FREE scrap car collection service. Providing your car is accessible, has four wheels and tyres, collection of your scrap, damaged, or unwanted car or van will be possible. Visit our <Link to="/contact" className="text-brand-red-600 hover:underline">FAQ page</Link> if you have any questions.</p>
          </div>
        </div>
      </section>

      {/* Workshop/Gallery Section */}
      <section className="py-20 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-brand-darker">Scrap & Salvage Car Collection</h2>
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto">Alpha Recovery's customer service sets us apart. We value our clients and strive to build lasting relationships, ensuring that every scrap car collection reflects our dedication to quality and support.</p>
            <p className="mt-2 text-gray-600 max-w-4xl mx-auto">From your initial call to complete vehicle collection, we're here to answer questions, provide honest valuations, and ensure you're completely satisfied with your scrap car selling experience in Southport and surrounding areas.</p>
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
      <section className="py-20 bg-brand-darker">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white text-center">Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-12">
            {featuredTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <div className="flex items-center gap-3">
                  <StarRating rating={5} />
                  <span className="text-xs uppercase tracking-[0.3em] text-white/70">Verified</span>
                </div>
                <p className="text-gray-300 italic mt-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="mt-6 pt-4 border-t border-white/20">
                    <p className="font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.car}</p>
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
              Got questions about scrapping your car in Southport? Here are answers to our most common queries.
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
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Ready To Scrap Your Car For Cash?</h2>
            <p className="mt-2 text-white/80 max-w-2xl mx-auto">Contact us today for an instant scrap car quote. We offer the best prices in Southport with free collection and hassle-free service.</p>
            <div className="mt-6 flex justify-center items-center gap-4 flex-wrap">
              <Link to="/contact" className="group bg-white text-brand-darker font-bold py-3.5 px-10 rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-gray-100">
                Get Your Free Quote
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
