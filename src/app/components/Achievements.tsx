import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Code2, Layers, Brain, TrendingUp } from "lucide-react";
import { achievements } from "../portfolioData";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  "code-2": Code2,
  layers: Layers,
  brain: Brain,
  "trending-up": TrendingUp,
};

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1200;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current = Math.min(current + increment, value);
      setCount(Math.floor(current));
      if (current >= value) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#6366f1] tracking-widest uppercase">Achievements</span>
          <h2 className="text-3xl md:text-4xl text-white mt-2" style={{ fontWeight: 600, lineHeight: 1.2 }}>
            By the numbers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((ach, i) => {
            const Icon = iconMap[ach.icon] || Brain;
            return (
              <motion.div
                key={ach.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center hover:border-[#6366f1]/20 hover:bg-[#6366f1]/[0.02] transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-[#6366f1]/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className="w-10 h-10 rounded-xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center mx-auto mb-4">
                  <Icon size={18} className="text-[#6366f1]" />
                </div>

                <div
                  className="text-3xl text-white mb-2 tabular-nums"
                  style={{ fontWeight: 700, fontFamily: "'Geist Mono', monospace" }}
                >
                  <Counter value={ach.value} suffix={ach.suffix} />
                </div>

                <div className="text-sm text-[#52525b] leading-snug">{ach.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
