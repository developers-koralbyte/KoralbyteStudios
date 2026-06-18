import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Mail, X } from "lucide-react";

export function TeamPage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  const teamMembers = [
    { 
      name: "Ibne", 
      role: "CEO", 
      bio: "Ibne started Koralbytes because he was tired of watching good businesses get sold expensive promises and handed nothing. Having built and exited multiple seven-figure brands, he built the agency he wished he'd had on the way up. If your idea is worth building, he knows how to make it real.",
      linkedinUrl: "https://www.linkedin.com/in/ibneshah/"
    },
    { 
      name: "Aniq", 
      role: "CMO", 
      bio: "Most agencies sell tactics and hope something sticks. Koralbyte doesn't. Aniq has lived every side of marketing. From zero followers to real distribution, eleven brands built and scaled. No vanity metrics, no guessing. Just the growth levers that actually move a business.",
      linkedinUrl: "https://www.linkedin.com/in/aniqjaved"
    },
    {
      name: "Michelle",
      role: "Marketing Advisor & Board Member",
      bio: "25 years building brands across hotels, theme parks, retail, and e-commerce. Michelle backs Koralbyte for the reason it exists, too many brands have a message and no one to make it land. If your brand has a story worth telling, she'll make sure it's told better than your competition's.",
      linkedinUrl: "https://www.linkedin.com/in/michelle-sonia-gregory-034a1616/"
    }
  ];

  return (
    <div className="relative z-20 pt-24 pb-32 overflow-hidden">
      {/* Header section with technical visual */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-24 md:mb-32 relative">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 pt-8 md:pt-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 md:space-y-8 text-center lg:text-left z-10 relative"
            >
               <div className="flex items-center justify-center lg:justify-start gap-3 text-[9px] tracking-[0.3em] text-white uppercase">
                 <span className="text-bauble-blue italic">→</span> OUR MISSION
               </div>
               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.05]">
                 To build brands that are <span className="text-bauble-blue">impossible to ignore</span> and positioned to dominate.
               </h1>
               <p className="text-white/80 font-mono text-sm md:text-lg max-w-xl leading-relaxed mx-auto lg:mx-0">
                 We embed ourselves in your brand, think like founders, and build like we have skin in the game. We are a concentrated unit of strategists. No fluff.
               </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="hidden lg:flex flex-1 justify-end relative z-10"
            >
               <div className="relative w-[400px] h-[400px]">
                  {/* Central Node Visual */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full border border-bauble-blue/30 bg-black/40 flex items-center justify-center shadow-[0_0_40px_rgba(105,104,172,0.3)] z-20">
                     <div className="w-12 h-12 rounded-full bg-bauble-blue/20 animate-pulse" />
                  </div>
                  
                  {/* Orbital Lines */}
                  <svg className="absolute inset-0 w-full h-full pb-0 pointer-events-none z-10" viewBox="0 0 400 400">
                     <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(105,104,172,0.8)" strokeWidth="1" />
                     <circle cx="200" cy="200" r="160" fill="none" stroke="rgba(105,104,172,0.05)" strokeWidth="1" strokeDasharray="2 10" />
                     
                     <motion.path 
                       d="M200 200 L120 100" 
                       stroke="rgba(17,17,17,0.7)" 
                       strokeWidth="1" 
                       strokeDasharray="4 4"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, repeat: Infinity }}
                     />
                     <motion.path 
                       d="M200 200 L300 120" 
                       stroke="rgba(105,104,172,0.3)" 
                       strokeWidth="1" 
                       strokeDasharray="4 4"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                     />
                     <motion.path 
                       d="M200 200 L110 300" 
                       stroke="rgba(255,255,255,0.2)" 
                       strokeWidth="1" 
                       strokeDasharray="4 4"
                       initial={{ pathLength: 0 }}
                       animate={{ pathLength: 1 }}
                       transition={{ duration: 2, delay: 1, repeat: Infinity }}
                     />
                  </svg>

                  {/* Floating Tech Nodes */}
                  <div className="absolute top-[80px] left-[100px] w-20 h-20 rounded-xl border border-white/10 bg-black/40 backdrop-blur-2xl shadow-xl flex items-center justify-center z-20 hover:border-bauble-blue hover:scale-110 transition-all cursor-crosshair">
                     <Linkedin className="w-6 h-6 text-white/80" />
                  </div>
                  <div className="absolute bottom-[80px] left-[120px] w-14 h-14 rounded-xl border border-white/10 bg-black/30 flex items-center justify-center z-20 hover:border-bauble-blue hover:scale-110 transition-all cursor-crosshair">
                     <Mail className="w-5 h-5 text-white/200" />
                  </div>
               </div>
            </motion.div>
         </div>
         <div className="absolute top-1/2 left-1/2 md:left-[80%] w-[600px] h-[600px] bg-bauble-blue/25 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none" />
      </section>

      {/* Team Section */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="flex flex-col lg:flex-row justify-center items-stretch gap-8 lg:gap-12">
          {teamMembers.map((member, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group cursor-default w-full lg:w-1/3 flex flex-col bg-black/40 backdrop-blur-md border border-white/10 p-8 md:p-10 hover:border-bauble-blue/50 hover:bg-black/60 transition-all duration-500 shadow-[0_0_0_rgba(105,104,172,0)] hover:shadow-[0_0_30px_rgba(105,104,172,0.6)] text-left relative overflow-hidden"
            >
              {/* Subtle visual glow accent on hover */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-bauble-blue/5 blur-3xl rounded-full group-hover:bg-bauble-blue/20 transition-all duration-500 pointer-events-none" />
              
              <div className="flex justify-between items-start mb-6 border-b border-white/5 pb-4">
                <div className="text-[10px] tracking-[0.2em] font-bold text-bauble-blue uppercase font-mono">
                  {member.role}
                </div>
                <a 
                  href={member.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 flex items-center justify-center hover:border-bauble-blue hover:text-bauble-blue hover:scale-110 transition-all text-white/80"
                  title={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
              <div className="space-y-4 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-bauble-blue group-hover:from-bauble-blue group-hover:to-white transition-all duration-500 tracking-tight mb-4">
                    {member.name}
                  </h3>
                  <p className="text-white/70 font-sans text-sm leading-relaxed mb-6">
                    {member.bio}
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-[10px] text-white/30 uppercase tracking-[0.2em] font-mono group-hover:text-bauble-blue/65 transition-colors mt-auto">
                  <span>Connect Profile</span>
                  <span className="transition-transform group-hover:translate-x-1 duration-300">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recruiter / Join Section */}
      <section className="relative px-5 md:px-10 py-20 md:py-32 bg-bauble-blue/5 border-y border-bauble-blue/10 overflow-hidden flex items-center justify-center min-h-[400px]">
        {/* Main Section Content */}
        <div className={`max-w-4xl mx-auto text-center space-y-6 md:space-y-8 relative z-10 transition-opacity duration-500 ${showPopup ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className="text-bauble-blue text-[9px] tracking-[0.4em] font-bold uppercase">Hiring</div>
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white italic">"Better as a collective."</h2>
          <p className="text-white/50 font-sans text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
            We are always looking for senior strategists and identity designers who are tired of the agency machine and want to build real brands with real outcomes.
          </p>
          <div className="pt-4">
             <button 
               onClick={() => setShowPopup(true)}
               className="text-[11px] font-bold tracking-[0.2em] text-white border-b-2 border-bauble-blue pb-1 hover:text-bauble-blue transition-colors"
             >
               VIEW OPEN POSITIONS →
             </button>
          </div>
        </div>
      </section>

      {/* Popup modal */}
      {showPopup && createPortal(
        <div 
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-white/75 backdrop-blur-md p-4 md:p-6 cursor-pointer"
          style={{ animation: 'fadeIn 0.25s ease-out forwards' }}
        >
          {/* Keyframe styled component for smooth animation */}
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes scaleUp {
              from { transform: scale(0.95); opacity: 0; }
              to { transform: scale(1); opacity: 1; }
            }
          `}} />
          
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-bauble-bg border border-white/10 p-6 md:p-10 max-w-2xl w-full max-h-[85vh] overflow-y-auto relative shadow-[0_10px_50px_rgba(105,104,172,0.15)] scrollbar-thin scrollbar-thumb-white/10 cursor-default rounded-lg"
            style={{ animation: 'scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
          >
            <button 
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="space-y-6 relative z-10 text-left">
              <div className="border-b border-white/10 pb-4">
                <span className="text-[10px] bg-bauble-blue/10 text-bauble-blue border border-bauble-blue/20 px-2.5 py-1 font-mono uppercase tracking-[0.2em] font-bold inline-block mb-3">
                  * Hiring *
                </span>
                <h3 className="text-3xl font-black text-white tracking-tight">Sales Closer</h3>
                <p className="text-white/40 font-mono text-xs mt-1">Remote (US Client Base) · Independent Contractor</p>
              </div>

              <div className="space-y-6 font-sans text-sm text-white/80 leading-relaxed md:pr-4">
                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-bauble-blue mb-2">Company</h4>
                  <p className="text-white/90">
                    <strong>KoralByte Studios</strong> is a brand strategy and identity studio. We deliver complete brand systems (naming, identity, packaging, messaging, pitch decks, and paid creative) for founder-led D2C and early-stage companies in the United States.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white/5 p-4 border border-white/10">
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">ENGAGEMENT TYPE</span>
                    <span className="text-xs font-bold text-white">Independent contractor, commission-only</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-white/40 block">LOCATION</span>
                    <span className="text-xs font-bold text-white">Remote (United States client base; English-language)</span>
                  </div>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-bauble-blue mb-2">Position Summary</h4>
                  <p className="text-white/90">
                    The Sales Closer is responsible for converting qualified, warm sales opportunities into signed engagements. Our outbound team generate booked calls; the Closer manages those conversations from discovery through to a signed agreement, selling our packaged services and retainers.
                  </p>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-bauble-blue mb-2">Key Responsibilities</h4>
                  <ul className="list-disc pl-5 space-y-2 text-white/90">
                    <li>Conduct discovery and upsell calls with prospects who have purchased and received a Brand Audit, presenting the appropriate service package and pricing and securing a decision.</li>
                    <li>Convert qualified opportunities into project engagements and monthly retainers.</li>
                    <li>Address client objections during calls and adapt to each conversation.</li>
                    <li>Maintain accurate records in the company CRM, including call outcomes, scoped pricing, close dates, and follow-up actions.</li>
                    <li>Provide structured feedback to the outbound team on which proposals and audit recommendations are converting, to inform ongoing improvements.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-bauble-blue mb-2">Required Qualifications</h4>
                  <ul className="list-disc pl-5 space-y-2 text-white/90">
                    <li>A minimum of one year experience closing B2B services, agency, or consulting engagements.</li>
                    <li>A demonstrable closing rate on warm, qualified opportunities (the company benchmarks call-to-close conversion at 15–35%).</li>
                    <li>Proven ability to sell strategy and brand services to discerning, often technical, founders through value-based selling rather than discounting.</li>
                    <li>Clear, direct, and professional communication consistent with the company's founder-to-founder brand voice.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-bauble-blue mb-2">Compensation</h4>
                  <p className="text-white/90">
                    Commission-only, paid on closed revenue (audit upsells and retainers), uncapped. Earnings scale with pipeline volume as monthly revenue grows. Commission structure to be discussed during the application process.
                  </p>
                </div>

                <div className="border-t border-bauble-blue/20 pt-6 mt-8">
                  <h4 className="text-lg font-bold text-white tracking-tight mb-2">How to Apply</h4>
                  <p className="text-white/90">
                    Please send your CV and professional highlights directly to{" "}
                    <a href="mailto:connect@coralbytestudios.com" className="text-bauble-blue hover:underline font-bold font-mono">
                      connect@coralbytestudios.com
                    </a>.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => setShowPopup(false)}
                className="mt-6 w-full py-4 text-[10px] uppercase tracking-[0.2em] font-bold bg-white text-black hover:bg-bauble-blue hover:text-black transition-all duration-300 shadow-[0_4px_20px_rgba(105,104,172,0.15)] font-mono"
              >
                Close
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}


