/**
 * SkillPill.tsx
 * A compact pill component to display a single skill or tag.
 */

import React from 'react'
import { Badge } from '../../components/ui/badge'

/**
 * Interface describing properties for an individual skill pill.
 */
export interface SkillPillProps {
  /** Display text for the skill. */
  label: string
}

/**
 * SkillPill component
 * Uses shadcn Badge for a minimal, consistent style.
 */
const SkillPill: React.FC<SkillPillProps> = ({ label }) => {
  return (
    <Badge
      variant="secondary"
      className="bg-white/5 text-neutral-200 hover:bg-white/10"
    >
      {label}
    </Badge>
  )
}

export default SkillPill
