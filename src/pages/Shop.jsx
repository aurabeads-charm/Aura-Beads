import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ui/ProductCard';
import { motion, AnimatePresence } from 'motion/react';

// Category names must match exactly with product.category values
const CATEGORIES = [
  'Anti Tarnish Bracelet',
  'Anti Tarnish Earrings', 
  'Anti Tarnish Necklace',
  'Anti Tarnish Rings',
  'Beads Bracelet',
  'Korean Earrings',
  'Unique Charm Necklace'
];

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category') || 'All';
    if (cat) setActiveCategory(cat);
  }, [searchParams]);

  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <header className="text-center mb-10 md:mb-16">
        <h1 className="text-4xl md:text-6xl font-serif text-neutral-800 mb-3">Our Collections</h1>
        <p className="text-neutral-500 max-w-xl mx-auto font-light text-sm md:text-base">
          Handmade jewelry designed with love and artisanal precision.
        </p>
      </header>

      {/* Filter Tabs - Stacked on Mobile, Horizontal on Desktop */}
      <div className="flex flex-col items-center md:flex-row md:flex-wrap md:justify-center gap-2 md:gap-4 mb-8 md:mb-12">
        <button
          onClick={() => handleCategoryChange('All')}
          className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
            activeCategory === 'All' 
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
              : 'bg-white border border-neutral-200 text-neutral-500 hover:border-amber-600'
          }`}
        >
          All
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => handleCategoryChange(cat)}
            className={`whitespace-nowrap px-6 py-2 rounded-full text-[10px] md:text-xs uppercase tracking-widest font-bold transition-all duration-300 ${
              activeCategory === cat 
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/20' 
                : 'bg-white border border-neutral-200 text-neutral-500 hover:border-amber-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid - 2 cols on mobile */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-8"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProducts.map(product => (
            <motion.div
              layout
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-neutral-500 font-serif text-xl">No products found.</p>
        </div>
      )}

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default Shop;
