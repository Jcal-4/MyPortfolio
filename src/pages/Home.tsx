/**
 * Home.tsx
 * The main personal homepage: introduction, skills, projects, and contact.
 * Minimalist, dark themed, with smooth scroll and reveal animations.
 */

import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Section from '../components/common/Section'
import Reveal from '../components/common/Reveal'
import SkillPill from '../components/skills/SkillPill'
import ProjectCard, { Project } from '../components/projects/ProjectCard'
import { Button } from '../components/ui/button'
import { ArrowRight, Mail, Download } from 'lucide-react'

/**
 * Sample projects data for the portfolio section.
 * Replace with your actual projects.
 */
const projects: Project[] = [
  {
    title: 'Minimal Blog Platform',
    description:
      'A content-focused blog platform with MDX support, dark mode, and blazing fast performance.',
    image: 'https://pub-cdn.sider.ai/u/U0R7HRY521W/web-coder/68a29d9938697d89a1065656/resource/89329972-2b4f-4e3a-a870-7d831324adfa.jpg',
    tags: ['React', 'TypeScript', 'MDX', 'Vite'],
    links: { live: 'https://example.com', code: 'https://github.com/' },
  },
  {
    title: 'Analytics Dashboard',
    description:
      'An interactive dashboard featuring real-time charts, role-based access, and responsive design.',
    image: 'https://pub-cdn.sider.ai/u/U0R7HRY521W/web-coder/68a29d9938697d89a1065656/resource/6b8524f0-3f4b-49e6-971e-7e37b0b9dd18.jpg',
    tags: ['React', 'Tailwind', 'Charts', 'API'],
    links: { live: 'https://example.com', code: 'https://github.com/' },
  },
  {
    title: 'E-commerce Microfrontends',
    description:
      'A modular e-commerce experience using microfrontends for faster, independent deployments.',
    image: 'https://pub-cdn.sider.ai/u/U0R7HRY521W/web-coder/68a29d9938697d89a1065656/resource/ab8f2ab9-7b99-49bd-bbc4-a8caa8dfc027.jpg',
    tags: ['Microfrontends', 'Module Federation', 'CI/CD'],
    links: { live: 'https://example.com', code: 'https://github.com/' },
  },
]

/**
 * HomePage component
 * Composes all sections and background effects.
 */
const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 antialiased">
      {/* Background gradient accents */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
      >
        <div className="absolute -top-40 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-fuchsia-500/20 to-indigo-500/10 blur-3xl" />
      </div>

      {/* Sticky navbar */}
      <Navbar />

      {/* Page content with smooth scrolling */}
      <main className="scroll-smooth">
        {/* Hero / About */}
        <Section
          id="about"
          className="pt-40 pb-16"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <Reveal>
              <div className="relative">
                <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 blur-lg" />
                <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
                  <div className="flex items-start gap-5">
                    <img
                      src="https://pub-cdn.sider.ai/u/U0R7HRY521W/web-coder/68a29d9938697d89a1065656/resource/1813c1a7-c4f6-432a-954e-533fc2a978b5.jpg"
                      alt="Avatar"
                      className="h-20 w-20 rounded-2xl object-cover ring-2 ring-white/10"
                    />
                    <div>
                      <h1 className="text-2xl font-semibold text-white md:text-3xl">
                        Hi, I’m Jairo Calderon
                      </h1>
                      <p className="mt-2 text-sm text-neutral-300">
                        Frontend Engineer specialized in building elegant, performant, and accessible web experiences.
                        I love turning complex ideas into simple, beautiful interfaces.
                      </p>
                      <div className="mt-5 flex flex-wrap items-center gap-2">
                        <Button asChild>
                          <a href="#projects" className="inline-flex items-center gap-2">
                            View Projects
                            <ArrowRight className="h-4 w-4" />
                          </a>
                        </Button>
                        <Button variant="outline" className="bg-transparent" asChild>
                          <a href="mailto:hello@example.com" className="inline-flex items-center gap-2">
                            <Mail className="h-4 w-4" />
                            Contact Me
                          </a>
                        </Button>
                        <Button variant="outline" className="bg-transparent" asChild>
                          <a href="#" className="inline-flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            Resume
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
                  <img
                    src="https://pub-cdn.sider.ai/u/U0R7HRY521W/web-coder/68a29d9938697d89a1065656/resource/6a17549f-c0dd-419b-92d0-cf02cc8cf03e.jpg"
                    alt="Workspace"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Skills */}
        <Section
          id="skills"
          title="Skills"
          description="A snapshot of the tools and technologies I use to craft delightful user experiences."
          className="py-12"
        >
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
                  {['React', 'React Router', 'Tailwind CSS', 'Shadcn UI', 'Radix', 'Zustand'].map((s) => (
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
          description="Selected works that highlight my approach to building clean, maintainable, and user-centric products."
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
          title="Let’s build something great"
          description="I’m open to freelance projects, collaborations, and full-time roles. Feel free to reach out."
          className="py-12"
        >
          <Reveal>
            <div className="rounded-3xl border border-white/10 bg-neutral-900/40 p-8 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
              <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">Get in touch</h3>
                  <p className="mt-2 text-sm text-neutral-300">
                    Email: <a href="mailto:hello@example.com" className="text-neutral-100 underline underline-offset-4">hello@example.com</a>
                  </p>
                  <p className="mt-1 text-sm text-neutral-400">Based in Anywhere, Remote-friendly</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button asChild>
                    <a href="mailto:hello@example.com" className="inline-flex items-center gap-2">
                      <Mail className="h-4 w-4" /> Say Hello
                    </a>
                  </Button>
                  <Button variant="outline" className="bg-transparent" asChild>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                  </Button>
                  <Button variant="outline" className="bg-transparent" asChild>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>

        <Footer />
      </main>
    </div>
  )
}

export default HomePage
