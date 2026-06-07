import { useState } from "react";
import { SKILL_CATEGORIES, OTHER_SKILLS } from "../data";
import { Code, Database, Layout, Terminal, Star, Sparkles } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  // Match icon for categories
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Terminal className="h-5 w-5 text-indigo-600 dark:text-cyan-400" />;
      case 1:
        return <Layout className="h-5 w-5 text-indigo-600 dark:text-cyan-400" />;
      case 2:
        return <Database className="h-5 w-5 text-indigo-600 dark:text-cyan-400" />;
      default:
        return <Code className="h-5 w-5 text-indigo-600 dark:text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 w-full relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#107c10] dark:text-emerald-450 text-emerald-600">
            Professional Competencies
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-55">
            Technical Stack & Expertise
          </h2>
          <div className="mx-auto h-1 w-12 rounded bg-indigo-600 dark:bg-cyan-500" />
          <p className="font-sans text-sm text-zinc-550 dark:text-zinc-400 max-w-lg mx-auto">
            Categorized competency rating measuring raw design fluency, architecture optimization, and clinical validation.
          </p>
        </div>

        {/* Tab Controls for Skill Groups */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              name={`skill-tab-${idx}`}
              id={`skill-tab-id-${idx}`}
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-sans text-xs uppercase tracking-wider font-bold transition cursor-pointer ${
                activeTab === idx
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                  : "bg-zinc-100 text-zinc-750 hover:bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-350 dark:hover:bg-zinc-850"
              }`}
            >
              {getIcon(idx)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Skills Progress Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Active Tab Skills */}
          <div className="lg:col-span-12 xl:col-span-6 p-6 rounded-2xl border border-zinc-200 bg-white/70 dark:border-zinc-855 dark:bg-zinc-900/60 backdrop-blur space-y-6">
            <h3 className="font-sans text-lg font-extrabold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <span>{SKILL_CATEGORIES[activeTab].name}</span>
              <span className="text-[10px] font-mono font-bold bg-indigo-600/10 text-indigo-650 dark:text-cyan-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                Core Assets
              </span>
            </h3>

            <div className="space-y-5">
              {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                   <div className="flex items-center justify-between text-sm font-sans">
                     <span className="font-semibold text-zinc-800 dark:text-zinc-200">{skill.name}</span>
                     <span className="font-mono text-xs font-bold text-indigo-600 dark:text-cyan-400">{skill.level}%</span>
                   </div>
                   <div className="h-2 w-full rounded-full bg-zinc-150 dark:bg-zinc-800 overflow-hidden">
                     {/* Width Container */}
                     <div 
                       className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-emerald-500 dark:from-cyan-500 dark:to-cyan-400 transition-all duration-1000 ease-out"
                       style={{ width: `${skill.level}%` }}
                     />
                   </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Competencies Quick Summary Text */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl border border-indigo-500/20 bg-indigo-600/5 dark:bg-indigo-950/20 space-y-4">
              <h3 className="font-sans text-sm font-bold uppercase tracking-wider text-indigo-650 dark:text-cyan-400 flex items-center gap-1.5">
                <Sparkles className="h-4.5 w-4.5 text-indigo-600 dark:text-cyan-400 shrink-0" />
                <span>Competency Insights</span>
              </h3>
              <p className="font-sans text-sm leading-relaxed text-zinc-650 dark:text-zinc-350">
                Neeraj&apos;s technical capabilities span advanced server orchestration via 
                <strong className="text-zinc-900 dark:text-zinc-50"> C# and ASP.NET Core MVC</strong>, coupled with deep mastery of high-integrity clinical domain processes. Over his 3.6+ years of experience, he has maintained regulatory-compliant database engines with optimal stored procedures, ensuring enterprise security across core networks.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-1">
                  <span className="block text-2xl font-sans font-extrabold text-[#107c10] dark:text-emerald-400">95%</span>
                  <span className="block text-[10px] uppercase font-bold font-mono text-zinc-455">C# Framework Speed</span>
                </div>
                <div className="space-y-1">
                  <span className="block text-2xl font-sans font-extrabold text-indigo-600 dark:text-cyan-400">92%</span>
                  <span className="block text-[10px] uppercase font-bold font-mono text-zinc-455">SQL Query Optimization</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Technology Badges & Clinical Spec Cards */}
        <div className="p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-900/30">
          <h3 className="font-sans text-xs font-bold text-zinc-800 dark:text-zinc-200 mb-4 uppercase tracking-widest text-center">
            Critical Domain Competencies & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {OTHER_SKILLS.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border font-sans text-xs font-medium cursor-default bg-white border-zinc-200 hover:border-indigo-500 hover:bg-zinc-50 transition-colors text-zinc-700 dark:bg-zinc-950 dark:border-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-900"
              >
                <Star className="h-3 w-3 text-indigo-650 fill-indigo-600 dark:text-cyan-400 dark:fill-cyan-400" />
                <span>{tag}</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
