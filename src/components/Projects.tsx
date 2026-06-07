import { useState } from "react";
import { PROJECTS } from "../data";
import { Code, ExternalLink, HelpCircle, Layers, CheckCircle2, ChevronDown, ChevronUp, Star, GitBranch, X, Lock } from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState<string>("all");
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  
  // Custom Modal state replacement for raw alerts
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const categories = [
    { value: "all", label: "All Case Studies" },
    { value: "clinical", label: "Clinical & Lab Research" },
    { value: "enterprise", label: "Enterprise Workflow" },
    { value: "utilities", label: "Digital Utilities" }
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === "all") return true;
    return proj.category === filter;
  });

  const toggleExpand = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  const handleShowCodeNotice = (title: string) => {
    setModalTitle("Source Repositories Locked");
    setModalContent(
      `Neeraj Yadav compiled the "${title}" modules using enterprise-grade .NET C# and optimized SQL Server backbones adhering to strictly monitored 21 CFR Part 11 protocols. These proprietary packages are safely locked inside private medical/client corporate repositories.`
    );
    setModalOpen(true);
  };

  const handleShowLiveNotice = (title: string) => {
    setModalTitle("Staging Gate Clearance Required");
    setModalContent(
      `The production portal for "${title}" is currently deployed inside the client's internal clinical/clinical operations staging environments. Standard public URLs are disabled to preserve medical validation policies and patient privacy guidelines.`
    );
    setModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 w-full select-none font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#107c10] dark:text-emerald-450 text-emerald-600">
            Portfolio Showcase
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Key Architecture Projects
          </h2>
          <div className="mx-auto h-1 w-12 rounded bg-indigo-600 dark:bg-cyan-500" />
          <p className="font-sans text-sm font-bold text-zinc-900 dark:text-zinc-50 max-w-lg mx-auto">
            Deep dive into technical solutions built across high-regulatory pharmaceutical research and service coordination.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              name={`tab-filter-${cat.value}`}
              id={`tab-filter-id-${cat.value}`}
              key={cat.value}
              onClick={() => {
                setFilter(cat.value);
                setExpandedCard(null);
              }}
              className={`px-4 py-2 rounded-lg font-sans text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat.value
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/10"
                  : "bg-zinc-100 hover:bg-zinc-200 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-350 dark:hover:bg-zinc-850"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => {
            const isExpanded = expandedCard === proj.id;
            return (
              <div
                key={proj.id}
                className="group flex flex-col justify-between rounded-2xl border transition-all duration-300 border-zinc-200 bg-white hover:border-indigo-500 dark:border-zinc-850 dark:bg-zinc-900 dark:hover:border-cyan-500 overflow-hidden"
              >
                {/* Visual Header Block */}
                <div className="p-6 pb-4 border-b border-zinc-100 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-900/50">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-widest text-indigo-650 bg-indigo-600/10 px-2 py-0.5 rounded-full dark:text-cyan-400 border border-indigo-505/10">
                      {proj.category === "clinical" ? "Life Sciences" : proj.category === "enterprise" ? "Enterprise" : "Utilities"}
                    </span>
                    <div className="flex gap-1">
                      <span className="text-[10px] font-mono font-black text-zinc-900 bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-50 px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700">
                        ASP.NET Core
                      </span>
                    </div>
                  </div>

                  <h3 className="font-sans text-base font-black tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-cyan-400 transition-colors">
                    {proj.title}
                  </h3>
                  {proj.platform && (
                    <span className="block font-mono text-[10.5px] font-bold text-zinc-900 dark:text-zinc-50 mt-1 bg-zinc-100 dark:bg-zinc-850 px-2 py-0.5 rounded w-max">
                      Platform: <strong className="text-indigo-700 dark:text-cyan-400 font-extrabold">{proj.platform}</strong>
                    </span>
                  )}
                </div>

                {/* Description Body */}
                <div className="p-6 flex-grow space-y-4">
                  <p className="font-sans text-sm text-zinc-900 dark:text-zinc-100 font-bold leading-relaxed">
                    {proj.description}
                  </p>

                  {/* Highlights (Badge Tags) */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center gap-1 rounded px-2.5 py-1 font-mono text-[10.5px] font-black bg-zinc-100 border border-zinc-300 text-zinc-950 dark:bg-zinc-950 dark:border-zinc-700 dark:text-zinc-100"
                      >
                        <Code className="h-2 w-2 text-indigo-600 dark:text-cyan-400" />
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Collapsible Features list & Engineering Challenges */}
                  {isExpanded && (
                    <div className="pt-4 mt-4 border-t border-zinc-100 dark:border-zinc-850 space-y-4 animate-fadeIn">
                      
                      {/* Interactive Features List */}
                      {proj.features && proj.features.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3 text-emerald-500" /> Implemented Features
                          </span>
                          <ul className="space-y-1.5 text-xs text-zinc-900 dark:text-zinc-100 font-bold">
                            {proj.features.map((feat, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-emerald-500 font-extrabold shrink-0 mt-0.5">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Engineering Challenges solved */}
                      {proj.challenges && proj.challenges.length > 0 && (
                        <div className="space-y-1.5">
                          <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-rose-500 flex items-center gap-1">
                            <HelpCircle className="h-3 w-3" /> Technical Challenges Solved
                          </span>
                          <ul className="space-y-1.5 text-xs text-zinc-900 dark:text-zinc-100 font-bold">
                            {proj.challenges.map((ch, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-rose-500 font-extrabold shrink-0 mt-0.5">※</span>
                                <span>{ch}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Responsibilities lists */}
                      <div className="space-y-1.5">
                        <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-indigo-600 dark:text-cyan-400 flex items-center gap-1">
                          <Layers className="h-3 w-3" /> Core Actions
                        </span>
                        <ul className="space-y-1.5 text-xs text-zinc-900 dark:text-zinc-100 font-bold">
                          {proj.responsibilities.slice(0, 3).map((resp, i) => (
                            <li key={i} className="flex items-start gap-1">
                              <span className="text-indigo-600 dark:text-cyan-400 font-extrabold shrink-0 mt-0.5">✔</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  )}

                </div>

                {/* Expand / Collapse Control Buttons */}
                <div className="px-6 py-4 border-t border-zinc-100 dark:border-zinc-850 flex items-center justify-between bg-zinc-50/20 dark:bg-zinc-955/20">
                  <button
                    onClick={() => toggleExpand(proj.id)}
                    className="flex items-center gap-1 text-xs font-bold cursor-pointer text-indigo-600 dark:text-cyan-400"
                  >
                    <span>{isExpanded ? "Collapse Specs" : "Explore Technical Specs"}</span>
                    {isExpanded ? <ChevronUp className="h-3.5 w-3.5" /> : <ChevronDown className="h-3.5 w-3.5" />}
                  </button>

                  <div className="flex gap-2">
                    <button
                      title="Explore Simulation Code"
                      onClick={() => handleShowCodeNotice(proj.title)}
                      className="p-1.5 rounded hover:bg-zinc-200 text-zinc-800 hover:text-indigo-700 transition dark:hover:bg-zinc-805 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer border border-zinc-300 dark:border-zinc-700 font-extrabold"
                    >
                      <GitBranch className="h-3.5 w-3.5" />
                    </button>
                    <button
                      title="Verify Live Platform Details"
                      onClick={() => handleShowLiveNotice(proj.title)}
                      className="p-1.5 rounded hover:bg-zinc-200 text-zinc-800 hover:text-indigo-700 transition dark:hover:bg-zinc-805 dark:text-cyan-400 dark:hover:text-cyan-300 cursor-pointer border border-zinc-300 dark:border-zinc-700 font-extrabold"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Embedded Stylish Custom Clearance Modal overlay */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-md p-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-100 shadow-2xl">
            {/* Top Close icon */}
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg border border-zinc-800 hover:bg-zinc-800 transition text-zinc-400 hover:text-zinc-200 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:bg-cyan-500/10 dark:text-cyan-400">
                <Lock className="h-5 w-5" />
              </span>
              <h3 className="font-sans text-sm font-black uppercase tracking-wider text-indigo-605 dark:text-cyan-400">
                {modalTitle}
              </h3>
            </div>

            {/* Modal Content */}
            <p className="font-sans text-xs text-zinc-350 leading-relaxed mb-6">
              {modalContent}
            </p>

            {/* Close Button line */}
            <div className="flex justify-end pt-2 border-t border-zinc-900">
              <button
                onClick={() => setModalOpen(false)}
                className="rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-xs font-bold px-4 py-2 cursor-pointer transition uppercase tracking-wider shadow shadow-indigo-600/10"
              >
                Acknowledge & Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
