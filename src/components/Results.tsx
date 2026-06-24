<<<<<<< HEAD
const aiTasks = [
  "Document intake and extraction",
  "Workflow routing and task triggers",
  "Reconciliation at 99.7% match accuracy",
  "First-pass reports and journal entries",
  "Anomaly and exception flagging",
];

const expertTasks = [
  "Technical accounting judgment",
  "Review, sign-off, and final accountability",
  "Complex transactions and exceptions",
  "Controls remediation and audit defense",
  "Client communication and decisions",
];

function TaskColumn({ title, label, tasks, footer, accent }: { title: string; label: string; tasks: string[]; footer: string; accent: string }) {
  return (
    <article className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0b1020]/85 p-6 md:p-8" style={{ boxShadow: `inset 0 1px 0 ${accent}22` }}>
      <div className="absolute -right-16 -top-16 size-48 rounded-full blur-3xl" style={{ backgroundColor: `${accent}33` }} />
      <div className="relative">
        <span className="text-xs font-bold uppercase tracking-[.2em]" style={{ color: accent }}>{label}</span>
        <h3 className="mt-3 text-2xl font-black leading-tight md:text-3xl">{title}</h3>
        <ul className="mt-7 space-y-0 border-t border-white/10">
          {tasks.map((task, index) => (
            <li key={task} className="flex gap-4 border-b border-white/10 py-4 text-sm leading-relaxed text-white/85 md:text-base">
              <span className="pt-0.5 text-xs font-bold" style={{ color: accent }}>0{index + 1}</span>
              <span>{task}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm font-semibold" style={{ color: accent }}>{footer}</p>
      </div>
    </article>
  );
}

export function Results() {
  return (
    <section id="work" className="relative overflow-hidden border-t border-white/10 bg-[#04060f] px-6 py-20 text-white md:px-12 md:py-28">
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.06)_1px,transparent_1px)] bg-[size:80px_80px]" />
      <div className="relative mx-auto max-w-[1200px]">
        <div className="max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-[.24em] text-[#7dd3fc]">How Hybrid works</span>
          <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight md:text-6xl">The science goes to <span className="text-brand-gradient-flow">AI.</span> The art stays with our experts.</h2>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-white/75 md:text-lg">Hybrid isn&apos;t &quot;people plus software.&quot; It&apos;s a structured operating model that routes every task to the layer that does it best — and a single dashboard where you see all of it.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <TaskColumn title="AI handles the science" label="Automation layer" tasks={aiTasks} footer="Powered by Iris, Atlas, Connector" accent="#2dd4bf" />
          <TaskColumn title="Senior practitioners handle the art" label="Expert layer" tasks={expertTasks} footer="Led by senior CPAs, controllers, and tax leads" accent="#a78bfa" />
        </div>

        <div className="mt-8 rounded-2xl border border-white/15 bg-white/[0.035] px-6 py-8 text-center md:px-10 md:py-10">
          <span className="text-xs font-bold uppercase tracking-[.2em] text-white/50">What changes for you</span>
          <p className="mt-3 text-xl font-bold text-white md:text-2xl">The result for your finance team:</p>
        </div>

        <div className="mt-8 text-center">
          <a href="#process" className="inline-flex items-center gap-2 text-sm font-bold text-[#7dd3fc] transition hover:text-white">
            That&apos;s the model. Here&apos;s why finance teams pick 4AT specifically <span aria-hidden="true">→</span>
          </a>
=======
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import fleetMaintenanceImg from "@/assets/fleet_maintenance.png";
import talentScreeningImg from "@/assets/talent_screening.png";
import customerSupportImg from "@/assets/customer_support.png";
import healthcareDiagnosticsImg from "@/assets/healthcare_diagnostics.png";
import contentPersonalizationImg from "@/assets/content_personalization.png";

const BENEFITS = [
  { title: "Faster execution on repeatable workflows", image: fleetMaintenanceImg },
  { title: "Human review where accuracy and judgment matter", image: talentScreeningImg },
  { title: "More control than pure outsourcing", image: customerSupportImg },
  { title: "More trust than AI-only automation", image: healthcareDiagnosticsImg },
  { title: "Scalable delivery without rebuilding internally", image: contentPersonalizationImg },
];

export function Results() {
  const [hoveredBenefit, setHoveredBenefit] = useState<string | null>(null);

  return (
    <section id="work" className="bg-transparent px-0 py-20 text-white">
      <div className="w-full">
        <div className="mb-12 w-full px-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-black leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(36px, 6vw, 76px)" }}
          >
            What <span className="text-brand-gradient">“hybrid”</span> means in practice.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 border-y border-white/10 bg-black/20 md:grid-cols-[65%_35%]">
          <div className="flex h-full flex-col border-r-0 border-white/10 md:border-r">
            <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-8 py-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">Hybrid Service Benefits</span>
              <span className="mr-8 text-[11px] font-bold uppercase tracking-widest text-zinc-400">Layer</span>
            </div>
            {BENEFITS.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                onMouseEnter={() => setHoveredBenefit(benefit.title)}
                onMouseLeave={() => setHoveredBenefit(null)}
                className="group relative flex flex-1 cursor-pointer items-center justify-between overflow-hidden border-b border-white/10 px-8 py-5 last:border-0"
              >
                <div className="absolute left-0 top-0 z-0 h-0 w-full bg-black transition-all duration-300 ease-out group-hover:h-1/2" />
                <div className="absolute bottom-0 left-0 z-0 h-0 w-full bg-black transition-all duration-300 ease-out group-hover:h-1/2" />
                <div className="relative z-10 flex w-full items-center justify-between pointer-events-none">
                  <span className="text-sm font-black tracking-tight text-white transition-colors duration-300 lg:text-base">{benefit.title}</span>
                  <div className="flex items-center gap-6">
                    <span className="text-sm font-semibold text-zinc-400 transition-colors duration-300 group-hover:text-zinc-300">4AT</span>
                    <ArrowUpRight className="size-4 text-zinc-400 transition-transform duration-300 group-hover:rotate-45 group-hover:text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col justify-between bg-white/[0.03] p-8">
            <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400">The structured operating model</span>
            <p className="my-8 text-base leading-relaxed text-white/75">
              Hybrid Services is not just people plus software. It is a structured operating model that assigns work to the right execution layer — AI for repeatable, high-volume tasks; experienced professionals for review, exceptions, complex decisions, and client accountability.
            </p>
            <div className="relative mx-auto flex aspect-[4/3] w-full max-w-[320px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#2dd4bf]/35 via-[#7dd3fc]/20 to-[#a78bfa]/35 shadow-md">
              {BENEFITS.map((benefit, index) => (
                <img
                  key={benefit.title}
                  src={benefit.image.src}
                  alt={benefit.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${hoveredBenefit === benefit.title || (!hoveredBenefit && index === 0) ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
                />
              ))}
              <div className="absolute inset-0 bg-black/55" />
              <div className={`relative flex flex-col items-center text-center transition-all duration-300 ${hoveredBenefit ? "translate-y-3 opacity-0" : "translate-y-0 opacity-100"}`}>
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/65">AI + Expertise</span>
                <span className="mt-3 text-3xl font-black text-white">4AT Hybrid</span>
              </div>
            </div>
          </div>
>>>>>>> 931f703bc60bfd0a0a14ef5856aed5c013f11bb4
        </div>
      </div>
    </section>
  );
}
