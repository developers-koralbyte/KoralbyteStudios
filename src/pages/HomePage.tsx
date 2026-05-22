import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { USPBar } from "../components/sections/USPBar";
import { WhatWeDo } from "../components/sections/WhatWeDo";
import { ServicesSnapshot } from "../components/sections/ServicesSnapshot";
import { Blueprint } from "../components/sections/Blueprint";
import { WhoWeServe } from "../components/sections/WhoWeServe";
import { FeaturedWork } from "../components/sections/FeaturedWork";
import { Testimonials } from "../components/sections/Testimonials";
import { LeadMagnet } from "../components/sections/LeadMagnet";

interface HomePageProps {
  onNavigate: (page: string, anchor?: string) => void;
}

const HeroAnimation = () => (
  <div className="relative w-80 h-80 flex justify-center items-center transform-gpu will-change-transform">
    {/* Core Glow */}
    <div className="absolute w-32 h-32 bg-bauble-blue rounded-full blur-[60px] animate-pulse transform-gpu will-change-transform" style={{ animationDuration: '4s' }} />
    
    {/* Rotating Rings */}
    <div className="absolute w-64 h-64 border border-white/60 rounded-full animate-[spin_10s_linear_infinite] transform-gpu will-change-transform" />
    <div className="absolute w-[110%] h-[110%] border opacity-50 border-bauble-blue/30 rounded-full animate-[spin_15s_linear_infinite_reverse] transform-gpu will-change-transform" style={{ transform: 'rotateX(60deg) rotateY(20deg)' }} />
    <div className="absolute w-[120%] h-[120%] border border-white/40 rounded-full animate-[spin_20s_linear_infinite] transform-gpu will-change-transform" style={{ transform: 'rotateX(20deg) rotateY(60deg)' }} />
    
    {/* Center Geometric Element */}
    <div className="absolute w-16 h-16 border border-bauble-blue/40 rotate-45 flex items-center justify-center animate-[spin_8s_linear_infinite] transform-gpu will-change-transform">
      <div className="w-8 h-8 border border-white/30 rotate-45" />
    </div>
    
    {/* Decorative orbital dot */}
    <div className="absolute w-full h-full animate-[spin_12s_linear_infinite] transform-gpu">
       <div className="absolute top-0 left-1/2 w-2 h-2 bg-bauble-blue rounded-full blur-[1px] -translate-x-1/2 -translate-y-1/2" />
    </div>
  </div>
);

export function HomePage({ onNavigate }: HomePageProps) {
  const [wordIndex, setWordIndex] = React.useState(0);
  const [text, setText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const words = ["Life.", "Scale.", "Grow."];

  React.useEffect(() => {
    const typeSpeed = isDeleting ? 40 : 80;
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      } else {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, text === currentWord ? 1000 : typeSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <>
      <main className="relative z-20 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-100px)] px-5 md:px-10 max-w-7xl mx-auto w-full gap-12 py-10 md:py-20 lg:py-20 overflow-hidden lg:overflow-visible">
        {/* Mobile Background Animation */}
        <div className="absolute inset-0 flex lg:hidden justify-center items-center pointer-events-none opacity-20 z-0 scale-[1.2] sm:scale-150">
          <HeroAnimation />
        </div>

        <div className="w-full lg:w-[60%] space-y-8 md:space-y-10 relative z-10 mt-10 md:mt-0 transform-gpu safari-optimization">
          <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] text-white uppercase">
             <span className="text-bauble-blue italic">→</span> STRATEGY . BRAND . SYSTEMS
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-[5vw] md:leading-[1.0] leading-tight font-black tracking-tighter safari-optimization">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#111111] font-black inline-block transform-gpu will-change-transform"
            >
              Where Brands
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[#111111] font-black inline-block transform-gpu will-change-transform"
            >
              Come to
            </motion.span>
            <br />
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-bauble-blue border-r-4 border-bauble-blue/50 pr-1 relative inline-block transform-gpu will-change-transform"
            >
              <span className="opacity-0">{text.length === 0 ? " " : text}</span> {/* To prevent vertical jumping */}
              <span className="absolute left-0">{text}</span>
            </motion.span>
          </h1>

          <p className="max-w-2xl text-white/90 font-mono text-sm sm:text-base md:text-lg leading-relaxed">
            World's only agency that builds both the strategy behind your brand and the identity in front of it, all under one roof.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
            <button 
              onClick={() => onNavigate("CONTACT")}
              className="group flex justify-center items-center gap-3 bg-bauble-blue px-8 py-4 text-[11px] font-bold tracking-[0.2em] text-[#fcfcfc] btn-primary"
            >
              START A PROJECT <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button 
              onClick={() => onNavigate("PORTFOLIO")}
              className="group flex justify-center items-center gap-3 bg-transparent border-[2px] border-white/80 px-8 py-4 text-[11px] font-extrabold tracking-[0.2em] text-white hover:border-bauble-blue hover:text-bauble-blue transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(17,17,17,0.7)]"
            >
              SEE OUR WORK
            </button>
          </div>

          <div className="flex flex-wrap items-start justify-between sm:justify-start gap-6 sm:gap-[80px] mt-[38px] w-full">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-[9px] tracking-[0.2em] text-white/80 uppercase">EST.</div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.1em] font-medium text-white">2026</div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-[9px] tracking-[0.2em] text-white/60 uppercase">STUDIO</div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.1em] font-medium text-white">KL, Malaysia</div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-[9px] tracking-[0.2em] text-white/30 uppercase">INDEX</div>
              <div className="text-[10px] sm:text-[11px] tracking-[0.1em] font-medium whitespace-nowrap text-white">
                <span className="text-bauble-blue">42</span> projects · <span className="text-white/80">14</span> clients
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex w-[40%] justify-center items-center relative pointer-events-none -translate-y-16 lg:-translate-y-24 transform-gpu">
          <HeroAnimation />
        </div>
      </main>

      <div className="relative z-10 bg-bauble-bg safari-optimization">
        <div className="relative z-10">
          <USPBar />
          <WhatWeDo />
          <ServicesSnapshot onNavigate={onNavigate} />
          <Blueprint />
          <WhoWeServe />
          <FeaturedWork onNavigate={onNavigate} />
          <Testimonials />
          <LeadMagnet onNavigate={onNavigate} />
        </div>
      </div>
    </>
  );
}
