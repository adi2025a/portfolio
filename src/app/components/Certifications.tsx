import { motion } from "motion/react";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "../portfolioData";

export function Certifications() {
  return (
    <section id="certifications" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-violet-600/[0.04] blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#6366f1] tracking-widest uppercase">Certifications</span>
          <h2 className="text-3xl md:text-4xl text-white mt-2" style={{ fontWeight: 600, lineHeight: 1.2 }}>
            Credentials
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.14] transition-all duration-300 cursor-pointer block"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${cert.color}50, transparent)` }}
              />

              {/* Certificate image preview */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={cert.imageUrl}
                  alt={`${cert.title} certificate`}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-45 group-hover:scale-105 transition-all duration-500"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/60 to-transparent" />

                {/* Platform badge */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.10]">
                  <span className="text-xs font-mono text-[#a1a1aa]">{cert.platform}</span>
                </div>

                {/* View badge on hover */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.10] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <ExternalLink size={11} className="text-[#6366f1]" />
                  <span className="text-xs font-mono text-[#a1a1aa]">View Certificate</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: `${cert.color}15`, border: `1px solid ${cert.color}25` }}
                  >
                    <Award size={16} style={{ color: cert.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white group-hover:text-white/90 transition-colors" style={{ fontWeight: 600, fontSize: "1rem" }}>
                      {cert.title}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-1">
                      {cert.instructor && (
                        <span className="text-xs text-[#52525b]">by {cert.instructor}</span>
                      )}
                      {cert.instructor && <span className="text-[#3f3f46] text-xs">·</span>}
                      <span className="text-xs text-[#52525b]">{cert.platform}</span>
                    </div>
                  </div>

                  <ExternalLink
                    size={14}
                    className="text-[#3f3f46] group-hover:text-[#6366f1] transition-colors shrink-0 mt-1"
                  />
                </div>

                <div className="flex flex-wrap gap-2">
                  {cert.topics.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono border border-white/[0.06] bg-white/[0.03] text-[#71717a] group-hover:border-white/[0.10] transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs font-mono text-[#3f3f46] mt-6"
        >
          Click any certificate to verify on Udemy
        </motion.p>
      </div>
    </section>
  );
}
