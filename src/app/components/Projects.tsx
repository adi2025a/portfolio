import { motion } from "motion/react";
import { Github, ExternalLink, Zap } from "lucide-react";
import { projects } from "../portfolioData";

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#6366f1] tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl text-white mt-2" style={{ fontWeight: 600, lineHeight: 1.2 }}>
            Featured work
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] overflow-hidden hover:border-white/[0.12] transition-all duration-400"
            >
              {/* Top gradient bar */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)` }}
              />

              {/* Subtle glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: `radial-gradient(ellipse at top left, ${project.color}08, transparent 60%)` }}
              />

              <div className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
                    >
                      <Zap size={13} style={{ color: project.color }} />
                    </span>
                    <h3 className="text-white" style={{ fontWeight: 600, fontSize: "1.125rem" }}>{project.title}</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full border border-white/[0.06] text-[#52525b] font-mono">
                      {project.tagline}
                    </span>
                  </div>

                  <p className="text-[#71717a] text-sm leading-relaxed mb-5 max-w-2xl">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.features.map((f) => (
                      <span
                        key={f}
                        className="flex items-center gap-1.5 text-xs text-[#a1a1aa]"
                      >
                        <span className="w-1 h-1 rounded-full bg-[#3f3f46]" />
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono border border-white/[0.06] bg-white/[0.03] text-[#71717a]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 justify-start">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-sm text-[#a1a1aa] hover:text-white hover:border-white/[0.16] transition-all duration-200"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-sm text-[#a1a1aa] hover:text-white hover:border-white/[0.16] transition-all duration-200"
                  >
                    <ExternalLink size={14} />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
