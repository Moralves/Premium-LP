"use client";

import HeroSection from "@/components/HeroSection";
import FeatureCard from "@/components/FeatureCard";
import ContactForm from "@/components/ContactForm";
import { Zap, Palette, Code2, Rocket, Sparkles, Globe } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "Extreme Performance",
      description: "Next.js 14+ with Server Components and automatic optimization. Lighthouse 100/100.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      icon: Palette,
      title: "Premium Design",
      description: "Tailwind CSS v4 with custom design system. Glassmorphism and gradients.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      title: "Strict TypeScript",
      description: "Complete type safety. Robust and maintainable code for scalable projects.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "Fluid Animations",
      description: "Framer Motion for micro-interactions. 60fps guaranteed in all animations.",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Rocket,
      title: "Instant Deploy",
      description: "Vercel Edge Network. Global CDN with smart caching and automatic rollback.",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: Globe,
      title: "SEO Optimized",
      description: "Dynamic meta tags, automatic sitemap and perfect Core Web Vitals.",
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
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="relative py-32 px-8 md:px-12 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>
              International <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Stack</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              The same technologies used by Silicon Valley startups and New York agencies
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

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-8 md:px-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 -z-10"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 -z-10"></div>

        <div className="max-w-7xl mx-auto">
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto text-center text-slate-600 dark:text-slate-400">
          <p>Created with Next.js, Tailwind CSS and Framer Motion</p>
          <p className="mt-2 text-sm">Premium stack demo for international Landing Pages</p>
        </div>
      </footer>
    </div>
  );
}

