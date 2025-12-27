import React from 'react';
import { useCart } from '../../context/CartContext';
import { CONTACT_INFO } from '../../constants';

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    // Constructing a rich, formatted message for the artisan
    const itemsText = cart.map(item => {
      const itemPriceFormatted = item.price.toLocaleString('en-IN');
      const subtotalFormatted = (item.price * item.quantity).toLocaleString('en-IN');
      
      return `✨ *${item.name}*%0A` +
             `Price: ₹${itemPriceFormatted}%0A` +
             `Quantity: ${item.quantity}%0A` +
             `Subtotal: ₹${subtotalFormatted}%0A` +
             `Image Ref: ${item.images[0]}`;
    }).join('%0A%0A──────────────%0A%0A');

    const grandTotalText = `*GRAND TOTAL: ₹${totalPrice.toLocaleString('en-IN')}*`;
    
    const header = `💎 *NEW ORDER - AURABEADS CHARM*%0A%0A`;
    const footer = `%0A%0A──────────────%0A%0APlease let me know the payment details to confirm my order. Thank you!`;
    
    const fullMessage = `${header}${itemsText}%0A%0A${grandTotalText}${footer}`;
    
    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${fullMessage}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div 
        className="absolute inset-0 bg-neutral-900/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-neutral-100">
          <h2 className="text-2xl font-serif text-neutral-800">Your Shopping Bag</h2>
          <button onClick={onClose} className="p-2 text-neutral-500 hover:text-neutral-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {cart.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-neutral-500 font-serif text-lg italic">Your bag is currently empty.</p>
              <button 
                onClick={onClose}
                className="mt-4 text-amber-600 font-semibold uppercase tracking-widest text-xs hover:underline"
              >
                Go Shop Our Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-24 h-24 flex-shrink-0 bg-neutral-100 rounded-sm overflow-hidden">
                  <img src={item.images[0]} alt={item.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-medium text-neutral-800">{item.name}</h3>
                    <p className="text-xs text-neutral-500 mt-1">{item.category}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-neutral-200 rounded-sm">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 py-1 text-neutral-500 hover:text-neutral-800"
                      >
                        -
                      </button>
                      <span className="px-3 text-xs font-medium">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 py-1 text-neutral-500 hover:text-neutral-800"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-sm font-semibold">₹{(item.price * item.quantity).toLocaleString('en-IN')}</p>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="text-neutral-400 hover:text-red-500 p-1 self-start"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 border-t border-neutral-100 bg-white">
            <div className="flex items-center justify-between mb-6">
              <span className="text-neutral-500 uppercase tracking-widest text-xs">Total Estimated</span>
              <span className="text-2xl font-serif text-neutral-900">₹{totalPrice.toLocaleString('en-IN')}</span>
            </div>
            
            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-neutral-900 text-white py-4 rounded-sm font-semibold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-neutral-800 transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order via WhatsApp
            </button>
            <p className="text-[10px] text-center text-neutral-400 mt-4 uppercase tracking-widest italic">
              Payment will be coordinated through messaging
            </p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default CartDrawer;
