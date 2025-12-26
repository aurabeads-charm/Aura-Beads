import React from 'react';
import { Link } from 'react-router-dom';

const ReturnsExchanges = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <nav className="mb-12">
        <ul className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-neutral-400">
          <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
          <li><span>/</span></li>
          <li className="text-neutral-800 font-semibold">Returns & Exchanges</li>
        </ul>
      </nav>

      <header className="mb-16">
        <h1 className="text-5xl font-serif text-neutral-800 mb-6">Returns & Exchanges</h1>
        <p className="text-neutral-500 font-light italic">Our commitment to your satisfaction.</p>
      </header>

      <div className="prose prose-neutral max-w-none space-y-10 text-neutral-600 font-light leading-relaxed">
        <section>
          <h2 className="text-2xl font-serif text-neutral-800 mb-4 italic">7-Day Return Policy</h2>
          <p>
            We take great pride in our craftsmanship. If you are not completely enchanted with your purchase, 
            you may request a return or exchange within <strong>7 days</strong> of delivery. 
            To be eligible, items must be in their original, unused condition and in the original Aurabeads 
            Charm packaging.
          </p>
        </section>

        <section className="p-6 border-l-4 border-amber-200 bg-neutral-50">
          <h2 className="text-xl font-serif text-neutral-800 mb-2 italic">Custom & Personalized Orders</h2>
          <p className="text-sm">
            Please note that custom-sized anklets, personalized charm combinations, and bespoke designs created 
            specifically for you are <strong>final sale</strong> and cannot be returned or exchanged unless 
            they arrive damaged or defective.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-neutral-800 mb-4 italic">How to Initiate a Return</h2>
          <ol className="list-decimal pl-5 space-y-4 mt-4">
            <li>
              <strong>Contact Us:</strong> Send a message to our WhatsApp support with your Order ID and a 
              clear photo of the item.
            </li>
            <li>
              <strong>Approval:</strong> Once approved, we will provide you with the return shipping address. 
              Currently, we do not offer free return shipping; the cost of return postage is the responsibility 
              of the customer.
            </li>
            <li>
              <strong>Inspection:</strong> Once received, our artisans will inspect the piece. This process 
              typically takes 2-3 business days.
            </li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-neutral-800 mb-4 italic">Refunds</h2>
          <p>
            Approved refunds will be processed via original payment mode or as store credit (Gift Card), 
            depending on your preference. Processing typically takes 5-7 business days to reflect in your 
            bank account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-neutral-800 mb-4 italic">Exchanges</h2>
          <p>
            If you'd like a different size or style, we recommend returning the original item for store 
            credit and placing a new order. This ensures the fastest turnaround for your new jewelry.
          </p>
        </section>
      </div>
    </div>
  );
};

export default ReturnsExchanges;
