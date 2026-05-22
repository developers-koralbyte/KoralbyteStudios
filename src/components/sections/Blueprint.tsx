import React from "react";
import { motion } from "motion/react";

export function Blueprint() {
  const steps = [
    {
      id: "01",
      title: "DISCOVER",
      desc: "We start by getting under the skin of your business. Through a structured brand intake and honest conversations, we learn who you are, who you're competing against, and where the real opportunity lies in your market."
    },
    {
      id: "02",
      title: "DEFINE",
      desc: "With that research in hand, we figure out exactly what makes you different and why customers should choose you over everyone else. This is where your brand gets its name, its personality, and its position in the market."
    },
    {
      id: "03",
      title: "DESIGN",
      desc: "Now we make it visual. We translate your strategy into a complete brand identity that includes; logo, colours, typography, packaging, and everything your audience will see. Every design decision is intentional, not decorative."
    },
    {
      id: "04",
      title: "DOCUMENT",
      desc: "We put your growth plan on paper. You get a full business plan, a channel-by-channel marketing roadmap, and clear KPIs so you know exactly what to do, where to spend, and how to measure success."
    },
    {
      id: "05",
      title: "DELIVER",
      desc: "Everything gets handed over clean and complete. We walk you through your brand guidelines, transfer all files, and give you a launch brief so your team can hit the ground running with zero confusion."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 relative z-20 bg-bauble-bg bg-pattern-abstract overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 relative z-10">
        
        {/* Left Column - Sticky Header */}
        <div className="lg:w-1/3">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="sticky top-24 md:top-32 space-y-6 transform-gpu"
          >
            <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] text-white uppercase">
              <span className="text-bauble-blue italic">→</span> METHODOLOGY
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              The Koralbyte <br className="hidden md:block"/>Brand Blueprint
            </h2>
            <p className="text-white/90 font-sans text-xs md:text-sm leading-relaxed">
              How We Build Brands That Win
            </p>

            {/* Structured Visual */}
            <div className="mt-8 mb-8 border border-white/30 bg-black/20 p-6">
               <div className="w-full aspect-[4/3] flex items-end gap-2 border-l border-b border-white/40 pb-2 pl-2 relative">
                 {/* Blueprint Grid Lines inside */}
                 <div className="absolute inset-0 bg-[radial-gradient(var(--color-bauble-blue)_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                 
                 <div className="flex-1 bg-white/20 border-t border-white/40 h-[20%] transition-all hover:bg-bauble-blue/40" />
                 <div className="flex-1 bg-white/20 border-t border-white/40 h-[40%] transition-all hover:bg-bauble-blue/40" />
                 <div className="flex-1 bg-white/20 border-t border-white/40 h-[60%] transition-all hover:bg-bauble-blue/40" />
                 <div className="flex-1 bg-white/20 border-t border-white/40 h-[80%] transition-all hover:bg-bauble-blue/40" />
                 <div className="flex-1 bg-bauble-blue border-t border-white shadow-[0_0_15px_rgba(105,104,172,0.5)] h-[100%]" />
               </div>
               <div className="flex justify-between text-[8px] font-mono mt-2 text-white/40 uppercase tracking-widest">
                  <span>Phase 1</span>
                  <span>Launch</span>
               </div>
            </div>

            <p className="text-white/40 font-sans text-xs leading-relaxed pt-6 border-t border-white/10">
              Every client engagement runs through our proprietary 5-phase methodology, Called The Koralbyte Brand Blueprint. This is what sets us apart.
            </p>
          </motion.div>
        </div>

        {/* Right Column - Steps */}
        <div className="lg:w-2/3 space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-12 md:pl-20 group cursor-default transform-gpu will-change-transform"
            >
              <div className="absolute left-0 top-0 text-xl md:text-2xl font-bold text-bauble-blue font-mono group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-500">
                {step.id}
              </div>
              {/* Only show vertical line on desktop for a cleaner mobile look */}
              {index !== steps.length - 1 && (
                 <div className="absolute left-[44px] top-10 bottom-[-64px] w-[1px] bg-white/10 hidden md:block group-hover:bg-bauble-blue/20 transition-colors duration-500" />
              )}
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-widest uppercase flex items-center gap-3 group-hover:text-bauble-blue transition-colors duration-500">
                  {step.title}
                  <div className="h-[1px] flex-1 bg-white/10 ml-4 group-hover:bg-bauble-blue/60 transition-all duration-700" />
                </h3>
                <p className="text-white/80 font-sans text-sm md:text-base leading-relaxed group-hover:text-white/80 transition-colors duration-500">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
