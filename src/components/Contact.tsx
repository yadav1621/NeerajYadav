import React, { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle, AlertCircle, RefreshCw } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation errors on type
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: string[] = [];

    // Basic Validation
    if (!formData.name.trim()) errors.push("Full Name is required.");
    if (!formData.email.trim()) {
      errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push("Please provide a valid email format.");
    }
    if (!formData.message.trim()) errors.push("Message body cannot be empty.");

    if (errors.length > 0) {
      setValidationErrors(errors);
      setStatus("error");
      return;
    }

    // Trigger Fake loading loop
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 w-full relative font-sans">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#107c10] dark:text-emerald-450 text-emerald-600">
            Secure Connection Channel
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-55">
            Get In Touch
          </h2>
          <div className="mx-auto h-1 w-12 rounded bg-indigo-600 dark:bg-cyan-500" />
          <p className="font-sans text-sm font-bold text-zinc-800 dark:text-zinc-200 max-w-md mx-auto">
            Ready to integrate complex database workflows or clinical trial structures for your organization?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct info nodes and channels */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-sans text-lg font-black tracking-tight text-zinc-900 dark:text-zinc-150">
              Connect Directly
            </h3>
            <p className="font-sans text-sm font-bold text-zinc-800 dark:text-zinc-200 leading-relaxed">
              If you have any enterprise inquiries, recruitment discussions, or consulting requests, feel free to reach out via these active channels.
            </p>

            <div className="space-y-4">
              {/* Email Card */}
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-white/70 hover:border-indigo-500 hover:bg-white transition-all dark:border-zinc-850 dark:bg-zinc-900/60 dark:hover:border-cyan-500"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 dark:bg-cyan-500/10 dark:text-cyan-400 shrink-0">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <span className="block font-sans text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                    Email Address
                  </span>
                  <span className="block font-sans text-sm font-semibold text-zinc-850 dark:text-zinc-200">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-white/70 hover:border-indigo-505 hover:bg-white transition-all dark:border-zinc-850 dark:bg-zinc-900/60 dark:hover:border-cyan-500"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#107c10]/10 text-[#107c10] dark:text-emerald-400 shrink-0">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <span className="block font-sans text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                    Phone Number
                  </span>
                  <span className="block font-sans text-sm font-semibold text-zinc-850 dark:text-zinc-200">
                    +91 {PERSONAL_INFO.phone}
                  </span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-4 rounded-xl border border-zinc-200 bg-zinc-50/50 dark:border-zinc-850 dark:bg-zinc-900/20">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-100 text-zinc-650 dark:bg-zinc-950 dark:text-zinc-400 shrink-0 border border-zinc-200 dark:border-zinc-855">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <span className="block font-sans text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-200">
                    Base Location
                  </span>
                  <span className="block font-sans text-sm font-semibold text-zinc-855 dark:text-zinc-300">
                    {PERSONAL_INFO.address}
                  </span>
                </div>
              </div>
            </div>

            {/* Social handles links */}
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-850">
              <span className="font-mono text-xs font-bold text-zinc-800 dark:text-zinc-200">Professional Network:</span>
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-650 transition dark:text-cyan-400 cursor-pointer"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* Right Column: Active Interactive Validator Form */}
          <div className="lg:col-span-7">
            <div className="p-6 md:p-8 rounded-2xl border border-zinc-200 bg-white/50 backdrop-blur shadow-sm dark:border-zinc-850 dark:bg-zinc-900/40">
              <h3 className="font-sans text-lg font-black tracking-tight text-zinc-905 dark:text-zinc-150 mb-6">
                Send a Secure Message
              </h3>

              {/* Error list popup */}
              {status === "error" && validationErrors.length > 0 && (
                <div className="mb-6 p-4 rounded-xl border border-rose-150 bg-rose-50 text-rose-800 dark:bg-rose-950/20 dark:border-rose-900 dark:text-rose-400 space-y-1">
                  <div className="flex items-center gap-1.5 font-sans text-xs font-bold uppercase">
                    <AlertCircle className="h-4.5 w-4.5 text-rose-600" />
                    <span>Please correct the errors:</span>
                  </div>
                  <ul className="list-disc pl-5 text-xs font-medium space-y-0.5">
                    {validationErrors.map((err, i) => (
                      <li key={i}>{err}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Success state box */}
              {status === "success" && (
                <div className="mb-6 p-6 rounded-xl border border-emerald-150 bg-emerald-55 text-[#107c10] dark:bg-emerald-950/20 dark:border-emerald-900 dark:text-emerald-405 text-center space-y-3 animate-fadeIn">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-[#107c10]">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-extrabold uppercase tracking-wide">Message Dispatched!</h4>
                    <p className="font-sans text-xs text-zinc-650 dark:text-zinc-400 mt-1">
                      Thank you for contacting Neeraj. He has been alerted and will follow up with you within 24 hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-2 text-xs font-bold text-indigo-600 dark:text-cyan-400 hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {/* Standard active form */}
              {status !== "success" && (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1">
                      <label htmlFor="name-input" className="block text-xs font-sans font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                        Full Name *
                      </label>
                      <input
                        id="name-input"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        className="w-full rounded-lg border px-3.5 py-2.5 font-sans text-sm focus:outline-none focus:ring-1 border-zinc-200 focus:border-indigo-600 focus:ring-indigo-600 bg-white dark:border-zinc-800 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:bg-slate-950 text-zinc-900 dark:text-zinc-100 disabled:opacity-60"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1">
                      <label htmlFor="email-input" className="block text-xs font-sans font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                        Email Address *
                      </label>
                      <input
                        id="email-input"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        disabled={status === "loading"}
                        className="w-full rounded-lg border px-3.5 py-2.5 font-sans text-sm focus:outline-none focus:ring-1 border-zinc-200 focus:border-indigo-600 focus:ring-indigo-600 bg-white dark:border-zinc-800 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:bg-slate-950 text-zinc-900 dark:text-zinc-100 disabled:opacity-60"
                      />
                    </div>
                  </div>

                  {/* Subject input */}
                  <div className="space-y-1">
                    <label htmlFor="subject-input" className="block text-xs font-sans font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                      Subject
                    </label>
                    <input
                      id="subject-input"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Enterprise CTMS Consultation Requirement"
                      disabled={status === "loading"}
                      className="w-full rounded-lg border px-3.5 py-2.5 font-sans text-sm focus:outline-none focus:ring-1 border-zinc-200 focus:border-indigo-600 focus:ring-indigo-600 bg-white dark:border-zinc-800 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:bg-slate-950 text-zinc-900 dark:text-zinc-100 disabled:opacity-60"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1">
                    <label htmlFor="message-input" className="block text-xs font-sans font-extrabold text-zinc-800 dark:text-zinc-200 uppercase tracking-wide">
                      Message Body *
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Neeraj, I'd love to connect on a .NET architecture project..."
                      disabled={status === "loading"}
                      className="w-full rounded-lg border px-3.5 py-2.5 font-sans text-sm focus:outline-none focus:ring-1 border-zinc-200 focus:border-indigo-650 focus:ring-indigo-600 bg-white dark:border-zinc-800 dark:focus:ring-cyan-500 dark:focus:border-cyan-500 dark:bg-slate-950 text-zinc-900 dark:text-zinc-100 disabled:opacity-60 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-form"
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-750 text-white font-sans font-bold uppercase tracking-wider py-3 cursor-pointer transition-all disabled:opacity-75"
                  >
                    {status === "loading" ? (
                      <>
                        <RefreshCw className="h-4 w-4 animate-spin" />
                        <span>Transmitting over secure layer...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
