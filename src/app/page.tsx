import { getComments, getProjects } from '@/components/actions/getProjects';
import { AviableProjects, FamilyHuertas, Featured, GetLandSteps, HowPay, TrustHuertas } from '@/components/home';
import SkeletonCard from '@/components/shared/skeleton/Skeleton';
import { Suspense } from 'react';
import SectionForm from '@/components/home/SectionForm';

export default function Home() {
  return (
    <main>
      <Featured />
      <HowPay />
      <Suspense fallback={<SkeletonCard />}>
        <ProjectsAsync />
      </Suspense>
      <SectionForm />

      <Suspense fallback={<SkeletonCard />}>
        <CommentsAsync />
      </Suspense>
      <TrustHuertas />
      <GetLandSteps />
    </main>
  );
}

async function ProjectsAsync() {
  const projects = await getProjects();
  if (!projects) return <>error al obtener proyectos del servidor</>;
  return <AviableProjects projects={projects} />;
}

async function CommentsAsync() {
  const comments = await getComments();
  if (!comments) return <>error al obtener proyectos del servidor</>;
  return <FamilyHuertas comments={comments} />;
}
