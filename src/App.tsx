/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { ArchitectureSection } from './components/ArchitectureSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsMatrix } from './components/SkillsMatrix';
import { EducationCertifications } from './components/EducationCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ResumeModal } from './components/ResumeModal';
import { Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#090D16] text-slate-100 flex flex-col antialiased selection:bg-indigo-600 selection:text-white">
      {/* 3-Zone Navigation Header */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* Featured Technical Projects with Live In-Browser Sandboxes */}
        <ProjectShowcase onSelectProject={(project) => setSelectedProject(project)} />

        {/* Full-Stack Architecture & Engineering Deep-Dive */}
        <ArchitectureSection />

        {/* Professional Experience & Internships Timeline */}
        <ExperienceTimeline />

        {/* Technical Skills & Competencies Matrix */}
        <SkillsMatrix />

        {/* Academic Foundation & Verified Certifications */}
        <EducationCertifications />

        {/* Contact & Inquiry Channel */}
        <ContactSection />
      </main>

      {/* Quiet, Clean Footer */}
      <Footer onOpenResume={() => setIsResumeOpen(true)} />

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Authentic Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
