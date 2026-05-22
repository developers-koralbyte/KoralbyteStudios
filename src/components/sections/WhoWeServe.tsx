import React from "react";
import { motion } from "motion/react";
import { Lightbulb, TrendingUp, ShoppingCart, Coffee } from "lucide-react";

export function WhoWeServe() {
  const audiences = [
    {
      title: "Idea-Stage Founders",
      desc: "You have a product concept and the drive to build something great. We take you from idea to investable, launchable Brand that includes strategy, identity, and everything in between.",
      fit: "The Launchpad Package",
      icon: <Lightbulb className="w-8 h-8 text-bauble-blue" />
    },
    {
      title: "Growing SMEs",
      desc: "You're running a real business but growth has stalled. Maybe your brand looks outdated, your marketing isn't converting, or you've never had a proper business strategy to begin with. We dig into all three. Whether the gap is in your positioning, your visual identity, or the plan behind it all, we find what's holding you back and fix it so you can re-enter the market with confidence and a clear path forward.",
      fit: "Brand Audit + Identity Builder/Strategy Accelerator (The gap will be identified in the Brand Audit)",
      icon: <TrendingUp className="w-8 h-8 text-bauble-blue" />
    },
    {
      title: "E-Commerce Brands",
      desc: "You've got a product and a storefront but traffic isn't converting, your brand blends in with everyone else, and your ad spend keeps climbing without the returns to match. We fix the fundamentals. From packaging that stops the scroll to a brand story that builds repeat customers, and a performance marketing strategy that actually pays back. We make sure every touchpoint works harder for your business.",
      fit: "The Growth Engine + Identity Builder",
      icon: <ShoppingCart className="w-8 h-8 text-bauble-blue" />
    },
    {
      title: "F&B & Consumer Goods",
      desc: "In food and consumer goods, the shelf, either physical or digital, is brutal. Customers make split-second decisions based on how your product looks and what your brand says about them. We bring together cultural intelligence, category research, and world-class design to build F&B and consumer brands that earn trust instantly, stand out in crowded markets, and give people a reason to keep coming back.",
      fit: "Identity Builder + Creative Engine",
      icon: <Coffee className="w-8 h-8 text-bauble-blue" />
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 relative z-20 bg-black bg-pattern-lines border-y border-white/40 overflow-hidden">
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
            <span className="text-bauble-blue italic">→</span> WHO WE SERVE
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            Built for Founders and <br className="hidden md:block"/>Brands Ready to Win
          </h2>
          <p className="text-white/90 font-mono text-xs md:text-sm uppercase tracking-widest leading-relaxed">
            We work with ambitious businesses at every stage, from first idea to full-scale growth.
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12 md:gap-y-16">
          {audiences.map((aud, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col items-start border border-white/10 bg-black/30 backdrop-blur-xl shadow-xl p-8 hover:border-bauble-blue/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(105,104,172,0.5)] group overflow-hidden transform-gpu safari-optimization"
            >
              <div className="w-16 h-16 rounded-2xl bg-bauble-blue/10 flex items-center justify-center border border-bauble-blue/20 mb-8 group-hover:bg-bauble-blue/20 group-hover:border-bauble-blue/40 transition-all duration-500 group-hover:scale-110">
                {aud.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white border-b border-white/10 pb-6 mb-6 w-full group-hover:border-bauble-blue/30 group-hover:text-bauble-blue transition-all duration-500">
                {aud.title}
              </h3>
              <p className="text-white/80 font-sans text-sm leading-relaxed flex-1 mb-6 group-hover:text-white/80 transition-colors duration-500">
                {aud.desc}
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-bauble-blue/5 border border-bauble-blue/20 text-[10px] tracking-[0.1em] text-bauble-blue font-mono font-bold mt-auto leading-relaxed group-hover:bg-bauble-blue/10 transition-all duration-500">
                <span className="text-white/40">Best fit:</span> {aud.fit}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
