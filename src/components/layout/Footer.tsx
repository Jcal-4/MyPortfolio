/**
 * Footer.tsx
 * A simple minimalist footer for the personal homepage.
 */

import React from 'react'

/**
 * Footer component
 * Displays copyright and quick note at the bottom.
 */
const Footer: React.FC = () => {
  return (
    <footer className="relative mt-16 border-t border-white/10 py-10">
      <div className="mx-auto max-w-6xl px-4 text-center text-sm text-neutral-400">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
