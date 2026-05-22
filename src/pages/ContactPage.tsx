import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ContactForm } from "../components/ui/ContactForm";

export function ContactPage() {
  return (
    <div className="relative z-20 pt-16 md:pt-24 pb-20 md:pb-32">
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-16 md:mb-24 relative">
         <div className="flex flex-col md:flex-row items-center gap-12 pt-8 md:pt-16">
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10 relative">

               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight md:leading-[1.1]">
                 Let's talk about <br className="hidden md:block"/> <span className="text-bauble-blue">your next move.</span>
               </h1>
            </div>
            
            <div className="hidden lg:flex flex-1 justify-end relative z-10 perspective-1000">
               <div className="relative w-[500px] h-[500px] transform-gpu hover:scale-105 transition-all duration-1000">
                  {/* Huge background glow for the whole visual area */}
                  <div className="absolute inset-0 bg-bauble-blue/30 blur-[120px] rounded-full animate-pulse" />
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-[320px] h-[220px] transform-gpu hover:-rotate-y-12 transition-all duration-700">
                      <div className="absolute inset-0 bg-[radial-gradient(var(--color-bauble-blue)_2px,transparent_2px)] [background-size:24px:24px] opacity-30 flex items-center justify-center">
                         <div className="w-[300px] h-[220px] border border-bauble-blue/60 bg-bauble-bg/80 backdrop-blur-xl relative overflow-hidden group shadow-[0_0_100px_rgba(105,104,172,1)] hover:shadow-[0_0_150px_rgba(105,104,172,0.8)] transition-all duration-700">
                            {/* Envelope Flap */}
                            <motion.div 
                              animate={{ rotateX: [0, 180, 180, 0] }}
                              transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                repeatDelay: 1,
                                times: [0, 0.2, 0.8, 1] 
                              }}
                              className="absolute top-0 left-0 w-full h-full border-t-2 border-bauble-blue/50 origin-top transform-gpu z-30" 
                              style={{ clipPath: 'polygon(0 0, 50% 50%, 100% 0)' }} 
                            />
                            {/* Envelope Body Overlay */}
                            <div className="absolute inset-0 border-l-2 border-r-2 border-b-2 border-bauble-blue/50 z-30" />
                            <div className="absolute inset-0 border-t-2 border-bauble-blue/20 z-30" style={{ clipPath: 'polygon(0 100%, 50% 50%, 100% 100%)' }} />
                            
                            {/* Letter Content - much brighter now */}
                            <motion.div 
                              animate={{ translateY: ["20%", "-60%", "-60%", "20%"] }}
                              transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                repeatDelay: 1,
                                times: [0.1, 0.4, 0.7, 1] 
                              }}
                              className="absolute top-[10%] left-[5%] right-[5%] h-[110%] bg-white border-2 border-bauble-blue/20 z-20 p-6 flex flex-col gap-4 shadow-2xl"
                            >
                               <div className="w-1/2 h-2 bg-bauble-blue/60 rounded-full" />
                               <div className="space-y-2">
                                 <div className="w-full h-1.5 bg-bauble-bg/10 rounded-full" />
                                 <div className="w-full h-1.5 bg-bauble-bg/10 rounded-full" />
                                 <div className="w-3/4 h-1.5 bg-bauble-bg/10 rounded-full" />
                               </div>
                               <div className="mt-auto flex justify-between items-end">
                                 <div className="w-12 h-12 rounded bg-bauble-blue/5 border border-bauble-blue/10 flex items-center justify-center">
                                   <div className="w-6 h-1 bg-bauble-blue/20 rounded-full" />
                                 </div>
                                 <div className="w-12 h-12 rounded-full bg-bauble-blue/20 border border-bauble-blue/40 flex items-center justify-center animate-bounce">
                                   <ArrowUpRight className="w-5 h-5 text-bauble-blue" />
                                 </div>
                               </div>
                            </motion.div>

                            {/* Internal Glow */}
                            <motion.div 
                              animate={{ opacity: [0, 0.4, 0.4, 0] }}
                              transition={{ 
                                duration: 5, 
                                repeat: Infinity, 
                                repeatDelay: 1,
                                times: [0.1, 0.4, 0.7, 1] 
                              }}
                              className="absolute inset-0 bg-bauble-blue/40 pointer-events-none" 
                            />
                         </div>
                      </div>
                    </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 md:left-[80%] w-[600px] h-[600px] bg-bauble-blue/25 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none" />
      </section>

      <section className="px-5 md:px-10 max-w-3xl mx-auto">
        <ContactForm />
      </section>
    </div>
  );
}
