"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers3, Rocket, Sparkles } from "lucide-react";

const stats = [
  {
    value: "2+",
    label: "Years Learning & Building",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "8+",
    label: "Core Technologies",
  },
  {
    value: "100%",
    label: "Growth Mindset",
  },
];

const capabilities = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and interactive interfaces with React.js, Next.js and modern CSS.",
  },
  {
    icon: Database,
    title: "Backend Integration",
    description:
      "Working with REST APIs, Node.js, Express.js and MongoDB to build complete web experiences.",
  },
  {
    icon: Layers3,
    title: "Modern Architecture",
    description:
      "Creating reusable components, structured code and maintainable application architecture.",
  },
  {
    icon: Rocket,
    title: "Product Focus",
    description:
      "Focusing on usability, performance and real-world user experience—not just writing code.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* Background Glow */}

      <div className="pointer-events-none absolute -left-40 top-40 h-[350px] w-[350px] rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* =========================================
            Section Header
        ========================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="section-eyebrow">
            <Sparkles size={14} />
            About Me
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="section-title max-w-3xl"
          >
            Turning ideas into{" "}
            <span className="gradient-text">
              meaningful digital experiences.
            </span>
          </motion.h2>
        </motion.div>

        {/* =========================================
            Main About Content
        ========================================= */}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="max-w-2xl space-y-6 text-base leading-8 text-slate-400 sm:text-lg">
              <p>
                I&apos;m{" "}
                <span className="font-medium text-white">
                  Tania Akter Farhana
                </span>
                , a frontend developer passionate about creating modern and
                user-friendly web applications.
              </p>

              <p>
                My main focus is building clean, responsive interfaces with{" "}
                <span className="text-violet-300">React.js</span> and{" "}
                <span className="text-cyan-300">Next.js</span>, while also
                understanding the backend, database and API layers that power
                real-world applications.
              </p>

              <p>
                I enjoy turning complex requirements into simple, intuitive
                experiences and continuously improving my skills through
                practical projects and modern development practices.
              </p>
            </div>

            {/* Mini Focus */}

            <div className="mt-8 flex flex-wrap gap-2">
              {[
                "Responsive UI",
                "Clean Code",
                "API Integration",
                "Performance",
                "User Experience",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-400 transition hover:border-violet-400/30 hover:bg-violet-500/5 hover:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="grid grid-cols-2 gap-3 sm:gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  y: -5,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="gradient-border rounded-2xl p-[1px]"
              >
                <div className="h-full rounded-[15px] bg-[#0b1020] p-5 sm:p-6">
                  <p className="gradient-text text-3xl font-bold tracking-tight sm:text-4xl">
                    {stat.value}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-slate-500 sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* =========================================
            Capabilities
        ========================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={containerVariants}
          className="mt-20"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-sm font-medium text-slate-300">What I bring</p>

            <p className="mt-2 text-sm text-slate-500">
              A balance of technical implementation, usability and product
              thinking.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                  }}
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-colors duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/10 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                    <Icon size={20} />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
