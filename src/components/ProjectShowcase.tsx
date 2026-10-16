import React, { useState } from 'react';
import { 
  ArrowUpRight, Layers, Database, Code2, 
  Sparkles, Terminal, Activity, CheckCircle2, ChevronRight
} from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { 
  StockMarketDemo, 
  RealTimeChatDemo, 
  EcommerceDemo, 
  AppointmentSchedulerDemo 
} from './InteractiveDemos';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export function ProjectShowcase({ onSelectProject }: ProjectShowcaseProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeDemoProject, setActiveDemoProject] = useState<string>('stock-market-tracker');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'Full-Stack MERN', label: 'Full-Stack MERN' },
    { id: 'Real-Time', label: 'Real-Time / Sockets' },
    { id: 'E-Commerce', label: 'E-Commerce' },
    { id: 'Scheduling', label: 'Scheduling & CRUD' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 lg:py-24 border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-mono font-medium text-indigo-400 uppercase tracking-wider mb-2">
              Production Portfolio
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              Featured Technical Projects
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Architected and built from scratch using React.js, Node.js, Express.js, and MongoDB. 
              Explore interactive live sandboxes and inspect production-grade architecture.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-900 border border-slate-800 rounded-xl overflow-x-auto shrink-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="space-y-12">
          {filteredProjects.map((project) => {
            const isDemoOpen = activeDemoProject === project.id;

            return (
              <div
                key={project.id}
                className="bg-[#0b1222] border border-slate-800 rounded-2xl overflow-hidden shadow-xl transition-all hover:border-slate-700/80"
              >
                {/* Project Header Bar */}
                <div className="p-6 sm:p-8 border-b border-slate-800/80 bg-slate-900/30">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div>
                      {/* Zero-Pill Clean Metadata with separators */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-indigo-400 font-mono mb-2">
                        <span>{project.category}</span>
                        <span aria-hidden="true">·</span>
                        <span>RESTful API Architecture</span>
                        <span aria-hidden="true">·</span>
                        <span>Mongoose ODM</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 mt-1 max-w-3xl">
                        {project.subtitle}
                      </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3 shrink-0">
                      <button
                        onClick={() => setActiveDemoProject(isDemoOpen ? '' : project.id)}
                        className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${
                          isDemoOpen
                            ? 'bg-slate-800 text-white border border-slate-700'
                            : 'bg-indigo-600 text-white hover:bg-indigo-500'
                        }`}
                      >
                        <Activity className="w-3.5 h-3.5" />
                        <span>{isDemoOpen ? 'Hide Live Sandbox' : 'Test Live Sandbox'}</span>
                      </button>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="px-4 py-2 text-xs font-medium text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-750 rounded-lg transition-colors flex items-center gap-1.5"
                      >
                        <span>System Architecture</span>
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Card Content Split */}
                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  {/* Left Column: Description & Engineering Highlights */}
                  <div className="lg:col-span-5 space-y-5">
                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Project Overview
                      </span>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                        Core Engineering Implementations
                      </span>
                      <div className="space-y-2">
                        {project.keyInnovations.map((inn, i) => (
                          <div key={i} className="flex items-start gap-2.5 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{inn}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack Unboxed Metadata */}
                    <div className="pt-2 border-t border-slate-800/80">
                      <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2 font-mono">
                        Tech Stack
                      </span>
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
                        {project.techStack.map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span className="text-slate-200 font-medium">{tech}</span>
                            {i < project.techStack.length - 1 && <span className="text-slate-600">·</span>}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Interactive Sandbox or Architectural Mockup */}
                  <div className="lg:col-span-7 flex flex-col justify-center">
                    {isDemoOpen ? (
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-mono text-indigo-400 flex items-center gap-1.5">
                            <Activity className="w-3.5 h-3.5" />
                            <span>INTERACTIVE IN-BROWSER SIMULATION</span>
                          </span>
                          <span className="text-xs text-slate-500 font-mono">React Client State</span>
                        </div>
                        {project.id === 'stock-market-tracker' && <StockMarketDemo />}
                        {project.id === 'real-time-chat' && <RealTimeChatDemo />}
                        {project.id === 'ecommerce-platform' && <EcommerceDemo />}
                        {project.id === 'appointment-scheduler' && <AppointmentSchedulerDemo />}
                      </div>
                    ) : (
                      <div className="p-6 bg-slate-950/70 border border-slate-800/90 rounded-xl space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                          <div className="flex items-center gap-2">
                            <Layers className="w-4 h-4 text-indigo-400" />
                            <span className="text-xs font-semibold text-slate-200">Runtime Architecture Overview</span>
                          </div>
                          <span className="text-[11px] font-mono text-emerald-400">Production Verified</span>
                        </div>

                        <div className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800/70 text-xs font-mono text-indigo-300">
                          {project.architectureOverview}
                        </div>

                        <div className="space-y-2">
                          <span className="text-xs text-slate-400 block font-mono">PRIMARY REST API ENDPOINTS:</span>
                          <div className="space-y-1.5">
                            {project.apiEndpoints.map((ep, idx) => (
                              <div
                                key={idx}
                                className="p-2 bg-slate-900/40 rounded border border-slate-800/60 flex items-center justify-between text-xs font-mono"
                              >
                                <div className="flex items-center gap-2">
                                  <span
                                    className={`font-bold ${
                                      ep.method === 'GET'
                                        ? 'text-emerald-400'
                                        : ep.method === 'POST'
                                        ? 'text-indigo-400'
                                        : 'text-amber-400'
                                    }`}
                                  >
                                    {ep.method}
                                  </span>
                                  <span className="text-slate-300">{ep.path}</span>
                                </div>
                                <span className="text-slate-500 text-[11px] hidden sm:inline">
                                  {ep.description}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-2 flex justify-end">
                          <button
                            onClick={() => setActiveDemoProject(project.id)}
                            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                          >
                            <span>Open interactive simulator</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
