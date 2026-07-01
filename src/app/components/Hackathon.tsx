// src/app/components/Hackathons.tsx
import { motion } from "motion/react"; // Matches your original motion/react import structure
import { Trophy, Calendar, Award } from "lucide-react";
import { hackathons } from "../portfolioData";

export function Hackathons() {
  return (
    <section id="hackathons" className="py-28 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#8b5cf6] tracking-widest uppercase">
            Competitions
          </span>

          <h2
            className="text-3xl md:text-4xl text-white mt-2"
            style={{ fontWeight: 600, lineHeight: 1.2 }}
          >
            Hackathon Experience
          </h2>
        </motion.div>

        {/* Hackathons Grid Layout matching Projects.tsx */}
        <div className="flex flex-col gap-8">
          {hackathons.map((hackathon, i) => (
            <motion.div
              key={hackathon.id}
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
                  background: `linear-gradient(90deg, transparent, ${hackathon.color}60, transparent)`,
                }}
              />

              {/* Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at top left, ${hackathon.color}08, transparent 60%)`,
                }}
              />

              {/* 3-Column Grid Configuration like Projects */}
              <div className="relative p-8 md:p-10 grid lg:grid-cols-[340px_1fr] gap-8 items-center">
                
                {/* ================= HACKATHON IMAGE ================= */}
                <div className="relative overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.03] aspect-video shadow-lg">
                  <img
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />

                  {/* Image Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to top, ${hackathon.color}25, transparent 55%)`,
                    }}
                  />
                </div>

                {/* ================= CONTENT BLOCK ================= */}
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className="w-7 h-7 rounded-lg flex items-center justify-center"
                        style={{
                          background: `${hackathon.color}20`,
                          border: `1px solid ${hackathon.color}30`,
                        }}
                      >
                        <Trophy size={13} style={{ color: hackathon.color }} />
                      </span>

                      <h3
                        className="text-white"
                        style={{
                          fontWeight: 600,
                          fontSize: "1.125rem",
                        }}
                      >
                        {hackathon.title}
                      </h3>

                      <span className="text-xs px-2 py-0.5 rounded-full border border-white/[0.06] text-[#71717a] font-mono">
                        {hackathon.host}
                      </span>
                    </div>

                    {/* Date Badge */}
                    <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/[0.06] text-[#71717a] font-mono text-xs">
                      <Calendar size={11} />
                      {hackathon.date}
                    </span>
                  </div>

                  {/* Role Badge */}
                  <div className="mb-4">
                    <span className="inline-block text-xs font-medium text-white/80 px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/[0.08]">
                      {hackathon.role}
                    </span>
                  </div>

                  <p className="text-[#a1a1aa] leading-relaxed text-sm mb-6">
                    {hackathon.description}
                  </p>

                  {/* Achievements List */}
                  <div className="space-y-2 mb-6">
                    {hackathon.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-[#a1a1aa]">
                        <Award size={14} className="mt-0.5 flex-shrink-0" style={{ color: hackathon.color }} />
                        <span className="leading-normal">{achievement}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {hackathon.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg border border-white/[0.06] bg-white/[0.03] text-[#71717a] text-xs font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}