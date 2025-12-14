"use client";

import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import { Zap, Palette, Code2, Rocket, Sparkles, Globe } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Performance Extrema",
      description: "Next.js 14+ com Server Components e otimização automática. Lighthouse 100/100.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Palette,
      title: "Design Premium",
      description: "Tailwind CSS v4 com sistema de design customizado. Glassmorphism e gradientes.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "TypeScript Strict",
      description: "Type safety completo. Código robusto e manutenível para projetos escaláveis.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "Animações Fluidas",
      description: "Framer Motion para micro-interações. 60fps garantido em todas as animações.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Rocket,
      title: "Deploy Instantâneo",
      description: "Vercel Edge Network. CDN global com cache inteligente e rollback automático.",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: Globe,
      title: "SEO Otimizado",
      description: "Meta tags dinâmicas, sitemap automático e Core Web Vitals perfeitos.",
      gradient: "from-rose-400 to-red-600",
    },
  ];

  return (
    <div className="relative">
      {/* Floating Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 glass rounded-full border border-slate-200/20 shadow-xl">
        <div className="flex items-center gap-8">
          <span className="font-bold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Premium LP
          </span>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700 dark:text-slate-300">
            <a href="#features" className="hover:text-primary transition-colors">Features</a>
            <a href="#tech" className="hover:text-primary transition-colors">Tech Stack</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contato</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="relative py-32 px-6 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Stack <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Internacional</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              As mesmas tecnologias usadas por startups do Vale do Silício e agências de Nova York
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                gradient={feature.gradient}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>Criado com Next.js, Tailwind CSS e Framer Motion</p>
          <p className="mt-2 text-sm">Demonstração de stack premium para Landing Pages internacionais</p>
        </div>
      </footer>
    </div>
  );
}

