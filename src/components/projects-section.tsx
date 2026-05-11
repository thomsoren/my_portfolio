"use client";

import { useState } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { ProjectCard } from "@/components/project-card";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_COUNT = 4;

interface Project {
  readonly title: string;
  readonly href: string;
  readonly description: string;
  readonly dates: string;
  readonly technologies: readonly string[];
  readonly image: string;
  readonly video: string;
  readonly active: boolean;
  readonly links: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
}

export function ProjectsSection({ projects }: { projects: readonly Project[] }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  return (
    <div className="space-y-6 w-full py-12">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
        {visible.map((project, id) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 3 + id * 0.05}
            inView
          >
            <ProjectCard
              href={project.href}
              title={project.title}
              description={project.description}
              dates={project.dates}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
            />
          </BlurFade>
        ))}
      </div>
      {projects.length > INITIAL_COUNT && (
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {showAll ? "Show less" : "Show more"}
          </button>
        </div>
      )}
    </div>
  );
}
