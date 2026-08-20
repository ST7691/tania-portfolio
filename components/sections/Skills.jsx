"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle2,
  Code2,
  Database,
  Server,
  Wrench,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { skillCategories } from "@/data/skills";

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  database: Database,
  tools: Wrench,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const activeData = skillCategories.find(
    (category) => category.id === activeCategory,
  );

  const ActiveIcon = categoryIcons[activeCategory] || Code2;

  return (
    <section id="skills" className="section relative overflow-hidden">
      {/* Background */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />

      <div className="container-custom relative z-10">
        {/* =========================================
            Header
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="section-eyebrow">
            <Sparkles size={14} />
            Technical Skills
          </div>

          <h2 className="section-title max-w-3xl">
            Tools I use to{" "}
            <span className="gradient-text">build modern products.</span>
          </h2>

          <p className="section-description">
            A practical technology stack focused on building responsive
            interfaces, scalable applications and complete web experiences.
          </p>
        </motion.div>

        {/* =========================================
            Category Tabs
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-10 flex flex-wrap gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-2"
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.id] || Code2;

            const isActive = activeCategory === category.id;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategory(category.id)}
                className={`relative flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeSkillTab"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-500/20 via-indigo-500/15 to-cyan-500/10"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <Icon size={16} className="relative z-10" />

                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* =========================================
            Skills Grid
        ========================================= */}

        <div className="mt-8 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {activeData?.skills.map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  skill={skill}
                  index={index}
                  icon={ActiveIcon}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================
            Bottom Tech Stack
        ========================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mt-10 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
            Core Stack
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {[
              "React.js",
              "Next.js",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "Express.js",
              "MongoDB",
              "Firebase",
              "Stripe",
              "Git",
              "GitHub",
              "Vercel",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs text-slate-400 transition hover:border-violet-400/30 hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================
   Skill Card
============================================= */

function SkillCard({ skill, index, icon: Icon }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.45,
        delay: index * 0.06,
      }}
      whileHover={{
        y: -6,
      }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition-colors duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
    >
      {/* Hover Glow */}

      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />

      {/* Header */}

      <div className="relative flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/10 text-violet-300 transition-transform duration-300 group-hover:scale-110">
          <Icon size={20} />
        </div>

        <div className="flex items-center gap-1.5 text-xs text-emerald-400">
          <CheckCircle2 size={14} />
          {skill.level}
        </div>
      </div>

      {/* Content */}

      <h3 className="relative mt-5 text-lg font-semibold text-white">
        {skill.name}
      </h3>

      <p className="relative mt-2 min-h-[48px] text-sm leading-6 text-slate-500">
        {skill.description}
      </p>

      {/* Progress */}

      <div className="relative mt-5">
        <div className="flex items-center justify-between text-[11px] text-slate-600">
          <span>Comfort level</span>

          <span>{skill.percentage}%</span>
        </div>

        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: `${skill.percentage}%`,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15 + index * 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="h-full rounded-full bg-gradient-to-r from-violet-500 via-indigo-500 to-cyan-400"
          />
        </div>
      </div>
    </motion.article>
  );
}
