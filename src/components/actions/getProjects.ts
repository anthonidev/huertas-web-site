import { cache } from 'react';

const getProjects = cache(async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/web/front/projects/client/`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  const projects = (await res.json()) as Project[];
  return projects;
});

const getProject = cache(async (slug: string) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/web/front/projects/client/${slug}/`,
    {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }
  );

  const project = (await res.json()) as ProjectDetail;
  return project;
});
export { getProjects, getProject };
