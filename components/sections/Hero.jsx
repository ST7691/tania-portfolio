"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Download,
  Sparkles,
  Terminal,
} from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const technologies = [
  "JavaScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Golang",
  "PostgreSQL",
  "MongoDB",
  "Docker",
  "AWS",
  "REST API",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/ST7691",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/tania-akter-farhana-0b67383b7",
    icon: FaLinkedinIn,
  },
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 100,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 100,
    damping: 20,
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
      className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#080808] px-5 pb-20 pt-28 text-white sm:px-8 lg:px-12"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px] sm:h-[600px] sm:w-[600px]" />

        <div className="absolute -right-32 top-1/3 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-700/10 blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

        <motion.div
          className="absolute hidden h-72 w-72 rounded-full bg-violet-500/10 blur-[100px] md:block"
          style={{
            left: springX,
            top: springY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10"
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>

            <span className="text-xs font-medium tracking-wide text-gray-300 sm:text-sm">
              Software Engineer · Open to Opportunities
            </span>

            <Sparkles size={14} className="text-violet-300" />
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
            Hello, I&apos;m Tania Akter Farhana
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
            Engineering
            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text pb-2 text-transparent">
              Digital Solutions
            </span>
            That Matter.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern, responsive web applications and database-driven
            systems using React, Next.js, Node.js, and PostgreSQL. I&apos;m
            also developing my backend engineering skills with Go, Docker,
            and cloud technologies.
          </p>

          {/* Action buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:bg-violet-200"
            >
              Explore My Work
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <a
              href="/resume/Tania-Akter-Farhana-Resume.pdf"
              download
              className="inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-gray-200 transition duration-300 hover:border-violet-400/60 hover:bg-violet-500/10"
            >
              <Download size={17} />
              Download CV
            </a>
          </div>

          {/* Social links */}
          <div className="mt-9 flex items-center gap-3">
            <span className="mr-2 text-sm text-gray-500">
              Connect with me
            </span>

            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit my ${label} profile`}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/10 hover:text-white"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>

          {/* Technologies */}
          <div className="mt-12 border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Technologies I Work With
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-2 text-xs font-medium text-gray-300 transition duration-300 hover:border-violet-400/40 hover:text-violet-200 sm:text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right code card */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg"
        >
          <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-violet-500/15 via-transparent to-cyan-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d12]/95 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] px-5 py-4">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                <span className="h-3 w-3 rounded-full bg-green-400/80" />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Code2 size={14} />
                developer.js
              </div>

              <Terminal size={16} className="text-violet-300" />
            </div>

            <div className="space-y-5 p-5 font-mono text-xs leading-7 sm:p-7 sm:text-sm">
              <div className="text-gray-500">
                <span className="text-violet-300">const</span>{" "}
                <span className="text-cyan-300">developer</span> = {"{"}
              </div>

              <div className="space-y-1 pl-5 sm:pl-7">
                <p>
                  <span className="text-purple-300">name</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Tania Akter Farhana&quot;
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-purple-300">role</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Software Engineer&quot;
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-purple-300">frontend</span>: [
                  <span className="text-emerald-300">
                    &quot;React&quot;
                  </span>
                  ,{" "}
                  <span className="text-emerald-300">
                    &quot;Next.js&quot;
                  </span>
                  ],
                </p>

                <p>
                  <span className="text-purple-300">backend</span>: [
                  <span className="text-emerald-300">
                    &quot;Node.js&quot;
                  </span>
                  ,{" "}
                  <span className="text-emerald-300">
                    &quot;Express.js&quot;
                  </span>
                  ],
                </p>

                <p>
                  <span className="text-purple-300">database</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;PostgreSQL&quot;
                  </span>
                  ,
                </p>

                <p>
                  <span className="text-purple-300">currentlyLearning</span>: [
                  <span className="text-emerald-300">&quot;Go&quot;</span>,{" "}
                  <span className="text-emerald-300">&quot;Docker&quot;</span>
                  ],
                </p>

                <p>
                  <span className="text-purple-300">focus</span>:{" "}
                  <span className="text-emerald-300">
                    &quot;Reliable software&quot;
                  </span>
                </p>
              </div>

              <div className="text-gray-500">{"};"}</div>

              <div className="mt-6 flex items-center gap-3 rounded-xl border border-emerald-400/15 bg-emerald-400/[0.04] px-4 py-3">
                <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />

                <div>
                  <p className="font-sans text-sm font-semibold text-gray-200">
                    Always learning. Always building.
                  </p>
                  <p className="font-sans text-xs text-gray-500">
                    Turning ideas into working software.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -left-4 top-20 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#15151b] px-4 py-3 shadow-xl sm:flex"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-500/15 text-violet-300">
              <Code2 size={18} />
            </div>

            <div>
              <p className="text-xs font-bold text-white">Clean Code</p>
              <p className="text-[11px] text-gray-500">Built with purpose</p>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute -right-3 bottom-16 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#15151b] px-4 py-3 shadow-xl sm:flex"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-500/15 text-cyan-300">
              <Sparkles size={18} />
            </div>

            <div>
              <p className="text-xs font-bold text-white">Problem Solver</p>
              <p className="text-[11px] text-gray-500">Learn · Build · Improve</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-white md:flex"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.25em]">
          Scroll to explore
        </span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
