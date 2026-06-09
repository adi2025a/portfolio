import { useState } from "react";
import { motion } from "motion/react";
import { Send, Github, Linkedin, Code } from "lucide-react";
import { socialLinks } from "../portfolioData";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  code: Code,
};

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const externalLinks = socialLinks.filter((s) => s.icon !== "mail");

  return (
    <section id="contact" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-indigo-600/[0.06] blur-3xl rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="font-mono text-sm text-[#6366f1] tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl text-white mt-2" style={{ fontWeight: 600, lineHeight: 1.2 }}>
            Let's build something
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-start">
          <motion.form
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 flex flex-col gap-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#52525b] uppercase tracking-wide">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Aditya Singh"
                  className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder:text-[#3f3f46] outline-none focus:border-[#6366f1]/40 focus:bg-[#6366f1]/[0.04] transition-all duration-200"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#52525b] uppercase tracking-wide">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="hello@example.com"
                  className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder:text-[#3f3f46] outline-none focus:border-[#6366f1]/40 focus:bg-[#6366f1]/[0.04] transition-all duration-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono text-[#52525b] uppercase tracking-wide">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project or opportunity..."
                className="px-4 py-3 rounded-xl border border-white/[0.08] bg-white/[0.03] text-white text-sm placeholder:text-[#3f3f46] outline-none focus:border-[#6366f1]/40 focus:bg-[#6366f1]/[0.04] transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#6366f1] text-white text-sm hover:bg-[#5558e3] transition-all duration-200 group"
              style={{ fontWeight: 500 }}
            >
              <Send size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              {sent ? "Message sent!" : "Send Message"}
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col gap-3 md:w-48"
          >
            {externalLinks.map((s) => {
              const Icon = iconMap[s.icon] || Github;
              return (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-5 py-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] text-sm text-[#a1a1aa] hover:text-white hover:border-white/[0.12] transition-all duration-200 group"
                >
                  <Icon size={15} />
                  {s.label}
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
