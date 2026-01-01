import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider, useCart } from './context/CartContext.jsx';
import Navbar from './components/ui/Navbar.jsx';
import Footer from './components/ui/Footer.jsx';
import CartDrawer from './components/ui/CartDrawer.jsx';

// Lazy load page components for better performance
const Home = lazy(() => import('./pages/Home.jsx'));
const Shop = lazy(() => import('./pages/Shop.jsx'));
const ProductDetail = lazy(() => import('./pages/ProductDetail.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy.jsx'));
const ReturnsExchanges = lazy(() => import('./pages/ReturnsExchanges.jsx'));
const Category = lazy(() => import('./pages/Category.jsx'));

// Loading spinner component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FDFBF7]">
    <div className="flex flex-col items-center gap-4">
      <div className="w-12 h-12 border-4 border-amber-200 border-t-amber-600 rounded-full animate-spin"></div>
      <p className="text-stone-500 text-sm tracking-widest uppercase">Loading...</p>
    </div>
  </div>
);

// Toast notification component
const Toast = ({ show, message, productName, onClose }) => {
  if (!show) return null;
  
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
      <div className="bg-neutral-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 min-w-[280px]">
        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="font-semibold text-sm">{message}</p>
          {productName && <p className="text-neutral-400 text-xs mt-0.5 truncate max-w-[200px]">{productName}</p>}
        </div>
        <button 
          onClick={onClose}
          className="text-neutral-400 hover:text-white transition-colors ml-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translate(-50%, 20px); }
          to { opacity: 1; transform: translate(-50%, 0); }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();
  const { toast, hideToast } = useCart();
  
  // Pages that need top padding because they don't have a full-screen hero
  const needsPadding = !['/'].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar onOpenCart={() => setIsCartOpen(true)} />
      <main className={`flex-grow ${needsPadding ? 'pt-20 md:pt-28' : ''}`}>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/shipping-policy" element={<ShippingPolicy />} />
            <Route path="/returns-exchanges" element={<ReturnsExchanges />} />
            <Route path="/category/:categoryId" element={<Category />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      <Toast 
        show={toast.show} 
        message={toast.message} 
        productName={toast.productName} 
        onClose={hideToast} 
      />
    </div>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <AppContent />
      </Router>
    </CartProvider>
  );
};

export default App;
