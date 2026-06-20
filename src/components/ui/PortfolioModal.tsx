import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { X, Sparkles, CheckCircle, ArrowRight } from "lucide-react";
import type { PortfolioItem } from "../../data/portfolio";

export function PortfolioModal({ item, onClose, onNavigate }: { item: PortfolioItem | null; onClose: () => void; onNavigate?: (page: string, anchor?: string) => void }) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  if (!item) return null;

  // Dynamically generate deliverables based on the project's category to feel like a premium Behance case study
  const getDeliverables = (category: string) => {
    switch (category) {
      case "Identity":
        return [
          "Core Strategy & Positioning",
          "Signature Logo System",
          "Color & Typography Hierarchy",
          "Brand Style Guidelines",
          "Digital & Print Stationery",
          "Custom Asset Library"
        ];
      case "Strategy":
        return [
          "Market Intelligence & Auditing",
          "Audience Archetype Mapping",
          "Brand Narrative & Voice Guide",
          "Investor Pitch Deck Strategy",
          "Strategic Messaging Matrix",
          "Go-to-market Rollout Plan"
        ];
      case "Growth":
        return [
          "Paid Social Creative Sets",
          "High-Conversion Lander Design",
          "Copywriting Engine",
          "Funnel Mechanics Optimization",
          "Performance Analytics Setup",
          "Retargeting Ad Templates"
        ];
      default:
        return [
          "Holistic Brand Review",
          "Premium Identity System",
          "Digital Experience Touchpoints",
          "Founder Consulting Pack"
        ];
    }
  };

  const deliverables = getDeliverables(item.category);

  return createPortal(
    <div 
      className="fixed inset-0 z-[99999] overflow-y-auto bg-bauble-bg/95 backdrop-blur-lg flex items-start justify-center p-4 sm:p-6 md:p-10 cursor-pointer" 
      onClick={onClose}
    >
      {/* Keyframe styled component for fluid modern entry & escape */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes modalScaleUpBehavior {
          from { transform: scale(0.97) translateY(30px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
        .behance-glow {
          box-shadow: 0 40px 100px -20px rgba(105, 104, 172, 0.2), 0 0 50px -10px rgba(17, 17, 17, 0.05);
        }
      `}} />

      {/* Case Study Container (grows infinitely; page handles scrolling) */}
      <div 
        className="relative w-full max-w-5xl bg-bauble-bg border border-white/20 flex flex-col behance-glow z-10 rounded-2xl cursor-default my-8 md:my-16"
        style={{ animation: 'modalScaleUpBehavior 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Absolute Floating Close Button (distinct, premium action) */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 p-2.5 rounded-full border border-white/20 bg-bauble-bg hover:bg-bauble-blue/20 hover:border-bauble-blue/40 text-white transition-all hover:scale-110 z-50 cursor-pointer shadow-sm"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pt-16 pb-8 px-6 md:px-12 text-center relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-bauble-blue/40 rounded-full" />
          
          <div className="flex items-center justify-center gap-2 mb-3 text-[10px] font-mono uppercase tracking-[0.3em] text-white/60">
            <Sparkles className="w-3.5 h-3.5 text-bauble-blue" />
            <span>KORALBYTE CASE STUDY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight font-sans">
            {item.title}
          </h2>

          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs font-mono uppercase tracking-[0.2em] text-white/80">
            <span className="px-3 py-1 bg-bauble-blue/15 border border-bauble-blue/30 text-bauble-blue rounded-full font-bold">
              {item.category}
            </span>
            <span className="w-1.5 h-1.5 bg-white/30 rounded-full"></span>
            <span className="text-white/60">{item.industry}</span>
          </div>
        </div>

        {/* Body Content */}
        <div className="px-6 md:px-12 pb-16 space-y-12">
          
          {/* Main Showcase Image (native height, scrolls infinitely with absolutely no clipping) */}
          <div className="relative overflow-hidden border border-white/15 rounded-2xl bg-black/5 shadow-md">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-auto object-contain block"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Core Insights: Challenge vs Solution */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 py-12 border-y border-white/10">
            
            {/* Challenge column */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-bauble-blue"></span>
                <h3 className="text-white font-bold font-mono uppercase tracking-[0.15em] text-[10.5px]">
                  THE CHALLENGE
                </h3>
              </div>
              <p className="text-white/80 font-sans leading-relaxed text-sm md:text-base">
                {item.challenge || `When ${item.title} approached us, they were struggling to differentiate themselves in a crowded ${item.industry} market. Their visual identity felt dated, and their messaging failed to capture their true value proposition. They needed a holistic reimagining of their brand from the ground up to connect with their audience.`}
              </p>
            </div>

            {/* Solution column */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-bauble-blue"></span>
                <h3 className="text-white font-bold font-mono uppercase tracking-[0.15em] text-[10.5px]">
                  THE SOLUTION
                </h3>
              </div>
              <p className="text-white/80 font-sans leading-relaxed text-sm md:text-base">
                {item.solution || `We developed a comprehensive ${item.category.toLowerCase()} approach that positioned ${item.title} as premium players in their space. By leveraging bold typography, a refined color palette, and a tone of voice that speaks directly to their ideal customers, we helped them reclaim their market leadership.`}
              </p>
            </div>

          </div>

          {/* Deliverables Section */}
          <div className="py-4 border-b border-white/10 pb-12">
            <h3 className="text-white font-bold font-mono uppercase tracking-[0.2em] text-xs mb-8 text-center md:text-left flex items-center justify-center md:justify-start gap-2">
              <CheckCircle className="w-4 h-4 text-bauble-blue" />
              STUDIO ACCOMPLISHMENTS & DEPLOYED SERVICES
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {deliverables.map((del, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-3.5 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-bauble-blue/20 hover:bg-white/8 transition-all duration-300 group"
                >
                  <ArrowRight className="w-4.5 h-4.5 text-bauble-blue mt-0.5 group-hover:translate-x-1.5 transition-transform" />
                  <span className="text-white/90 text-xs md:text-sm font-sans font-medium">{del}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expanded Behance Image Gallery */}
          <div className="space-y-6 md:space-y-12">
            <div className="text-center md:text-left">
              <h3 className="text-white font-bold font-mono uppercase tracking-[0.2em] text-xs">
                Visual Artifacts & Case Design
              </h3>
              <p className="text-white/50 text-[10px] font-mono uppercase mt-1">
                Hi-res presentation showcase
              </p>
            </div>

            {/* Direct Full-length presentation images rendering at native/arbitrary height with no aspect ratios cropped */}
            {item.fullImages && item.fullImages.length > 0 ? (
              <div className="space-y-8">
                {item.fullImages.map((img, i) => (
                  <div key={i} className="border border-white/15 rounded-2xl overflow-hidden shadow-md">
                    <img 
                      src={img} 
                      alt={`${item.title} system mockup ${i + 1}`} 
                      className="w-full h-auto object-contain block" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            {item.fullImage && (
              <div className="border border-white/15 rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={item.fullImage} 
                  alt={`${item.title} identity application view`} 
                  className="w-full h-auto object-contain block" 
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          {/* Call To Action within popup */}
          <div className="pt-12 text-center border-t border-white/10 mt-16">
            <p className="text-white/60 font-sans text-xs md:text-sm mb-5">
              Inspired by KoralByte's elite design and strategy deployment for {item.title}?
            </p>
            <button 
              onClick={() => {
                onClose();
                if (onNavigate) {
                  onNavigate("SERVICES");
                }
              }}
              className="px-8 py-4 bg-bauble-blue text-xs tracking-[0.2em] font-bold text-black rounded-xl hover:bg-white hover:text-black hover:shadow-xl transition-all duration-300 font-mono"
            >
              CHOOSE A STRATEGY LIKE THIS
            </button>
          </div>

        </div>
      </div>
    </div>,
    document.body
  );
}
