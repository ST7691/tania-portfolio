"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section relative overflow-hidden">
      {/* Background */}

      <div className="pointer-events-none absolute right-[-150px] top-[15%] h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute left-[-150px] bottom-[10%] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="container-custom relative z-10">
        {/* ======================================
            Header
        ====================================== */}

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
          className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <div className="section-eyebrow">
              <Sparkles size={14} />
              Selected Work
            </div>

            <h2 className="section-title max-w-3xl">
              Projects built with{" "}
              <span className="gradient-text">purpose.</span>
            </h2>

            <p className="section-description">
              A selection of applications where I focused on usability,
              responsive design, performance and practical functionality.
            </p>
          </div>

          <a
            href="https://github.com/ST7691"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary shrink-0"
          >
            View GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>

        {/* ======================================
            Projects
        ====================================== */}

        <div className="mt-14 grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
