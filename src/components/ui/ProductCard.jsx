import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group relative bg-white overflow-hidden rounded-sm transition-all duration-500 border border-neutral-100 flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block overflow-hidden aspect-[4/5] relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
          loading="lazy"
        />
        {product.featured && (
          <span className="absolute top-2 left-2 md:top-4 md:left-4 bg-white/95 backdrop-blur px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] uppercase tracking-widest font-bold text-amber-700 shadow-sm">
            Top
          </span>
        )}
      </Link>
      
      <div className="p-3 md:p-5 flex flex-col flex-grow">
        <p className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-neutral-400 mb-1">{product.category}</p>
        <Link to={`/product/${product.id}`} className="block flex-grow">
          <h3 className="text-sm md:text-lg font-serif text-neutral-800 group-hover:text-amber-600 transition-colors line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="text-neutral-900 font-semibold mt-1 text-sm md:text-base">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
        
        <button
          onClick={() => addToCart(product)}
          className="mt-3 md:mt-4 w-full py-2 md:py-3 border border-neutral-200 text-neutral-800 text-[9px] md:text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white active:bg-neutral-900 active:text-white transition-all duration-300"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
