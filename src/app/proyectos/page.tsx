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
      <div className='flex flex-col items-center justify-center bg-gradient-to-r from-pri to-sec py-20'>
        <p className='text-center text-3xl  text-white'>
          No dejes <strong>pasar</strong>
          <br /> esta gran <strong>oportunidad</strong>
          <br />
          estamos para ti
        </p>
        <p className='mt-5 rounded-full bg-pri px-5 py-2 text-2xl font-extrabold text-white'>
          997 002 337
        </p>
      </div>
    </main>
  );
}

async function ProjectsAsync() {
  const projects = await getProjects();
  if (!projects) return <>error al obtener proyectos del servidor</>;
  return <AviableProjects projects={projects} />;
}
