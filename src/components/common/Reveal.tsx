/**
 * Reveal.tsx
 * A wrapper to animate its children when they enter the viewport using IntersectionObserver.
 */

import React, { useEffect, useRef, useState } from 'react'

/**
 * Interface for Reveal props controlling animation behavior and delay.
 */
export interface RevealProps {
  /** Content to be revealed. */
  children: React.ReactNode
  /** Delay in ms before starting the reveal animation. */
  delayMs?: number
}

/**
 * Reveal component
 * Fades in and rises content on enter; cleans up observer on unmount.
 */
const Reveal: React.FC<RevealProps> = ({ children, delayMs = 0 }) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Start animation after optional delay
            const timer = setTimeout(() => setVisible(true), delayMs)
            // Unobserve after revealing to avoid re-trigger
            obs.unobserve(entry.target)
            return () => clearTimeout(timer)
          }
        })
      },
      { threshold: 0.18 }
    )
    obs.observe(el)
    return () => {
      obs.disconnect()
    }
  }, [delayMs])

  return (
    <div
      ref={ref}
      className={`transform-gpu transition-all duration-700 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      {children}
    </div>
  )
}

export default Reveal
