/**
 * Home.tsx
 * The main personal homepage: introduction, skills, projects, and contact.
 * Minimalist, dark themed, with smooth scroll and reveal animations.
 */

import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Section from '../components/common/Section';
import Reveal from '../components/common/Reveal';
import SkillPill from '../components/skills/SkillPill';
import ProjectCard, { Project } from '../components/projects/ProjectCard';
import { Button } from '../components/ui/button';
import { ArrowRight, Mail, Download, ArrowDown, View } from 'lucide-react';

/**
 * Sample projects data for the portfolio section.
 * Replace with your actual projects.
 */
const projects: Project[] = [
  {
    title: 'Spendo',
    description: 'A clean, feature-rich personal finance app focused on comprehensive financial insights and powerful transaction management.',
    image: 'Spendo.png',
    tags: ['OpenAI API', 'React', 'TypeScript', 'Tailwind', 'Vite', 'Python', 'PostgreSQL', 'Mantine'],
    links: { live: 'https://spendo-386e7e9da44d.herokuapp.com/', code: 'https://github.com/Jcal-4/Spendo' },
  },
  {
    title: 'Salesforce - Debug Log Analyzer',
    description: 'A VS Code extension that streamlines Salesforce Debug Log analysis, speeding up issue detection and resolution to reduce troubleshooting time.',
    image: 'Salesforce - Debug Analyzer.png',
    tags: ['React', 'Tailwind', 'VSCode API', 'Webview API', 'Vite'],
    links: { code: 'https://github.com/Jcal-4/Debug-Log-Analyzer' },
  },
  {
    title: 'Vid-Hub',
    description: 'A fullstack clone of the viral media app TikTok that allows users to share videos in a social media hub and communicate with others',
    image: 'Vid-hub.png',
    tags: ['React/Redux', 'Python', 'Websockets', 'AWS', 'Flask'],
    links: { code: 'https://github.com/Jcal-4/TikTokClone' },
  },
  {
    title: 'Echo',
    description: 'A site that is made for the friends to talk with friends, being a clone of Discord it uses live messaging so that the users can chat real time.',
    image: 'Echo-header.png',
    tags: ['React/Redux', 'Python', 'Javascript', 'Websockets', 'AWS', 'Flask'],
    links: { code: 'https://github.com/Bergan404/Echo' },
  },
];

/**
 * HomePage component
 * Composes all sections and background effects.
 */
const HomePage: React.FC = () => {
  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // fallback to fragment navigation if the element is not rendered yet
      window.location.hash = 'projects';
    }
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 antialiased">
      {/* Background gradient accents */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-fuchsia-500/20 to-indigo-500/10 blur-3xl" />
      </div>

      {/* Sticky navbar */}
      <Navbar />

      {/* Page content with smooth scrolling */}
      <main className="scroll-smooth">
        {/* Hero / About */}
        <Section id="about" className="pt-40 pb-16">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 blur-lg" />
                <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
                  <div className="flex items-start gap-5">
                    <img src="PersonalCoverPictureFinal2.jpg" alt="Avatar" className="max-w-[183px] rounded-2xl object-cover ring-2 ring-white/10" />
                    <div>
                      <h1 className="text-2xl font-semibold text-white md:text-3xl">Hi, I’m Jairo Calderon</h1>
                      <p className="mt-2 text-sm text-neutral-300">
                        Fullstack engineer with broad experience across web and enterprise platforms, including Salesforce. I build elegant, performant, and accessible web
                        applications, reliable backends, and automated business workflows. I turn complex requirements into simple, maintainable solutions that scale.
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        {/* <Button className="border border-white/10" asChild>
                          <a href="#projects" className="inline-flex items-center gap-2" onClick={scrollToProjects}>
                            View Projects
                            <ArrowDown className="h-4 w-4" />
                          </a>
                        </Button> */}
                        <Button className="border border-white/10" asChild>
                          <a href="mailto:Jairo.Calderon.Dev@protonmail.com" className="inline-flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Contact Me
                          </a>
                        </Button>
                        <Button className="border border-white/10" asChild>
                          <a href="Jairo_Calderon_Salesforce_Resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                            <View className="h-4 w-4" />
                            View Resume
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={120}>
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-3xl border border-white/10">
                  <img src="portfolio-background2.jpg" alt="Workspace" className="h-full" />
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" description="A quick overview of the tools and technologies I use to build thoughtful, user-centered experiences." className="py-12">
          <Reveal>
            <div className="grid gap-6 md:grid-cols-3">
              {/* Languages & Core */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
                <h3 className="text-sm font-medium text-white">Languages & Core</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Node.js'].map((s) => (
                    <SkillPill key={s} label={s} />
                  ))}
                </div>
              </div>

              {/* Frameworks & UI */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
                <h3 className="text-sm font-medium text-white">Frameworks & UI</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['React', 'React Router', 'Tailwind CSS'].map((s) => (
                    <SkillPill key={s} label={s} />
                  ))}
                </div>
              </div>

              {/* Tools & Practices */}
              <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
                <h3 className="text-sm font-medium text-white">Tools & Practices</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {['Git', 'CI/CD', 'Testing', 'Accessibility', 'Performance', 'Analytics'].map((s) => (
                    <SkillPill key={s} label={s} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        {/* Projects */}
        <Section
          id="projects"
          title="Projects"
          description="Personal projects showcasing a range of fullstack work — web apps, backend services, and integrations that I built end-to-end to explore ideas, learn new technologies, and solve real problems."
          className="py-12"
        >
          <Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <ProjectCard key={p.title} project={p} />
              ))}
            </div>
          </Reveal>
        </Section>

        {/* Contact */}
        <Section
          id="contact"
          title="Open for opportunities"
          description="Available for full-time roles, freelance gigs, or teaming up on projects — let’s connect."
          className="py-12"
        >
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Get in touch</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Email:{' '}
                    <a href="mailto:Jairo.Calderon.Dev@protonmail.com" className="text-neutral-100 underline underline-offset-4">
                      Jairo.Calderon.Dev@protonmail.com
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">Based in Nevada, Remote-friendly</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <a href="mailto:Jairo.Calderon.Dev@protonmail.com" className="border border-white/10">
                      <Mail className="h-4 w-4" /> Contact Me
                    </a>
                  </Button>
                  <Button className="border border-white/10" asChild>
                    <a href="https://github.com/Jcal-4" target="_blank" rel="noreferrer">
                      GitHub
                    </a>
                  </Button>
                  <Button className="border border-white/10" asChild>
                    <a href="https://www.linkedin.com/in/jairo-calderon-44512ba5/" target="_blank" rel="noreferrer">
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
