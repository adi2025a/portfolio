import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, Download, Mail, ChevronDown } from "lucide-react";
import { profile, socialLinks } from "../portfolioData";

const TYPING_SPEED = 80;
const ERASE_SPEED = 40;
const PAUSE_BETWEEN = 1800;

export function Hero() {
  const [displayed, setDisplayed] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");
  const timeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const roles = profile.rotatingRoles;
    const current = roles[roleIdx];

    if (phase === "typing") {
      if (displayed.length < current.length) {
        timeout.current = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, TYPING_SPEED);
      } else {
        timeout.current = setTimeout(() => setPhase("pausing"), PAUSE_BETWEEN);
      }
    } else if (phase === "pausing") {
      timeout.current = setTimeout(() => setPhase("erasing"), 200);
    } else if (phase === "erasing") {
      if (displayed.length > 0) {
        timeout.current = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, ERASE_SPEED);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout.current);
  }, [displayed, phase, roleIdx]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Floating gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-indigo-600/[0.12] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-violet-500/[0.10] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-purple-600/[0.08] blur-3xl"
        />
      </div>

      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-sm text-indigo-300 font-mono">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl text-white mb-4 tracking-tight"
          style={{ fontWeight: 600, lineHeight: 1.1 }}
        >
          {profile.name}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="h-10 flex items-center justify-center mb-6"
        >
          <span className="text-xl md:text-2xl text-[#6366f1] font-mono">
            {displayed}
            <span className="animate-pulse">|</span>
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="text-base md:text-lg text-[#71717a] max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-black text-sm hover:bg-white/90 transition-all duration-200 group"
          >
            View Projects
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href={profile.resumeUrl}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-white text-sm hover:bg-white/[0.08] transition-all duration-200"
          >
            <Download size={14} />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] text-white text-sm hover:bg-white/[0.08] transition-all duration-200"
          >
            <Mail size={14} />
            Contact Me
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="flex items-center justify-center gap-4 mt-10"
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-[#52525b] hover:text-[#a1a1aa] transition-colors font-mono"
            >
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#3f3f46] hover:text-[#71717a] transition-colors"
      >
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
