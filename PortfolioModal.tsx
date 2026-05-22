import React from "react";
import { motion } from "motion/react";

export function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 relative z-20 bg-bauble-bg bg-pattern-abstract overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-20 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 max-w-3xl transform-gpu"
        >
          <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] text-white uppercase">
            <span className="text-bauble-blue italic">→</span> THE KORALBYTE DIFFERENCE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Not a Vendor. Not a Freelancer. <br className="hidden md:block"/><span className="text-bauble-blue">Your In-House Brand Team.</span>
          </h2>
          <p className="text-white/90 text-base md:text-xl font-sans leading-relaxed">
            Most agencies take your brief and disappear. We embed ourselves in your brand, think like founders, and build like we have skin in the game. That's the Koralbyte difference.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Pillar 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="border border-white/10 p-6 sm:p-10 hover:border-bauble-blue/50 transition-all duration-500 group relative overflow-hidden bg-black/30 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(105,104,172,0.5)] transform-gpu will-change-transform"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-bauble-blue/10 rounded-full blur-[80px] group-hover:bg-bauble-blue/30 group-hover:scale-150 transition-all duration-700 will-change-transform" />
            <div className="relative z-10">
              <div className="text-[10px] tracking-[0.2em] font-bold text-bauble-blue mb-4 sm:mb-6 uppercase">Pillar 1</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Business & Marketing Strategy</h3>
              <p className="text-white/80 font-sans text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                Deep and strategic work that defines your market positioning, competitive advantage, go-to-market roadmap, and channel-specific marketing plan. We hand you a blueprint that removes all guesswork from growth.
              </p>
            </div>

            <div className="text-xs md:text-sm text-white/60 font-sans space-y-2 mt-8 relative z-10">
              <div className="flex items-center"><span className="text-bauble-blue mr-2 font-bold leading-none">→</span> Market Research</div>
              <div className="flex items-center"><span className="text-bauble-blue mr-2 font-bold leading-none">→</span> USP Development</div>
              <div className="flex items-center"><span className="text-bauble-blue mr-2 font-bold leading-none">→</span> Business Plans</div>
              <div className="flex items-center"><span className="text-bauble-blue mr-2 font-bold leading-none">→</span> Marketing Plans</div>
            </div>
          </motion.div>

          {/* Pillar 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="border border-white/10 p-6 sm:p-10 hover:border-bauble-blue/50 transition-all duration-500 group relative overflow-hidden bg-black/30 backdrop-blur-xl shadow-xl flex flex-col justify-between hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(105,104,172,0.5)] transform-gpu will-change-transform"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-bauble-blue/10 rounded-full blur-[80px] group-hover:bg-bauble-blue/30 group-hover:scale-150 transition-all duration-700 will-change-transform" />
            <div className="relative z-10">
              <div className="text-[10px] tracking-[0.2em] font-bold text-bauble-blue mb-4 sm:mb-6 uppercase">Pillar 2</div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Brand Identity Design</h3>
              <p className="text-white/80 font-sans text-xs sm:text-sm leading-relaxed mb-6 sm:mb-8">
                Complete visual brand identity system that makes your brand impossible to ignore. From logo to packaging to brand guidelines, everything chosen and curated to win.
              </p>
            </div>

            <div className="text-xs md:text-sm text-white/60 font-sans space-y-2 mt-8 relative z-10">
              <div className="flex items-center"><span className="text-bauble-blue mr-2 font-bold leading-none">→</span> Logo Design</div>
              <div className="flex items-center"><span className="text-bauble-blue mr-2 font-bold leading-none">→</span> Colour & Typography</div>
              <div className="flex items-center"><span className="text-bauble-blue mr-2 font-bold leading-none">→</span> Packaging</div>
              <div className="flex items-center"><span className="text-bauble-blue mr-2 font-bold leading-none">→</span> Brand Guidelines</div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
