export type PortfolioItem = {
  title: string;
  category: string;
  image: string;
  industry: string;
  fullImages?: string[];
  challenge?: string;
  solution?: string;
};

export const portfolioCases: PortfolioItem[] = [
  { title: "NourishMY", category: "Strategy", image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800", industry: "F&B" },
  { title: "TechBrand", category: "Identity", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800", industry: "Tech" },
  { title: "ScaleCom", category: "Growth", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800", industry: "E-Commerce" },
  { title: "Lumina", category: "Identity", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800", industry: "Consumer Goods" },
  { title: "AuraHealth", category: "Strategy", image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800", industry: "Health" },
  { title: "Velocity", category: "Growth", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800", industry: "SaaS" },
];
