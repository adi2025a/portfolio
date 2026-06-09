import { motion } from "motion/react";
import { Brain, TrendingUp, Code2 } from "lucide-react";
import { timeline } from "../portfolioData";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  brain: Brain,
  "trending-up": TrendingUp,
  "code-2": Code2,
};

export function Timeline() {
  return (
    <section id="journey" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#6366f1] tracking-widest uppercase">Journey</span>
          <h2 className="text-3xl md:text-4xl text-white mt-2" style={{ fontWeight: 600, lineHeight: 1.2 }}>
            Learning path
          </h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => {
              const Icon = iconMap[item.icon] || Brain;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isLeft ? -32 : 32 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className={`relative flex items-start gap-6 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} pl-14 md:pl-0`}
                >
                  {/* Node dot */}
                  <div className="absolute left-6 md:left-1/2 top-5 w-3 h-3 rounded-full bg-[#6366f1] border-2 border-[#09090b] -translate-x-1/2 z-10" />

                  <div className={`md:w-[calc(50%-3rem)] ${isLeft ? "md:text-right" : "md:text-left"}`}>
                    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 group hover:border-[#6366f1]/20 transition-all duration-300">
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div className="w-8 h-8 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center">
                          <Icon size={14} className="text-[#6366f1]" />
                        </div>
                        <span className="font-mono text-xs text-[#52525b]">{item.year}</span>
                      </div>

                      <h3 className="text-white mb-2" style={{ fontWeight: 500, fontSize: "0.95rem" }}>{item.title}</h3>
                      <p className="text-sm text-[#71717a] mb-4">{item.description}</p>

                      <div className={`flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {item.topics.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-xs font-mono text-[#6366f1] bg-[#6366f1]/10 border border-[#6366f1]/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-[calc(50%-3rem)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
