"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            },
        },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-8 md:px-12">
            {/* Animated Background Mesh */}
            <div className="absolute inset-0 gradient-mesh opacity-60"></div>

            {/* Floating orbs */}
            <motion.div
                className="absolute top-20 right-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl"
                animate={{
                    y: [0, 30, 0],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"
                animate={{
                    y: [0, -40, 0],
                    x: [0, -20, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="relative z-10 max-w-6xl mx-auto text-center"
            >
                {/* Badge */}
                <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-slate-200/20">
                    <Sparkles className="w-4 h-4 text-primary-light" />
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        Premium Tech Stack 2024
                    </span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    variants={item}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                    style={{ fontFamily: "var(--font-display)" }}
                >
                    Websites that
                    <br />
                    <span className="bg-gradient-to-r from-primary via-secondary to-primary-light bg-clip-text text-transparent">
                        Impress
                    </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={item}
                    className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed"
                >
                    Built with <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and{" "}
                    <strong>Framer Motion</strong>. The international standard for high-level landing pages.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 flex items-center gap-2"
                    >
                        View Demo
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 glass border border-slate-300/30 dark:border-slate-700/50 font-semibold rounded-full hover:bg-slate-100/50 dark:hover:bg-slate-800/50 transition-all duration-300"
                    >
                        Learn More
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={container}
                    className="grid grid-cols-3 gap-4 md:gap-8 mt-20 max-w-2xl mx-auto"
                >
                    {[
                        { value: "100%", label: "Performance Score" },
                        { value: "0ms", label: "Load Time" },
                        { value: "∞", label: "Possibilities" },
                    ].map((stat, index) => (
                        <motion.div key={index} variants={item} className="text-center">
                            <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
