import LoadingPage from '@/components/shared/LoadingPage';
import { getProject } from '@/server/actions/project';
import { Suspense } from 'react';
import ProjectDetail from '../../components/ProjectDetail';
export const dynamic = 'force-dynamic';

interface Props {
  params: { slug: string };
}
export default function Project({ params }: Props) {
  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <ProjectAsync params={params} />
      </Suspense>
    </>
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
