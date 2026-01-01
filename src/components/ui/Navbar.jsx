import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ onOpenCart }) => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic for navbar appearance
  // Transparent + White Text only on Home Page when not scrolled
  const isTransparent = isHomePage && !isScrolled && !isMenuOpen;
  
  const navClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
    isTransparent 
      ? 'bg-transparent border-transparent py-6' 
      : 'bg-white/80 backdrop-blur-md border-b border-neutral-100 py-3 md:py-4 shadow-sm'
  }`;

  const textClasses = isTransparent ? 'text-white' : 'text-neutral-800';
  const accentClasses = isTransparent ? 'text-amber-200' : 'text-amber-600';
  const borderClasses = isTransparent ? 'bg-white' : 'bg-neutral-800';

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex flex-col items-center group">
            <span className={`text-xl md:text-2xl font-serif font-bold tracking-[0.25em] uppercase transition-colors duration-300 ${textClasses}`}>
              AURABEADS
            </span>
            <span className={`text-[8px] md:text-[9px] tracking-[0.5em] uppercase -mt-1 transition-colors duration-300 ${accentClasses}`}>
              Charm
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] font-bold uppercase tracking-[0.3em] transition-all duration-300 relative group ${
                  location.pathname === link.path ? accentClasses : `${textClasses} hover:${accentClasses}`
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 w-0 h-[1px] transition-all duration-300 group-hover:w-full ${isTransparent ? 'bg-white' : 'bg-amber-600'}`} />
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 md:space-x-6">
            <button 
              onClick={onOpenCart}
              className={`relative p-2 transition-colors duration-300 ${textClasses} hover:${accentClasses}`}
              aria-label="Open Cart"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {totalItems > 0 && (
                <span className={`absolute top-1 right-1 inline-flex items-center justify-center px-1.5 py-0.5 text-[8px] font-bold leading-none text-white bg-amber-600 rounded-full border ${isTransparent ? 'border-neutral-900' : 'border-white'}`}>
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 transition-colors duration-300 ${textClasses}`}
              aria-label="Toggle Menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-[1px] transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 translate-y-[7px]' : 'w-6'} ${borderClasses}`} />
                <span className={`h-[1px] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'} ${borderClasses}`} />
                <span className={`h-[1px] transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 -translate-y-[7px]' : 'w-5'} ${borderClasses}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-full left-0 right-0 bg-white border-t border-neutral-50 shadow-2xl overflow-hidden md:hidden"
          >
            <div className="py-8 px-6 space-y-2 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-4 text-xs font-bold uppercase tracking-[0.3em] transition-colors border-b border-neutral-50 last:border-none ${
                    location.pathname === link.path ? 'text-amber-600' : 'text-neutral-800'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-8 flex flex-col items-center gap-2">
                <span className="text-[9px] uppercase tracking-widest text-neutral-400 italic">Handcrafted with Pure Love <span className="text-amber-500">♥</span></span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
