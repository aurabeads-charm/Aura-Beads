import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext.jsx';
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
