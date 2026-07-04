/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [showPdfModal, setShowPdfModal] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Set default theme state on mount
  useEffect(() => {
    setIsMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDark(savedTheme === "dark");
    } else {
      setIsDark(true); // Default to premium dark mode
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    localStorage.setItem("theme", nextTheme ? "dark" : "light");
  };

  if (!isMounted) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-slate-950 text-white font-mono">
        <div className="flex flex-col items-center gap-3">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-indigo-500 border-t-transparent" />
          <p className="text-xs tracking-widest text-slate-400">LOADING ENVIRONMENT...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={isDark ? "dark text-slate-100 bg-slate-950" : "text-slate-800 bg-slate-50"}>
      <div className="min-h-screen dynamic-transition overflow-x-hidden">
        
        {/* Navigation bar */}
        <Header 
          isDark={isDark} 
          onToggleTheme={handleToggleTheme} 
          onOpenPdf={() => setShowPdfModal(true)} 
        />

        {/* Home Overview Hero */}
        <Hero 
          onOpenPdf={() => setShowPdfModal(true)} 
        />

        {/* Detailed DNA About Section */}
        <About />

        {/* Technical stack block */}
        <Skills />

        {/* Corporate experience track */}
        <Experience />

        {/* Detailed projects showcase */}
        <Projects />

        {/* Academic Records */}
        <Education />

        {/* Connection Form Section */}
        <Contact />

        {/* Back-to-top component & print modal */}
        <Footer 
          showPdfModal={showPdfModal} 
          onClosePdfModal={() => setShowPdfModal(false)} 
        />

      </div>
    </div>
  );
}
