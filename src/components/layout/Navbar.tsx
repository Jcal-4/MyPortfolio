/**
 * Navbar.tsx
 * A sticky top navigation bar for in-page section navigation on the personal homepage.
 */

import React from 'react';
import { Menu, Github, Linkedin, Mail } from 'lucide-react';

/**
 * Interface describing the structure of a navigation item link.
 */
interface NavItem {
  /** Anchor id to scroll to (without the hash symbol). */
  id: string;
  /** Display label for the nav item. */
  label: string;
}

/**
 * Navbar component
 * Provides a translucent, sticky navigation bar with anchor links to sections.
 */
const Navbar: React.FC = () => {
  /** List of navigation items used to generate anchors. */
  const items: NavItem[] = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  /**
   * Handles anchor click to enable smooth internal scrolling without full page reloads.
   * Uses native behavior (scroll-behavior: smooth set on container), and prevents default if needed.
   */
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-neutral-900/50 px-4 py-3 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/40">
          <div className="flex items-center gap-3">
            {/* <div className="h-8 w-8 shrink-0 rounded-lg bg-gradient-to-br from-indigo-500/70 to-cyan-500/70" aria-hidden /> */}
            <span className="select-none text-sm font-semibold tracking-wide text-white">Jairo Calderon</span>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {items.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className="rounded-md px-3 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="mailto:Jairo.Calderon.Dev@protonmail.com" className="rounded-md p-2 text-neutral-300 transition-colors hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
            <a href="https://github.com/Jcal-4" target="_blank" rel="noreferrer" className="rounded-md p-2 text-neutral-300 transition-colors hover:text-white" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/jairo-calderon-44512ba5/"
              target="_blank"
              rel="noreferrer"
              className="rounded-md p-2 text-neutral-300 transition-colors hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>

            <button className="inline-flex items-center gap-2 rounded-md p-2 text-neutral-300 hover:text-white md:hidden" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
