import SkeletonCard from '@/components/shared/skeleton/Skeleton';
import { Suspense } from 'react';
import { FamilyHuertas, Featured, GetLandSteps, HowPay, TrustHuertas } from './components/sections';
import { getComments, getProjects } from '@/server/actions/project';
import SectionForm from './components/sections/SectionForm';
import { AviableProjects } from '@/components/common/AviableProjects';
import { GoogleTagManager } from '@next/third-parties/google';

export default function Home() {
  return (
    <main>
      <Featured />
      <Suspense fallback={<SkeletonCard />}>
        <ProjectsAsync />
      </Suspense>
      <HowPay />

      <SectionForm />

      <Suspense fallback={<SkeletonCard />}>
        <CommentsAsync />
      </Suspense>
      <TrustHuertas />
      <GetLandSteps />
      <GoogleTagManager gtmId="GTM-MH9WCJSW" />
    </main>
  );
}

async function ProjectsAsync() {
  const projects = await getProjects();
  if (!projects) return <>error al obtener proyectos del servidor</>;
  return <AviableProjects projects={projects} />;
}

async function CommentsAsync() {
  // const comments = await getComments();
  // if (!comments) return <>error al obtener proyectos del servidor</>;
  // return <FamilyHuertas comments={comments} />;
  return <FamilyHuertas />;
}
