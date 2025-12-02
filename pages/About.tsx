
import React from 'react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

const About: React.FC = () => {
  return (
    <div className="animate-fadeIn">
      <PageHero
        eyebrow="About"
        title="About Us"
        subtitle="Your trusted partner for professional vehicle breakdown recovery in Southport and surrounding areas."
      />

      <main className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="rounded-3xl border-2 border-brand-red-600/30 bg-white/90 p-10 shadow-xl shadow-gray-200/70">
            <h2 className="text-3xl font-bold text-brand-darker mb-6 tracking-tight">Who We Are</h2>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Alpha Vehicle Breakdown Recovery Service Southport is a professional vehicle recovery company serving Southport, Formby, Ormskirk, and all surrounding Merseyside areas. We offer 24-hour car breakdown recovery 7 days a week, 365 days a year. Our vehicles are equipped with satellite navigation so we can get to you in the quickest time possible, and our average response time is within 30 minutes of the original call.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed text-lg">
              Our aim is to offer swift and cost-effective breakdown recovery services to Southern Lancashire. When a customer calls Alpha, our job is not only to free them from the roadside, recovering their vehicle to the safety of their garage, but also to answer every question they have as clearly and as honestly as we can.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              We've been building our reputation for years. A satisfied customer is far more valuable than any other form of advertising or marketing strategy. Our business thrives on word-of-mouth recommendations from happy customers who know they can trust us.
            </p>

            <div className="w-full h-px bg-gray-200 my-10"></div>

            <h2 className="text-3xl font-bold text-brand-darker mb-6 tracking-tight">Our Core Values</h2>
            <ul className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: 'Safety First',
                  description: 'Every recovery is performed with the highest safety standards for both our team and your vehicle.',
                },
                {
                  title: 'Professional Excellence',
                  description: 'Our team maintains the highest professional standards with ongoing training and certification.',
                },
                {
                  title: 'Customer Focus',
                  description: 'Your satisfaction is our priority. We treat every customer with respect and care.',
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
                  <h3 className="font-semibold text-brand-darker">Fully Licensed and Insured</h3>
                  <p className="text-gray-600 text-sm">Complete peace of mind with comprehensive insurance coverage</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">Modern Fleet</h3>
                  <p className="text-gray-600 text-sm">Well-maintained recovery vehicles with satellite navigation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">Comprehensive Coverage</h3>
                  <p className="text-gray-600 text-sm">Regional coverage across Merseyside and Lancashire</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">Years of Experience</h3>
                  <p className="text-gray-600 text-sm">Experienced in vehicle recovery and trusted by major insurance companies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">GPS Tracking</h3>
                  <p className="text-gray-600 text-sm">Our vehicles use satellite navigation for efficient response times</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-full bg-gradient-to-br from-brand-red-600 to-brand-red-400"></span>
                <div>
                  <h3 className="font-semibold text-brand-darker">24/7 Availability</h3>
                  <p className="text-gray-600 text-sm">Breakdowns don't follow schedules, and neither do we</p>
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