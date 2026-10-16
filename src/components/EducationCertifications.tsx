import React from 'react';
import { GraduationCap, Award, Compass, BookOpen } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function EducationCertifications() {
  return (
    <section id="education" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Education */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider mb-2">
                Academic Foundation
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Education
              </h2>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#0b1222] border border-slate-800 rounded-xl space-y-2"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-xs text-slate-300">{edu.institution}</p>
                    </div>
                    <span className="text-xs font-mono text-indigo-400 shrink-0">{edu.period}</span>
                  </div>

                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="pt-2 border-t border-slate-800/80 flex items-center gap-2 text-xs font-mono text-slate-400">
                    <span>Performance Assessment</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-slate-200 font-semibold">{edu.score}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications & Continuous Learning */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider mb-2">
                Verified Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Certifications & Programs
              </h2>
            </div>

            <div className="space-y-4">
              {PORTFOLIO_DATA.certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#0b1222] border border-slate-800 rounded-xl flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-lg bg-indigo-600/15 text-indigo-400 shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-snug">{cert.name}</h4>
                      <p className="text-xs text-slate-400 mt-0.5">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>

            {/* Engineering Interests */}
            <div className="p-5 bg-[#0b1222]/60 border border-slate-800/80 rounded-xl space-y-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block font-mono">
                Technical Focus & Research
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                Actively learning modern full-stack workflows, scalable distributed microservices, Generative AI agent workflows, and exploring emerging web development tools and technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
