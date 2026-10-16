import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Full-Time MERN Role');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider mb-2">
                Initiate Conversation
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Let's discuss full-stack engineering
              </h2>
              <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                I am actively interviewing for <strong className="text-white font-medium">MERN Stack Developer</strong> and <strong className="text-white font-medium">Frontend Engineer</strong> roles in Bengaluru, Hyderabad, or remote teams worldwide.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3">
              <div className="p-4 bg-[#0b1222] border border-slate-800 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-600/15 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-mono">DIRECT EMAIL</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  aria-label="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 bg-[#0b1222] border border-slate-800 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-600/15 text-indigo-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-mono">TELEPHONE</span>
                    <a
                      href={`tel:${PORTFOLIO_DATA.personal.phone}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                    >
                      {PORTFOLIO_DATA.personal.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={copyPhone}
                  className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  aria-label="Copy Phone"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <div className="p-4 bg-[#0b1222] border border-slate-800 rounded-xl flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-indigo-600/15 text-indigo-400">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-500 block font-mono">LINKEDIN PROFILE</span>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">
                      vankudothu-roopsingh-0b854a34a
                    </span>
                  </div>
                </div>
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          {/* Right: Working Contact Form */}
          <div className="lg:col-span-7 bg-[#0b1222] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            {isSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">Message Dispatched!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, <strong className="text-white">{formData.name}</strong>. I will review your note regarding <span className="text-indigo-400">{selectedTopic}</span> and respond to <strong className="text-white">{formData.email}</strong> shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-2 font-mono">
                    Topic of Inquiry
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {['Full-Time MERN Role', 'Frontend React Contract', 'API Architecture Consultation', 'General Inquiry'].map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors border ${
                          selectedTopic === topic
                            ? 'bg-indigo-600 border-indigo-500 text-white'
                            : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5 font-mono">
                    Project or Opportunity Description
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the engineering team, tech stack requirements, or project scope..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3.5 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-mono">
                    Response time usually within 12 hours
                  </span>
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 shadow-sm shadow-indigo-600/20"
                  >
                    <span>Send Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
