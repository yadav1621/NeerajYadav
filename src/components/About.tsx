import { Award, Briefcase, Cpu, Check, Compass, ShieldAlert, CheckSquare } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function About() {
  const objectiveList = [
    "Design and scale high-compliance enterprise portals following secure coding habits.",
    "Streamline software architectures using .NET Core, MVC, and high-frequency SQL indexing schemas.",
    "Translate complex client expectations (URS documents) into scalable, automated microservices.",
    "Improve regulatory posture and traceability for life sciences tracking technologies."
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-200 bg-zinc-100/40 dark:border-zinc-900 dark:bg-zinc-950/20 w-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#107c10] dark:text-emerald-450 text-emerald-600">
            About Neeraj
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-55">
            Professional Profile & DNA
          </h2>
          <div className="mx-auto h-1 w-12 rounded bg-indigo-600 dark:bg-cyan-500" />
        </div>

        {/* Content Structure */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Summary and Objectives */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-6">
            <h3 className="font-sans text-xl font-bold text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
              <Compass className="h-5 w-5 text-indigo-600 dark:text-cyan-405" />
              <span>Personal Brand Statement</span>
            </h3>
            
            <p className="font-sans text-base leading-relaxed text-zinc-650 dark:text-zinc-350">
              {PERSONAL_INFO.summary}
            </p>

            <div className="border-l-4 border-indigo-600 pl-4 py-1 italic text-sm text-zinc-650 dark:text-zinc-400 bg-indigo-600/5 rounded-r">
              &ldquo;Data integrity in clinical domains isn&apos;t just about validation checks; it is about building software architectures you can trust with patient milestones.&rdquo;
            </div>

            {/* Core Objectives list */}
            <div className="pt-4 space-y-4">
              <h4 className="font-sans text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
                Core Career Objectives
              </h4>
              <ul className="space-y-3">
                {objectiveList.map((obj, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-650 dark:text-zinc-400">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Strengths Display Grid */}
          <div className="lg:col-span-12 xl:col-span-6 space-y-6">
            <h3 className="font-sans text-xl font-bold text-zinc-900 dark:text-zinc-55 flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-400" />
              <span>Core Strengths & Pillars</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PERSONAL_INFO.strengths.map((str, index) => (
                <div 
                  key={index}
                  className="p-5 rounded-xl border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-zinc-200 bg-white shadow-sm hover:border-indigo-500 dark:border-zinc-850 dark:bg-zinc-900 dark:hover:border-cyan-500"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:bg-cyan-500/10 dark:text-cyan-400 mb-3 block">
                    {index === 0 ? (
                      <CheckSquare className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Cpu className="h-5 w-5" />
                    ) : index === 2 ? (
                      <Briefcase className="h-5 w-5" />
                    ) : (
                      <Compass className="h-5 w-5" />
                    )}
                  </div>
                  <h4 className="font-sans text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1.5">
                    {str.title}
                  </h4>
                  <p className="font-sans text-xs text-zinc-550 leading-normal dark:text-zinc-400">
                    {str.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Indicators Block */}
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-950 border border-zinc-800 text-white p-6 rounded-2xl relative overflow-hidden shadow-inner flex flex-wrap items-center justify-around gap-6">
              {/* Blur light overlay */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-indigo-600/10 rounded-full blur-xl" />
              
              <div className="text-center">
                <span className="block font-sans text-3xl font-extrabold text-indigo-400 dark:text-cyan-400">3.6+</span>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-450">Years of Experience</span>
              </div>
              <div className="h-8 w-px bg-zinc-800 hidden sm:block" />
              <div className="text-center">
                <span className="block font-sans text-3xl font-extrabold text-emerald-400 font-bold">6+</span>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-450">Enterprise systems</span>
              </div>
              <div className="h-8 w-px bg-zinc-800 hidden sm:block" />
              <div className="text-center">
                <span className="block font-sans text-3xl font-extrabold text-indigo-500 font-bold">100%</span>
                <span className="block font-mono text-[9px] uppercase tracking-widest text-zinc-450">Data Compliance</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
