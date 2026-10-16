import React, { useState } from 'react';
import { Code, Server, Database, Wrench, Shield, CheckCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export function SkillsMatrix() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'frontend' | 'backend' | 'database' | 'tools'>('all');

  const categories = [
    { id: 'all', label: 'All Domains' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'database', label: 'Databases & ORM' },
    { id: 'tools', label: 'Tools & DevOps' },
  ];

  return (
    <section id="skills" className="py-16 lg:py-24 border-b border-slate-800/80 bg-[#070b14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider mb-2">
              Technical Competencies
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Skills & Engineering Stack
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Grounded in real-world application building, API integration, and database design.
            </p>
          </div>

          {/* Interactive Category Selector (Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id as any)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  selectedCategory === c.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Frontend */}
          {(selectedCategory === 'all' || selectedCategory === 'frontend') && (
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-600/15 text-indigo-400">
                    <Code className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Frontend Architecture</h3>
                    <span className="text-xs text-slate-400 font-mono">React & Modern UI</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {PORTFOLIO_DATA.skills.frontend.map((item) => (
                    <div key={item.name} className="p-3 bg-slate-900/50 rounded-lg border border-slate-800/60">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="font-mono text-[11px] text-indigo-400">{item.level}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Backend */}
          {(selectedCategory === 'all' || selectedCategory === 'backend') && (
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-600/15 text-indigo-400">
                    <Server className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Backend & Services</h3>
                    <span className="text-xs text-slate-400 font-mono">Node.js & Express</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {PORTFOLIO_DATA.skills.backend.map((item) => (
                    <div key={item.name} className="p-3 bg-slate-900/50 rounded-lg border border-slate-800/60">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="font-mono text-[11px] text-indigo-400">{item.level}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Database */}
          {(selectedCategory === 'all' || selectedCategory === 'database') && (
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-600/15 text-indigo-400">
                    <Database className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Database & Persistence</h3>
                    <span className="text-xs text-slate-400 font-mono">MongoDB & Mongoose</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {PORTFOLIO_DATA.skills.database.map((item) => (
                    <div key={item.name} className="p-3 bg-slate-900/50 rounded-lg border border-slate-800/60">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="font-mono text-[11px] text-indigo-400">{item.level}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tools & Practices */}
          {(selectedCategory === 'all' || selectedCategory === 'tools') && (
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl p-6 flex flex-col justify-between lg:col-span-3">
              <div>
                <div className="flex items-center gap-2.5 pb-4 border-b border-slate-800/80 mb-4">
                  <div className="p-2 rounded-lg bg-indigo-600/15 text-indigo-400">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Engineering Tools & Practices</h3>
                    <span className="text-xs text-slate-400 font-mono">Git, Postman, Chrome DevTools, Agile</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {PORTFOLIO_DATA.skills.toolsAndPractices.map((item) => (
                    <div key={item.name} className="p-3 bg-slate-900/50 rounded-lg border border-slate-800/60">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="font-semibold text-white">{item.name}</span>
                        <span className="font-mono text-[11px] text-indigo-400">{item.level}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
