import { getProjects } from '@/components/actions/getProjects';
import { AviableProjects } from '@/components/home';
import { Featured } from '@/components/projects';
import SkeletonCard from '@/components/shared/skeleton/Skeleton';
import { Suspense } from 'react';
export const dynamic = 'force-dynamic';

export default function ProjectsPage() {
  return (
    <main>
      <Featured />
      <Suspense fallback={<SkeletonCard />}>
        <ProjectsAsync />
      </Suspense>
    </main>
  );
}

async function ProjectsAsync() {
  const projects = await getProjects();
  if (!projects) return <>error al obtener proyectos del servidor</>;
  return <AviableProjects projects={projects} />;
}
