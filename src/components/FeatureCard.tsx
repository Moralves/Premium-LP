"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient?: string;
}

export default function FeatureCard({ icon: Icon, title, description, gradient = "from-primary to-secondary" }: FeatureCardProps) {
    return (
        <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative group p-8 rounded-2xl glass border border-slate-200/20 dark:border-slate-800/50 hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300"
        >
            {/* Gradient border effect on hover */}
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

            {/* Icon with gradient background */}
            <motion.div
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.3 }}
                className={`relative inline-flex p-4 mb-6 rounded-xl bg-gradient-to-br ${gradient} shadow-lg`}
            >
                <Icon className="w-6 h-6 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text transition-all duration-300">
                {title}
            </h3>

            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {description}
            </p>

            {/* Animated corner accent */}
            <motion.div
                className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
            />
        </motion.div>
    );
}
