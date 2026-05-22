import React from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-16 md:py-24 px-5 md:px-10 relative z-20 bg-black bg-pattern-lines border-y border-white/40 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 md:space-y-6 max-w-2xl mx-auto transform-gpu"
        >

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            What Our Clients Say
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i, idx) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-black/30 backdrop-blur-xl border border-white/10 shadow-xl p-6 md:p-10 relative group hover:border-bauble-blue/30 transition-colors transform-gpu safari-optimization"
            >
              <div className="absolute top-4 right-6 text-6xl text-bauble-blue/10 font-serif leading-none group-hover:text-bauble-blue/20 transition-colors">"</div>
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-bauble-blue text-bauble-blue" />
                ))}
              </div>

              <p className="text-white/90 font-sans text-sm leading-relaxed mb-8 relative z-10 italic">
                {i === 1 ? "Koralbyte took us from a blank page to a fully investable brand in six weeks. The strategy was sharper than anything we expected at this price point." : (i === 2 ? "An absolute game-changer. Our visual identity now perfectly matches our ambition, and we are finally seeing the ROI on our marketing efforts we knew was possible." : "The team at Koralbyte exceeded all expectations. They understood our vision perfectly and executed with precision. Highly recommend for any startup.")}
              </p>
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 font-bold uppercase overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    {i === 1 ? "Ahmad Fariz" : (i === 2 ? "Jane Doe" : "Sarah Smith")}
                  </div>
                  <div className="text-bauble-blue font-mono text-[10px] tracking-[0.1em] uppercase">
                    Founder @ {i === 1 ? "NourishMY" : (i === 2 ? "TechBrand" : "ScaleUp Inc")}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
