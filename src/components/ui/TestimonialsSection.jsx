import React from "react";
import { TestimonialsColumn } from "./testimonials-columns-1.jsx";
import { motion } from "motion/react";

const testimonials = [
  {
    text: "The Invisible Crystal Chain is pure magic. It truly looks like the zircon is floating on my skin. I get compliments every single time I wear it!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Fashion Blogger",
  },
  {
    text: "The quality of these handmade pieces exceeded my expectations. The gold plating is rich and doesn't irritate my sensitive skin.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Bilal Ahmed",
    role: "Gift Connoisseur",
  },
  {
    text: "Ordered a rose quartz bracelet for my mother's birthday. The packaging was so elegant it was ready to gift straight out of the box!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Interior Designer",
  },
  {
    text: "Our business functions improved with a user-friendly design and positive customer feedback.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "Art Curator",
  },
  {
    text: "The Herringbone chain moves like liquid gold. It's my go-to piece for layering and feels incredibly high-end.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Creative Director",
  },
  {
    text: "I love that everything is affordable but feels like a luxury boutique purchase. The charm collection is addictive!",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "Lifestyle Stylist",
  },
  {
    text: "The attention to detail in the handmade beads is stunning. It's hard to find this level of craft at these prices.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Gallery Owner",
  },
  {
    text: "Directly messaged them on WhatsApp for a custom anklet, and the process was so seamless. Best customer service.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "Verified Buyer",
  },
  {
    text: "Each piece feels intentional. You can tell they care about the materials and the 'aura' of the person wearing them.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Product Designer",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsSection = () => {
  return (
    <section className="bg-transparent my-32 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto text-center"
        >
          <div className="flex justify-center mb-4">
            <div className="border border-amber-200 py-1 px-4 rounded-full text-[10px] uppercase tracking-[0.3em] font-bold text-amber-700 bg-amber-50">
              Community Love
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-serif text-neutral-800 tracking-tight">
            Loved by our <span className="italic">Aura Circle</span>
          </h2>
          <p className="mt-6 text-neutral-500 font-light leading-relaxed">
            Discover how our handcrafted jewelry is helping our community shine across the globe.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-16 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[640px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={22} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={28} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={25} />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
