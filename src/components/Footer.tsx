import { ArrowUp, Printer, X, Mail, Phone, MapPin, Briefcase, GraduationCap, Quote } from "lucide-react";
import { PERSONAL_INFO, EXPERIENCE_HISTORY, EDUCATION_HISTORY, OTHER_SKILLS, EXTRA_ACTIVITIES } from "../data";

interface FooterProps {
  showPdfModal: boolean;
  onClosePdfModal: () => void;
}

export default function Footer({ showPdfModal, onClosePdfModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <footer className="py-12 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-850 dark:bg-zinc-950 text-zinc-500 text-xs font-sans">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <p className="font-sans font-extrabold text-zinc-805 dark:text-zinc-200">
              © 2026 {PERSONAL_INFO.fullName}. All rights reserved.
            </p>
            <p className="font-mono text-[9px] text-zinc-400">
              Coded beautifully with React 19, Tailwind CSS v4 & Motion.
            </p>
          </div>

          <button
            id="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-lg border cursor-pointer border-zinc-250 bg-white hover:bg-zinc-100 text-zinc-700 transition dark:border-zinc-800 dark:bg-zinc-900 dark:hover:bg-zinc-850 dark:text-zinc-350"
          >
            <ArrowUp className="h-4.5 w-4.5" />
          </button>
        </div>
      </footer>

      {/* CV Print Preview Modal Backdrop */}
      {showPdfModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-zinc-950/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl rounded-2xl bg-white text-zinc-900 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
            
            {/* Modal Navigation & Controls Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50">
              <div>
                <h3 className="font-sans font-black text-sm text-zinc-800 flex items-center gap-1.5">
                  Neeraj Yadav &mdash; Curriculum Vitae Ledger
                </h3>
                <p className="text-[10px] text-indigo-650 font-mono font-bold uppercase tracking-widest">
                  Optimized for printing (US Letter / A4 Paper layouts)
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  id="print-cv"
                  onClick={handlePrint}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-sans text-xs font-bold cursor-pointer transition uppercase tracking-wider shadow shadow-indigo-600/10"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>Print CV Ledger</span>
                </button>
                <button
                  id="close-cv"
                  onClick={onClosePdfModal}
                  aria-label="Close CV preview"
                  className="p-1.5 rounded hover:bg-zinc-200 text-zinc-400 hover:text-zinc-700 cursor-pointer"
                >
                  <X className="h-4.5 w-4.5" />
                </button>
              </div>
            </div>

            {/* Print Body Space (Tailwind classes specifically styled for print outputs) */}
            <div className="p-8 overflow-y-auto flex-grow print-section font-sans text-xs space-y-6">
              
              {/* CV Top Block with high-contrast text */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-zinc-200">
                <div>
                  <h1 className="text-2xl font-black tracking-tight text-zinc-950 uppercase">
                    {PERSONAL_INFO.fullName}
                  </h1>
                  <span className="block font-mono text-xs font-bold text-indigo-600 tracking-wider">
                    {PERSONAL_INFO.title}
                  </span>
                </div>

                <div className="space-y-1 text-right text-[11px] text-zinc-650">
                  <span className="block flex items-center justify-end gap-1.5">
                    <Mail className="h-3 w-3 text-zinc-400" />
                    {PERSONAL_INFO.email}
                  </span>
                  <span className="block flex items-center justify-end gap-1.5">
                    <Phone className="h-3 w-3 text-zinc-400" />
                    +91 {PERSONAL_INFO.phone}
                  </span>
                  <span className="block flex items-center justify-end gap-1.5">
                    <MapPin className="h-3 w-3 text-zinc-400" />
                    {PERSONAL_INFO.address}
                  </span>
                </div>
              </div>

              {/* Summary */}
              <div className="space-y-1.5">
                <h4 className="font-mono text-[9px] font-bold text-indigo-650 uppercase tracking-widest border-b pb-0.5 border-zinc-100">
                  Professional Summary
                </h4>
                <p className="leading-relaxed text-zinc-700 font-sans text-xs">
                  {PERSONAL_INFO.summary}
                </p>
              </div>

              {/* Core Skill Lists */}
              <div className="space-y-1.5">
                <h4 className="font-mono text-[9px] font-bold text-indigo-650 uppercase tracking-widest border-b pb-0.5 border-zinc-100">
                  Core Skills
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 pt-1">
                  <div>
                    <span className="block font-bold text-zinc-950">Back-End Stack:</span>
                    <span className="text-zinc-650 text-xs">C#, ASP.NET, ASP.NET Core, Web API, WCF Services</span>
                  </div>
                  <div>
                    <span className="block font-bold text-zinc-950">Front-End Stack:</span>
                    <span className="text-zinc-650 text-xs">HTML5, CSS3, JS, jQuery, AJAX, Bootstrap, Tailwind</span>
                  </div>
                  <div>
                    <span className="block font-bold text-zinc-950">Databases & Tools:</span>
                    <span className="text-zinc-650 text-xs">SQL Server, Entity Framework, VS, Git, Azure DevOps, TFS</span>
                  </div>
                </div>
              </div>

              {/* Work Milestones */}
              <div className="space-y-3">
                <h4 className="font-mono text-[9px] font-bold text-indigo-650 uppercase tracking-widest border-b pb-0.5 border-zinc-100">
                  Work Experience History
                </h4>
                
                {EXPERIENCE_HISTORY.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5 font-sans text-xs">
                    <div className="flex items-center justify-between text-[11px]">
                      <div>
                        <strong className="text-zinc-950">{exp.role}</strong>
                        <span className="mx-1.5 text-zinc-350">|</span>
                        <span className="text-indigo-600 font-bold">{exp.company}</span>
                      </div>
                      <span className="font-mono text-[10px] font-medium text-zinc-500">{exp.period}</span>
                    </div>
                    {exp.description && (
                      <p className="text-[11px] leading-relaxed text-zinc-650">
                        {exp.description}
                      </p>
                    )}
                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="list-disc pl-5 text-[11px] text-zinc-600 space-y-0.5">
                        {exp.highlights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* Academic Records */}
              <div className="space-y-1.5">
                <h4 className="font-mono text-[9px] font-bold text-indigo-650 uppercase tracking-widest border-b pb-0.5 border-zinc-100">
                  Academic History
                </h4>
                <div className="space-y-2">
                  {EDUCATION_HISTORY.map((edu, idx) => (
                    <div key={idx} className="flex justify-between items-start text-[11px] font-sans">
                      <div>
                        <strong className="text-zinc-950">{edu.degree}</strong>
                        <span className="block text-zinc-500 text-[10px]">{edu.institution}</span>
                      </div>
                      <div className="text-right font-sans">
                        <span className="font-mono text-[10px] text-zinc-500 block">{edu.period}</span>
                        <span className="font-bold text-[#107c10] text-[10.5px]">{edu.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Professional Certifications & Continuous Upskilling */}
              <div className="space-y-1.5">
                <h4 className="font-mono text-[9px] font-bold text-indigo-655 uppercase tracking-widest border-b pb-0.5 border-zinc-100">
                  Professional Certifications & Continuous Upskilling
                </h4>
                <div className="space-y-2.5">
                  {EXTRA_ACTIVITIES.map((cert, idx) => (
                    <div key={idx} className="flex justify-between items-start text-[10.5px] font-sans">
                      <div>
                        <strong className="text-zinc-950 block">{cert.name}</strong>
                        {cert.institution && (
                          <span className="text-indigo-600 font-bold block text-[10px]">
                            {cert.institution}
                          </span>
                        )}
                        <span className="text-zinc-500 text-[9.5px]">Focus: {cert.duration}</span>
                      </div>
                      <div className="text-right whitespace-nowrap min-w-[80px]">
                        <span className="font-mono text-[9.5px] text-zinc-500 block">{cert.date}</span>
                        {cert.progress !== undefined && (
                          <span className="inline-block px-1.5 py-0.5 mt-0.5 rounded bg-indigo-505/10 text-indigo-600 font-bold text-[9px] tracking-tight">
                            Progress: {cert.progress}%
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Signature area for offline checks */}
              <div className="pt-8 flex justify-between items-end border-t border-zinc-150 mt-12 text-[10px] text-zinc-400 font-mono">
                <div>
                  <p>Location: Thane, Maharashtra</p>
                  <p>Date: {new Date().toLocaleDateString()}</p>
                </div>
                <div className="text-right border-t border-zinc-200 pt-2 w-48">
                  <p className="text-zinc-700 font-bold">{PERSONAL_INFO.fullName}</p>
                  <p>Authorized Signature</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </>
  );
}
