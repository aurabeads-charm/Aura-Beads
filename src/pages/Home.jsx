import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ui/ProductCard';
import TestimonialsSection from '../components/ui/TestimonialsSection';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

const HERO_IMAGES = [
  "/images/hero/hero-1.jpg",
  "/images/hero/hero-2.jpg",
  "/images/hero/hero-3.jpg",
  "/images/hero/hero-4.jpg"
];

// Custom hook for subtle parallax effect based on scroll
const useParallax = (speed = 0.05) => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * speed);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);
  
  return offset;
};

const Home = () => {
  const { addToCart } = useCart();
  const featuredProducts = PRODUCTS.filter(p => p.featured).slice(0, 4);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000); // Slower transition for calm luxury feel
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <div className="space-y-12 md:space-y-20 pb-20 bg-[#FDFBF7]">
      {/* Premium Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#F5EFE6] via-[#EDE4DB] to-[#D4C4B5]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/images/hero/hero-2.jpg" 
            alt="" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE6]/70 via-transparent to-[#D4C4B5]/40" />
        </div>

        {/* Soft ambient background layers */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-100/30 blur-[120px]" />
          <div className="absolute bottom-[-30%] left-[-15%] w-[50%] h-[50%] rounded-full bg-rose-100/20 blur-[100px]" />
          <div className="absolute top-[30%] left-[20%] w-[30%] h-[30%] rounded-full bg-amber-50/40 blur-[80px]" />
        </div>

        {/* Main content container */}
        <div className="container mx-auto px-4 md:px-8 relative z-10 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[70vh]">
            
            {/* Left: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1 text-center lg:text-left space-y-8 -mt-4 md:mt-0"
            >
              <div className="space-y-4">
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="inline-block text-amber-800 uppercase tracking-[0.4em] text-[11px] font-bold drop-shadow-sm"
                >
                  Handcrafted Elegance
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="text-5xl md:text-6xl lg:text-7xl font-serif text-stone-900 leading-[1.1] tracking-tight font-bold drop-shadow-md"
                  style={{ textShadow: '1px 1px 2px rgba(255,255,255,0.8)' }}
                >
                  <span className="block">Timeless</span>
                  <span className="block italic text-amber-800">Treasures</span>
                </motion.h1>
              </div>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-black md:text-stone-700 text-base md:text-lg font-medium leading-relaxed max-w-md mx-auto lg:mx-0 drop-shadow-sm"
                style={{ textShadow: '0px 1px 2px rgba(255,255,255,0.9)' }}
              >
                Elevate every look with our exquisite jewelry. From delicate chains to statement pieces, each design adds sophistication to your style.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <Link 
                  to="/shop" 
                  className="px-8 py-4 bg-stone-800 text-white font-medium uppercase tracking-[0.2em] text-[11px] rounded-full hover:bg-amber-700 transition-all duration-500 text-center shadow-lg shadow-stone-800/20"
                >
                  Shop Collection
                </Link>
                <Link 
                  to="/about" 
                  className="px-8 py-4 bg-stone-800 text-white font-medium uppercase tracking-[0.2em] text-[11px] rounded-full hover:bg-amber-700 transition-all duration-500 text-center shadow-lg shadow-stone-800/20"
                >
                  Our Story
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Layered Floating Image Containers */}
            <div className="order-1 lg:order-2 relative h-[500px] md:h-[600px] lg:h-[700px]">
              {/* Background Layer - Largest, furthest back */}
              <motion.div 
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: useParallax(0.02) }}
                className="absolute top-[5%] right-[5%] w-[75%] h-[65%] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-stone-400/20"
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={`bg-${heroIndex}`}
                    src={HERO_IMAGES[heroIndex]}
                    alt="Luxury Jewelry" 
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent" />
              </motion.div>

              {/* Middle Layer */}
              <motion.div 
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: useParallax(0.04) }}
                className="absolute top-[35%] left-[0%] w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl shadow-stone-500/25 border-4 border-white/50"
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={`mid-${(heroIndex + 1) % HERO_IMAGES.length}`}
                    src={HERO_IMAGES[(heroIndex + 1) % HERO_IMAGES.length]}
                    alt="Artisanal Jewelry" 
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 2, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </motion.div>

              {/* Foreground Layer - Smallest, closest */}
              <motion.div 
                initial={{ opacity: 0, y: 100, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                style={{ y: useParallax(0.06) }}
                className="absolute bottom-[8%] right-[8%] w-[45%] h-[40%] rounded-[1.5rem] overflow-hidden shadow-2xl shadow-amber-900/20 border-4 border-white/70"
              >
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={`fg-${(heroIndex + 2) % HERO_IMAGES.length}`}
                    src={HERO_IMAGES[(heroIndex + 2) % HERO_IMAGES.length]}
                    alt="Premium Jewelry" 
                    initial={{ opacity: 0, scale: 1.15 }}
                    animate={{ opacity: 1, scale: 1.05 }}
                    exit={{ opacity: 0, scale: 1 }}
                    transition={{ duration: 2.5, ease: [0.4, 0, 0.2, 1] }}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
              </motion.div>

              {/* Decorative floating elements */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute top-[15%] left-[10%] w-16 h-16 rounded-full bg-amber-200/40 blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.4 }}
                className="absolute bottom-[25%] right-[60%] w-10 h-10 rounded-full bg-rose-200/30 blur-sm"
              />
            </div>
          </div>
        </div>

        {/* Subtle bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#F5EFE6] to-transparent" />
      </section>

      {/* Shop by Category Section */}
      <section className="bg-[#FDFBF7] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-amber-600 uppercase tracking-[0.4em] text-[10px] font-bold block mb-3">Browse Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 leading-tight">
              Shop by <span className="italic">Category</span>
            </h2>
            <p className="text-neutral-500 font-light mt-4 max-w-2xl mx-auto">
              Explore our handcrafted collections, each piece made with love and designed to enhance your natural beauty.
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {CATEGORIES.map((category) => (
              <Link 
                key={category.id} 
                to={`/category/${category.id}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg shadow-md hover:shadow-2xl transition-all duration-500"
              >
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-6 text-white text-center">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-serif mb-1 tracking-tight leading-tight">
                    {category.name}
                  </h3>
                  <p className="text-[10px] md:text-xs text-white/70 mb-3 line-clamp-2 hidden md:block">
                    {category.description}
                  </p>
                  <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    View Collection
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="bg-[#FAF9F6] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-amber-600 uppercase tracking-[0.4em] text-[10px] font-bold block mb-3">Our Collection</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-900 leading-tight">
              All <span className="italic">Products</span>
            </h2>
            <p className="text-neutral-500 font-light mt-4 max-w-2xl mx-auto">
              Discover our complete collection of handcrafted jewelry pieces.
            </p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection />
    </div>
  );
};

export default Home;
