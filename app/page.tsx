import ProjectCard from '@/components/ProjectCard';

// *** IMPORTANT => configure this when add a new project

import { projectsArray } from '@/lib/projectsArray';

export default function Home() {
  return (
    <div className="container my-8">
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projectsArray.map((prj, idx) => (
          <ProjectCard
            key={idx}
            name={prj.name}
            description={prj.description}
            codeLink={prj.codeLink}
            link={prj.link}
          />
        ))}
      </main>
    </div>
  );
}
