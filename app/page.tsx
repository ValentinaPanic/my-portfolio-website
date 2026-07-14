"use client";

import React, { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink, Code2, Layers, Sparkles, Menu, X, ArrowRight, Download, TrendingUp } from 'lucide-react';

export default function ModernPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
    
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-indigo-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 border-b border-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              VP
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 items-center">
              {['home', 'about', 'work'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-purple-600 font-semibold'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {section}
                </button>
              ))}
              <Link
                href="/projects"
                className="capitalize text-gray-600 hover:text-purple-600 transition-colors"
              >
                projects
              </Link>
              {['skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors ${
                    activeSection === section
                      ? 'text-purple-600 font-semibold'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div id="mobile-menu" className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['home', 'about', 'work'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-left py-2 text-gray-600 hover:text-purple-600"
                >
                  {section}
                </button>
              ))}
              <Link
                href="/projects"
                onClick={() => setMobileMenuOpen(false)}
                className="capitalize text-left py-2 text-gray-600 hover:text-purple-600"
              >
                projects
              </Link>
              {['skills', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="capitalize text-left py-2 text-gray-600 hover:text-purple-600"
                >
                  {section}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text */}
            <div>
              <div className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-6">
                👋 Available for new opportunities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Valentina Panic
              </h1>
              <h2 className="text-2xl md:text-3xl text-purple-600 mb-6 font-semibold">
                Front End Engineer
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Frontend engineer with 5 years of production React and TypeScript experience in cybersecurity SaaS. Strong in component architecture, design systems (including an open-source library I publish and maintain), and daily AI-assisted development.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row md:flex-wrap gap-4 mb-8">
                <Link
                  href="/projects"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Code2 size={20} />
                  Projects
                </Link>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 hover:shadow-lg transition-all"
                >
                  Get in touch
                  <ArrowRight size={20} />
                </button>
                <a
                  href="/valentina-panic-resume.pdf"
                  download="Valentina_Panic_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <Download size={20} />
                  Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/ValentinaPanic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/valentinapanic/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="mailto:valentina.panic87@gmail.com"
                  className="p-3 border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">3x</div>
                    <div className="text-sm text-gray-600">Increase in weekly engagement on a redesigned dashboard</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Layers className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">20+</div>
                    <div className="text-sm text-gray-600">Components built for an internal design system</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Code2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">360+</div>
                    <div className="text-sm text-gray-600">Features shipped over 5 years</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-lg">
                    <Sparkles className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">Daily</div>
                    <div className="text-sm text-gray-600">Cursor + Claude workflow</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
            <p>
              I am a frontend engineer with 5 years of production React and TypeScript experience in cybersecurity SaaS. I am drawn to the kind of work where the frontend matters — complex data, technical users, interfaces that have to be both fast and clear.
            </p>

            <p>
              Things I have spent the most time on: building design systems and reusable component libraries, leading user-facing initiatives end-to-end, and contributing to platform-level work like migrations and architecture decisions.
            </p>

            <p>
              Lately I use Cursor and Claude every day. I wrote custom rules for both that my engineering team adopted across the codebase, and I built a side project called PrepCode using the Anthropic API to practice AI-powered product features outside of work. I also published @crestline/ui, a small React component library, after building the token system, build pipeline, and npm publish workflow myself.
            </p>

            <p>
              Currently open to new opportunities — looking for senior frontend roles at SaaS or developer tools companies, remote-first.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Current Role */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Front End Engineer</h3>
                  <div className="text-lg text-purple-600 font-medium">StackHawk</div>
                </div>
                <div className="text-sm text-gray-500 mt-2 md:mt-0">Aug 2022 - May 2026</div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    Platform Modernization
                  </h4>
                  <ul className="space-y-2 ml-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Main contributor on the full-application migration from Semantic UI to Tailwind CSS (working alongside the engineer leading the effort)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Migrated state management from Redux to Nanostores across feature areas</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Contributed to React 19 upgrade, resolving breaking changes across consuming components</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    Product Ownership & Design System
                  </h4>
                  <ul className="space-y-2 ml-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Led the Daily Active Users initiative — redesigned a low-engagement Getting Started page into a dashboard with &ldquo;Things to Do Today,&rdquo; Top 5 Vulnerabilities, and Achievements sections. Weekly visit rate rose from ~10% to ~32% after launch</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Built 20+ reusable components for an internal design system with Storybook documentation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Drove component adoption through code review and pairing with engineers across the team</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-violet-600 rounded-full"></span>
                    Feature Delivery & Cross-Stack Work
                  </h4>
                  <ul className="space-y-2 ml-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Shipped 360+ features and fixes including Attack Surface Management, API Discovery, GitHub integration flows, and application management interfaces</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Occasionally contributed to backend tickets (protobuf schema updates, API contract changes in Kotlin services) using AI tooling to navigate code outside primary expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Built custom D3.js data visualization (security metrics donut chart) used by enterprise customers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-violet-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Developed integration UIs connecting 6+ third-party tools (Snyk, Jira, Slack, Vanta, Azure DevOps, Bitbucket)</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-fuchsia-600 rounded-full"></span>
                    AI-Assisted Development
                  </h4>
                  <ul className="space-y-2 ml-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-fuchsia-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Integrated Cursor and Claude into daily workflow for code generation, refactoring, testing, and navigating unfamiliar services</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-fuchsia-600 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                      <span>Authored custom Cursor and Claude rules adopted by the engineering team</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Storybook', 'D3.js', 'Nanostores'].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Junior Role */}
            <div className="bg-white rounded-2xl p-8 shadow-md border border-gray-200">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Junior Front End Engineer</h3>
                  <div className="text-lg text-purple-600 font-medium">StackHawk</div>
                </div>
                <div className="text-sm text-gray-500 mt-2 md:mt-0">Apr 2021 - Aug 2022</div>
              </div>

              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                  <span>Shipped UI features in React, TypeScript, and Semantic UI for an application security platform</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-500 flex items-center h-6 shrink-0" aria-hidden="true">→</span>
                  <span>Ramped to independent feature delivery within 6 months</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Frontend */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'Tailwind CSS', 'D3.js', 'Storybook', 'Vite', 'Webpack'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* State & Architecture */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">State & Architecture</h3>
              <div className="flex flex-wrap gap-2">
                {['Nanostores', 'Redux', 'React Context', 'Component architecture', 'Design systems'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Testing & Quality */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Testing & Quality</h3>
              <div className="flex flex-wrap gap-2">
                {['Jest', 'Playwright', 'Code review', 'Accessibility (WCAG)', 'Responsive design'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Cross-Stack */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Cross-Stack</h3>
              <div className="flex flex-wrap gap-2">
                {['REST APIs', 'protobuf / gRPC', 'API contracts'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Development */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Development</h3>
              <div className="flex flex-wrap gap-2">
                {['Cursor (daily)', 'Claude (daily)', 'Anthropic API', 'Custom rules & workflows'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Git / GitHub', 'CI/CD', 'Figma', 'Jira', 'Agile / Scrum'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let`s Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 mb-12">
            I am currently exploring new opportunities in frontend engineering. Whether you want to discuss a role, 
            collaborate on a project, or just chat about React and design systems, I would love to hear from you!
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a
              href="mailto:valentina.panic87@gmail.com"
              className="group p-6 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <Mail className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-gray-900 mb-1">Email</div>
              <div className="text-sm text-gray-600">valentina.panic87@gmail.com</div>
            </a>

            <a
              href="https://www.linkedin.com/in/valentinapanic/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <Linkedin className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-gray-900 mb-1">LinkedIn</div>
              <div className="text-sm text-gray-600">Connect professionally</div>
            </a>

            <a
              href="https://github.com/ValentinaPanic"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <Github className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-gray-900 mb-1">GitHub</div>
              <div className="text-sm text-gray-600">View my code</div>
            </a>
          </div>

          <div className="text-sm text-gray-500">
            📍 Denver, CO | 🌍 Open to remote opportunities | 🗣️ English & Serbian (fluent)
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-2">© 2026 Valentina Panic. Built with React, Next.js & Tailwind CSS.</p>
          <p className="text-sm">Designed with 💜 in Colorado</p>
        </div>
      </footer>
    </div>
  );
}