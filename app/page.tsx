"use client";

import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Layers, Sparkles, Menu, X, ArrowRight, Download } from 'lucide-react';

export default function ModernPortfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
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
            <div className="hidden md:flex gap-8">
              {['home', 'about', 'work', 'skills', 'contact'].map((section) => (
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
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
              {['home', 'about', 'work', 'skills', 'contact'].map((section) => (
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
                Building intuitive interfaces for cybersecurity tools. Specialist in component architecture, 
                design systems, and modern AI-assisted development workflows.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  Get in touch
                  <ArrowRight size={20} />
                </button>
                <a
                  href="/valentina-panic-resume.pdf"
                  download="Valentina_Panic_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 border-2 border-purple-300 text-purple-700 rounded-lg hover:bg-purple-50 transition-colors"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://github.com/valentina-panic"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/valentina-panic"
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
                    <Code2 className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">360+</div>
                    <div className="text-sm text-gray-600">Features Shipped</div>
                    <div className="text-xs text-gray-500 mt-1">Over 3 years at StackHawk</div>
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
                    <div className="text-sm text-gray-600">Components Built</div>
                    <div className="text-xs text-gray-500 mt-1">Tweety Bird design system</div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-lg">
                    <Sparkles className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">AI-First</div>
                    <div className="text-sm text-gray-600">Development Workflow</div>
                    <div className="text-xs text-gray-500 mt-1">Daily Cursor & Claude user</div>
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
              I'm a <strong className="text-purple-600">Front End Engineer at StackHawk</strong>, where I build 
              security tools that help developers ship safer code. Over the past 5 years, I've gone from career-changer 
              to contributing to major platform initiatives—including building 20+ components for our design system 
              and shipping 360+ features.
            </p>

            <p>
              Before tech, I spent 7 years in <strong>hospitality management</strong>, running a 100-seat restaurant 
              with a team of 20. That experience taught me the value of clear communication, staying calm under pressure, 
              and putting users (or guests) first—skills that translate surprisingly well to frontend engineering.
            </p>

            <p>
              What I love most about frontend development is creating interfaces that feel <em>intuitive</em>. Whether 
              it's building reusable components, implementing smooth animations, or solving complex layout challenges, 
              I'm always focused on the end user experience.
            </p>

            <p>
              Recently, I've been exploring <strong className="text-indigo-600">AI-assisted development workflows</strong> using 
              Cursor and Claude. These tools have transformed how I approach code generation, refactoring, and testing—making 
              me more productive while maintaining code quality.
            </p>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-lg">
              <p className="font-semibold text-gray-900 mb-2">
                Currently open to new opportunities!
              </p>
              <p className="text-gray-700 text-base">
                I'm especially interested in roles focused on design systems, component libraries, or innovative 
                product teams that value AI-augmented development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="work" className="py-20 px-6">
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
                <div className="text-sm text-gray-500 mt-2 md:mt-0">Aug 2022 - Present</div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    UI Modernization & Architecture
                  </h4>
                  <ul className="space-y-2 ml-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">→</span>
                      <span>Key contributor to UI modernization, migrating platform from Semantic UI to Tailwind CSS and building 20+ components for Tweety Bird design system</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">→</span>
                      <span>Built and documented reusable components in Storybook for design consistency</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-2 h-2 bg-indigo-600 rounded-full"></span>
                    Feature Development
                  </h4>
                  <ul className="space-y-2 ml-4 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">→</span>
                      <span>Shipped 360+ features including Attack Surface Management, API Discovery, and GitHub integrations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-indigo-600 mt-1">→</span>
                      <span>Built custom D3.js visualizations for security metrics</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex flex-wrap gap-2">
                  {['React 18', 'TypeScript', 'Tailwind CSS', 'Storybook', 'D3.js', 'Nanostores'].map((tech) => (
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
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Developed UI features using React, TypeScript, and Semantic UI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400 mt-1">→</span>
                  <span>Collaborated on code reviews and learned component architecture best practices</span>
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
            {/* Frontend Development */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Frontend Development</h3>
              <div className="flex flex-wrap gap-2">
                {['JavaScript', 'TypeScript', 'React 18', 'HTML/CSS', 'Tailwind CSS', 'D3.js'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Workflow */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tools & Workflow</h3>
              <div className="flex flex-wrap gap-2">
                {['Git/GitHub', 'Storybook', 'Figma', 'Jira', 'CI/CD', 'Jest'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Modern Practices */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Modern Practices</h3>
              <div className="flex flex-wrap gap-2">
                {['Component Architecture', 'Design Systems', 'AI-Assisted Dev', 'Responsive Design', 'Agile/Scrum'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI Development Tools */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">AI Development Tools</h3>
              <div className="flex flex-wrap gap-2">
                {['Cursor (Daily)', 'Claude (Daily)', 'Custom Workflows', 'Code Generation'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* State Management */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">State Management</h3>
              <div className="flex flex-wrap gap-2">
                {['Nanostores', 'Redux', 'React Context', 'Local Storage'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Additional</h3>
              <div className="flex flex-wrap gap-2">
                {['Ruby on Rails', 'REST APIs', 'Recharts', 'Semantic UI'].map((skill) => (
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto mb-8"></div>
          
          <p className="text-xl text-gray-600 mb-12">
            I'm currently exploring new opportunities in frontend engineering. Whether you want to discuss a role, 
            collaborate on a project, or just chat about React and design systems, I'd love to hear from you!
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
              href="https://linkedin.com/in/valentina-panic"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:shadow-lg transition-all"
            >
              <Linkedin className="w-8 h-8 text-purple-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-semibold text-gray-900 mb-1">LinkedIn</div>
              <div className="text-sm text-gray-600">Connect professionally</div>
            </a>

            <a
              href="https://github.com/valentina-panic"
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
            📍 Greenwood Village, Colorado | 🌍 Open to remote opportunities | 🗣️ English & Serbian (fluent)
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