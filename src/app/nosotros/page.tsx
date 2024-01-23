import { Hero, InfoEnterprise, KnowProject } from '@/components/about';
import ProjectsExp from '@/components/about/ProjectsExp';
import { getProjects } from '@/components/actions/getProjects';
import SkeletonCard from '@/components/shared/skeleton/Skeleton';
import { Suspense } from 'react';

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <InfoEnterprise />
      <KnowProject />
      <Suspense fallback={<SkeletonCard />}>
        <ProjectsAsync />
      </Suspense>
    </main>
  );
}
async function ProjectsAsync() {
  const projects = await getProjects();
  if (!projects) return <>error al obtener proyectos del servidor</>;
  return <ProjectsExp projects={projects} />;
}
