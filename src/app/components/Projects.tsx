import { motion } from "motion/react";
import { Github, ExternalLink, Zap } from "lucide-react";
import { projects } from "../portfolioData";

export function Projects() {
  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#6366f1] tracking-widest uppercase">
            Projects
          </span>

          <h2
            className="text-3xl md:text-4xl text-white mt-2"
            style={{ fontWeight: 600, lineHeight: 1.2 }}
          >
            Featured Work
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] hover:border-white/[0.12] transition-all duration-500"
            >
              {/* Top Gradient */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background: `linear-gradient(90deg, transparent, ${project.color}60, transparent)`,
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${project.color}08, transparent 60%)`,
                }}
              />

              <div className="relative p-8 md:p-10 grid lg:grid-cols-[340px_1fr_auto] gap-8 items-center">
                {/* ================= IMAGE ================= */}
                <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] aspect-video shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Image Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${project.color}25, transparent 55%)`,
                    }}
                  />
                </div>

                {/* ================= CONTENT ================= */}
                <div>
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{
                        background: `${project.color}20`,
                        border: `1px solid ${project.color}30`,
                      }}
                    >
                      <Zap size={13} style={{ color: project.color }} />
                    </span>

                    <h3
                      className="text-white"
                      style={{
                        fontWeight: 600,
                        fontSize: "1.125rem",
                      }}
                    >
                      {project.title}
                    </h3>

                    <span className="text-xs px-2 py-0.5 rounded-full border border-white/[0.06] text-[#71717a] font-mono">
                      {project.tagline}
                    </span>
                  </div>

                  <p className="text-[#a1a1aa] leading-relaxed text-sm mb-6">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="flex items-center gap-2 text-xs text-[#a1a1aa]"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#52525b]" />
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg border border-white/[0.06] bg-white/[0.03] text-[#71717a] text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ================= BUTTONS ================= */}
                <div className="flex lg:flex-col gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-sm text-[#a1a1aa] hover:text-white hover:border-white/[0.16] transition-all duration-300"
                  >
                    <Github size={15} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-white/[0.08] bg-white/[0.03] text-sm text-[#a1a1aa] hover:text-white hover:border-white/[0.16] transition-all duration-300"
                  >
                    <ExternalLink size={15} />
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