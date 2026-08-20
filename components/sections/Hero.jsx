"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";

const technologies = [
  "HTML",
  "CSS",
  "React.js",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Tanstack Query",
  "Axios",
  "Express",
  "Node.js",
  "MongoDB",
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 80,
    damping: 25,
  });

  const springY = useSpring(mouseY, {
    stiffness: 80,
    damping: 25,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-grid pt-20"
    >
      {/* =========================================
          Mouse Spotlight
      ========================================= */}

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl md:block"
        style={{
          x: springX,
          y: springY,
        }}
      />

      {/* =========================================
          Background Glow
      ========================================= */}

      <div className="pointer-events-none absolute left-1/2 top-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-10 h-[350px] w-[350px] rounded-full bg-indigo-600/10 blur-[120px]" />

      {/* =========================================
          Main Content
      ========================================= */}

      <div className="container-custom relative z-10 flex min-h-[calc(100vh-80px)] items-center py-20">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div>
            {/* Eyebrow */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="section-eyebrow"
            >
              <Sparkles size={14} />
             Full stack || Frontend Developer
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.1,
              }}
              className="mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-8xl"
            >
              Building
              <br />
              <span className="gradient-text">Digital Experiences</span>
              <br />
              That Matter.
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg"
            >
              I&apos;m Tania Akter Farhana, a Full stack ||  frontend developer focused on
              building modern, responsive and user-centered web applications
              with React.js and Next.js.
            </motion.p>

            {/* CTA */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4,
              }}
              className="mt-9 flex flex-wrap gap-4"
            >
              <a href="#projects" className="btn-primary group">
                View My Work
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="/resume/Tania-Akter-Farhana-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary group"
              >
                Download Resume
                <Download
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </a>
            </motion.div>

            {/* Social Links */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="mt-9 flex items-center gap-3"
            >
              <span className="mr-2 text-xs uppercase tracking-[0.15em] text-slate-600">
                Find me
              </span>

              {/* GitHub */}

              <a
                href="https://github.com/ST7691"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-violet-400/30 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              {/* LinkedIn */}

              <a
                href="#contact"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition hover:-translate-y-1 hover:border-cyan-400/30 hover:text-white"
              >
                <FaLinkedinIn size={18} />
              </a>
            </motion.div>
          </div>

          {/* =====================================
              RIGHT VISUAL
          ===================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.92,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative mx-auto w-full max-w-[480px]"
          >
            {/* Outer Glow */}

            <div className="absolute inset-10 rounded-full bg-violet-500/20 blur-[90px]" />

            {/* Main Card */}

            <div className="gradient-border relative overflow-hidden rounded-[28px] p-[1px]">
              <div className="relative overflow-hidden rounded-[27px] bg-[#0b1020]/95 p-6 sm:p-8">
                {/* Top bar */}

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-400/70" />
                  </div>

                  <span className="font-mono text-xs text-slate-600">
                    developer.js
                  </span>
                </div>

                {/* Code Visual */}

                <div className="mt-8 rounded-2xl border border-white/5 bg-black/20 p-5 font-mono text-sm leading-8 sm:p-6">
                  <p className="text-slate-600">01</p>

                  <p>
                    <span className="text-violet-400">const</span>{" "}
                    <span className="text-cyan-300">developer</span> = {"{"}
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">name:</span>{" "}
                    <span className="text-emerald-300">&quot;Tania&quot;</span>
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">role:</span>{" "}
                    <span className="text-emerald-300">
                      &quot; Full stack ||Frontend Developer&quot;
                    </span>
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">stack:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;React / Next.js&quot;
                    </span>
                  </p>

                  <p className="pl-5">
                    <span className="text-slate-500">passion:</span>{" "}
                    <span className="text-emerald-300">
                      &quot;Building great UX&quot;
                    </span>
                  </p>

                  <p>{"};"}</p>

                  <p className="mt-2 text-slate-600">02</p>

                  <p>
                    <span className="text-violet-400">developer</span>.
                    <span className="text-cyan-300">build</span>(
                    <span className="text-emerald-300">
                      &quot;something great&quot;
                    </span>
                    );
                  </p>
                </div>

                {/* Technology Pills */}

                <div className="mt-6 flex flex-wrap gap-2">
                  {technologies.map((technology, index) => (
                    <motion.span
                      key={technology}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: 0.8 + index * 0.08,
                      }}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-400"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Badge */}

            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-3 top-16 hidden rounded-2xl border border-cyan-400/20 bg-[#0b1020]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                Currently building
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Modern Web Apps
              </p>
            </motion.div>

            {/* Floating Badge 2 */}

            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-4 -left-3 hidden rounded-2xl border border-violet-400/20 bg-[#0b1020]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:block"
            >
              <p className="text-[10px] uppercase tracking-wider text-slate-500">
                Focus
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                UX • Performance
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.4,
          duration: 0.8,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-slate-600 transition hover:text-slate-300 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>

        <motion.span
          animate={{ y: [0, 5, 0] }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
          }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>
    </section>
  );
}
