import React, { useState } from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function ExperienceTimeline() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider mb-2">
              Career Trajectory
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Professional Experience
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              Software engineering roles spanning full-stack web application development, 
              scalable API integration, and frontend optimization.
            </p>
          </div>

          <div className="text-xs text-slate-400 font-mono">
            1+ Years Full-Stack Production Experience
          </div>
        </div>

        {/* Timeline List */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experiences.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className="bg-[#0b1222] border border-slate-800 rounded-2xl overflow-hidden transition-all hover:border-slate-700/80"
              >
                {/* Header row */}
                <div
                  onClick={() => toggleExpand(idx)}
                  className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900/30 hover:bg-slate-900/50 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-400 font-mono">
                      <span className="font-semibold text-white text-base sm:text-lg">
                        {exp.role}
                      </span>
                      <span className="text-slate-600">·</span>
                      <span className="text-indigo-300 font-medium">{exp.company}</span>
                    </div>

                    {/* Unboxed metadata with typographic separators */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 font-mono">
                      <span>{exp.location}</span>
                      <span aria-hidden="true">·</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 self-end sm:self-center">
                    <button
                      type="button"
                      aria-label="Toggle details"
                      className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 border-t border-slate-800/80 bg-slate-950/40 space-y-5 animate-in fade-in duration-150">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3 font-mono">
                        Key Responsibilities & Deliverables
                      </span>
                      <div className="space-y-2.5">
                        {exp.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tools / Skills Used (Unboxed metadata) */}
                    <div className="pt-4 border-t border-slate-800/60">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                        Technologies & Methodologies
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        {exp.skills.map((skill, sIdx) => (
                          <React.Fragment key={skill}>
                            <span className="text-slate-200 font-medium">{skill}</span>
                            {sIdx < exp.skills.length - 1 && <span className="text-slate-600">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
