import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { handleFirestoreError, OperationType } from '../lib/firebase-errors';

interface BrandAuditPageProps {
  onNavigate: (page: string, anchor?: string) => void;
}

export function BrandAuditPage({ onNavigate }: BrandAuditPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    businessName: "",
    email: "",
    website: "",
    challenge: ""
  });

  const sanitizeInput = (str: string) => {
    return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    
    // Explicit sanitization before submission
    const sanitizedData = {
      fullName: sanitizeInput(formData.fullName),
      businessName: sanitizeInput(formData.businessName),
      email: sanitizeInput(formData.email),
      website: sanitizeInput(formData.website),
      challenge: sanitizeInput(formData.challenge),
      auditType: "brand",
      createdAt: serverTimestamp()
    };
    
    try {
      setError(null);
      await addDoc(collection(db, 'audits'), sanitizedData);
      setSubmitted(true);
      setFormData({ fullName: "", businessName: "", email: "", website: "", challenge: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setError("Failed to submit request. Please try again or check your connection.");
      try {
        handleFirestoreError(error, OperationType.CREATE, 'audits');
      } catch (e) {}
    } finally {
      setLoading(false);
    }
  };

  const auditItems = [
    { 
      id: "01",
      title: "Brand Positioning Review",
      description: "We assess the clarity and strength of your brand's market position.",
      details: [
        "Is your USP clear, distinctive, and believable?",
        "Have you defined your target audience with enough precision?",
        "Does your brand occupy a meaningful position in the market?",
        "How differentiated are you from your 3-5 closest competitors?",
        "Does your brand positioning come through in every touchpoint?"
      ],
      outcome: "A positioning clarity score and a plain-language verdict on whether your brand owns a defensible space in the market."
    },
    { 
      id: "02",
      title: "Visual Identity Audit",
      description: "We review everything your audience sees.",
      details: [
        "Logo: Is it distinctive, scalable, and professionally executed?",
        "Colour palette: Is it intentional, consistent, and market-appropriate?",
        "Typography: Does it match your brand personality and aid readability?",
        "Consistency: Does your visual identity hold up across all touchpoints?",
        "First impression: What does your brand say about you before a word is read?"
      ],
      outcome: "A visual identity assessment with specific, design-level feedback on what is working, what is not, and what to fix first."
    },
    { 
      id: "03",
      title: "Digital Presence Review",
      description: "We evaluate how your brand shows up online.",
      details: [
        "Website: Design quality, messaging clarity, and conversion intent",
        "Social media profiles: Consistency, quality, and brand alignment",
        "E-commerce listings: Product presentation, copy quality, and trust signals",
        "Content quality: Does your output match the standard of your brand?",
        "Brand voice consistency: Do you sound the same everywhere you show up?"
      ],
      outcome: "A platform-by-platform digital presence score with specific gaps identified and prioritised."
    },
    { 
      id: "04",
      title: "Marketing Performance Review",
      description: "We look at how well your marketing is working for your brand.",
      details: [
        "Are you on the right channels for your audience?",
        "Is your ad spend aligned with your business objectives?",
        "Is your content strategy generating meaningful engagement?",
        "Are your marketing efforts reinforcing your brand positioning?",
        "Do you have a clear path from awareness to conversion?"
      ],
      outcome: "An honest assessment of your marketing effectiveness, including what to stop doing immediately and what to double down on."
    },
    { 
      id: "05",
      title: "Competitor Benchmarking",
      description: "We stack your brand against the competition.",
      details: [
        "Identification of 3-5 direct competitors in the SEA market",
        "Side-by-side comparison of brand identity and positioning",
        "Assessment of competitive gaps you can exploit",
        "Identification of areas where competitors are outperforming you",
        "Opportunities to own white space in your category"
      ],
      outcome: "A competitor landscape summary showing exactly where you lead, where you lag, and where the real opportunity lies."
    },
    { 
      id: "06",
      title: "Recommendations Report",
      description: "Everything comes together in one clear, actionable document.",
      details: [
        "Prioritised action list with what to fix first, second, and third",
        "Specific, practical recommendations for each audit area",
        "A clear assessment of which gaps are critical vs cosmetic",
        "A recommended Koralbyte package mapped to your specific needs",
        "A plain-language executive summary your team can act on immediately"
      ],
      outcome: "A complete, honest brand health report that gives you everything you need to make your next move with confidence."
    }
  ];

  return (
    <div className="relative z-20 pt-16 md:pt-24 pb-20 md:pb-32">
      {/* Hero */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-20 md:mb-32 relative">
         <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10 relative">
               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight md:leading-[1.1]">
                 Find out exactly <br className="hidden md:block"/> what’s <span className="text-bauble-blue">holding your brand back.</span>
               </h1>
               <p className="text-white/90 font-mono text-[14px] md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
                 The Koralbyte Brand Audit is the fastest, most affordable way to get an honest, expert assessment of where your brand stands and a clear, prioritised plan for what to do about it.
               </p>
               <div className="flex flex-col sm:flex-row items-center gap-4 text-[10px] sm:text-xs font-mono text-white/70 border-t border-white/40 pt-6 justify-center md:justify-start">
                 <span className="bg-bauble-blue/10 text-bauble-blue px-3 py-1 border border-bauble-blue/20">Delivered in 5-7 business days</span>
                 <span className="bg-white text-black px-4 py-2 font-bold tracking-widest text-sm shadow-[0_0_20px_rgba(255,255,255,0.4)]">USD 170</span>
                 <span className="hidden sm:inline">·</span>
                 <span className="italic">No fluff. No jargon. Just clarity.</span>
               </div>
            </div>
            <div className="w-full lg:w-[450px] flex justify-center z-10 perspective-1000 relative">
               <div className="absolute top-1/2 left-[70%] -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-bauble-blue/40 blur-[100px] rounded-full group-hover:bg-bauble-blue/30 transition-all duration-700 pointer-events-none" />
               {/* Visual representation stays same as it's a good asset */}
               <div className="relative w-full max-w-sm group">
                 <div className="bg-black/40 backdrop-blur-2xl border-white/20 shadow-2xl border border-white/60 rounded-xl p-8 relative shadow-2xl skew-y-3 -rotate-3 transition-all group-hover:rotate-0 group-hover:skew-y-0 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(105,104,172,0.9)] duration-700">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/30">
                       <div className="text-bauble-blue font-bold font-mono tracking-widest text-xs">AUDIT_REPORT.pdf</div>
                       <div className="w-2 h-2 rounded-full bg-bauble-blue animate-pulse" />
                    </div>
                    <div className="space-y-4">
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-bauble-blue" />
                          <div className="h-2 w-3/4 bg-black/40 rounded" />
                       </div>
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-bauble-blue" />
                          <div className="h-2 w-1/2 bg-white/10 rounded" />
                       </div>
                       <div className="flex items-center gap-3">
                          <CheckCircle2 className="w-4 h-4 text-bauble-blue" />
                          <div className="h-2 w-2/3 bg-white/10 rounded" />
                       </div>
                    </div>
                 </div>
               </div>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-bauble-blue/25 blur-[180px] rounded-full -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none" />
      </section>

      {/* What We Look At */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-20 md:mb-40">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">What We Look At</h2>
          <p className="text-white/40 font-sans text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Every Brand Audit covers the same six areas. The six dimensions that determine whether a brand wins or loses in the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {auditItems.map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative border border-white/10 bg-black/30 backdrop-blur-2xl shadow-xl p-8 md:p-12 hover:border-bauble-blue/60 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(105,104,172,0.5)] overflow-hidden"
            >
               <div className="absolute top-0 right-0 p-6 md:p-8 text-4xl md:text-5xl font-bold font-mono text-white/20 group-hover:text-bauble-blue/5 transition-colors">
                 {item.id}
               </div>
               
               <div className="space-y-8 relative z-10">
                 <div className="space-y-4">
                   <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-bauble-blue transition-colors duration-500">{item.title}</h3>
                   <p className="text-white/80 text-xs md:text-sm font-sans leading-relaxed italic">{item.description}</p>
                 </div>

                 <ul className="space-y-3">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/40 text-[10px] md:text-xs">
                        <span className="text-bauble-blue font-bold">+</span>
                        {detail}
                      </li>
                    ))}
                 </ul>

                 <div className="pt-6 border-t border-white/5">
                   <div className="text-bauble-blue font-bold font-mono text-[9px] tracking-widest uppercase mb-2">Outcome</div>
                   <p className="text-white text-xs md:text-sm leading-relaxed">{item.outcome}</p>
                 </div>
               </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="px-5 md:px-10 max-w-4xl mx-auto space-y-6 md:space-y-8">
        <div id="audit-form" className="pt-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 md:p-16">
          <div className="text-center mb-8 md:mb-12 space-y-4">
            <h2 className="text-2xl md:text-4xl font-bold text-white leading-tight">Book Your Brand Audit</h2>
            <p className="text-white/80 font-sans text-xs md:text-sm max-w-lg mx-auto">Fill in the form and we'll be in touch within one business day to confirm your audit and get started.</p>
          </div>

          {error && (
            <div className="mb-8 p-4 bg-red-500/10 border border-red-500/20 text-red-500 text-xs md:text-sm font-mono text-center">
              {error}
            </div>
          )}

          {submitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-bauble-blue/50 bg-bauble-blue/5 p-8 md:p-16 text-center space-y-8 backdrop-blur-xl"
            >
              <CheckCircle2 className="w-16 h-16 md:w-20 md:h-20 text-bauble-blue mx-auto animate-bounce" />
              <div className="space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Audit Requested</h2>
                <p className="text-white/70 font-sans text-sm md:text-lg leading-relaxed max-w-md mx-auto">
                  Thank you for requesting your Brand Audit. We'll be in touch within one business day with details regarding the next steps and investment.
                </p>
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Full Name</label>
                  <input 
                    required
                    maxLength={100}
                    type="text" 
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                    className="w-full bg-black/10 border border-white/10 shadow-inner px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Business Name</label>
                  <input 
                    required
                    maxLength={100}
                    type="text" 
                    value={formData.businessName}
                    onChange={e => setFormData({...formData, businessName: e.target.value})}
                    className="w-full bg-black/10 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Email Address</label>
                  <input 
                    required
                    maxLength={150}
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black/10 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors placeholder:text-white/50"
                    placeholder="jane@example.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Website/Socials URL</label>
                  <input 
                    required
                    maxLength={200}
                    type="url" 
                    value={formData.website}
                    onChange={e => setFormData({...formData, website: e.target.value})}
                    className="w-full bg-black/10 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors placeholder:text-white/20"
                    placeholder="https://yourbrand.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] tracking-[0.2em] font-bold text-white/50 uppercase">Brief description of your biggest brand challenge right now</label>
                <textarea 
                  required
                  maxLength={2000}
                  rows={4}
                  value={formData.challenge}
                  onChange={e => setFormData({...formData, challenge: e.target.value})}
                  className="w-full bg-black/10 border border-white/10 px-4 py-3 text-white font-mono text-sm focus:border-bauble-blue focus:outline-none transition-colors resize-none placeholder:text-white/20"
                  placeholder="What's holding you back?"
                />
              </div>

              <div className="pt-4 flex flex-col items-center gap-6">
                <button type="submit" disabled={loading} className="group flex justify-center items-center gap-3 bg-bauble-blue px-6 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-[12px] font-bold tracking-[0.2em] text-[#fcfcfc] hover:bg-[#111111] hover:text-[#fcfcfc] transition-all duration-300 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed">
                  {loading ? "SUBMITTING..." : "SUBMIT"} <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <p className="text-white/40 font-mono text-[10px] md:text-xs text-center border-t border-white/10 pt-6 w-full">Delivered in 5–7 business days. No commitment required.</p>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}


