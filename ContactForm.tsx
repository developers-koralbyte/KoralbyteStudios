import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function USPBar() {
  return (
    <div className="border-y border-white/30 py-8 md:py-12 px-5 md:px-10 bg-black bg-pattern-lines overflow-hidden relative z-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8 text-center md:text-left">
        <h2 className="text-2xl md:text-3xl lg:text-[2vw] font-bold text-white uppercase tracking-tight">
          You bring the idea.
        </h2>
        <div className="hidden md:block w-16 h-[1px] bg-bauble-blue" />
        <h2 className="text-2xl md:text-3xl lg:text-[2vw] font-bold text-bauble-blue uppercase tracking-tight">
          We build the brand that sells it.
        </h2>
      </div>
    </div>
  );
}
