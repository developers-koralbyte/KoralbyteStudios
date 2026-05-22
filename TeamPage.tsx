import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Shield, Zap, Target } from "lucide-react";

export function AboutPage({ onNavigate }: { onNavigate?: (page: string, anchor?: string) => void }) {
  return (
    <div className="relative z-20 pt-16 md:pt-24 pb-20 md:pb-32 overflow-hidden">
      {/* Hero Section */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-20 md:mb-40 relative">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-8 md:pt-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left z-10 relative"
            >
               <div className="flex items-center justify-center lg:justify-start gap-3 text-[9px] tracking-[0.3em] text-white uppercase">
                 <span className="text-bauble-blue italic">→</span> ABOUT KORALBYTE
               </div>
               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                 Skin in the game. <br /> <span className="text-bauble-blue">Built to scale.</span>
               </h1>
               <p className="text-white/90 font-mono text-sm md:text-xl max-w-xl leading-relaxed mx-auto lg:mx-0">
                 We are the architects behind brands that refuse to blend in. Strategy-first, identity-driven, and obsessed with your ROI.
               </p>
               
               <div className="pt-4 flex flex-wrap justify-center lg:justify-start gap-4">
                  <button 
                    onClick={() => onNavigate?.("CONTACT")}
                    className="group flex items-center gap-3 bg-bauble-blue px-8 py-4 text-[10px] font-bold tracking-[0.2em] text-[#fcfcfc] btn-primary"
                  >
                    WORK WITH US <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
               </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="hidden lg:flex flex-1 justify-end relative z-10 perspective-1000"
            >
               <div className="relative w-[400px] h-[400px] transform-gpu hover:rotate-y-12 transition-all duration-1000">
                  {/* Decorative Geometric Elements */}
                  <div className="absolute inset-0 border border-white/40 rounded-full animate-[spin_20s_linear_infinite]" />
                  <div className="absolute inset-4 border border-bauble-blue/20 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                  
                  {/* Floating Data Nodes */}
                  <div className="absolute top-[20%] left-[20%] p-4 bg-black/40 border border-white/20 backdrop-blur-xl rounded-xl shadow-2xl animate-bounce" style={{ animationDuration: '3.5s' }}>
                    <div className="w-8 h-1.5 bg-bauble-blue/60 rounded-full mb-2" />
                    <div className="w-12 h-1 bg-white/40 rounded-full" />
                  </div>
                  
                  <div className="absolute bottom-[20%] right-[10%] p-5 bg-black/40 border border-white/10 backdrop-blur-xl rounded-xl shadow-[0_0_40px_rgba(105,104,172,0.3)] animate-bounce" style={{ animationDuration: '4.5s' }}>
                    <Zap className="w-5 h-5 text-bauble-blue mb-3" />
                    <div className="space-y-1.5">
                      <div className="w-16 h-1 bg-white/50 rounded-full" />
                      <div className="w-12 h-1 bg-white/10 rounded-full" />
                    </div>
                  </div>

                  {/* Central Glow Core */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-bauble-blue/40 blur-[80px] rounded-full animate-pulse" />
                  
                  {/* Brand Growth Chart Visual */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[40%] flex items-end gap-2 px-8">
                      <div className="flex-1 bg-black border-t border-white/40 h-[20%] animate-[grow_2s_ease-out_forwards]" />
                      <div className="flex-1 bg-white/10 border-t border-white/50 h-[45%] animate-[grow_2s_ease-out_0.2s_forwards]" />
                      <div className="flex-1 bg-bauble-blue/20 border-t border-bauble-blue/40 h-[70%] animate-[grow_2s_ease-out_0.4s_forwards] relative shadow-[0_0_20px_rgba(105,104,172,1)]">
                         <div className="absolute top-0 left-0 right-0 h-1 bg-bauble-blue shadow-[0_0_10px_rgba(105,104,172,0.8)]" />
                      </div>
                      <div className="flex-1 bg-bauble-blue/40 border-t border-bauble-blue/60 h-[100%] animate-[grow_2s_ease-out_0.6s_forwards] relative shadow-[0_0_30px_rgba(105,104,172,0.8)]">
                         <div className="absolute top-0 left-0 right-0 h-1 bg-bauble-blue shadow-[0_0_15px_rgba(105,104,172,1)]" />
                      </div>
                    </div>
                  </div>
               </div>
            </motion.div>
         </div>
         <div className="absolute top-1/2 left-1/2 md:left-[80%] w-[500px] h-[500px] bg-bauble-blue/25 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none" />
      </section>

      {/* Grid Story Section */}
      <section className="px-5 md:px-10 py-20 md:py-32 relative">
        <div className="absolute inset-0 bg-black skew-y-1 border-y border-white/30" />
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-black/10 border border-white/10 shadow-inner p-1 md:p-3 relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-bauble-blue/20 via-transparent to-transparent opacity-50 group-hover:opacity-80 transition-opacity" />
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
              alt="Our Story" 
              className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 border border-white/10 backdrop-blur-2xl bg-black/30 p-6 flex flex-col justify-between hidden md:flex">
              <div className="text-bauble-blue text-xs tracking-widest font-bold">EST.</div>
              <div className="text-4xl font-bold text-white tracking-tighter italic">2026</div>
            </div>
          </motion.div>

          <div className="space-y-10 md:space-y-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">We build what <span className="text-bauble-blue italic">actually</span> works.</h2>
              <p className="text-white/80 font-sans text-sm md:text-lg leading-relaxed">
                Koralbyte was born out of frustration. We saw brilliant founders with world-changing products getting ignored because they lacked the visual authority and strategic narrative to compete with the giants.
              </p>
              <p className="text-white/80 font-sans text-sm md:text-lg leading-relaxed">
                We decided to bridge that gap. We aren't just designers; we are brand architects. We combine deep market intelligence with high-fidelity creative to build brands that are investor-ready from day one.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-8 md:gap-12">
               <div className="space-y-2">
                 <div className="text-3xl font-bold text-white tracking-tighter">42+</div>
                 <div className="text-[10px] tracking-[0.2em] text-white/70 uppercase">Projects Launched</div>
               </div>
               <div className="space-y-2">
                 <div className="text-3xl font-bold text-white tracking-tighter">14</div>
                 <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase">Clients Partnered</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Section */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto py-24 md:py-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 space-y-4"
        >

          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white">How we think.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              title: "Outcomes Over Output", 
              desc: "We don't just deliver files. We deliver results that move the needle. If it doesn't solve a business problem, we don't build it.",
              icon: Target
            },
            { 
              title: "Radical Candor", 
              desc: "We tell you what you need to hear, not what you want to hear. Honest audits and transparent feedback are non-negotiable.",
              icon: Shield
            },
            { 
              title: "Architectural Precision", 
              desc: "Every design choice and strategic move is made with intention. We build brand systems, not just pretty pictures.",
              icon: Zap
            }
          ].map((val, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-white/10 bg-black/30 backdrop-blur-2xl shadow-xl p-8 md:p-12 hover:border-bauble-blue/60 hover:bg-black transition-all duration-500 group relative overflow-hidden hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(105,104,172,0.5)]"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-bauble-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="mb-8 p-4 bg-bauble-blue/10 border border-bauble-blue/20 w-fit rounded-xl group-hover:scale-110 transition-transform">
                <val.icon className="w-6 h-6 text-bauble-blue" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-bauble-blue transition-colors uppercase tracking-tight">
                {val.title}
              </h3>
              <p className="text-white/40 font-sans text-sm md:text-base leading-relaxed">
                {val.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTA Block */}
      <section className="px-5 md:px-10 py-20 md:py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-bauble-blue/5 blur-[120px] rounded-full animate-pulse z-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight"
          >
            Stop blending in. <br /> <span className="text-bauble-blue">Start winning.</span>
          </motion.h2>
          
          <div className="pt-4">
             <button 
              onClick={() => onNavigate?.("CONTACT")}
              className="group inline-flex items-center gap-4 bg-white px-10 py-5 text-[12px] font-bold tracking-[0.2em] text-bauble-bg hover:bg-bauble-blue hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(17,17,17,0.5)]"
            >
              LET'S BUILD YOUR BRAND <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

