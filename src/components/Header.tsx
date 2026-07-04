import React, { useState } from "react";
import { Sun, Moon, Menu, X, Download, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "../data";

interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenPdf: () => void;
  customPhoto?: string;
}

export default function Header({ isDark, onToggleTheme, onOpenPdf, customPhoto }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  const navItems = [
    { label: "Overview", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#skills" },
    { label: "Timeline", href: "#experience" },
    { label: "Projects & Cases", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b bg-opacity-70 transition-colors duration-300 border-zinc-200/60 bg-zinc-50/70 dark:border-zinc-850/60 dark:bg-zinc-950/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Brand */}
          <div className="flex items-center gap-2">
            {customPhoto ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-md shadow-indigo-500/20 dark:shadow-cyan-550/10">
                <img
                  src={customPhoto}
                  alt="Neeraj Yadav"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            ) : !imgError ? (
              <div className="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-md shadow-indigo-500/20 dark:shadow-cyan-550/10">
                <img
                  src="/Neeraj.png"
                  alt="Neeraj Yadav"
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                  onError={() => setImgError(true)}
                />
              </div>
            ) : (
              <span className="flex h-10 w-10 items-center justify-center rounded-lg font-mono text-lg font-black tracking-normal bg-indigo-600 dark:bg-cyan-500 text-white dark:text-zinc-950 shadow-md shadow-indigo-500/20 dark:shadow-cyan-550/10">
                NY
              </span>
            )}
            <div>
              <span className="block font-sans text-sm font-black tracking-tight text-zinc-900 dark:text-zinc-50">
                {PERSONAL_INFO.name}
              </span>
              <span className="block font-mono text-[9px] text-emerald-600 dark:text-emerald-400 uppercase tracking-widest font-black">
                Software Developer
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-sans text-xs font-semibold uppercase tracking-wider transition-all hover:text-indigo-600 text-zinc-650 dark:text-zinc-350 dark:hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Utilities (Theme, Resume, Mobile Button) */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
               id="theme-toggle"
               onClick={onToggleTheme}
               aria-label="Toggle visual theme"
               className="flex h-9 w-9 items-center justify-center rounded-lg border transition-all cursor-pointer border-zinc-200 hover:bg-zinc-100 text-zinc-700 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:text-zinc-350"
            >
              {isDark ? <Sun className="h-4.5 w-4.5 text-yellow-550" /> : <Moon className="h-4.5 w-4.5 text-zinc-700" />}
            </button>

            {/* Offline Printable Resume Preview */}
            <button
              id="resume-btn"
              onClick={onOpenPdf}
              className="hidden sm:flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 font-sans text-xs font-bold leading-none cursor-pointer uppercase tracking-wider text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-md shadow-indigo-650/10"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Export CV to PDF</span>
            </button>

            {/* Mobile Menu Action */}
            <button
              id="mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-lg border md:hidden border-zinc-200 text-slate-700 hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b transition-all border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-955 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block rounded-lg px-3 py-2 font-sans text-xs uppercase tracking-wider font-semibold hover:bg-zinc-100 text-zinc-700 dark:text-zinc-350 dark:hover:bg-zinc-900"
            >
              {item.label}
            </a>
          ))}
          <button
            id="mobile-resume-download"
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenPdf();
            }}
            className="flex w-full items-center justify-center gap-2 rounded-lg px-3 py-2.5 mt-2 font-sans text-xs uppercase tracking-widest font-bold bg-indigo-600 text-white hover:bg-indigo-750 transition"
          >
            <Download className="h-4 w-4" />
            <span>Print / Export CV to PDF</span>
          </button>
        </div>
      )}
    </header>
  );
}
