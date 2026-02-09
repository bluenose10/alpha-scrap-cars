
import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <PageHero
        eyebrow="About"
        title="About Us"
        subtitle="Your trusted scrap car buyers in Southport. Licensed, reliable, and committed to getting you the best price for your scrap vehicle."
      />

      <main className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="rounded-3xl border-2 border-brand-red-600/30 bg-white/90 p-10 shadow-xl shadow-gray-200/70">
            <h2 className="text-3xl font-bold text-brand-darker mb-6 tracking-tight">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Alpha Recovery are licensed scrap car buyers based in Southport, serving Formby, Ormskirk, Preston, and all surrounding Merseyside and Lancashire areas. We offer the best prices for scrap and salvage vehicles with free collection. As a registered Authorized Treatment Facility (ATF), we ensure every vehicle is recycled legally and responsibly, with a Certificate of Destruction issued for every car we scrap.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Our aim is to make selling your scrap car as simple and hassle-free as possible. When you contact Alpha Recovery, we don't just give you a price — we take the time to answer every question clearly and honestly, ensuring you get a genuine valuation for your vehicle.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We've been building our reputation for years. A satisfied customer is far more valuable than any other form of advertising or marketing strategy. Our business thrives on word-of-mouth recommendations from happy customers who know they can trust us to offer fair prices and a professional service.
            </p>

            <div className="w-full h-px bg-gray-200 my-10"></div>

            <h2 className="text-3xl font-bold text-brand-darker mb-6 tracking-tight">Our Core Values</h2>
            <ul className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Honest Valuations',
                  description: 'Every quote is fair, transparent, and provided by a real person — not a computer algorithm.',
                },
                {
                  title: 'Professional Service',
                  description: 'From your initial call to vehicle collection, we maintain the highest standards of professionalism.',
                },
                {
                  title: 'Customer Focus',
                  description: 'Your satisfaction is our priority. We make the entire process straightforward and hassle-free.',
                },
              ].map((item) => (
                <li key={item.title} className="rounded-2xl border-2 border-brand-red-600/30 bg-gray-50/80 p-5 shadow-inner shadow-white">
                  <p className="text-xs uppercase tracking-[0.3em] text-brand-red-600/70 mb-2">Core Value</p>
                  <h3 className="font-semibold text-brand-darker text-lg">{item.title}</h3>
                  <p className="text-gray-600 mt-2">{item.description}</p>
                </li>
              ))}
            </ul>

            <div className="w-full h-px bg-gray-200 my-10"></div>

            <h2 className="text-3xl font-bold text-brand-darker mb-6 tracking-tight">What Sets Us Apart</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">Licensed & Registered ATF</h3>
                  <p className="text-gray-600 text-sm">Fully licensed Authorized Treatment Facility with Certificate of Destruction for every vehicle</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">No Middleman</h3>
                  <p className="text-gray-600 text-sm">We are the end buyer — no agents or third parties, so you get the best price</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">Free Collection</h3>
                  <p className="text-gray-600 text-sm">We collect your scrap car for free within our service areas across Merseyside and Lancashire</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">Quotes By Humans</h3>
                  <p className="text-gray-600 text-sm">Real people assess your vehicle, taking more into account than automated systems</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">DVLA Paperwork Handled</h3>
                  <p className="text-gray-600 text-sm">We take care of all the DVLA paperwork on your behalf — completely hassle-free</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">Fast Payment</h3>
                  <p className="text-gray-600 text-sm">Receive payment for your vehicle within 24 hours via bank transfer</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Link to="/contact" className="rounded-full border border-brand-red-600 text-brand-red-600 font-semibold py-3.5 px-10 transition-all duration-300 hover:bg-brand-red-600 hover:text-white hover:-translate-y-1">
                  Get Your Free Quote
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
