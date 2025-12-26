import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-serif mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-amber-600 font-bold underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6 md:py-12">
      <nav className="mb-6 md:mb-8 overflow-x-auto whitespace-nowrap no-scrollbar">
        <ul className="flex items-center space-x-2 text-[8px] md:text-[10px] uppercase tracking-widest text-neutral-400">
          <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
          <li><span>/</span></li>
          <li><Link to="/shop" className="hover:text-amber-600">Shop</Link></li>
          <li><span>/</span></li>
          <li className="text-neutral-800 font-semibold truncate max-w-[150px]">{product.name}</li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-20 items-start">
        {/* Gallery */}
        <div className="space-y-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full aspect-square bg-white rounded-sm overflow-hidden shadow-sm border border-neutral-100"
          >
            <img 
              src={product.images[activeImage]} 
              alt={product.name} 
              className="w-full h-full object-cover transition-opacity duration-500"
            />
          </motion.div>
          {product.images.length > 1 && (
            <div className="flex gap-3 justify-start overflow-x-auto pb-2 no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-amber-600 shadow-md' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt={`${product.name} view ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="border-b border-neutral-100 pb-6 mb-6">
            <span className="text-amber-600 uppercase tracking-[0.3em] text-[10px] font-bold">{product.category}</span>
            <h1 className="text-3xl md:text-5xl font-serif text-neutral-800 mt-2 mb-3 leading-tight">{product.name}</h1>
            <p className="text-2xl text-neutral-900 font-semibold italic">₹{product.price.toLocaleString('en-IN')}</p>
          </div>

          <div className="space-y-6 flex-1">
            <div className="space-y-3">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">The Story</h3>
              <p className="text-neutral-600 leading-relaxed font-light text-sm md:text-base">{product.longDescription}</p>
            </div>

            <div className="py-4 space-y-3 border-y border-neutral-50">
              <div className="flex items-center text-[9px] text-neutral-500 uppercase tracking-widest gap-3">
                <div className="w-1 h-1 bg-amber-600 rounded-full" />
                Handcrafted Precision
              </div>
              <div className="flex items-center text-[9px] text-neutral-500 uppercase tracking-widest gap-3">
                <div className="w-1 h-1 bg-amber-600 rounded-full" />
                Non-Tarnish Materials
              </div>
            </div>

            <div className="sticky bottom-4 md:relative md:bottom-auto z-10">
              <button
                onClick={() => addToCart(product)}
                className="w-full bg-neutral-900 text-white py-5 font-bold uppercase tracking-[0.3em] text-[10px] md:text-xs shadow-2xl hover:bg-amber-600 transition-all active:scale-95"
              >
                Add to Shopping Bag
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related - Also 2 cols on mobile */}
      <section className="mt-16 md:mt-24 pt-12 border-t border-neutral-100">
        <h2 className="text-2xl md:text-3xl font-serif mb-8 text-center">Complete the Set</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
          {PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map(p => (
            <div key={p.id}>
              <Link to={`/product/${p.id}`} className="block group">
                <div className="aspect-[4/5] bg-neutral-100 mb-3 overflow-hidden rounded-sm border border-neutral-50">
                  <img src={p.images[0]} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={p.name} />
                </div>
                <h3 className="font-serif text-base line-clamp-1">{p.name}</h3>
                <p className="text-neutral-500 text-xs mt-1">₹{p.price.toLocaleString('en-IN')}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
