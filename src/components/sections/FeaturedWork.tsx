import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { collection, getDocs, orderBy, query, limit } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import { portfolioCases, type PortfolioItem } from "../../data/portfolio";
import { PortfolioModal } from "../ui/PortfolioModal";

export function FeaturedWork({ onNavigate }: { onNavigate?: (page: string, anchor?: string) => void }) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [items, setItems] = useState<PortfolioItem[]>(portfolioCases.slice(0, 3));

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const q = query(collection(db, 'portfolio'), orderBy('order', 'asc'), limit(3));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const fetchedItems = snapshot.docs.map(doc => doc.data() as PortfolioItem);
          setItems(fetchedItems);
        } else {
          setItems(portfolioCases.slice(0, 3));
        }
      } catch (error: any) {
        if (error.code === 'permission-denied') {
          console.warn("Firebase permissions pending. Falling back to default data.");
        } else {
          console.error("Error fetching featured work:", error);
        }
      }
    };
    fetchPortfolio();
  }, []);

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 relative z-20 bg-bauble-bg bg-pattern-abstract overflow-hidden text-center md:text-left">
      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 transform-gpu"
        >
          <div className="space-y-4 md:space-y-6">
            <div className="flex items-center justify-center md:justify-start gap-3 text-[9px] tracking-[0.3em] text-white uppercase">
              <span className="text-bauble-blue italic">→</span> FEATURED WORK / PORTFOLIO
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Brands We Have <br className="hidden md:block"/>Built to Win
            </h2>
            <p className="text-white/90 font-sans text-xs md:text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
              A selection of strategy, identity, and growth work we've done in the past.
            </p>
          </div>
          <button 
            onClick={() => {
              if (onNavigate) {
                onNavigate("PORTFOLIO");
                window.scrollTo(0, 0);
              }
            }}
            className="group flex justify-center items-center gap-3 bg-transparent border border-white/30 px-6 py-4 md:py-3 text-[10px] font-bold tracking-[0.2em] text-white hover:border-white transition-all w-full md:w-auto mt-4 md:mt-0"
          >
            VIEW FULL PORTFOLIO <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((c, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.1 }}
               transition={{ duration: 0.5, delay: i * 0.1 }}
               className="group cursor-pointer hover:scale-[1.02] transition-all duration-500 transform-gpu will-change-transform" 
               onClick={() => setSelectedItem(c)}
             >
              <div className="aspect-[4/5] bg-black/30 backdrop-blur-xl border border-white/10 shadow-xl relative overflow-hidden mb-4 md:mb-6 group-hover:border-bauble-blue/30 group-hover:shadow-[0_0_30px_rgba(105,104,172,0.6)] transition-all duration-500 transform-gpu">
                <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bauble-bg via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-2xl border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70 font-mono">
                  {c.industry}
                </div>
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-xl font-bold text-white group-hover:text-bauble-blue transition-colors">
                  {c.title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/40 font-mono">
                  {c.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
