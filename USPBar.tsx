import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2, FileSearch } from "lucide-react";

export function LeadMagnet({ onNavigate }: { onNavigate?: (page: string, anchor?: string) => void }) {
  return (
    <section className="py-20 md:py-32 px-5 md:px-10 relative z-20 bg-black bg-pattern-lines overflow-hidden border-t border-white/40">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20 relative z-10">
        
        {/* Left visually representing an Audit Document */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center group/report transform-gpu"
        >
           <div className="relative w-full max-w-sm safari-optimization">
             <div className="absolute inset-0 bg-bauble-blue/40 blur-3xl rounded-full group-hover/report:bg-bauble-blue/40 transition-all duration-700" />
             <div className="bg-black/30 backdrop-blur-xl border border-white/10 rounded-xl p-8 relative shadow-2xl skew-y-3 -rotate-3 transition-all group-hover/report:rotate-0 group-hover/report:skew-y-0 group-hover/report:scale-105 duration-700 transform-gpu will-change-transform safari-optimization">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/5">
                   <div className="text-bauble-blue font-bold font-mono tracking-widest text-xs group-hover/report:text-white transition-colors">AUDIT_REPORT.pdf</div>
                   <FileSearch className="w-5 h-5 text-white group-hover/report:text-bauble-blue transition-colors" />
                </div>
                <div className="space-y-4">
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-bauble-blue group-hover/report:scale-125 transition-transform" />
                      <div className="h-2 w-3/4 bg-white/10 rounded group-hover/report:bg-white/20 transition-colors" />
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-bauble-blue group-hover/report:scale-125 transition-transform delay-75" />
                      <div className="h-2 w-1/2 bg-white/10 rounded group-hover/report:bg-white/20 transition-colors" />
                   </div>
                   <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-bauble-blue/30 group-hover/report:text-bauble-blue group-hover/report:scale-125 transition-transform delay-150" />
                      <div className="h-2 w-2/3 bg-black rounded group-hover/report:bg-white/20 transition-colors" />
                   </div>
                   <div className="pt-6">
                      <div className="h-24 w-full border border-white/10 bg-white/5 flex items-end gap-2 p-2 group-hover/report:border-bauble-blue/30 transition-colors">
                         <div className="flex-1 bg-white/20 h-[30%] group-hover/report:h-[40%] transition-all duration-700" />
                         <div className="flex-1 bg-white/30 h-[50%] group-hover/report:h-[65%] transition-all duration-700 delay-75" />
                         <div className="flex-1 bg-white/40 h-[70%] group-hover/report:h-[85%] transition-all duration-700 delay-150" />
                         <div className="flex-1 bg-bauble-blue h-[100%] shadow-[0_0_15px_rgba(105,104,172,0.5)]" />
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </motion.div>

        {/* Right side Text */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 text-left space-y-8 transform-gpu"
        >
          
          <div className="space-y-4 md:space-y-6 text-left">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
              Not Sure Where to Start?
            </h2>
            <p className="text-white/90 font-sans text-xs sm:text-sm md:text-base leading-relaxed">
              Get a <span className="text-white font-bold">Koralbyte Brand Audit</span>, a comprehensive, honest review of your brand's positioning, visual identity, digital presence, marketing performance, and competitive standing in the SEA market.
            </p>
          </div>

          <div className="text-left font-mono text-[10px] md:text-[11px] text-white/80 space-y-4 border border-white/10 p-6 md:p-8 bg-black">
            <div className="flex items-start md:items-center gap-3">
              <div className="w-1.5 h-1.5 bg-bauble-blue rounded-full mt-1.5 md:mt-0 flex-shrink-0" />
              Delivered in 5-7 business days
            </div>
            <div className="flex items-start md:items-center gap-3">
              <div className="w-1.5 h-1.5 bg-bauble-blue rounded-full mt-1.5 md:mt-0 flex-shrink-0" />
              Prioritised recommendations + path to the right package
            </div>
          </div>

          <div className="space-y-4 pt-4 flex flex-col items-start">
            <div className="text-[10px] uppercase tracking-[0.2em] text-green-500 font-bold text-left">
              Low-risk entry point, starting from USD 170
            </div>
            <button 
              onClick={() => {
                if (onNavigate) {
                  onNavigate("BRAND AUDIT");
                  window.scrollTo(0, 0);
                }
              }}
              className="group inline-flex items-center gap-3 bg-bauble-blue px-6 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-[12px] font-bold tracking-[0.2em] text-[#fcfcfc] hover:bg-white/20 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              REQUEST BRAND AUDIT <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
