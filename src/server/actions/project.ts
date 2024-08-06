'use server';
const apiUrl = process.env.API_URL;
const getProjects = async () => {
  try {
    const res = await fetch(`${apiUrl}/api/web/front/projects/client/`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status === 404 || res.status === 500) {
      throw new Error(`Request failed with status code ${res.status}`);
    }
    return (await res.json()) as Project[];
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getProject = async (slug: string) => {
  try {
    const res = await fetch(`${apiUrl}/api/web/front/projects/client/${slug}/`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status === 404 || res.status === 500) {
      throw new Error(`Request failed with status code ${res.status}`);
    }
    return (await res.json()) as ProjectDetail;
  } catch (error: any) {
    throw new Error(error.message);
  }
};



const getComments = async () => {
  const res = await fetch(`${apiUrl}/api/web/front/comments/`, {
    cache: 'no-store',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });
  if (res.status === 404 || res.status === 500) {
    throw new Error(`Request failed with status code ${res.status}`);
  }

  const comments = (await res.json()) as Comment[];
  return comments;
};

export { getProjects, getProject, getComments };
