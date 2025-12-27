import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, getImagePath } from '../constants';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  const instaPosts = [
    getImagePath('images/products/anti-tarnish-bracelet/1.jpg'),
    getImagePath('images/products/korean-earrings/1.jpg'),
    getImagePath('images/products/anti-tarnish-necklace/1.jpg'),
    getImagePath('images/products/unique-charm-necklace/1.jpg'),
    getImagePath('images/products/beads-bracelet/11.jpg'),
    getImagePath('images/products/anti-tarnish-rings/1.jpg')
  ];

  return (
    <div className="bg-[#FDFBF7] overflow-hidden">
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={getImagePath('videos/about-hero.mp4')} type="video/mp4" />
          </video>
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-[#FDFBF7]/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FDFBF7]" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.span initial={{ opacity: 0, letterSpacing: '0.1em' }} animate={{ opacity: 1, letterSpacing: '0.5em' }} transition={{ duration: 1 }} className="text-amber-600 uppercase text-[10px] font-bold block mb-4">Our Heritage</motion.span>
          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-neutral-800 tracking-tight">The Art of the <span className="italic">Aura</span></motion.h1>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">
          {/* Left: Content Side with beige background */}
          <div className="bg-[#D4C4B5] text-stone-800 flex items-center py-12 px-6 md:py-16 md:px-8 lg:py-24 lg:px-16 order-2 lg:order-1">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-xl"
            >
              <span className="text-amber-700 uppercase tracking-[0.4em] text-[10px] font-semibold">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-4 mb-6 md:mb-8 leading-[1.1] text-stone-800">
                Crafted with <span className="italic text-amber-700">Intention</span>
              </h2>
              <p className="text-stone-600 text-base md:text-lg font-light leading-relaxed mb-12">
                We believe jewelry should be more than adornment—it should be an extension of your inner light. Each piece is handcrafted to enhance your natural aura.
              </p>

              {/* Feature List */}
              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="flex gap-6 group"
                >
                  <span className="text-amber-600 font-serif text-3xl font-light">01</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-stone-800 group-hover:text-amber-700 transition-colors">Eternal Materials</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">Non-tarnish silver, genuine crystals, and ethically sourced gemstones that last forever.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex gap-6 group"
                >
                  <span className="text-amber-600 font-serif text-3xl font-light">02</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-stone-800 group-hover:text-amber-700 transition-colors">Artisan Touch</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">Each bead hand-placed, each chain hand-polished with meticulous attention to detail.</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex gap-6 group"
                >
                  <span className="text-amber-600 font-serif text-3xl font-light">03</span>
                  <div>
                    <h3 className="text-xl font-medium mb-2 text-stone-800 group-hover:text-amber-700 transition-colors">Accessible Luxury</h3>
                    <p className="text-stone-600 text-sm leading-relaxed">Premium aesthetics at thoughtful prices—because beauty is a universal birthright.</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right: Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[50vh] lg:h-auto order-1 lg:order-2"
          >
            <img 
              src={getImagePath('images/hero/about-img1.jpg')} 
              alt="Artisan crafting jewelry" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-stone-900/20" />
            
            {/* Floating quote card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="absolute bottom-8 right-8 left-8 lg:bottom-12 lg:right-12 lg:left-auto lg:max-w-sm bg-white/95 backdrop-blur-sm p-8 shadow-2xl"
            >
              <p className="font-serif text-lg md:text-xl text-stone-700 italic leading-relaxed">
                "Every piece tells a story of patience, precision, and passion."
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-10 h-[1px] bg-amber-500" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber-700 font-semibold">Our Promise</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="bg-[#D4C4B5] py-24">
        <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp}><div className="relative aspect-[4/5] md:aspect-auto"><img src={getImagePath('images/hero/about-img2.jpg')} className="rounded-sm shadow-2xl relative z-10 w-full h-full object-cover" alt="Jewelry making" /><div className="absolute -bottom-6 -right-6 w-full h-full border border-amber-200 z-0" /></div></motion.div>
          <motion.div {...fadeInUp} className="space-y-8">
            <span className="text-amber-600 uppercase tracking-[0.3em] text-[10px] font-bold">The Beginning</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 leading-tight">Born from a Whisper <br /> of Light & Stone</h2>
            <div className="w-12 h-px bg-amber-400" />
            <p className="text-neutral-600 font-light leading-relaxed text-lg italic">"We didn't start in a factory. We started in a sun-drenched studio where the morning light hit a collection of raw crystals."</p>
            <p className="text-neutral-500 font-light leading-relaxed">Aurabeads Charm was founded on the belief that jewelry shouldn't just be an accessory—it should be a reflection of your inner energy.</p>
          </motion.div>
        </div>
        </div>
      </section>

      <section className="bg-neutral-900 py-32 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"><div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-amber-400 blur-[100px] -translate-x-1/2 -translate-y-1/2" /></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 italic">"Patience is the secret ingredient in every bead."</h2>
            <p className="text-neutral-400 uppercase tracking-[0.4em] text-xs font-medium">Handcrafted with intention</p>
          </motion.div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeInUp} className="order-2 lg:order-1 space-y-8">
            <span className="text-amber-600 uppercase tracking-[0.3em] text-[10px] font-bold">The Craftsmanship</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 leading-tight">One Bead at a Time, <br /> Forever Yours</h2>
            <div className="w-12 h-px bg-amber-400" />
            <p className="text-neutral-500 font-light leading-relaxed">Our process is intentionally slow. We use premium non-tarnish silver, 24k gold plating, and ethical gemstones.</p>
          </motion.div>
          <motion.div {...fadeInUp} className="order-1 lg:order-2"><div className="relative aspect-[4/5] md:aspect-auto"><img src={getImagePath('images/hero/about-img3.jpg')} className="rounded-sm shadow-2xl relative z-10 w-full h-full object-cover" alt="Jewelry design" /><div className="absolute -top-6 -left-6 w-full h-full border border-amber-200 z-0" /></div></motion.div>
        </div>
      </section>

      <section className="py-24 border-t border-beige-100">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="mb-12">
            <span className="text-amber-600 uppercase tracking-[0.4em] text-[10px] font-bold block mb-4">Social Aesthetic</span>
            <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 mb-2">Follow the Journey</h2>
            <a href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="text-amber-600 font-medium tracking-widest text-xs uppercase hover:underline">{CONTACT_INFO.instagram}</a>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
            {instaPosts.map((url, idx) => (<motion.a key={idx} href={`https://instagram.com/${CONTACT_INFO.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} className="relative group aspect-square overflow-hidden bg-neutral-100 block"><img src={url} alt={`Instagram post ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></motion.a>))}
          </div>
        </div>
      </section>

      <section className="bg-beige-50 py-24 border-t border-beige-200">
        <div className="container mx-auto px-4 text-center">
          <motion.div {...fadeInUp} className="max-w-2xl mx-auto space-y-8">
            <h3 className="text-4xl font-serif text-neutral-800 italic">Ready to find your piece?</h3>
            <p className="text-neutral-500 font-light">Explore our latest collections and find the charm that speaks to your aura.</p>
            <div className="pt-4"><Link to="/shop" className="inline-block px-12 py-5 bg-neutral-900 text-white font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-amber-600 transition-all duration-500">Shop the Collections</Link></div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
