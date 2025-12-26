import React from 'react';
import { Link } from 'react-router-dom';

const ShippingPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <nav className="mb-12">
        <ul className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-neutral-400">
          <li><Link to="/" className="hover:text-amber-600">Home</Link></li>
          <li><span>/</span></li>
          <li className="text-neutral-800 font-semibold">Shipping Policy</li>
        </ul>
      </nav>

      <header className="mb-16">
        <h1 className="text-5xl font-serif text-neutral-800 mb-6">Shipping Policy</h1>
        <p className="text-neutral-500 font-light italic">Last updated: May 2024</p>
      </header>

      <div className="prose prose-neutral max-w-none space-y-10 text-neutral-600 font-light leading-relaxed">
        <section>
          <h2 className="text-2xl font-serif text-neutral-800 mb-4 italic">Handcrafted Processing Time</h2>
          <p>
            Every piece at Aurabeads Charm is handmade with patience and precision. 
            Standard orders usually require <strong>3-5 business days</strong> for crafting and quality inspection 
            before being dispatched. Custom designs or peak holiday seasons may extend this period to 7-10 business days.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-neutral-800 mb-4 italic">Domestic Shipping (India)</h2>
          <p>
            We partner with reliable courier services including BlueDart, Delhivery, and Ecom Express to ensure your 
            treasures reach you safely.
          </p>
          <ul className="list-disc pl-5 space-y-2 mt-4">
            <li><strong>Standard Shipping:</strong> 5-7 business days across India. (₹49 or Free on orders above ₹1,999)</li>
            <li><strong>Express Shipping:</strong> 2-3 business days. (₹150)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-neutral-800 mb-4 italic">Tracking Your Aura</h2>
          <p>
            Once your order leaves our studio, you will receive a confirmation message via WhatsApp and Email 
            containing your unique tracking number. You can monitor your package's journey directly on our 
            partner courier's website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-serif text-neutral-800 mb-4 italic">Packaging & Handling</h2>
          <p>
            To minimize our environmental footprint while protecting your jewelry, we use recycled paper boxes 
            and soft cotton pouches. If your package arrives visibly damaged, please photograph the unopened 
            box and contact us immediately via WhatsApp.
          </p>
        </section>
      </div>

      <div className="mt-20 p-8 bg-amber-50 border border-amber-100 text-center rounded-sm">
        <h3 className="font-serif text-xl text-neutral-800 mb-2">Need it faster?</h3>
        <p className="text-sm text-neutral-600 mb-4">For urgent gift requests or same-day delivery in select cities, please contact our team.</p>
        <Link to="/contact" className="text-xs uppercase tracking-widest font-bold text-amber-700 hover:text-amber-800">
          Message Us on WhatsApp &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ShippingPolicy;
