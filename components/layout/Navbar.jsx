"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight, Code2 } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL = "/resume/Tania-Akter-Farhana-Resume.pdf";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let animationFrame = null;

    const handleScroll = () => {
      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }

      animationFrame = requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 20);

        let currentSection = "home";

        for (const item of navItems) {
          const section = document.querySelector(item.href);

          if (section && section.getBoundingClientRect().top <= 160) {
            currentSection = item.href.slice(1);
          }
        }

        setActiveSection(currentSection);
        animationFrame = null;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const getLinkClasses = (href, mobile = false) => {
    const isActive = activeSection === href.slice(1);

    if (mobile) {
      return `flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-colors duration-200 ${
        isActive
          ? "border-violet-400/20 bg-violet-500/10 text-white"
          : "border-transparent text-slate-300 hover:bg-white/[0.05] hover:text-white"
      }`;
    }

    return `relative rounded-xl px-3 py-2.5 text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "bg-white/[0.07] text-white"
        : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
    }`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.08] bg-[#080808]/90 shadow-lg shadow-black/10 backdrop-blur-2xl"
          : "border-b border-transparent bg-[#080808]/30 backdrop-blur-md"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="container-custom mx-auto flex h-[72px] items-center justify-between px-4 sm:h-[78px] sm:px-6 lg:px-8"
      >
        {/* Logo */}
        <a
          href="#home"
          onClick={closeMenu}
          aria-label="Tania Akter Farhana home"
          className="group flex shrink-0 items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-violet-500 via-indigo-500 to-cyan-400 shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105 sm:h-11 sm:w-11">
            <Code2 size={22} className="text-white" />
          </div>

          <div>
            <p className="text-sm font-bold tracking-[0.12em] text-white sm:text-base">
              TANIA
            </p>
            <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.12em] text-slate-500 sm:text-[10px] sm:tracking-[0.15em]">
              Software Engineer
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={isActive ? "location" : undefined}
                className={`${getLinkClasses(item.href)} group`}
              >
                {item.label}

                <span
                  className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 transition-all duration-300 ${
                    isActive
                      ? "w-5 opacity-100"
                      : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Desktop Resume */}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group hidden items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition duration-300 hover:border-violet-400/40 hover:bg-violet-500/10 lg:inline-flex"
        >
          Resume
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((previous) => !previous)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition hover:border-violet-400/40 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400 lg:hidden"
        >
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-navigation"
        aria-hidden={!isOpen}
        className={`absolute inset-x-0 top-full overflow-y-auto border-b border-white/[0.08] bg-[#080808]/[0.98] shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-300 lg:hidden ${
          isOpen
            ? "visible max-h-[calc(100dvh-72px)] translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-2 opacity-0"
        }`}
      >
        <div className="container-custom mx-auto px-4 pb-6 pt-4 sm:px-6">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeMenu}
                  className={getLinkClasses(item.href, true)}
                >
                  <span>{item.label}</span>

                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
                  )}
                </a>
              );
            })}

            {/* Mobile Resume Button */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
              className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition duration-300 hover:from-violet-500 hover:to-indigo-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400"
            >
              Download Resume
              <ArrowUpRight size={17} />
            </a>
          </div>

          <p className="mt-5 text-center text-xs text-slate-500">
            Building modern digital experiences.
          </p>
        </div>
      </div>
    </header>
  );
}
