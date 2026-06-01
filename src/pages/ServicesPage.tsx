import React from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

export function ServicesPage({ onNavigate }: { onNavigate?: (page: string, anchor?: string) => void }) {
  const packages = [
    {
      id: "package-a",
      title: "The Launchpad",
      for: "For Idea-Stage Founders",
      desc: "You have an idea and the drive to build something real. This package gives you everything you need to go from concept to a fully investable, launchable brand. Including strategy, identity, and the story that sells it.",
      included: [
        "USP Discovery & Brand Positioning Workshop",
        "Full Business Plan (investor-ready, 15-30 pages)",
        "Full Marketing Plan (12-month, platform-by-platform)",
        "Complete Brand Identity (logo, colours, fonts, brand guidelines)",
        "Packaging Design (up to 3 SKUs)",
        "Launch Campaign Strategy Brief"
      ],
      investment: "USD 4,990",
      delivery: "4-6 weeks",
      bestFor: "Entrepreneurs who are starting from scratch and need a complete brand foundation before going to market or approaching investors.",
      walkAway: [
        "A business model that holds up to investor scrutiny",
        "A brand identity that looks world-class from day one",
        "A marketing plan so you know exactly where to spend",
        "A positioning statement that makes you impossible to ignore"
      ]
    },
    {
      id: "package-b",
      title: "The Identity Builder",
      for: "For Businesses That Need a Visual Identity to Match Their Ambition",
      desc: "You know what your business does but your brand doesn't show it. This package gives you a complete, professional visual identity system that makes you look like the category leader you are becoming.",
      included: [
        "Brand Discovery Session",
        "Primary & Secondary Logo Suite",
        "Brand Colour Palette & Typography System",
        "Complete Brand Guidelines Document",
        "Stationery & Digital Asset Templates",
        "Social Media Profile Kit"
      ],
      investment: "USD 5,449",
      delivery: "3-4 weeks",
      bestFor: "Businesses that already have clarity on their strategy and market but whose brand visuals are weak, outdated, or non-existent.",
      walkAway: [
        "A logo you are proud to put on everything",
        "A consistent visual language across all platforms",
        "Brand guidelines your team can actually follow",
        "A professional first impression that builds trust instantly"
      ]
    },
    {
      id: "package-c",
      title: "The Strategy Accelerator",
      for: "For Founders Who Need Strategic Clarity and a Clear Path to Market",
      desc: "You are ready to move but you need a plan that actually holds up. This package delivers the strategic foundation your business needs: a clear understanding of your market, your competitors, and exactly how to position and grow your brand.",
      included: [
        "Market Research & Competitive Analysis",
        "USP Development & Positioning Statement",
        "Full Business Plan",
        "Full Marketing Plan with channel breakdowns",
        "Ad Creative Direction & Content Calendar Framework"
      ],
      investment: "USD 3,990",
      delivery: "3-4 weeks",
      bestFor: "Businesses that have a product or service ready but lack the strategic documentation needed to grow, raise funding, or enter new markets confidently.",
      walkAway: [
        "A business plan that satisfies investors and partners",
        "A 12-month marketing roadmap with channel-level detail",
        "A competitor analysis that reveals your real opportunities",
        "Zero guesswork on where to focus your energy and budget"
      ]
    },
    {
      id: "package-e",
      title: "The Brand Voice",
      for: "For Founders Who Need a Name, a Voice, and a Story That Wins",
      desc: "Before you design a logo or launch a campaign, you need to know what your brand sounds like and what story it tells. This package gives you the words, the name, and the narrative that makes investors listen and customers trust.",
      included: [
        "Brand Name Development (up to 5 name concepts with rationale)",
        "Tagline Creation & Brand Tone of Voice Guidelines",
        "Messaging Hierarchy (how to talk to investors, customers, and partners)",
        "Investor/Partner Pitch Deck (12-18 slides, full strategic narrative + premium design)",
        "One-Pager / Executive Summary Document for distribution"
      ],
      investment: "USD 2,490",
      delivery: "2-3 weeks",
      bestFor: "Pre-launch founders who need to nail their brand name and story before anything else. Especially those preparing for investor meetings or market entry.",
      walkAway: [
        "A brand name that is memorable, available, and market-ready",
        "A pitch deck that wins rooms, not just looks good",
        "A clear, consistent brand voice for every channel",
        "A one-pager you can send to any stakeholder with confidence"
      ]
    },
    {
      id: "package-d",
      title: "The Growth Engine",
      for: "For Brands Ready to Scale With Consistent Monthly Support",
      desc: "You have a brand. Now you need it to grow every month, consistently, with the right strategy behind every ad and every post. This is your ongoing growth partner.",
      included: [
        "Ad Account Management (Meta + TikTok + Google)",
        "Monthly Content & Creative Direction",
        "Performance Reporting & Monthly Strategy Reviews",
        "E-Commerce Optimisation"
      ],
      investment: "USD 1,490 / month",
      delivery: "3-month minimum engagement",
      bestFor: "Brands that have their identity and strategy in place and now need a reliable partner to run their ads, manage their growth, and report back with clarity every month.",
      walkAway: [
        "Ad accounts that actually perform and improve month over month",
        "Monthly creative direction that keeps your brand consistent",
        "Clear performance reports so you always know your ROI",
        "A growth partner, not just an agency that sends invoices"
      ]
    },
    {
      id: "package-f",
      title: "The Creative Engine",
      for: "For Brands That Want to Look World-Class on Social and Convert Through Ads",
      desc: "Your brand is live but your social media looks inconsistent and your ads are not converting. This monthly package gives you the creative direction and ad management to fix both, every single month.",
      included: [
        "Monthly Visual Aesthetic Strategy (mood boards, colour direction, visual tone per platform)",
        "Content Format Templates (Reels, Stories, Feed Posts, TikToks) for brand consistency",
        "Full social media management across Instagram, TikTok, and Facebook (posting, scheduling, captions)",
        "Full Ad Account Management across Meta, TikTok Ads, and Google Ads",
        "Monthly Performance Report with strategic recommendations"
      ],
      investment: "USD 1,990 / month",
      delivery: "3-month minimum engagement",
      bestFor: "Business owners and founders who want a world-class social media presence and high-performing ads but have no interest in managing it themselves. You get an entire creative team without the cost of hiring one.",
      walkAway: [
        "A fully managed social media presence that looks consistent and professional every week",
        "Ads that actively stay true to your brand identity",
        "Performance data that actually informs next month's strategy",
        "One consistent creative vision across every platform"
      ]
    }
  ];

  return (
    <div className="relative z-20 pt-16 md:pt-24 pb-20 md:pb-32">
      {/* Hero */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-16 md:mb-32 relative">
         <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left z-10 relative">

               <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight md:leading-[1.1]">
                 Everything Your Brand Needs. <br className="hidden md:block"/><span className="text-bauble-blue">Under One Roof.</span>
               </h1>
               <p className="text-white/90 font-mono text-base md:text-xl max-w-2xl leading-relaxed mx-auto md:mx-0">
                 From the strategy that defines you to the identity that represents you, every service is built to work together.
               </p>
            </div>
            <div className="md:w-[400px] flex justify-center z-10 perspective-1000 transform-gpu">
               <div className="relative w-[280px] h-[300px] transform-gpu hover:-rotate-12 hover:scale-105 transition-all duration-700">
                  {/* Base Platform */}
                  <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[240px] h-[40px] border border-bauble-blue/40 bg-black/40 backdrop-blur-2xl border-white/20 shadow-2xl rotate-x-60 -skew-x-12 shadow-[0_20px_40px_rgba(105,104,172,1)] flex items-center justify-center transform-gpu">
                     <div className="grid grid-cols-3 gap-2 w-full h-full p-2 opacity-30">
                        <div className="border border-white/40" />
                        <div className="border border-white/50" />
                        <div className="border border-white/20" />
                     </div>
                  </div>
                  {/* Block 1 */}
                  <div className="absolute bottom-[25%] left-[20%] w-[80px] h-[100px] border border-white/20 bg-bauble-bg/90 backdrop-blur-sm -translate-y-4 group transition-transform duration-500 hover:-translate-y-8">
                     <div className="absolute top-0 right-0 w-2 h-full bg-black/40" />
                     <div className="absolute bottom-0 left-0 w-full h-2 bg-black" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border border-bauble-blue/50 rounded-full" />
                     </div>
                  </div>
                  {/* Block 2 */}
                  <div className="absolute bottom-[35%] left-[55%] w-[80px] h-[140px] border border-bauble-blue/40 bg-bauble-blue/10 backdrop-blur-sm group transition-transform duration-500 hover:-translate-y-8 shadow-[0_0_20px_rgba(105,104,172,0.9)]">
                     <div className="absolute top-0 right-0 w-2 h-full bg-bauble-blue/30" />
                     <div className="absolute bottom-0 left-0 w-full h-2 bg-bauble-blue/20" />
                     <div className="absolute inset-0 flex items-center justify-center flex-col gap-2">
                        <div className="w-8 h-2 bg-bauble-blue/60" />
                        <div className="w-6 h-2 bg-bauble-blue/40" />
                     </div>
                  </div>
                  {/* Block 3 - Floating down */}
                  <div className="absolute top-[10%] left-[30%] w-[100px] h-[80px] border border-white/60 bg-black/90 backdrop-blur-sm group animate-[bounce_4s_infinite]">
                     <div className="absolute top-0 right-0 w-2 h-full bg-white/10" />
                     <div className="absolute bottom-0 left-0 w-full h-2 bg-white/10" />
                     <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[1px] h-8 bg-bauble-blue/50 border-r border-dashed border-bauble-blue" />
                     <div className="absolute inset-0 flex items-center justify-center text-bauble-blue border-bauble-blue/50 font-bold opacity-50">+</div>
                  </div>
               </div>
            </div>
         </div>
         <div className="absolute top-1/2 left-1/2 md:left-[80%] w-[600px] h-[600px] bg-bauble-blue/25 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 z-0" />
      </section>

      {/* Intro */}
      <section className="px-5 md:px-10 py-24 md:py-40 bg-black border-y border-white/20 mb-24 md:mb-40">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
            We Don't Just Deliver Services. <br className="hidden md:block" />We Build Outcomes.
          </h2>
          <p className="text-white/90 font-sans text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
            Most agencies sell you a service. We sell you the result. Everything starts with understanding where you are, where you need to go, and what combination of strategy, identity, and marketing will get you there. Our services are designed to work individually, but they are most powerful when combined.
          </p>
        </div>
      </section>

      {/* Individual Packages */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto space-y-12 md:space-y-16 mb-32 md:mb-48">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">Individual Service Packages</h2>
          <p className="text-white/60 font-sans text-base md:text-lg">Find the Right Package for Where You Are</p>
          <p className="text-white/70 font-sans text-xs md:text-sm max-w-2xl mx-auto">All packages can be mixed, matched, and scaled. Not sure which one fits? Start with a Brand Audit.</p>
        </div>

        <div className="flex flex-col gap-12 md:gap-40">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={idx}
              id={pkg.id}
              initial="initial"
              whileInView="focused"
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              variants={{
                initial: { opacity: 0.3, scale: 0.98 },
                focused: { opacity: 1, scale: 1 }
              }}
              className="group relative border border-white/30 bg-black/30 backdrop-blur-xl border border-white/10 shadow-xl p-6 py-12 md:p-20 overflow-hidden hover:border-bauble-blue/40 transition-colors duration-700 transform-gpu will-change-transform"
            >
              {/* Focus Glow Effect - Triggered on focus/hover and on-view for mobile */}
              <motion.div 
                variants={{
                  initial: { opacity: 0 },
                  focused: { opacity: 1 }
                }}
                transition={{ duration: 1 }}
                className="absolute top-0 right-0 w-[600px] h-[600px] bg-bauble-blue/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" 
              />
              <div className="absolute -inset-[1px] bg-gradient-to-r from-bauble-blue/0 via-bauble-blue/10 to-bauble-blue/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-10 lg:gap-20">
                {/* Left side: Basic info */}
                <div className="lg:w-1/3 space-y-4 md:space-y-6">
                  <div className="space-y-3 md:space-y-4">
                    <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-bauble-blue uppercase opacity-60">Package {String.fromCharCode(65 + idx)}</div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight group-hover:text-bauble-blue transition-colors duration-500">{pkg.title}</h3>
                    <div className="text-bauble-blue/80 font-bold text-xs md:text-sm italic">{pkg.for}</div>
                  </div>
                  
                  <p className="text-white/80 font-sans text-xs md:text-base leading-relaxed">{pkg.desc}</p>
                  
                  <div className="pt-4 md:pt-6 border-t border-white/40 space-y-2 md:space-y-3">
                    <div className="text-[9px] md:text-[10px] tracking-[0.2em] text-white/40 uppercase">Investment</div>
                    <div className="text-xl md:text-2xl font-bold text-white group-hover:text-bauble-blue transition-colors">{pkg.investment}</div>
                    <div className="text-[10px] md:text-xs text-white/40 font-mono">timeline: {pkg.delivery}</div>
                  </div>
                </div>

                {/* Right side: Detailed lists */}
                <div className="lg:w-2/3 grid md:grid-cols-2 gap-8 md:gap-16">
                  <div>
                    <h4 className="text-white font-bold text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-bauble-blue rounded-full" />
                       What's Included:
                    </h4>
                    <ul className="space-y-3 md:space-y-4">
                      {pkg.included.map((item, i) => (
                        <li key={i} className="text-white/80 font-sans text-[11px] md:text-sm flex items-start gap-3 group/item">
                          <span className="text-bauble-blue font-bold mt-0.5 opacity-40 group-hover/item:opacity-100">→</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    <div>
                      <h4 className="text-white font-bold text-xs md:text-sm mb-3 md:mb-4">Best For:</h4>
                      <p className="text-white/60 font-sans text-[11px] md:text-sm leading-relaxed italic border-l-2 border-bauble-blue/30 pl-4">
                        {pkg.bestFor}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-xs md:text-sm mb-3 md:mb-4">Strategic Outcomes:</h4>
                      <ul className="grid grid-cols-1 gap-2 md:gap-3">
                        {pkg.walkAway.map((item, i) => (
                          <li key={i} className="bg-white/5 border border-white/10 backdrop-blur-sm p-2 md:p-3 text-white/70 font-sans text-[9px] md:text-xs hover:border-bauble-blue/30 transition-all duration-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-10 md:mt-12 pt-8 border-t border-white/10 flex justify-start">
                <button 
                  onClick={() => onNavigate?.("CONTACT")}
                  className="group/btn flex justify-center items-center gap-3 bg-bauble-blue px-8 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-[12px] font-bold tracking-[0.2em] text-[#fcfcfc] w-full md:w-auto overflow-hidden relative hover:bg-transparent border border-bauble-blue hover:text-bauble-blue transition-all duration-300"
                >
                  START YOUR PROJECT <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hero Package */}
      <section className="px-5 md:px-10 max-w-7xl mx-auto mb-20 md:mb-40">
        <motion.div 
          initial={{ opacity: 0.5, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8 }}
          className="border border-orange-500/40 bg-orange-500/5 backdrop-blur-2xl p-6 py-12 md:p-20 relative overflow-hidden group shadow-[0_0_50px_rgba(249,115,22,0.1)] transform-gpu will-change-transform"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none will-change-transform" 
          />
          
          <div className="relative z-10 space-y-6 md:space-y-12">
            <div className="space-y-4 md:space-y-6 max-w-3xl">
               <div className="text-[9px] md:text-[10px] tracking-[0.2em] font-bold text-orange-500 uppercase">Hero Package</div>
               <h2 className="text-2xl md:text-5xl font-bold tracking-tight text-white leading-tight">The Complete Brand Launch System</h2>
               <p className="text-white/70 font-sans text-xs md:text-base leading-relaxed">
                 Our most flagship engagement. Built for founders and business owners who are serious about launching a brand that is built to win from day one. One team, one timeline, one outcome: a fully market-ready brand with the strategy, identity, messaging, and story it needs to compete and grow.
               </p>
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-5 md:py-8 border-y border-white/10">
              <div>
                <div className="text-[9px] md:text-[10px] tracking-[0.2em] text-white/40 uppercase mb-1 md:mb-2">Investment</div>
                <div className="text-lg md:text-2xl font-bold text-orange-500">USD 11,990</div>
              </div>
              <div className="hidden md:block w-[1px] h-12 bg-white/10" />
              <div>
                <div className="text-[9px] md:text-[10px] tracking-[0.2em] text-white/40 uppercase mb-1 md:mb-2">Delivered in</div>
                <div className="text-base md:text-lg font-bold text-white">8-12 weeks</div>
                <div className="text-[9px] md:text-xs text-white/200 font-mono mt-1">2 revision rounds per phase included</div>
              </div>
            </div>

            <div className="space-y-5 md:space-y-6">
              <h3 className="text-lg font-bold text-white">What's Included:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 items-start text-left">
                <div className="space-y-1 md:space-y-2">
                  <div className="font-bold text-white text-xs md:text-sm">Brand Name Development + Tagline + Tone of Voice Guidelines</div>
                  <div className="text-white/60 font-sans text-[10px] md:text-xs space-y-1">
                    <div>○ Up to 5 brand name concepts with strategic rationale</div>
                    <div>○ Tagline creation aligned to your brand positioning</div>
                    <div>○ Full tone of voice guidelines</div>
                    <div>○ Messaging hierarchy for investors, customers, and partners</div>
                  </div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <div className="font-bold text-white text-xs md:text-sm">USP Discovery & Brand Positioning Framework</div>
                  <div className="text-white/60 font-sans text-[10px] md:text-xs space-y-1">
                    <div>○ Structured brand intake and stakeholder discovery sessions</div>
                    <div>○ Deep competitive analysis across 3–5 direct competitors</div>
                    <div>○ Clear USP statement that owns a space in your market</div>
                    <div>○ Positioning framework your entire team can rally around</div>
                  </div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <div className="font-bold text-white text-xs md:text-sm">Investor Pitch Deck (12-18 slides)</div>
                  <div className="text-white/60 font-sans text-[10px] md:text-xs space-y-1">
                    <div>○ Full strategic narrative with investor-grade storytelling</div>
                  </div>
                </div>
                <div className="space-y-1 md:space-y-2">
                  <div className="font-bold text-white text-xs md:text-sm">Complete Brand Identity</div>
                  <div className="text-white/60 font-sans text-[10px] md:text-xs space-y-1">
                    <div>○ Primary and secondary logo suite</div>
                    <div>○ Brand colour palette and typography system</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <button 
                onClick={() => onNavigate?.("CONTACT")}
                className="group/btn flex justify-center items-center gap-3 bg-orange-500 border border-orange-500 px-6 sm:px-10 py-5 text-[10px] sm:text-[12px] font-bold tracking-[0.2em] text-[#fcfcfc] w-full md:w-auto overflow-hidden relative hover:bg-bauble-blue hover:border-bauble-blue transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2 group-hover/btn:text-white transition-colors">
                  START YOUR BRAND LAUNCH <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Comparison Table */}
      <section className="px-2 md:px-10 max-w-7xl mx-auto mb-20 md:mb-32">
        <div className="w-full rounded-lg border border-white/10 overflow-hidden bg-black/20 backdrop-blur-xl">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="bg-bauble-bg border-b border-bauble-blue/30 text-white font-bold text-[7px] sm:text-[10px] md:text-sm leading-tight">
                <th className="p-1 md:p-5 text-left border-r border-white/5 w-[22%]">Feature</th>
                <th className="p-1 md:p-5 text-center border-r border-white/30 text-bauble-blue">Launch.</th>
                <th className="p-1 md:p-5 text-center border-r border-white/5 opacity-70">Ident.</th>
                <th className="p-1 md:p-5 text-center border-r border-white/5 opacity-70">Strat.</th>
                <th className="p-1 md:p-5 text-center border-r border-white/5 opacity-70">Voice</th>
                <th className="p-1 md:p-5 text-center border-r border-white/5 opacity-70">Growth</th>
                <th className="p-1 md:p-5 text-center border-r border-white/5 opacity-70">Creat.</th>
                <th className="p-1 md:p-5 text-center font-black bg-white/5">Comp.</th>
              </tr>
            </thead>
            <tbody className="text-white/80 font-sans text-[7px] sm:text-[10px] md:text-sm">
              {[
                { label: "Business Plan", values: [true, false, true, false, false, false, true] },
                { label: "Marketing Plan", values: [true, false, true, false, false, false, true] },
                { label: "Brand Identity", values: [true, true, false, false, false, false, true] },
                { label: "USP Dev", values: [true, false, true, false, false, false, true] },
                { label: "Packaging", values: [true, false, false, false, false, false, true] },
                { label: "Naming & Voice", values: [false, false, false, true, false, false, true] },
                { label: "Pitch Deck", values: [false, false, false, true, false, false, true] },
                { label: "Ad Mgmt", values: [false, false, false, false, true, true, false] },
                { label: "Social", values: [false, false, false, false, false, true, false] },
                { label: "E-Comm", values: [false, false, false, false, true, false, false] },
                { label: "Retainer", values: [false, false, false, false, true, true, false] },
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="p-1 md:p-4 font-bold text-[7px] sm:text-[10px] md:text-sm border-r border-white/5 break-words">{row.label}</td>
                  {row.values.map((v, j) => (
                    <td key={j} className={`p-1 md:p-4 text-center font-bold text-bauble-blue text-xs sm:text-sm md:text-lg border-r border-white/5 ${j === row.values.length-1 ? 'bg-white/5' : ''}`}>
                      {v ? "✓" : <span className="text-white/10 font-normal text-[8px] md:text-base">-</span>}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="bg-white/5 backdrop-blur-2xl border-white/20">
                <td className="p-1 md:p-4 font-bold text-[7px] sm:text-[10px] md:text-sm border-r border-white/5">Price</td>
                <td className="p-0.5 md:p-4 text-center text-white/50 text-[6px] sm:text-[9px] md:text-xs font-mono border-r border-white/5 break-words">4,990</td>
                <td className="p-0.5 md:p-4 text-center text-white/50 text-[6px] sm:text-[9px] md:text-xs font-mono border-r border-white/5 break-words">5,449</td>
                <td className="p-0.5 md:p-4 text-center text-white/50 text-[6px] sm:text-[9px] md:text-xs font-mono border-r border-white/5 break-words">3,990</td>
                <td className="p-0.5 md:p-4 text-center text-white/50 text-[6px] sm:text-[9px] md:text-xs font-mono border-r border-white/5 break-words">2,490</td>
                <td className="p-0.5 md:p-4 text-center text-white/50 text-[6px] sm:text-[9px] md:text-xs font-mono border-r border-white/5 break-words">1,490/m</td>
                <td className="p-0.5 md:p-4 text-center text-white/50 text-[6px] sm:text-[9px] md:text-xs font-mono border-r border-white/5 break-words">1,990/m</td>
                <td className="p-0.5 md:p-4 text-center font-bold text-bauble-blue text-[6px] sm:text-[9px] md:text-xs font-mono bg-white/10 break-words">11,990</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-white/40 text-[10px] md:text-xs mt-4 italic font-mono px-3 md:px-0">* Growth Engine and Creative Engine are monthly retainer packages with 3-month minimum. All other packages are project-based.</p>
      </section>

      {/* Closing CTA */}
      <section className="px-5 md:px-10 max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">Not Sure Which Package Is Right for You?</h2>
        <p className="text-white/60 font-sans text-xs md:text-lg leading-relaxed max-w-2xl mx-auto">
          Start with a Brand Audit. For <span className="text-bauble-blue font-bold">USD 249</span> we will tell you exactly where your brand stands, what is holding it back, and which package will move it forward.
        </p>
        <div className="pt-4 md:pt-8 flex justify-center">
          <button 
            onClick={() => onNavigate?.("BRAND AUDIT")}
            className="group flex justify-center items-center gap-3 bg-bauble-blue px-6 sm:px-10 py-4 sm:py-5 text-[10px] sm:text-[12px] font-bold tracking-[0.2em] text-[#fcfcfc] btn-primary w-full sm:w-auto"
          >
            GET YOUR BRAND AUDITED <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </section>
    </div>
  );
}
