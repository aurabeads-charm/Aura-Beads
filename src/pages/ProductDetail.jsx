import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { motion } from 'motion/react';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const baseProduct = PRODUCTS.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(0);

  // Build a list of products for each image (main product + reference products)
  const imageProducts = useMemo(() => {
    if (!baseProduct) return [];
    
    const products = [baseProduct]; // First image is always the base product
    
    // For extra images, find the corresponding product based on image filename
    if (baseProduct.extraImages) {
      baseProduct.extraImages.forEach(extraImg => {
        // Extract the style number from the image filename (e.g., "6.jpg" -> find product with image "6.jpg")
        const matchingProduct = PRODUCTS.find(p => 
          p.categoryId === baseProduct.categoryId && 
          p.image === extraImg
        );
        if (matchingProduct) {
          products.push(matchingProduct);
        } else {
          // If no matching product found, use base product
          products.push(baseProduct);
        }
      });
    }
    
    return products;
  }, [baseProduct]);

  // Get the currently active product based on selected image
  const activeProduct = imageProducts[activeImage] || baseProduct;

  if (!baseProduct) {
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
          <li className="text-neutral-800 font-semibold">{activeProduct.name}</li>
        </ul>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-20 items-start">
        {/* Gallery */}
        <div className="space-y-4">
          <motion.div 
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full aspect-square bg-white rounded-sm overflow-hidden shadow-sm border border-neutral-100"
          >
            <img 
              src={baseProduct.images[activeImage]} 
              alt={activeProduct.name} 
              className="w-full h-full object-cover transition-opacity duration-500"
              loading="lazy"
            />
          </motion.div>
          {baseProduct.images.length > 1 && (
            <div className="flex gap-3 justify-start overflow-x-auto pb-2 no-scrollbar">
              {baseProduct.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`flex-shrink-0 w-16 h-16 rounded-sm overflow-hidden border-2 transition-all ${
                    activeImage === idx ? 'border-amber-600 shadow-md' : 'border-transparent opacity-60'
                  }`}
                >
                  <img src={img} alt={`${imageProducts[idx]?.name || baseProduct.name}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col">
          <div className="border-b border-neutral-100 pb-6 mb-6">
            <span className="text-amber-600 uppercase tracking-[0.3em] text-[10px] font-bold">{activeProduct.category}</span>
            <h1 className="text-3xl md:text-5xl font-serif text-neutral-800 mt-2 mb-3 leading-tight">{activeProduct.name}</h1>
            <p className="text-2xl text-neutral-900 font-semibold italic">₹{activeProduct.price.toLocaleString('en-IN')}</p>
          </div>

          <div className="space-y-6 flex-1">
            <div className="space-y-3">
              <h3 className="text-[10px] uppercase tracking-widest font-bold text-neutral-400">The Story</h3>
              <p className="text-neutral-600 leading-relaxed font-light text-sm md:text-base">{activeProduct.longDescription}</p>
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
                onClick={() => addToCart(activeProduct)}
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
          {PRODUCTS.filter(p => p.id !== activeProduct.id && p.category === activeProduct.category).slice(0, 4).map(p => (
            <div key={p.id}>
              <Link to={`/product/${p.id}`} className="block group">
                <div className="aspect-[4/5] bg-neutral-100 mb-3 overflow-hidden rounded-sm border border-neutral-50">
                  <img src={p.images[0]} className="w-full h-full object-cover transition-transform group-hover:scale-105" alt={p.name} loading="lazy" />
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
