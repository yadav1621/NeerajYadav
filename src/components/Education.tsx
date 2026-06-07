import { EDUCATION_HISTORY, EXTRA_ACTIVITIES, HOBBIES } from "../data";
import { GraduationCap, Award, Calendar, BookOpen, Star, FileCheck2, Wrench, Workflow, Cpu, Compass } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 bg-zinc-100/40 border-t border-zinc-200 dark:border-zinc-900 dark:bg-zinc-950/20 w-full font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#107c10] dark:text-emerald-450 text-emerald-600">
            Credentials Portfolio
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-55">
            Education & Certifications
          </h2>
          <div className="mx-auto h-1 w-12 rounded bg-indigo-600 dark:bg-cyan-500" />
        </div>

        {/* Outer Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Academic degrees */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-sans text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
              <GraduationCap className="h-5.5 w-5.5 text-indigo-650 dark:text-cyan-400" />
              <span>Academic Records</span>
            </h3>

            <div className="space-y-4">
              {EDUCATION_HISTORY.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-zinc-200 bg-white shadow-sm hover:border-indigo-500 transition-colors dark:border-zinc-850 dark:bg-zinc-900"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 mb-2.5">
                    <div>
                      <h4 className="font-sans text-base font-extrabold tracking-tight text-zinc-950 dark:text-zinc-50 leading-snug">
                        {edu.degree}
                      </h4>
                      <p className="font-sans text-xs text-indigo-700 dark:text-cyan-405 font-black mt-0.5">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start sm:self-center px-3 py-1 rounded-full font-mono text-xs font-black bg-indigo-600 text-white dark:bg-cyan-500 dark:text-zinc-950 shadow-sm border border-indigo-500/20 dark:border-cyan-400/20">
                      <Calendar className="h-3.5 w-3.5" />
                      {edu.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-extrabold bg-indigo-100 text-indigo-950 dark:bg-cyan-950 dark:text-cyan-300 px-3 py-1 rounded-md border border-indigo-300 dark:border-cyan-800 shadow-sm">
                      {edu.score}
                    </span>
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <ul className="space-y-1 text-xs text-zinc-900 dark:text-zinc-100 font-bold">
                      {edu.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <span className="text-[#107c10] dark:text-emerald-400 font-black">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Special licenses & extra curricular courses */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-100 flex items-center gap-2 mb-4">
              <Award className="h-5.5 w-5.5 text-emerald-600 dark:text-emerald-450" />
              <span>Special Certifications & Courses</span>
            </h3>

            <div className="space-y-4">
              {EXTRA_ACTIVITIES.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl border border-dashed border-zinc-300 bg-white/50 hover:bg-white transition-all dark:border-zinc-805 dark:bg-zinc-900/20"
                >
                  <div className="flex items-start justify-between gap-2.5 mb-2">
                    <div className="space-y-1">
                      <h4 className="font-sans text-xs font-black tracking-tight text-zinc-900 dark:text-zinc-100 leading-tight">
                        {cert.name}
                      </h4>
                      {cert.institution && (
                        <p className="font-sans text-xs text-indigo-700 dark:text-cyan-450 font-black tracking-tight mt-0.5">
                          {cert.institution}
                        </p>
                      )}
                      <p className="font-sans text-[11.5px] text-zinc-900 dark:text-zinc-100 font-bold mt-1">
                        Focus: <strong className="font-extrabold text-indigo-900 dark:text-cyan-400">{cert.duration}</strong>
                      </p>
                    </div>
                  </div>

                  {/* Syllabus / Progress bar display */}
                  {cert.progress !== undefined && (
                    <div className="my-3.5 space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-900 dark:text-zinc-100 uppercase tracking-widest font-black">Curriculum Mastery Coverage</span>
                        <span className="text-indigo-700 dark:text-cyan-450 font-black">{cert.progress}% Complete</span>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-emerald-500 to-teal-500 transition-all duration-1000"
                          style={{ width: `${cert.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between text-xs font-mono text-zinc-950 dark:text-zinc-50 font-extrabold pt-2.5 border-t border-zinc-200 dark:border-zinc-800">
                    <span className="flex items-center gap-1 text-[#107c10] dark:text-emerald-400 font-black">
                      {cert.progress !== undefined ? (
                        <span className="flex items-center gap-1.5 text-indigo-700 dark:text-cyan-400 font-black uppercase tracking-wider">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-505 opacity-75"></span>
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-indigo-600"></span>
                          </span>
                          Active Syllabus Study
                        </span>
                      ) : (
                        <span className="flex items-center gap-1.5 text-[#107c10] dark:text-emerald-400 font-black uppercase tracking-wider">
                          <FileCheck2 className="h-3.5 w-3.5" />
                          Completed Course
                        </span>
                      )}
                    </span>
                    <span className="bg-indigo-50 text-indigo-900 dark:bg-zinc-800 dark:text-cyan-400 px-2 py-0.5 rounded border border-indigo-200 dark:border-zinc-700 font-black">{cert.date}</span>
                  </div>

                </div>
              ))}

              {/* Special Quote Badge or Callout */}
              <div className="p-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-950/20 text-center">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-550/10 text-indigo-500 mb-2">
                  <BookOpen className="h-4.5 w-4.5" />
                </span>
                <p className="font-sans text-xs text-zinc-600 dark:text-zinc-350 italic">
                  &ldquo;A lifelong commitment to upskilling across dynamic client requirements and high-frequency data structures.&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Continuous Learning & Technical Hobbies Section */}
        <div className="mt-16 pt-12 border-t border-zinc-200/80 dark:border-zinc-900/60">
          <div className="space-y-2 mb-8">
            <h4 className="font-sans text-xs font-bold uppercase tracking-widest text-[#107c10] dark:text-emerald-450 text-emerald-600">
              Active Growth & Passion
            </h4>
            <h3 className="font-sans text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-55 flex items-center gap-2">
              <Compass className="h-5 w-5 text-indigo-650 dark:text-cyan-400" />
              <span>Continuous Learning & Engineering Hobbies</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {HOBBIES.map((hobby, index) => {
              return (
                <div 
                  key={index}
                  className="p-6 rounded-xl border border-zinc-200/80 bg-white/70 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300 dark:border-zinc-850 dark:bg-zinc-900/40 dark:hover:border-cyan-500/30"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-650 dark:bg-cyan-950 dark:text-cyan-300 mb-4">
                    {index === 0 ? (
                      <Wrench className="h-5 w-5" />
                    ) : index === 1 ? (
                      <Workflow className="h-5 w-5" />
                    ) : (
                      <Cpu className="h-5 w-5" />
                    )}
                  </div>
                  <h4 className="font-sans text-sm font-extrabold text-zinc-950 dark:text-zinc-50 mb-2">
                    {hobby.name}
                  </h4>
                  <p className="font-sans text-xs text-zinc-650 leading-relaxed dark:text-zinc-400">
                    {hobby.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
