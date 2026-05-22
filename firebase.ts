import React, { useEffect } from "react";
import { X } from "lucide-react";
import type { PortfolioItem } from "../../data/portfolio";

export function PortfolioModal({ item, onClose }: { item: PortfolioItem | null; onClose: () => void }) {
  useEffect(() => {
    if (item) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [item]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
      <div className="absolute inset-0 bg-bauble-bg/90 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-black border border-white/30 overflow-y-auto flex flex-col shadow-2xl z-10 custom-scrollbar">
        <button 
          onClick={onClose}
          className="sticky top-0 right-0 float-right m-4 w-10 h-10 bg-black/50 border border-white/10 flex items-center justify-center hover:bg-bauble-blue hover:border-bauble-blue transition-colors text-white hover:text-black z-20 backdrop-blur self-end isolate ml-auto"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 md:p-12 pb-0 pt-0">
          <div className="mb-10 text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">{item.title}</h2>
            <div className="flex items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-white/80">
              <span className="text-bauble-blue">{item.category}</span>
              <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
              <span>{item.industry}</span>
            </div>
          </div>

          <div className="space-y-8 pb-12">
            <img src={item.image} alt={item.title} className="w-full object-cover border border-white/40 aspect-video md:aspect-[21/9]" />
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 text-white/90 font-sans leading-relaxed text-sm lg:text-base py-12 border-y border-white/10">
                <div className="space-y-4">
                  <h3 className="text-white font-bold font-mono uppercase tracking-widest text-xs flex items-center gap-3">
                    <span className="w-4 h-px bg-bauble-blue"></span> THE CHALLENGE
                  </h3>
                  <p>{item.challenge || `When ${item.title} approached us, they were struggling to differentiate themselves in a crowded ${item.industry} market. Their visual identity felt dated, and their messaging failed to capture their true value proposition. They needed a holistic reimagining of their brand from the ground up to connect with their audience.`}</p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-white font-bold font-mono uppercase tracking-widest text-xs flex items-center gap-3">
                    <span className="w-4 h-px bg-bauble-blue"></span> THE SOLUTION
                  </h3>
                  <p>{item.solution || `We developed a comprehensive ${item.category.toLowerCase()} approach that positioned ${item.title} as premium players in their space. By leveraging bold typography, a refined color palette, and a tone of voice that speaks directly to their ideal customers, we helped them reclaim their market leadership.`}</p>
                </div>
            </div>

            {item.fullImages?.map((img, i) => (
                <img key={i} src={img} alt={`${item.title} detail ${i}`} className="w-full object-cover border border-white/5" />
            ))}

            <img src={item.image} alt={`${item.title} alternate`} className="w-full object-cover border border-white/5 grayscale aspect-video md:aspect-[21/9]" />
          </div>
        </div>
      </div>
    </div>
  );
}
