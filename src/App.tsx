/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { BrandAuditPage } from "./pages/BrandAuditPage";
import { PortfolioPage } from "./pages/PortfolioPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { TeamPage } from "./pages/TeamPage";
import { AdminPage } from "./pages/AdminPage";

interface NavLinkProps {
  children: React.ReactNode;
  active?: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ children, active = false, onClick }) => (
  <button 
    onClick={onClick}
    className={`group relative text-[10px] tracking-[0.2em] font-medium transition-all duration-300 hover:text-white uppercase py-2 ${active ? 'text-white' : 'text-white'}`}
  >
    <span className="relative z-10 flex items-center">
      {active && <span className="mr-2 text-bauble-blue font-bold">&gt;</span>}
      {children}
    </span>
    {/* Hover underline effect */}
    <span className={`absolute bottom-0 left-0 h-[1px] bg-bauble-blue transition-all duration-300 ${active ? 'w-full' : 'w-0 group-hover:w-full'}`} />
    {/* Hover glow effect */}
    <span className="absolute inset-0 bg-bauble-blue/0 group-hover:bg-bauble-blue/25 blur-md rounded-full transition-all duration-300 -z-10" />
  </button>
);

const GlobalVisuals = () => (
  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden mix-blend-multiply opacity-[0.03]">
    {/* CSS Grid Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)]" />
    
    {/* Diagonal subtle lines over the whole area */}
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diagonal-lines-global" width="60" height="60" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="60" stroke="#111111" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diagonal-lines-global)" />
    </svg>

    {/* Prominent static glows */}
    <div className="absolute top-[10%] right-[-5%] w-[600px] h-[600px] bg-bauble-blue/15 rounded-full blur-[150px] will-change-transform transform-gpu safari-optimization" />
    <div className="absolute top-[40%] left-[-10%] w-[500px] h-[800px] bg-bauble-blue/15 rounded-[100%] blur-[150px] -rotate-45 will-change-transform transform-gpu safari-optimization" />
    <div className="absolute bottom-[-10%] right-[10%] w-[700px] h-[700px] bg-bauble-blue/15 rounded-full blur-[150px] will-change-transform transform-gpu safari-optimization" />

    {/* Center accent floating */}
    <div className="absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[-50%] w-[800px] h-[800px] bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:28px_28px] opacity-[0.02] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_60%)]" />
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const path = window.location.pathname.replace(/^\/+/, '').toUpperCase().replace('-', ' ');
    return path || "HOME";
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace(/^\/+/, '').toUpperCase().replace('-', ' ');
      setCurrentPage(path || "HOME");
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (page: string, anchor?: string) => {
    setCurrentPage(page);
    setIsMobileMenuOpen(false);
    
    const urlPath = page === "HOME" ? "/" : "/" + page.toLowerCase().replace(' ', '-');
    window.history.pushState({}, '', urlPath);

    if (anchor) {
      setTimeout(() => {
        const element = document.getElementById(anchor);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400);
    } else {
      window.scrollTo(0, 0);
    }
  };

  const navItems = [
    { name: "HOME" },
    { name: "SERVICES" },
    { name: "BRAND AUDIT" },
    { name: "PORTFOLIO" },
    { name: "ABOUT" },
    { name: "CONTACT" },
    { name: "TEAM" }
  ];

  const renderPage = () => {
    switch (currentPage) {
      case "HOME":
        return <HomePage onNavigate={handleNavigate} />;
      case "SERVICES":
        return <ServicesPage onNavigate={handleNavigate} />;
      case "BRAND AUDIT":
        return <BrandAuditPage onNavigate={handleNavigate} />;
      case "PORTFOLIO":
        return <PortfolioPage onNavigate={handleNavigate} />;
      case "ABOUT":
        return <AboutPage onNavigate={handleNavigate} />;
      case "CONTACT":
        return <ContactPage />;
      case "TEAM":
        return <TeamPage />;
      case "ADMIN":
        return <AdminPage />;
      default:
        // Fallback for pages without content provided yet
        return (
          <div className="flex-1 flex items-center justify-center relative z-20 min-h-[50vh]">
            <div className="text-white/80 font-mono tracking-widest text-sm uppercase">
              {currentPage} - Coming Soon
            </div>
          </div>
        );
    }
  };

  return (
    <div id="koralbyte-root" className="relative min-h-screen selection:bg-bauble-blue bg-bauble-bg flex flex-col overflow-x-hidden safari-optimization">
      <GlobalVisuals />
      {/* Header */}
      <header className="relative z-[60] flex items-center justify-between px-5 md:px-10 py-5 md:py-8 border-b border-white/40 bg-bauble-bg/50 backdrop-blur-sm sticky top-0 transform-gpu will-change-transform">
        <div className="flex items-center gap-8 lg:gap-12 xl:gap-16">
          <button onClick={() => handleNavigate("HOME")} className="flex items-center gap-2.5 safari-optimization">
            <img src="/koralbytelogo.png" alt="Koralbyte Icon" className="h-9 md:h-11 w-auto object-contain" />
            <img src="/koralbytetextlogo.png" alt="Koralbyte Text" className="h-4 md:h-6 w-auto object-contain" />
          </button>
          <nav className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink 
                key={item.name} 
                active={currentPage === item.name}
                onClick={() => handleNavigate(item.name)}
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavigate("BRAND AUDIT")}
            className="hidden md:flex items-center gap-3 px-6 py-3 bg-bauble-blue border border-bauble-blue text-[10px] tracking-[0.2em] font-bold text-[#fcfcfc] btn-primary group transform-gpu"
          >
            BRAND AUDIT <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          <button 
            className="xl:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-[70] relative safari-optimization"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 transform-gpu ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 transform-gpu ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 transform-gpu ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 xl:hidden overflow-hidden safari-optimization"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/60 backdrop-blur-md transform-gpu"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div 
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              className="absolute top-0 left-0 right-0 bg-bauble-bg border-b border-white/20 p-6 pt-[120px] pb-10 shadow-2xl transform-gpu will-change-transform"
            >
              <div className="flex flex-col gap-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
                {navItems.map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => handleNavigate(item.name)}
                    className={`text-lg tracking-[0.2em] font-medium transition-colors text-left border-b border-white/5 pb-4 uppercase transform-gpu ${currentPage === item.name ? 'text-bauble-blue' : 'text-white/90 hover:text-white'}`}
                  >
                    {item.name}
                  </button>
                ))}
                <button 
                  onClick={() => handleNavigate("BRAND AUDIT")}
                  className="mt-4 flex w-full justify-between items-center gap-3 px-6 py-5 bg-bauble-blue text-xs tracking-[0.2em] font-bold text-[#fcfcfc] transition-all hover:bg-white hover:text-bauble-bg transform-gpu"
                >
                  BRAND AUDIT <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-1 relative safari-optimization">
        {currentPage !== "HOME" && (
           <div className="absolute inset-0 pointer-events-none z-0 bg-pattern-abstract opacity-100 will-change-opacity transform-gpu" />
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="transform-gpu will-change-transform"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="relative z-20 px-5 md:px-10 pt-20 pb-10 border-t border-white/10 bg-bauble-bg mt-auto overflow-hidden safari-optimization">
        {/* Decorative Grid for Footer */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#111111_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            {/* Branding Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-2.5">
                <img src="/koralbytelogo.png" alt="Koralbyte Icon" className="h-9 md:h-11 w-auto object-contain" />
                <img src="/koralbytetextlogo.png" alt="Koralbyte Text" className="h-4 md:h-6 w-auto object-contain" />
              </div>
              <p className="text-white/50 font-sans text-xs leading-relaxed max-w-xs">
                Building world-class brands for the SEA market. We combine strategy, identity, and growth to make you impossible to ignore.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-bauble-blue hover:border-bauble-blue transition-all">
                  <span className="text-[10px] font-bold">IG</span>
                </a>
                <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-bauble-blue hover:border-bauble-blue transition-all">
                  <span className="text-[10px] font-bold">LN</span>
                </a>
                <a href="#" className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/40 hover:text-bauble-blue hover:border-bauble-blue transition-all">
                  <span className="text-[10px] font-bold">X</span>
                </a>
              </div>
            </div>

            {/* Navigation Column */}
            <div className="space-y-6">
              <div className="text-[10px] tracking-[0.2em] font-bold text-white uppercase">Navigation</div>
              <div className="grid grid-cols-2 gap-4">
                {navItems.map((item) => (
                  <button 
                    key={item.name}
                    onClick={() => handleNavigate(item.name)}
                    className="text-[10px] tracking-[0.1em] text-white/40 hover:text-bauble-blue text-left transition-colors font-mono uppercase"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Office Column */}
            <div className="space-y-6">
              <div className="text-[10px] tracking-[0.2em] font-bold text-white uppercase">Locations</div>
              <div className="space-y-4">
                <div>
                  <div className="text-[10px] text-white/40 font-mono mb-1">CANADA</div>
                  <div className="text-xs text-white/80 font-medium">111 Peter St Suite 902, Toronto, ON M5V 2H1</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-mono mb-1">MALAYSIA</div>
                  <div className="text-xs text-white/80 font-medium">C22-13, Camellia Serviced Suites, Bangsar South, 59200 Kuala Lumpur</div>
                </div>
                <div>
                  <div className="text-[10px] text-white/40 font-mono mb-1">INDONESIA</div>
                  <div className="text-xs text-white/80 font-medium">Scbd, Revenue Tower Lt 20, Jl. Jenderal Sudirman No.52-53, RW.3, Senayan, Jakarta 12190</div>
                </div>
              </div>
            </div>

            {/* CTA Column */}
            <div className="space-y-6">
              <div className="text-[10px] tracking-[0.2em] font-bold text-white uppercase">Engagement</div>
              <button 
                onClick={() => handleNavigate("BRAND AUDIT")}
                className="group flex items-center gap-3 px-6 py-4 border border-bauble-blue/30 bg-bauble-blue/5 text-[10px] tracking-[0.2em] font-bold text-bauble-blue hover:bg-bauble-blue hover:text-bauble-bg transition-all w-full justify-between"
              >
                BRAND AUDIT <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex gap-8 items-center">
              <div className="text-[9px] tracking-[0.2em] text-white/20 uppercase font-mono italic">EST. 2026</div>
              <div className="text-[9px] tracking-[0.2em] text-white/20 uppercase font-mono">© ALL RIGHTS RESERVED</div>
            </div>
            <div className="flex gap-6">
              <button className="text-[9px] tracking-[0.2em] text-white/20 uppercase font-mono hover:text-bauble-blue transition-colors">Privacy</button>
              <button className="text-[9px] tracking-[0.2em] text-white/20 uppercase font-mono hover:text-bauble-blue transition-colors">Terms</button>
            </div>
          </div>
        </div>
      </footer>

      {/* Scanline Overlay */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.01)_50%),linear-gradient(90deg,rgba(255,0,0,0.01),rgba(0,255,0,0.005),rgba(0,0,100,0.01))] bg-[length:100%_8px,4px_100%] z-[60] opacity-40 will-change-opacity transform-gpu" />
    </div>
  );
}

