"use client";
import React from "react";
import { motion } from "motion/react";

export const TestimonialsColumn = (props) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div 
                  className="p-8 rounded-2xl border border-neutral-100 bg-white/60 backdrop-blur-sm shadow-xl shadow-amber-900/5 max-w-xs w-full transition-all duration-300 hover:shadow-amber-900/10" 
                  key={i}
                >
                  <div className="text-neutral-600 font-light italic leading-relaxed text-sm">"{text}"</div>
                  <div className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500 border border-amber-100"
                    />
                    <div className="flex flex-col">
                      <div className="font-serif font-bold text-neutral-800 leading-none">{name}</div>
                      <div className="text-[10px] uppercase tracking-widest text-amber-600 mt-1 font-medium">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
