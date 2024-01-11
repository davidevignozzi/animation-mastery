import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="container my-8">
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ProjectCard name={'trial'} codeLink="/" link="/projects/trial" />
      </main>
    </div>
  );
}
