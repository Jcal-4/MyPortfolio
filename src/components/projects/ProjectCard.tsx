/**
 * ProjectCard.tsx
 * A card component to display a portfolio project with an image, description, tags, and action links.
 */

import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

/**
 * Interface describing the structure of a single project object.
 */
export interface Project {
  /** Project name. */
  title: string;
  /** Short description of the project. */
  description: string;
  /** Image URL for the project preview. */
  image: string;
  /** Tech tags or keywords associated with the project. */
  tags: string[];
  /** Links for live demo and source code. */
  links?: {
    live?: string;
    code?: string;
  };
}

/**
 * ProjectCard component
 * Displays a preview image, title, description, tags, and action buttons.
 */
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <Card className="group overflow-hidden border-white/10 bg-neutral-900/40 backdrop-blur supports-[backdrop-filter]:bg-neutral-900/30">
      <div className="relative h-44 w-full overflow-hidden">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent" />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-white">{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-neutral-300">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
              {t}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-end gap-2">
        {project.links?.live && (
          <Button className="border border-white/10" asChild>
            <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <ExternalLink className="h-4 w-4" />
              Live
            </a>
          </Button>
        )}
        {project.links?.code && (
          <Button className="border border-white/10" asChild>
            <a href={project.links.code} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
              <Github className="h-4 w-4" />
              Code
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
