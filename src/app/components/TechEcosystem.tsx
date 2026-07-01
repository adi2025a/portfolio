import { useRef, useEffect, useState } from "react";
import { motion } from "motion/react";
import { techEcosystem } from "../portfolioData";

export function TechEcosystem() {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [tick, setTick] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();

  const CX = 300;
  const CY = 260;

  useEffect(() => {
    let t = 0;
    const loop = () => {
      t += 0.4;
      setTick(t);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animRef.current!);
  }, []);

  return (
    <section id="ecosystem" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#6366f1] tracking-widest uppercase">Tech Ecosystem</span>
          <h2 className="text-3xl md:text-4xl text-white mt-2" style={{ fontWeight: 600, lineHeight: 1.2 }}>
            Connected technologies
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-2xl border border-white/[0.06] bg-white/[0.01] overflow-hidden"
          style={{ height: 520 }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,#6366f108_0%,transparent_70%)]" />

          <svg width="100%" height="100%" viewBox="0 0 600 520" className="absolute inset-0">
            {/* Connection lines */}
            {techEcosystem.nodes.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const wobble = Math.sin((tick + node.angle) * 0.05) * 6;
              const nx = CX + Math.cos(rad) * (node.distance + wobble);
              const ny = CY + Math.sin(rad) * (node.distance + wobble);
              const isHovered = hoveredNode === node.id;

              return (
                <g key={node.id}>
                  <line
                    x1={CX}
                    y1={CY}
                    x2={nx}
                    y2={ny}
                    stroke={isHovered ? "#6366f1" : "rgba(255,255,255,0.06)"}
                    strokeWidth={isHovered ? 1.5 : 0.8}
                    strokeDasharray={isHovered ? "none" : "4 4"}
                  />
                  {/* Pulse dot traveling along line */}
                  <circle
                    cx={CX + (nx - CX) * ((tick * 0.02) % 1)}
                    cy={CY + (ny - CY) * ((tick * 0.02) % 1)}
                    r={1.5}
                    fill="#6366f1"
                    opacity={0.4}
                  />
                </g>
              );
            })}
          </svg>

          {/* Center node */}
          <div
            className="absolute flex flex-col items-center justify-center"
            style={{ left: CX, top: CY, transform: "translate(-50%,-50%)" }}
          >
            <div className="w-20 h-20 rounded-full border border-[#6366f1]/40 bg-[#6366f1]/10 backdrop-blur-sm flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full border border-[#6366f1]/20 animate-ping opacity-30" />
              <span className="text-xs text-white text-center leading-tight px-1" style={{ fontWeight: 500 }}>
                Aditya<br />Singh
              </span>
            </div>
          </div>

          {/* Tech nodes */}
          {techEcosystem.nodes.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const wobble = Math.sin((tick + node.angle) * 0.05) * 6;
            const nx = CX + Math.cos(rad) * (node.distance + wobble);
            const ny = CY + Math.sin(rad) * (node.distance + wobble);
            const isHovered = hoveredNode === node.id;

            return (
              <div
                key={node.id}
                className="absolute transition-all duration-150"
                style={{ left: nx, top: ny, transform: "translate(-50%,-50%)" }}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                <div
                  className={`px-3 py-1.5 rounded-full border text-xs font-mono cursor-default transition-all duration-200 ${
                    isHovered
                      ? "border-[#6366f1]/50 bg-[#6366f1]/15 text-white scale-110"
                      : "border-white/[0.08] bg-white/[0.03] text-[#71717a]"
                  }`}
                >
                  {node.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
