import { getProjects } from '@/components/actions/getProjects';
import { AviableProjects } from '@/components/home';
import { Featured } from '@/components/projects';
import SkeletonCard from '@/components/shared/skeleton/Skeleton';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: 'Huertas Inmobiliaria - Proyectos',
  description:
    'En huertas inmobiliaria tenemos los mejores proyectos tanto en campo como en playa',
};

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
