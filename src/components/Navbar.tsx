import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export function Navbar({ onOpenResume }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#090D16]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap shrink-0 hover:text-indigo-400 transition-colors"
          >
            Vankudothu Roopsingh
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-xs lg:text-sm font-medium text-slate-300">
            <a
              href="#projects"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Projects
            </a>
            <a
              href="#architecture"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Architecture
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Skills
            </a>
            <a
              href="#education"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Education
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenResume}
              className="px-4 py-2 text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 shadow-sm shadow-indigo-500/20"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Clean simple navigation) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0b1120] border-b border-slate-800 px-4 pt-3 pb-5 space-y-2">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Projects
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Architecture
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Skills
          </a>
          <a
            href="#education"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Education
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-200 hover:bg-slate-800"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
