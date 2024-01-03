import { getProject } from '@/components/actions/getProjects';
import ProjectDetail from '@/components/projects/ProjectDetail';
import SkeletonCard from '@/components/shared/skeleton/Skeleton';
import { Suspense } from 'react';
export const dynamic = 'force-dynamic';

interface Props {
  params: { slug: string };
}
export default function Project({ params }: Props) {
  return (
    <Suspense fallback={<SkeletonCard />}>
      <ProjectAsync params={params} />
    </Suspense>
  );
}

async function ProjectAsync({ params }: { params: { slug: string } }) {
  const project = await getProject(params.slug);
  if (!project) return <>error al obtener proyecto del servidor</>;

  return (
    <section>
      <ProjectDetail project={project} />
    </section>
  );
}
