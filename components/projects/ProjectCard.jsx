"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, BookOpen } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative"
    >
      {/* Glow */}

      <div className="pointer-events-none absolute -inset-2 rounded-[30px] bg-gradient-to-r from-violet-500/10 via-indigo-500/5 to-cyan-500/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[24px] border border-white/[0.08] bg-[#0b1020] transition-all duration-500 group-hover:border-violet-400/20">
        {/* ======================================
            Project Image
        ====================================== */}

        <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
          <Image
            src={project.image}
            alt={`${project.title} project preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />

          {/* Image Overlay */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1020] via-transparent to-transparent opacity-80" />

          {/* Category */}

          <div className="absolute left-5 top-5">
            <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Hover Action */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            whileHover={{
              opacity: 1,
              scale: 1,
            }}
            className="absolute right-5 top-5"
          >
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white backdrop-blur-md transition hover:bg-white hover:text-black"
            >
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>

        {/* ======================================
            Content
        ====================================== */}

        <div className="p-6 sm:p-7">
          {/* Title */}

          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-violet-400">
                Featured Project
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                {project.title}
              </h3>
            </div>

            <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-500 transition group-hover:border-violet-400/20 group-hover:text-violet-300 sm:flex">
              <ExternalLink size={17} />
            </div>
          </div>

          {/* Description */}

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
            {project.description}
          </p>

          {/* Features */}

          <div className="mt-5 flex flex-wrap gap-2">
            {project.features.slice(0, 4).map((feature) => (
              <span
                key={feature}
                className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-xs text-slate-500"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* Technologies */}

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-violet-400/10 bg-violet-500/5 px-3 py-1.5 text-xs font-medium text-violet-300"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Links */}

          <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-white/[0.07] pt-6">
            <a href={`/projects/${project.slug}`} className="btn-secondary">
              <BookOpen size={16} />
              Case Study
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group/button"
            >
              Live Demo
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
              />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <FaGithub size={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
