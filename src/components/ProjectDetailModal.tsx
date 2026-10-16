import React, { useState } from 'react';
import { X, Code, Database, Server, CheckCircle2, Copy, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'architecture' | 'api' | 'schema' | 'code'>('architecture');
  const [copied, setCopied] = useState(false);

  if (!project) return null;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-[#0b1120] border border-slate-800 rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-800/80 flex items-start justify-between gap-4 bg-slate-900/40">
          <div>
            <div className="flex items-center gap-2 text-xs text-indigo-400 font-mono mb-1">
              <span>{project.category}</span>
              <span>·</span>
              <span>Production Architecture</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">{project.title}</h2>
            <p className="text-sm text-slate-400 mt-1">{project.subtitle}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Tab Controls (Interactive Buttons) */}
        <div className="flex items-center gap-1 px-6 pt-4 border-b border-slate-800/60 bg-slate-950/40 overflow-x-auto">
          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'architecture'
                ? 'border-indigo-500 text-indigo-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/20'
            }`}
          >
            System Architecture
          </button>
          <button
            onClick={() => setActiveTab('api')}
            className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'api'
                ? 'border-indigo-500 text-indigo-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/20'
            }`}
          >
            RESTful API Specification
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'schema'
                ? 'border-indigo-500 text-indigo-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/20'
            }`}
          >
            Mongoose Schema Design
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={`px-4 py-2 text-xs font-medium rounded-t-lg transition-all border-b-2 whitespace-nowrap ${
              activeTab === 'code'
                ? 'border-indigo-500 text-indigo-300 bg-slate-900/60'
                : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/20'
            }`}
          >
            Core Controller Logic
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Architecture flow diagram */}
              <div className="p-5 bg-slate-950/80 border border-slate-800 rounded-xl">
                <span className="text-xs font-mono text-slate-400 block mb-3">DATA PIPELINE & RUNTIME LIFECYCLE</span>
                <div className="p-4 bg-slate-900/70 border border-slate-800/80 rounded-lg font-mono text-xs text-indigo-300 leading-relaxed overflow-x-auto whitespace-pre-wrap">
                  {project.architectureOverview}
                </div>
              </div>

              {/* Engineering Innovations */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                  Key Engineering Milestones & Optimizations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.keyInnovations.map((inn, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-slate-900/40 border border-slate-800/70 rounded-xl flex items-start gap-3"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-300 leading-relaxed">{inn}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Unboxed Metadata */}
              <div className="p-4 bg-slate-900/20 border border-slate-800/60 rounded-xl">
                <span className="text-xs text-slate-400 block mb-2 font-mono">TECHNOLOGY STACK</span>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-300">
                  {project.techStack.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span className="text-slate-200 font-medium">{tech}</span>
                      {i < project.techStack.length - 1 && <span className="text-slate-600">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: API SPECIFICATION */}
          {activeTab === 'api' && (
            <div className="space-y-4">
              <div className="text-xs text-slate-400">
                RESTful service endpoints designed and tested using Postman and Express router middlewares:
              </div>

              <div className="border border-slate-800 rounded-xl overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-950 text-slate-400 border-b border-slate-800 font-mono">
                    <tr>
                      <th className="py-3 px-4 w-24">METHOD</th>
                      <th className="py-3 px-4">ENDPOINT PATH</th>
                      <th className="py-3 px-4">DESCRIPTION & LOGIC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/70">
                    {project.apiEndpoints.map((ep, idx) => (
                      <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                        <td className="py-3 px-4 font-mono">
                          <span
                            className={`font-bold ${
                              ep.method === 'GET'
                                ? 'text-emerald-400'
                                : ep.method === 'POST'
                                ? 'text-indigo-400'
                                : ep.method === 'PUT'
                                ? 'text-amber-400'
                                : 'text-rose-400'
                            }`}
                          >
                            {ep.method}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-200 font-semibold">{ep.path}</td>
                        <td className="py-3 px-4 text-slate-300">{ep.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 3: SCHEMA DESIGN */}
          {activeTab === 'schema' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Mongoose ODM Schema with indexing and validation rules:</span>
                <button
                  onClick={() => copyToClipboard(project.schemaSnippet)}
                  className="flex items-center gap-1 text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs text-slate-300 overflow-x-auto">
                <pre>{project.schemaSnippet}</pre>
              </div>
            </div>
          )}

          {/* TAB 4: CODE LOGIC */}
          {activeTab === 'code' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Node.js / Express controller implementation with error handling:</span>
                <button
                  onClick={() => copyToClipboard(project.codeSnippet)}
                  className="flex items-center gap-1 text-slate-400 hover:text-white px-2 py-1 rounded bg-slate-800 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="bg-slate-950 rounded-xl p-4 border border-slate-800 font-mono text-xs text-indigo-200 overflow-x-auto">
                <pre>{project.codeSnippet}</pre>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800/80 flex items-center justify-between">
          <div className="text-xs text-slate-500 font-mono">
            Designed & Engineered by Vankudothu Roopsingh
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
