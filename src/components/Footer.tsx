import React from 'react';
import { Mail, Phone, ExternalLink, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface FooterProps {
  onOpenResume: () => void;
}

export function Footer({ onOpenResume }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-slate-800 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div>
            <span className="text-base font-bold text-white tracking-tight">
              {PORTFOLIO_DATA.personal.name}
            </span>
            <p className="text-xs text-slate-400 mt-1">
              MERN Stack Developer · React.js, Node.js, Express.js, MongoDB
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-medium">
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <button onClick={onOpenResume} className="hover:text-white transition-colors">
              Resume
            </button>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} Vankudothu Roopsingh. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-slate-200 transition-colors"
            >
              {PORTFOLIO_DATA.personal.email}
            </a>
            <span>·</span>
            <span>+91 9912772118</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
