"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  CalendarDays,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { experiences } from "@/data/experience";
import { education } from "@/data/education";

export default function Experience() {
  return (
    <section id="experience" className="section relative overflow-hidden">
      {/* Background */}

      <div className="pointer-events-none absolute left-1/2 top-1/3 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Header */}

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="section-eyebrow">
            <Sparkles size={14} />
            My Journey
          </div>

          <h2 className="section-title max-w-3xl">
            Experience, education &
            <span className="gradient-text"> continuous growth.</span>
          </h2>

          <p className="section-description">
            A timeline of the experiences and education that shaped my
            development journey.
          </p>
        </motion.div>

        {/* ======================================
            Experience
        ====================================== */}

        <div className="mt-14">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/10 text-violet-300">
              <BriefcaseBusiness size={18} />
            </div>

            <div>
              <h3 className="font-semibold text-white">Experience</h3>

              <p className="text-xs text-slate-600">Professional development</p>
            </div>
          </div>

          <Timeline>
            {experiences.map((item, index) => (
              <TimelineItem
                key={`${item.company}-${item.year}`}
                item={item}
                index={index}
                type="experience"
              />
            ))}
          </Timeline>
        </div>

        {/* ======================================
            Education
        ====================================== */}

        <div className="mt-20">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-400/10 bg-cyan-500/10 text-cyan-300">
              <GraduationCap size={18} />
            </div>

            <div>
              <h3 className="font-semibold text-white">Education</h3>

              <p className="text-xs text-slate-600">Academic background</p>
            </div>
          </div>

          <div className="space-y-4">
            {education.map((item, index) => (
              <motion.div
                key={`${item.institution}-${item.year}`}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition hover:border-cyan-400/20"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-cyan-400">
                      {item.year}
                    </p>

                    <h4 className="mt-2 text-lg font-semibold text-white">
                      {item.degree}
                    </h4>

                    <p className="mt-1 text-sm text-slate-400">
                      {item.institution}
                    </p>
                  </div>

                  <span className="w-fit rounded-full border border-emerald-400/10 bg-emerald-400/5 px-3 py-1.5 text-xs font-medium text-emerald-400">
                    {item.result}
                  </span>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-500">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =============================================
   Timeline
============================================= */

function Timeline({ children }) {
  return (
    <div className="relative ml-3 border-l border-white/[0.08] pl-7 sm:ml-5 sm:pl-10">
      {children}
    </div>
  );
}

/* =============================================
   Timeline Item
============================================= */

function TimelineItem({ item, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        x: -20,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
      }}
      className="relative pb-8 last:pb-0"
    >
      {/* Timeline Dot */}

      <div className="absolute -left-[38px] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-violet-400/30 bg-[#050816] sm:-left-[50px]">
        <span className="h-2 w-2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
      </div>

      {/* Card */}

      <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-white/[0.04]">
        {/* Meta */}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-600">
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} />
            {item.year}
          </span>

          <span className="flex items-center gap-1.5">
            <MapPin size={13} />
            {item.location}
          </span>
        </div>

        {/* Title */}

        <h4 className="mt-4 text-xl font-semibold text-white">{item.title}</h4>

        <p className="mt-1 text-sm font-medium text-violet-300">
          {item.company}
        </p>

        {/* Description */}

        <p className="mt-4 text-sm leading-7 text-slate-500">
          {item.description}
        </p>

        {/* Technologies */}

        <div className="mt-5 flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-xs text-slate-500"
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
