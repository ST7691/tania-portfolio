"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  GitBranch,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectDetails({ project }) {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050816]">
      {/* Background */}

      <div className="pointer-events-none fixed left-1/2 top-0 -z-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      {/* =========================================
          Header
      ========================================= */}

      <section className="relative z-10 pt-28 sm:pt-36">
        <div className="container-custom">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to projects
          </Link>

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mt-10 max-w-4xl"
          >
            <span className="section-eyebrow">{project.category}</span>

            <h1 className="mt-5 text-5xl font-bold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
              {project.longDescription}
            </p>

            {/* Actions */}

            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Live Demo
                  <ArrowUpRight size={16} />
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GitBranch size={16} />
                GitHub
              </a>
            </div>
          </motion.div>

          {/* ======================================
              Hero Image
          ====================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
            }}
            className="mt-14"
          >
            <div className="gradient-border rounded-[26px] p-[1px]">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[25px] bg-slate-900">
                <Image
                  src={project.image}
                  alt={`${project.title} project`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================
          Project Information
      ========================================= */}

      <section className="relative z-10 py-20 sm:py-28">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-[1fr_0.8fr]">
            {/* Left */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
            >
              <span className="section-eyebrow">The Challenge</span>

              <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
                Problem & Approach
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-500">
                {project.challenge}
              </p>

              <div className="mt-8 border-l border-violet-400/20 pl-5">
                <p className="text-base leading-8 text-slate-400">
                  {project.solution}
                </p>
              </div>
            </motion.div>

            {/* Right */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                My Role
              </p>

              <p className="mt-3 text-lg font-medium text-white">
                {project.role}
              </p>

              <div className="my-6 h-px bg-white/[0.07]" />

              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                Technologies
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-violet-400/10 bg-violet-500/5 px-3 py-1.5 text-xs text-violet-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================
          Features
      ========================================= */}

      <section className="relative z-10 border-y border-white/[0.06] bg-white/[0.015] py-20 sm:py-24">
        <div className="container-custom">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Key Features</span>

            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
              What&apos;s inside
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature, index) => (
              <motion.div
                key={feature}
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
                }}
                transition={{
                  delay: index * 0.05,
                }}
                className="rounded-2xl border border-white/[0.08] bg-[#0b1020] p-5"
              >
                <CheckCircle2 size={19} className="text-emerald-400" />

                <p className="mt-4 text-sm font-medium text-white">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          Results
      ========================================= */}

      <section className="relative z-10 py-20 sm:py-28">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Outcome</span>

            <h2 className="mt-5 text-3xl font-semibold text-white sm:text-4xl">
              Built for real-world use.
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-500">
              {project.results}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {project.liveUrl !== "#" && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Visit Live Project
                  <ExternalLink size={16} />
                </a>
              )}

              <Link href="/#projects" className="btn-secondary">
                More Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
