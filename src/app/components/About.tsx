import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";
import { profile } from "../portfolioData";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#6366f1] tracking-widest uppercase">About</span>
          <h2 className="text-3xl md:text-4xl text-white mt-2" style={{ fontWeight: 600, lineHeight: 1.2 }}>
            Building AI systems<br />that actually work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
          >
            <p className="text-[#a1a1aa] leading-relaxed text-base">{profile.about}</p>

            <div className="mt-8 pt-8 border-t border-white/[0.06] grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl text-white" style={{ fontWeight: 600 }}>3+</div>
                <div className="text-sm text-[#52525b] mt-1">AI Projects</div>
              </div>
              <div>
                <div className="text-2xl text-white" style={{ fontWeight: 600 }}>150+</div>
                <div className="text-sm text-[#52525b] mt-1">DSA Problems</div>
              </div>
              <div>
                <div className="text-2xl text-white" style={{ fontWeight: 600 }}>2</div>
                <div className="text-sm text-[#52525b] mt-1">Certifications</div>
              </div>
              <div>
                <div className="text-2xl text-white" style={{ fontWeight: 600 }}>∞</div>
                <div className="text-sm text-[#52525b] mt-1">Curiosity</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-3">
            {profile.highlights.map((h, i) => (
              <motion.div
                key={h}
                custom={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] group hover:border-[#6366f1]/30 hover:bg-[#6366f1]/[0.04] transition-all duration-300"
              >
                <CheckCircle size={16} className="text-[#6366f1] shrink-0" />
                <span className="text-sm text-[#a1a1aa] group-hover:text-white transition-colors">{h}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
