"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type GradientCardProps = {
  title: string;
  accent: string;
  delay?: number;
  children: ReactNode;
};

export function GradientShowcaseCard({ title, accent, delay = 0, children }: GradientCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="group relative min-h-[15rem]"
    >
      <span className="absolute inset-y-3 left-6 w-[calc(100%-3rem)] -skew-x-6 rounded-2xl opacity-45 blur-2xl transition duration-500 group-hover:inset-y-1 group-hover:left-2 group-hover:w-[calc(100%-1rem)] group-hover:skew-x-0" style={{ background: `linear-gradient(135deg, ${accent}65, transparent 72%)` }} />
      <span className="absolute inset-y-1 left-4 w-[calc(100%-2rem)] -skew-x-6 rounded-2xl opacity-80 transition duration-500 group-hover:inset-y-0 group-hover:left-0 group-hover:w-full group-hover:skew-x-0" style={{ background: `linear-gradient(135deg, ${accent}33, rgba(11,16,32,.96) 62%)` }} />
      <span className="pointer-events-none absolute -left-3 -top-3 size-16 rounded-full bg-white/10 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -bottom-3 -right-3 size-20 rounded-full opacity-0 blur-md transition duration-500 group-hover:opacity-100" style={{ backgroundColor: `${accent}55` }} />
      <div className="relative z-10 h-full rounded-2xl border border-white/15 bg-[#0b1020]/85 p-5 text-white backdrop-blur-md transition duration-500 group-hover:-translate-y-1 group-hover:border-white/30 group-hover:bg-[#0e1527]/95 group-hover:shadow-[0_20px_50px_rgba(0,0,0,.35)]">
        <h4 className="text-lg font-black" style={{ color: accent }}>{title}</h4>
        <div className="mt-4 text-sm leading-relaxed text-white/80 md:text-base">{children}</div>
      </div>
    </motion.div>
  );
}
