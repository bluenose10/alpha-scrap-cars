import React from 'react';
import { Link } from 'react-router-dom';

const logo = new URL('../assets/images/car-breakdown-recovery-services-southport.webp', import.meta.url).href;

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darker text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={logo}
                alt="Scrap Car Buyers Southport - Alpha Recovery"
                width="40"
                height="40"
                className="h-10 w-auto object-contain"
              />
              <div className="sr-only">
                <h1>Alpha Recovery</h1>
                <p>Scrap Car Buyers Southport</p>
              </div>
            </Link>
            <p className="text-sm">
              Licensed scrap car buyers in Southport. Best prices paid for scrap and salvage vehicles with free collection across Southport, Merseyside and Lancashire.
            </p>
          </div>

          <div>
            <h2 className="text-md font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h2>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link to="/services" className="hover:text-brand-red-600 transition-colors">Services</Link>
              <Link to="/about" className="hover:text-brand-red-600 transition-colors">About Us</Link>
              <Link to="/testimonials" className="hover:text-brand-red-600 transition-colors">Testimonials</Link>
              <Link to="/contact" className="hover:text-brand-red-600 transition-colors">Contact</Link>
              <Link to="/terms" className="hover:text-brand-red-600 transition-colors">Terms</Link>
              <Link to="/privacy" className="hover:text-brand-red-600 transition-colors">Privacy</Link>
              <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red-600 transition-colors">Sitemap</a>
              <a href="https://share.google/O6plhiM6b7lKAy1ib" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red-600 transition-colors">Google Business</a>
            </div>
          </div>
          
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Alpha Recovery. All Rights Reserved.</p>
          <p className="text-xs text-gray-400 mt-2">Scrap Car Buyers Southport | Cash For Scrap Cars | Merseyside and Lancashire</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;