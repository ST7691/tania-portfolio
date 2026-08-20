"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";

import { contactInfo } from "@/data/contact";

export default function Contact() {
  const emailSubject = encodeURIComponent("Project Inquiry — Portfolio");

  const emailBody = encodeURIComponent(
    "Hi Tania,\n\nI would like to discuss a project with you.\n\n",
  );

  // Direct Gmail Compose URL
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contactInfo.email}&su=${emailSubject}&body=${emailBody}`;

  return (
    <section id="contact" className="section relative overflow-hidden">
      {/* Background Glow */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

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
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="section-eyebrow mx-auto w-fit">
            <Sparkles size={14} />
            Get In Touch
          </div>

          <h2 className="section-title">Have a project in mind?</h2>

          <p className="section-description mx-auto">
            Whether you have a project idea, collaboration opportunity or simply
            want to say hello, feel free to reach out.
          </p>
        </motion.div>

        {/* ======================================
            Contact Cards
        ====================================== */}

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Gmail */}

          <ContactCard
            icon={Mail}
            title="Gmail"
            description="Send me an email"
            href={gmailUrl}
            external
          />

          {/* WhatsApp */}

          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            description="Chat with me directly"
            href={`https://wa.me/${contactInfo.whatsapp}`}
            external
          />

          {/* Messenger */}

          <ContactCard
            icon={Send}
            title="Messenger"
            description="Message me on Facebook"
            href={`https://m.me/${contactInfo.messenger}`}
            external
          />
        </div>

        {/* ======================================
            Bottom CTA
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
          }}
          transition={{
            duration: 0.7,
            delay: 0.15,
          }}
          className="mx-auto mt-6 max-w-5xl rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-emerald-400">
                Availability
              </p>

              <h3 className="mt-2 text-xl font-semibold text-white">
                {contactInfo.availability}
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                I&apos;m currently interested in meaningful frontend and
                full-stack opportunities.
              </p>
            </div>

            <a
              href="https://github.com/ST7691"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary shrink-0"
            >
              <GitBranch size={16} />
              GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* =============================================
   Contact Card
============================================= */

function ContactCard({
  icon: Icon,
  title,
  description,
  href,
  external = false,
}) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      whileHover={{
        y: -6,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="group rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition-all duration-300 hover:border-violet-400/20 hover:bg-white/[0.04]"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-violet-400/10 bg-violet-500/10 text-violet-300 transition-transform duration-300 group-hover:scale-110">
          <Icon size={19} />
        </div>

        <ArrowUpRight
          size={17}
          className="text-slate-700 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300"
        />
      </div>

      <h3 className="mt-6 text-lg font-semibold text-white">{title}</h3>

      <p className="mt-2 text-sm text-slate-500">{description}</p>
    </motion.a>
  );
}
