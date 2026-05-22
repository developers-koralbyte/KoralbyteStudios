import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { portfolioCases, type PortfolioItem } from "../data/portfolio";
import { PortfolioModal } from "../components/ui/PortfolioModal";

export function PortfolioPage({ onNavigate }: { onNavigate?: (page: string, anchor?: string) => void }) {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [items, setItems] = useState<PortfolioItem[]>(portfolioCases);
  const filters = ["All", "Strategy", "Identity", "Growth"];

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const q = query(collection(db, 'portfolio'), orderBy('order', 'asc'));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const fetchedItems = snapshot.docs.map(doc => doc.data() as PortfolioItem);
          setItems(fetchedItems);
        } else {
          setItems([]);
        }
      } catch (error: any) {
        if (error.code === 'permission-denied') {
          console.warn("Firebase permissions pending. Falling back to default data.");
        } else {
          console.error("Error fetching portfolio:", error);
        }
      }
    };
    fetchPortfolio();
  }, []);

  const filtered = filter === "All" ? items : items.filter(c => c.category === filter);

  return (
    <div className="relative z-20 pt-24 pb-32">
      <PortfolioModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-24 relative">
         <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 pt-8 md:pt-16">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10 relative"
            >

               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                 Brands we have <br className="hidden md:block"/> <span className="text-bauble-blue">Built to Win.</span>
               </h1>
            </motion.div>
            
            <div className="hidden md:flex flex-1 justify-end relative z-10 perspective-1000">
               <motion.div 
                 initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                 animate={{ opacity: 1, scale: 1, rotate: 0 }}
                 transition={{ duration: 1.2, ease: "easeOut" }}
                 className="relative w-[350px] h-[350px] transform-gpu -rotate-12 skew-y-6 hover:rotate-0 hover:skew-y-0 transition-transform duration-700"
               >
                  {/* Card 1 (Back) */}
                  <div className="absolute top-[10%] right-[10%] w-[250px] h-[200px] border border-white/10 bg-black/40 backdrop-blur-2xl shadow-xl rounded-lg p-4 -rotate-6 translate-x-4 -translate-y-4">
                     <div className="w-full h-[40%] bg-black rounded mb-3" />
                     <div className="w-1/2 h-2 bg-black/40 rounded mb-2" />
                     <div className="w-3/4 h-2 bg-white/30 rounded" />
                  </div>
                  {/* Card 2 (Middle) */}
                  <div className="absolute top-[20%] right-[20%] w-[250px] h-[220px] border border-white/10 bg-black/30 backdrop-blur-2xl shadow-xl rounded-lg p-4 -rotate-3 translate-x-2 -translate-y-2 shadow-2xl">
                     <div className="flex gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-bauble-blue/20" />
                        <div className="flex-1 space-y-2">
                           <div className="w-1/3 h-2 bg-white/50 rounded mt-1" />
                           <div className="w-1/4 h-2 bg-white/10 rounded" />
                        </div>
                     </div>
                     <div className="w-full h-[50%] border-2 border-dashed border-bauble-blue/30 rounded" />
                  </div>
                  {/* Card 3 (Front) */}
                  <div className="absolute top-[30%] right-[30%] w-[270px] h-[240px] border border-bauble-blue/30 bg-black/30 backdrop-blur-xl border border-white/10 shadow-xl rounded-lg p-5 shadow-[0_0_30px_rgba(105,104,172,0.9)] group">
                     <div className="flex justify-between items-center mb-6">
                        <div className="w-1/2 h-3 bg-bauble-blue/80 rounded" />
                        <div className="w-4 h-4 rounded-full border border-bauble-blue/50 flex items-center justify-center group-hover:bg-bauble-blue/20 transition-colors" />
                     </div>
                     <div className="w-full h-24 bg-[linear-gradient(45deg,transparent_25%,rgba(105,104,172,1)_25%,rgba(105,104,172,0.1)_50%,transparent_50%,transparent_75%,rgba(105,104,172,0.1)_75%,rgba(105,104,172,0.1)_100%)] bg-[length:20px_20px] border border-bauble-blue/20 rounded mb-4" />
                     <div className="w-full h-2 bg-white/20 rounded mb-2" />
                     <div className="w-5/6 h-2 bg-white/10 rounded mb-2" />
                     <div className="w-4/6 h-2 bg-white/10 rounded" />
                  </div>
               </motion.div>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 md:left-[80%] w-[600px] h-[600px] bg-bauble-blue/25 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 z-0 pointer-events-none" />
      </section>

      <section className="px-10 max-w-7xl mx-auto mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 text-[10px] font-mono tracking-[0.2em] uppercase transition-all duration-300 border ${filter === f ? 'bg-white text-bauble-bg border-white shadow-[0_0_20px_rgba(17,17,17,0.7)]' : 'bg-transparent text-white/80 border-white/40 hover:border-bauble-blue/50 hover:text-bauble-blue hover:scale-105'}`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((c, i) => (
             <motion.div 
               key={i} 
               layout
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: false, amount: 0.1 }}
               transition={{ duration: 0.5, delay: i * 0.05 }}
               className="group cursor-pointer hover:scale-[1.02] transition-all duration-500" 
               onClick={() => setSelectedItem(c)}
             >
              <div className="aspect-[4/5] bg-black/30 backdrop-blur-2xl border border-white/10 shadow-xl relative overflow-hidden mb-6 group-hover:border-bauble-blue/30 group-hover:shadow-[0_0_30px_rgba(105,104,172,0.6)] transition-all duration-500">
                <img src={c.image} alt={c.title} className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-bauble-bg via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-2xl border border-white/40 border border-white/10 px-3 py-1 text-[9px] uppercase tracking-[0.2em] text-white/70 font-mono">
                  {c.industry}
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-bauble-blue transition-colors">
                  {c.title}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.1em] text-white/70 font-mono">
                  {c.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-10 max-w-4xl mx-auto text-center space-y-8 pt-24 border-t border-white/10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Ready to be our next success story?</h2>
          <div className="pt-8">
            <button 
              onClick={() => {
                if (onNavigate) {
                  onNavigate("CONTACT");
                  window.scrollTo(0, 0);
                }
              }}
              className="group inline-flex items-center gap-3 bg-bauble-blue px-10 py-5 text-[12px] font-bold tracking-[0.2em] text-[#fcfcfc] btn-primary"
            >
              START YOUR PROJECT <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
