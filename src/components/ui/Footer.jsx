import React from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../../constants';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-beige-200 pt-12 md:pt-20 pb-8 md:pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 md:mb-16">
          <div className="space-y-4 md:space-y-6 col-span-2 lg:col-span-1 text-center md:text-left">
            <Link to="/" className="flex flex-col items-center md:items-start">
              <span className="text-2xl md:text-3xl font-serif font-bold tracking-widest text-neutral-800 uppercase">
                AURABEADS
              </span>
              <span className="text-xs tracking-[0.4em] uppercase text-amber-600 -mt-1 ml-1">
                Charm
              </span>
            </Link>
            <p className="text-neutral-500 font-light leading-relaxed max-w-xs mx-auto md:mx-0">
              Affordable luxury for everyday wear. Handcrafted jewelry that captures the essence of artisanal charm.
            </p>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600 mb-4 md:mb-6">Collections</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/category/anti-tarnish-bracelet" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors">Anti Tarnish Bracelet</Link></li>
              <li><Link to="/category/anti-tarnish-earrings" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors">Anti Tarnish Earrings</Link></li>
              <li><Link to="/category/beads-bracelet" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors">Beads Bracelet</Link></li>
              <li><Link to="/category/korean-earrings" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors">Korean Earrings</Link></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600 mb-4 md:mb-6">Customer Care</h4>
            <ul className="space-y-2 md:space-y-3">
              <li><Link to="/contact" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping-policy" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors">Shipping Policy</Link></li>
              <li><Link to="/returns-exchanges" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors">Returns & Exchanges</Link></li>
              <li><a href="#" className="text-sm text-neutral-600 hover:text-amber-600 transition-colors">Jewelry Care</a></li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-amber-600 mb-4 md:mb-6">Connect</h4>
            <div className="space-y-4">
              <p className="text-sm text-neutral-600">Follow our journey and see the crafting process.</p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="https://www.instagram.com/aurabeads_.charm/" target="_blank" rel="noopener noreferrer" className="p-2 border border-neutral-100 hover:bg-beige-50 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-5 h-5 text-neutral-400 hover:text-amber-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 md:pt-20 text-center space-y-3 md:space-y-4">
          <p className="text-[10px] uppercase tracking-[0.3em] text-neutral-400 font-semibold">
            Made with love and patience for your inner beauty.
          </p>
          <div className="text-[10px] text-neutral-300 uppercase tracking-widest flex items-center justify-center space-x-6">
            <span>&copy; 2024 AURABEADS CHARM</span>
            <span>All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
