import { EXPERIENCE_HISTORY } from "../data";
import { Briefcase, Calendar, MapPin, Star, Award } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-zinc-50/50 border-y border-zinc-200 dark:bg-zinc-950/10 dark:border-zinc-900 w-full font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#107c10] dark:text-emerald-450 text-emerald-600">
            Professional Timeline
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Work Experience
          </h2>
          <div className="mx-auto h-1 w-12 rounded bg-indigo-600 dark:bg-cyan-500" />
          <p className="font-sans text-sm text-zinc-850 dark:text-zinc-50 font-bold max-w-lg mx-auto">
            A comprehensive journey scaling enterprise systems, writing compliant Clinical trail code, and designing optimized architectures.
          </p>
        </div>

        {/* Timeline Layout Container */}
        <div className="relative border-l-2 max-w-3xl mx-auto border-indigo-600/20 dark:border-zinc-800 pl-6 sm:pl-8 space-y-12 py-4">
          
          {EXPERIENCE_HISTORY.map((exp) => (
            <div key={exp.id} className="relative group">
              
              {/* Pulsing Dot Node Marker */}
              <div className="absolute -left-10.5 sm:-left-12.5 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border-2 transition bg-white border-indigo-600 shadow-sm dark:bg-zinc-950 group-hover:border-emerald-400 group-hover:scale-110">
                <Briefcase className="h-3.5 w-3.5 text-indigo-600 dark:text-cyan-400" />
              </div>

              {/* Card Container */}
              <div className="p-6 rounded-2xl border transition-all duration-300 border-zinc-200 bg-white shadow-sm hover:shadow-md hover:border-indigo-505 dark:border-zinc-855 dark:bg-zinc-900 dark:hover:border-cyan-500">
                
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="font-sans text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2 flex-wrap">
                      <span>{exp.role}</span>
                      {exp.id === "opus" && (
                        <span className="text-[9px] uppercase tracking-wider font-bold bg-[#107c10]/10 text-[#107c10] dark:bg-emerald-400/10 dark:text-emerald-400 px-2 py-0.5 rounded-full">
                          Targeting Senior Roles
                        </span>
                      )}
                    </h3>
                    <div className="flex flex-wrap items-center gap-1.5 text-sm text-indigo-600 dark:text-cyan-400 font-extrabold">
                      <span>{exp.company}</span>
                      <span className="text-zinc-400 dark:text-zinc-600 font-normal">|</span>
                      <span className="flex items-center gap-1 text-zinc-700 dark:text-zinc-300 text-xs font-bold">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-1.5 self-start sm:self-center px-3.5 py-1.5 rounded-full font-mono text-xs font-black bg-indigo-600 text-white dark:bg-cyan-500 dark:text-zinc-950 shadow-md">
                    <Calendar className="h-3.5 w-3.5 text-white dark:text-zinc-950" />
                    {exp.period}
                  </span>
                </div>

                {/* Body Details */}
                <p className="font-sans text-sm text-zinc-800 dark:text-zinc-100 font-medium leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Achievements Highlights (If any exist) */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <div className="space-y-2.5 pt-2.5 border-t border-zinc-200 dark:border-zinc-800">
                    <span className="font-mono text-[10px] font-black uppercase tracking-widest text-[#107c10] dark:text-emerald-400 flex items-center gap-1">
                      <Award className="h-3.5 w-3.5 animate-pulse" />
                      Key Achievements & Scope
                    </span>
                    <ul className="space-y-2 text-xs">
                      {exp.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-2 text-zinc-800 dark:text-zinc-200 font-semibold font-sans">
                          <span className="flex h-4 w-4 items-center justify-center rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
                            <Star className="h-2.5 w-2.5 fill-emerald-500" />
                          </span>
                          <span className="leading-normal">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
