import React from "react";
import { motion } from "motion/react";
import { CaseSensitive, PieChart, Palette, Target, ShoppingBag, BarChart3 } from "lucide-react";

export function ServicesSnapshot({ onNavigate }: { onNavigate?: (page: string, anchor?: string) => void }) {
  const services = [
    {
      id: "01",
      title: "Naming, Messaging & Pitch Decks",
      desc: "Brand name development, tagline, tone of voice & investor-ready pitch deck.",
      icon: <CaseSensitive className="w-5 h-5 text-bauble-blue group-hover:scale-110 transition-transform" />,
      anchor: "package-e"
    },
    {
      id: "02",
      title: "Business Development Plan",
      desc: "Investor-ready plans with market research, revenue modelling & go-to-market strategy.",
      icon: <PieChart className="w-5 h-5 text-bauble-blue group-hover:scale-110 transition-transform" />,
      anchor: "package-c"
    },
    {
      id: "03",
      title: "Brand Identity Design",
      desc: "Logo, colour palette, typography, packaging & complete brand guidelines.",
      icon: <Palette className="w-5 h-5 text-bauble-blue group-hover:scale-110 transition-transform" />,
      anchor: "package-b"
    },
    {
      id: "04",
      title: "Marketing Plan Development",
      desc: "Channel strategy, content calendar, ad creative direction & KPI framework.",
      icon: <Target className="w-5 h-5 text-bauble-blue group-hover:scale-110 transition-transform" />,
      anchor: "package-c"
    },
    {
      id: "05",
      title: "E-Commerce Development",
      desc: "Shopify & WooCommerce store builds with conversion-optimised copywriting.",
      icon: <ShoppingBag className="w-5 h-5 text-bauble-blue group-hover:scale-110 transition-transform" />,
      anchor: "package-a"
    },
    {
      id: "06",
      title: "Ad Account Management",
      desc: "Meta, TikTok & Google Ads setup, management & monthly optimisation.",
      icon: <BarChart3 className="w-5 h-5 text-bauble-blue group-hover:scale-110 transition-transform" />,
      anchor: "package-d"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-5 md:px-10 relative z-20 bg-black bg-pattern-lines border-y border-white/40 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 transform-gpu"
        >
          <div className="flex items-center gap-3 text-[9px] tracking-[0.3em] text-white uppercase mb-4">
            <span className="text-bauble-blue italic">→</span> SERVICES SNAPSHOT
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Everything a Brand Needs to Launch and Lead
          </h2>
          <p className="text-white/80 font-mono text-xs md:text-sm uppercase tracking-widest leading-relaxed">
            Six core service areas. One seamless relationship. No handoffs, no gaps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, idx) => (
            <motion.div 
              key={service.id} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => onNavigate?.("SERVICES", service.anchor)}
              className="border border-white/10 group relative bg-black/30 backdrop-blur-xl shadow-xl p-6 hover:bg-black/60 transition-all duration-500 hover:border-bauble-blue/50 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(105,104,172,0.5)] overflow-hidden cursor-pointer transform-gpu safari-optimization"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-bauble-blue/5 rounded-full blur-2xl group-hover:bg-bauble-blue/15 transition-all duration-500" />
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="text-bauble-blue font-mono font-bold text-sm bg-bauble-blue/10 px-3 py-1 inline-block">
                    PHASE {service.id}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center group-hover:border-bauble-blue/40 transition-colors">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-3 leading-tight group-hover:text-bauble-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-white/50 font-sans text-xs leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
