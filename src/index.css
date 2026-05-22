@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Poppins", ui-sans-serif, system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, SFMono-Regular, monospace;
  
  --color-bauble-blue: #6968AC;
  --color-bauble-bg: #F2F0E6;
  --color-white: #111111;
  --color-black: #fcfcfc;

  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
}

@layer base {
  body {
    @apply bg-bauble-bg text-white font-mono selection:bg-bauble-blue selection:text-white;
  }
}

@layer utilities {
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .custom-scrollbar::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: rgba(26,26,26,0.02); 
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background: rgba(26,26,26,0.1); 
  }
  .custom-scrollbar::-webkit-scrollbar-thumb:hover {
    background: rgba(105,104,172,0.5); 
  }

  .btn-primary {
    @apply relative overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_30px_rgba(105,104,172,1)] transform-gpu will-change-transform;
  }
  
  .btn-primary::after {
    content: "";
    @apply absolute inset-0 bg-white/0 hover:bg-white/5 transition-colors duration-500;
  }

  .will-change-transform {
    will-change: transform;
  }

  .will-change-opacity {
    will-change: opacity;
  }

  .transform-gpu {
    transform: translate3d(0, 0, 0);
  }

  .safari-optimization {
    transform: translateZ(0);
    backface-visibility: hidden;
    perspective: 1000px;
    isolation: isolate;
  }
}

@layer utilities {
  .bg-pattern-abstract {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='black' stroke-width='0.2' stroke-opacity='0.15' fill='none'%3E%3Cpath d='M0 0 L100 100 M100 0 L0 100 M25 0 L75 100 M75 0 L25 100 M50 0 L50 100 M0 50 L100 50 M0 25 L100 75 M0 75 L100 25'/%3E%3Ccircle cx='50' cy='50' r='1' fill='black' fill-opacity='0.15'/%3E%3Ccircle cx='25' cy='25' r='0.5' fill='black' fill-opacity='0.1'/%3E%3Ccircle cx='75' cy='75' r='0.5' fill='black' fill-opacity='0.1'/%3E%3Ccircle cx='75' cy='25' r='0.5' fill='black' fill-opacity='0.1'/%3E%3Ccircle cx='25' cy='75' r='0.5' fill='black' fill-opacity='0.1'/%3E%3C/g%3E%3C/svg%3E");
    background-size: 100px 100px;
    background-repeat: repeat;
  }
  .bg-pattern-lines {
    background-image: radial-gradient(rgba(17,17,17,0.05) 1px, transparent 1px);
    background-size: 32px 32px;
  }
  .text-striped {
    position: relative;
    color: var(--color-white);
    background: transparent;
    -webkit-text-stroke: 0px;
    -webkit-background-clip: unset;
    background-clip: border-box;
  }

  .text-striped-blue {
    position: relative;
    color: var(--color-bauble-blue);
    background: transparent;
    -webkit-text-stroke: 0px;
    -webkit-background-clip: unset;
    background-clip: border-box;
  }
}
