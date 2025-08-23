/**
 * Section.tsx
 * A reusable section wrapper with consistent spacing and optional title/subtitle.
 */

import React from 'react'

/**
 * Interface for Section props to standardize layout across sections.
 */
export interface SectionProps {
  /** DOM id used as the anchor for in-page navigation. */
  id: string
  /** Optional heading for the section. */
  title?: string
  /** Optional subtitle/description for the section. */
  description?: string
  /** Section content. */
  children: React.ReactNode
  /** Optional className for custom styling. */
  className?: string
}

/**
 * Section component
 * Provides section spacing, container width, and optional header.
 */
const Section: React.FC<SectionProps> = ({ id, title, description, children, className }) => {
  return (
    <section id={id} className={`scroll-mt-28 ${className ?? ''}`}>
      <div className="mx-auto max-w-6xl px-4">
        {(title || description) && (
          <div className="mb-8">
            {title && (
              <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-2 max-w-2xl text-sm text-neutral-400">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export default Section
