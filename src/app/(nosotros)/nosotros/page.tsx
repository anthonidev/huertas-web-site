import SkeletonCard from '@/components/shared/skeleton/Skeleton';
import { Suspense } from 'react';
import { Hero, InfoEnterprise, KnowProject } from './components';
import { getProjects } from '@/server/actions/project';
import ProjectsExp from './components/ProjectsExp';
import { GoogleTagManager } from '@next/third-parties/google';

export default function AboutPage() {
  return (
    <main>
      <Hero />
      <InfoEnterprise />
      <KnowProject />
      <Suspense fallback={<SkeletonCard />}>
        <ProjectsAsync />
      </Suspense>
      <GoogleTagManager gtmId="GTM-MH9WCJSW" />
    </main>
  );
}
async function ProjectsAsync() {
  const projects = await getProjects();
  if (!projects) return <>error al obtener proyectos del servidor</>;
  return <ProjectsExp projects={projects} />;
}
