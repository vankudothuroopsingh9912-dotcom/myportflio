import React, { useState } from 'react';
import { 
  ArrowRight, Copy, Check, Terminal, Play, 
  ExternalLink, Mail, Phone, MapPin, Database, Cpu
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [activeCodeTab, setActiveCodeTab] = useState<'router' | 'pipeline' | 'benchmark'>('router');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simResults, setSimResults] = useState<{ status: string; latency: number; passed: boolean } | null>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const runApiSimulation = () => {
    setIsSimulating(true);
    setSimResults(null);
    setTimeout(() => {
      setIsSimulating(false);
      setSimResults({
        status: '200 OK',
        latency: Math.floor(Math.random() * 8) + 14, // 14ms - 22ms
        passed: true,
      });
    }, 600);
  };

  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-800/80 bg-gradient-to-b from-[#090D16] to-[#0b101c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Clean Kicker (No pill box) */}
              <div className="text-xs font-mono font-medium text-indigo-400 tracking-wider uppercase flex items-center gap-2">
                <span>MERN Stack Engineer</span>
                <span>·</span>
                <span>React.js & Node.js Specialist</span>
              </div>

              {/* Headline with text-wrap: balance */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] [text-wrap:balance]">
                Engineering scalable web applications & resilient REST APIs
              </h1>

              {/* Lead copy */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
                Hi, I'm <strong className="text-white font-semibold">{PORTFOLIO_DATA.personal.name}</strong>. 
                I specialize in building production-ready single-page applications and backend microservices 
                with <span className="text-indigo-300">React.js</span>, <span className="text-indigo-300">Node.js</span>, 
                <span className="text-indigo-300"> Express.js</span>, and <span className="text-indigo-300">MongoDB</span>. 
                Proven track record in optimizing component architectures to accelerate feature delivery by 30%.
              </p>
            </div>

            {/* Direct Contact & Location info */}
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 py-1 font-mono">
              <span className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                Bengaluru & Hyderabad, India
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3.5 h-3.5 text-indigo-400" />
                +91 9912772118
              </span>
              <span>·</span>
              <span className="text-emerald-400 font-semibold">Available for Full-Time Roles</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-2 shadow-md shadow-indigo-600/20 whitespace-nowrap"
              >
                <span>Explore Technical Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={copyEmail}
                className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-lg text-xs font-medium transition-colors border border-slate-700/80 flex items-center gap-2 whitespace-nowrap"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
              </button>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-medium transition-colors border border-slate-800 flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <button
                onClick={onOpenResume}
                className="px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 rounded-lg text-xs font-medium transition-colors border border-slate-800 flex items-center gap-1.5 whitespace-nowrap"
              >
                <span>Print Resume</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Live Terminal & Architecture Preview */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-[#0b1222] border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex-1 flex flex-col justify-between">
              {/* Terminal Window Header */}
              <div className="bg-slate-950 px-4 py-3 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 font-mono text-xs text-slate-400">roopsingh@mern-node-cluster</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Node.js v20.x</span>
                </div>
              </div>

              {/* Code Tabs */}
              <div className="flex items-center gap-1 bg-slate-900/60 px-3 pt-2 border-b border-slate-800/80 overflow-x-auto">
                <button
                  onClick={() => setActiveCodeTab('router')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t transition-colors whitespace-nowrap ${
                    activeCodeTab === 'router'
                      ? 'bg-slate-950 text-indigo-300 border-t border-x border-slate-800'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  api.routes.ts
                </button>
                <button
                  onClick={() => setActiveCodeTab('pipeline')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t transition-colors whitespace-nowrap ${
                    activeCodeTab === 'pipeline'
                      ? 'bg-slate-950 text-indigo-300 border-t border-x border-slate-800'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  mongo.aggregate.ts
                </button>
                <button
                  onClick={() => setActiveCodeTab('benchmark')}
                  className={`px-3 py-1.5 text-xs font-mono rounded-t transition-colors whitespace-nowrap ${
                    activeCodeTab === 'benchmark'
                      ? 'bg-slate-950 text-indigo-300 border-t border-x border-slate-800'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  benchmarks.sh
                </button>
              </div>

              {/* Code Snippet Display */}
              <div className="p-4 font-mono text-xs text-slate-300 bg-slate-950/95 overflow-x-auto flex-1 min-h-[220px]">
                {activeCodeTab === 'router' && (
                  <pre className="text-slate-300 leading-relaxed">
                    <span className="text-slate-500">// REST API Route Architecture</span>{'\n'}
                    <span className="text-indigo-400">import</span> &#123; Router &#125; <span className="text-indigo-400">from</span> <span className="text-emerald-300">'express'</span>;{'\n'}
                    <span className="text-indigo-400">import</span> &#123; verifyJWT &#125; <span className="text-indigo-400">from</span> <span className="text-emerald-300">'./middleware/auth'</span>;{'\n'}
                    <span className="text-indigo-400">import</span> &#123; getPortfolio &#125; <span className="text-indigo-400">from</span> <span className="text-emerald-300">'./controllers'</span>;{'\n\n'}
                    <span className="text-amber-300">const</span> router = Router();{'\n'}
                    router.get(<span className="text-emerald-300">'/portfolio'</span>, verifyJWT, getPortfolio);{'\n'}
                    router.post(<span className="text-emerald-300">'/transactions'</span>, verifyJWT, executeTrade);{'\n'}
                    <span className="text-indigo-400">export default</span> router;
                  </pre>
                )}

                {activeCodeTab === 'pipeline' && (
                  <pre className="text-slate-300 leading-relaxed">
                    <span className="text-slate-500">// MongoDB Aggregation Optimization</span>{'\n'}
                    <span className="text-amber-300">const</span> summary = <span className="text-indigo-400">await</span> Order.aggregate([&#123;{'\n'}
                    {'  '}$match: &#123; status: <span className="text-emerald-300">'CONFIRMED'</span> &#125;{'\n'}
                    &#125;, &#123;{'\n'}
                    {'  '}$group: &#123;{'\n'}
                    {'    '}_id: <span className="text-emerald-300">'$userId'</span>,{'\n'}
                    {'    '}totalSpent: &#123; $sum: <span className="text-emerald-300">'$total'</span> &#125;,{'\n'}
                    {'    '}orderCount: &#123; $sum: <span className="text-emerald-300">1</span> &#125;{'\n'}
                    {'  '}&#125;{'\n'}
                    &#125;]);
                  </pre>
                )}

                {activeCodeTab === 'benchmark' && (
                  <div className="space-y-2">
                    <p className="text-slate-400"># Stress-test simulated REST endpoints</p>
                    <p className="text-indigo-300">$ autocannon -c 100 -d 10 http://localhost:5000/api/v1/portfolio</p>
                    <div className="p-3 bg-slate-900 rounded border border-slate-800 text-[11px] space-y-1">
                      <div className="text-slate-300 flex justify-between">
                        <span>Queries per Second:</span>
                        <span className="text-emerald-400 font-bold">1,840 req/s</span>
                      </div>
                      <div className="text-slate-300 flex justify-between">
                        <span>P99 Response Latency:</span>
                        <span className="text-emerald-400 font-bold">19.4 ms</span>
                      </div>
                      <div className="text-slate-300 flex justify-between">
                        <span>Memory Footprint:</span>
                        <span className="text-indigo-300 font-bold">48.2 MB Node Heap</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Terminal Interactive Action Bar */}
              <div className="p-3 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs font-mono">
                <button
                  onClick={runApiSimulation}
                  disabled={isSimulating}
                  className="px-3 py-1.5 bg-indigo-600/90 hover:bg-indigo-500 disabled:opacity-50 text-white rounded flex items-center gap-1.5 transition-colors"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>{isSimulating ? 'Querying REST...' : 'Simulate Endpoint Test'}</span>
                </button>

                {simResults && (
                  <div className="flex items-center gap-2 text-emerald-400 text-xs">
                    <Check className="w-3.5 h-3.5" />
                    <span>{simResults.status} in {simResults.latency}ms</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Full-width proof metrics row (Strictly below the split per skill instructions) */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.metrics.map((m, idx) => (
            <div key={idx} className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight tabular-nums block">
                {m.value}
              </span>
              <span className="text-xs text-slate-400 leading-snug block">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
