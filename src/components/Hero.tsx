import { useEffect, useState } from "react";
import { ArrowRight, Download, Linkedin, Mail, CheckCircle, Database, Server, Smartphone, ExternalLink } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onOpenPdf: () => void;
}

export default function Hero({ onOpenPdf }: HeroProps) {
  const titles = [
    "Full Stack Software Developer",
    ".NET Core MVC Specialist",
    "Clinical Systems Engineer",
    "SQL Database Architect"
  ];

  const [currentIdx, setCurrentIdx] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [activeTab, setActiveTab] = useState<"headshot" | "system">("headshot");
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullText = titles[currentIdx];

    if (!isDeleting) {
      // Typing
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(90);
      }, typingSpeed);

      if (displayText === currentFullText) {
        // Wait and start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 2200);
      }
    } else {
      // Deleting
      timer = setTimeout(() => {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
      }, typingSpeed);

      if (displayText === "") {
        setIsDeleting(false);
        setCurrentIdx((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIdx]);

  const handleCtaClick = (elementId: string) => {
    const target = document.querySelector(elementId);
    if (target) {
      const offset = 80;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden py-16 md:py-24 lg:py-32 w-full font-sans">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-1/4 -left-16 -z-10 h-72 w-72 rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/5" />
      <div className="absolute bottom-1/4 -right-16 -z-10 h-80 w-80 rounded-full bg-cyan-500/5 blur-3xl dark:bg-cyan-500/5" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column info */}
        <div className="lg:col-span-12 xl:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-xs font-bold border-zinc-200 bg-zinc-50/50 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/30 dark:text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            Targeting Senior Software Developer Roles &bull; Thane / Mumbai / Remote
          </div>

          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-zinc-900 dark:text-zinc-50 leading-none">
            Hi, I am <br />
            <span className="bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 bg-clip-text text-transparent dark:from-indigo-400 dark:via-sky-400 dark:to-emerald-400">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          <div className="h-10 text-xl md:text-2xl font-black font-mono text-zinc-850 dark:text-zinc-200">
            <span>{displayText}</span>
            <span className="animate-pulse text-indigo-600 dark:text-indigo-400">|</span>
          </div>

          <p className="font-sans text-base md:text-lg leading-relaxed text-zinc-650 dark:text-zinc-400 max-w-xl">
            {PERSONAL_INFO.tagline} Backed by over <strong className="text-zinc-900 dark:text-zinc-50 font-black">3.6+ years</strong> of hands-on, enterprise-grade architecture experience.
          </p>

          {/* Core Strengths Quick Badges */}
          <div className="grid grid-cols-2 gap-3 pt-2">
            <div className="flex items-center gap-2 text-sm text-zinc-650 dark:text-zinc-400">
              <Server className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>C# & .NET Core Developer</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-650 dark:text-zinc-400">
              <Database className="h-4 w-4 text-cyan-500 shrink-0" />
              <span>SQL Server Tuning Expert</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-650 dark:text-zinc-400">
              <CheckCircle className="h-4 w-4 text-indigo-600 dark:text-indigo-400 shrink-0" />
              <span>Clinical software (21 CFR Part 11)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-650 dark:text-zinc-400">
              <Smartphone className="h-4 w-4 text-cyan-500 shrink-0" />
              <span>Agile Lead (URS mapping)</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
               onClick={() => handleCtaClick("#projects")}
               className="flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-sans font-bold py-3.5 px-6 shadow-md shadow-indigo-600/10 transition-all cursor-pointer hover:-translate-y-0.5 uppercase tracking-wider text-xs"
            >
              <span>Explore Portfolio</span>
              <ArrowRight className="h-4.5 w-4.5" />
            </button>
            <button
               onClick={() => handleCtaClick("#contact")}
               className="flex items-center justify-center gap-2 rounded-lg border hover:bg-zinc-100 font-sans font-bold py-3.5 px-6 transition-all cursor-pointer border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900 uppercase tracking-wider text-xs"
            >
              <Mail className="h-4 w-4 text-zinc-550 dark:text-zinc-400" />
              <span>Get In touch</span>
            </button>
            <button
               onClick={onOpenPdf}
               className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-zinc-350 hover:border-zinc-500 text-zinc-750 hover:bg-zinc-50/50 font-sans font-bold py-3.5 px-6 transition-all cursor-pointer dark:border-zinc-750 dark:text-zinc-300 dark:hover:bg-zinc-900/30 uppercase tracking-wider text-xs"
            >
              <Download className="h-4 w-4" />
              <span>Generate CV</span>
            </button>
          </div>

          {/* Social connections links */}
          <div className="flex items-center gap-3 pt-4">
            <span className="font-mono text-xs text-zinc-400 dark:text-zinc-550 uppercase tracking-wider font-bold">Social Links</span>
            <div className="h-px w-8 bg-zinc-200 dark:bg-zinc-800" />
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile link"
              className="group flex h-8 w-8 items-center justify-center rounded-lg hover:bg-zinc-100 text-zinc-650 hover:text-indigo-600 transition dark:hover:bg-zinc-900/50 dark:text-zinc-450 dark:hover:text-indigo-400"
            >
              <Linkedin className="h-4.5 w-4.5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile link"
              className="group flex h-8 w-8 items-center justify-center rounded-lg hover:bg-zinc-200 text-zinc-650 hover:text-cyan-500 transition dark:hover:bg-zinc-850 dark:text-zinc-450 dark:hover:text-cyan-400"
            >
              <svg className="h-4.5 w-4.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right column - Interactive high-fidelity tabbed profile workspace */}
        <div className="lg:col-span-12 xl:col-span-5 relative font-sans">
          <div className="relative mx-auto max-w-[360px] sm:max-w-[400px]">
            {/* High-Tech Glowing Backdrop Ring */}
            <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-indigo-500 via-sky-400 to-emerald-450 opacity-20 blur-xl animate-pulse" />

            {/* Inner Dashboard Glass Frame */}
            <div className="relative rounded-2xl border overflow-hidden shadow-2xl border-zinc-200/80 bg-white/95 dark:border-zinc-850 dark:bg-zinc-950/95 text-left">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-850 bg-zinc-50 dark:bg-zinc-900/50">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                
                {/* Visual Tab Switcher for Developers */}
                <div className="flex bg-zinc-250/60 dark:bg-zinc-900/80 p-0.5 rounded-lg text-[10px] font-mono leading-none">
                  <button
                    onClick={() => setActiveTab("headshot")}
                    className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider cursor-pointer transition ${
                      activeTab === "headshot"
                        ? "bg-white text-indigo-600 shadow-sm dark:bg-zinc-800 dark:text-cyan-400"
                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                    }`}
                  >
                    Portrait
                  </button>
                  <button
                    onClick={() => setActiveTab("system")}
                    className={`px-2.5 py-1 rounded-md font-bold uppercase tracking-wider cursor-pointer transition ${
                      activeTab === "system"
                        ? "bg-white text-indigo-600 shadow-sm dark:bg-zinc-800 dark:text-cyan-400"
                        : "text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300"
                    }`}
                  >
                    C# Spec
                  </button>
                </div>

                <span className="text-xs font-black tracking-widest text-emerald-600 dark:text-emerald-400">ASP.NET</span>
              </div>

              {/* Developer Environment Visual Workspace */}
              <div className="p-4 space-y-4 font-mono text-xs text-zinc-700 dark:text-zinc-300 min-h-[310px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === "headshot" ? (
                    <motion.div
                      key="headshot"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 flex-grow flex flex-col justify-between"
                    >
                      <div className="space-y-1">
                        <span className="block text-[10px] font-mono uppercase tracking-widest text-indigo-600 dark:text-cyan-454 font-bold border-b pb-1 dark:border-zinc-900">
                          // Enterprise Identity Ledger
                        </span>
                      </div>

                      {/* Headshot Spot - Supports real uploaded image / beautiful high-fidelity likeness SVG fallback */}
                      <div className="relative rounded-xl border border-zinc-200 dark:border-zinc-80ab/80 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-hidden shadow-inner flex items-center justify-center max-w-[280px] mx-auto aspect-[4/5]">
                        {!imgError ? (
                          <img
                            src="/assets/neeraj_profile.png"
                            alt="Neeraj Rajendra Prasad Yadav"
                            className="w-full h-full object-cover rounded-xl"
                            onError={() => setImgError(true)}
                            referrerPolicy="no-referrer"
                          />
                        ) : (
                          /* Extreme detail SVG illustration representing Neeraj Yadav's likeness (black business suit + white shirt + dark hair + neat mustache/goatee) */
                          <svg viewBox="0 0 200 240" className="w-full h-full object-cover">
                            <defs>
                              <linearGradient id="studio-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#1e1b4b" />
                                <stop offset="50%" stopColor="#0f172a" />
                                <stop offset="100%" stopColor="#020617" />
                              </linearGradient>
                              <linearGradient id="blazer-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#18181b" />
                                <stop offset="100%" stopColor="#09090b" />
                              </linearGradient>
                            </defs>
                            
                            {/* Cosmic backdrop */}
                            <rect width="200" height="240" fill="url(#studio-grad)" />
                            
                            {/* High-tech matrix circles */}
                            <circle cx="160" cy="60" r="40" fill="#06b6d4" opacity="0.08" />
                            <circle cx="40" cy="180" r="50" fill="#6366f1" opacity="0.06" stroke="#4f46e5" strokeWidth="1" strokeDasharray="3,3" />
                            
                            {/* White Shirt Collar & Tie line */}
                            <path d="M72 145 L100 182 L128 145 L135 152 L100 205 L65 152 Z" fill="#ffffff" />
                            <path d="M100 182 L100 240" stroke="#cbd5e1" strokeWidth="1" />
                            
                            {/* Black Suit Blazer */}
                            <path d="M28 240 L52 145 L72 153 L62 188 L100 240 L138 188 L128 153 L148 145 L172 240 Z" fill="url(#blazer-grad)" />
                            <path d="M52 145 L72 188 L100 240 L128 188 L148 145" fill="none" stroke="#27272a" strokeWidth="2.5" />
                            
                            {/* Neck */}
                            <path d="M84 110 L84 158 L116 158 L116 110 Z" fill="#e29a73" />
                            <path d="M84 115 L100 132 L116 115" fill="#ca8059" opacity="0.8" />
                            
                            {/* Head/Face shape */}
                            <path d="M74 72 C74 48 80 41 100 41 C120 41 126 48 126 72 C126 102 119 116 100 116 C81 116 74 102 74 72 Z" fill="#f0ab85" />
                            
                            {/* Groomed Ears */}
                            <circle cx="72" cy="78" r="6" fill="#f0ab85" />
                            <circle cx="128" cy="78" r="6" fill="#f0ab85" />
                            
                            {/* Hair (Short neat professional black corporate haircut) */}
                            <path d="M71 67 C71 42 84 34 100 34 C116 34 129 42 129 67 C126 62 120 59 112 59 C104 59 100 63 96 63 C90 63 84 59 76 59 C74 62 72 64 71 67 Z" fill="#18181b" />
                            
                            {/* Dark expressive eyes */}
                            <circle cx="89" cy="74" r="2.5" fill="#09090b" />
                            <circle cx="111" cy="74" r="2.5" fill="#09090b" />
                            <circle cx="90" cy="73.5" r="0.7" fill="#ffffff" />
                            <circle cx="112" cy="73.5" r="0.7" fill="#ffffff" />
                            
                            {/* Groomed Eyebrows */}
                            <path d="M82 69 C85 67 92 68 94 70" fill="none" stroke="#18181b" strokeWidth="2.2" strokeLinecap="round" />
                            <path d="M118 69 C115 67 108 68 106 70" fill="none" stroke="#18181b" strokeWidth="2.2" strokeLinecap="round" />
                            
                            {/* Mustache (Neat groomed black mustache) */}
                            <path d="M86 92 C92 89 98 89 100 90 C102 89 108 89 114 92 C115 94 111 94 100 94 C89 94 85 94 86 92 Z" fill="#18181b" />
                            
                            {/* Goatee & Beard details */}
                            <path d="M94 102 L106 102 L100 112 Z" fill="#18181b" />
                            <path d="M77 95 C77 111 90 118 100 118 C110 118 123 111 123 95" fill="none" stroke="#18181b" strokeWidth="1.5" opacity="0.35" />
                          </svg>
                        )}
                        
                        {/* Interactive floating info pill */}
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 rounded-lg border bg-white/90 backdrop-blur-md px-2.5 py-1.5 border-zinc-250/70 text-[9px] dark:bg-zinc-950/90 dark:border-zinc-800">
                          <p className="font-extrabold text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
                            <span>Neeraj Rajendra Prasad Yadav</span>
                            <span className="text-indigo-600 dark:text-cyan-400 uppercase tracking-widest font-black">Verified</span>
                          </p>
                          <p className="text-zinc-650 dark:text-zinc-300 mt-0.5 font-sans font-bold">Full Stack Software Developer</p>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="system"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3 flex-grow"
                    >
                      <div className="space-y-1">
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold">// Live .NET Environment Schema</p>
                        <p className="text-zinc-650 dark:text-zinc-400"><span className="text-indigo-650 dark:text-indigo-400">using</span> System.ClinicalDomain.CTMS;</p>
                        <p className="text-zinc-650 dark:text-zinc-400"><span className="text-indigo-650 dark:text-indigo-400">using</span> Microsoft.AspNetCore.Mvc;</p>
                      </div>

                      <div className="border-t pt-2 border-zinc-100 dark:border-zinc-900 text-[11px] leading-relaxed">
                        <span className="text-emerald-600 dark:text-emerald-400">public class</span> <span className="text-indigo-600 dark:text-indigo-400 font-bold">NeerajYadav</span>
                        <p className="ml-2">{"{"}</p>
                        <p className="ml-4"><span className="text-indigo-505">private const double</span> Experience = <span className="text-cyan-600 dark:text-cyan-400 font-extrabold">3.6</span>; <span className="text-zinc-400">// Yrs</span></p>
                        <p className="ml-4"><span className="text-indigo-505">public string</span> Codebase {"=>"} <span className="text-emerald-650">"ASP.NET Core & SQL Server"</span>;</p>
                        <p className="ml-4"><span className="text-indigo-505">public string[]</span> Frameworks {"=>"} <span className="text-emerald-650">new</span>[] {"{ \"React\", \"EF Core\", \"Web API\" }"};</p>
                        <p className="ml-4"><span className="text-indigo-505">public string</span> FocusArea {"=>"} <span className="text-emerald-650">"CTMS Compliance & SQL Optimization"</span>;</p>
                        <p className="ml-2">{"}"}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Status footer bar */}
                <div className="px-1 py-1.5 text-[9px] font-mono border-t flex items-center justify-between border-zinc-150 dark:border-zinc-900 text-zinc-400 dark:text-zinc-500">
                  <span className="flex items-center gap-1.5 text-emerald-505 font-bold">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Secure Ledger Online
                  </span>
                  <span>SYSTEM // VITE CONFIG</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
