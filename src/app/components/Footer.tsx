import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <p className="text-sm text-[#3f3f46]">
            Designed & Developed by{" "}
            <span className="text-[#71717a]">Aditya Singh</span>
          </p>
          <p className="text-xs text-[#27272a] mt-1 font-mono">
            Building secure and scalable AI systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2 text-xs font-mono text-[#27272a]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#6366f1]/60" />
          <span>GenAI · RAG · ML · RL</span>
        </motion.div>
      </div>
    </footer>
  );
}
