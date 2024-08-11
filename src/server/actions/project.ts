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
      return false;
    }
    if (res.status === 200 || res.status === 201) {
      return (await res.json()) as Project[];
    } else {
      return false;
    }
  } catch (error: any) {
    return false;
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
      // throw new Error(`Request failed with status code ${res.status}`);
      return false;
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
    // throw new Error(`Request failed with status code ${res.status}`);
    return false;
  }

  const comments = (await res.json()) as Comment[];
  return comments;
};

const SendMessageService = async (
  data: FormContact,
  finalHtml: string,
  finalText: string,
  project?: string,
) => {
  if (project === undefined) project = '';
  const sendData = {
    first_name: data.firstname,
    last_name: data.lastname,
    email: data.email,
    phone: data.phone,
    message: data.message,
    project_lead: project,
  };

  try {
    const res = await fetch(`${apiUrl}/api/web/leadweb/create/`, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendData),
    });
    console.log('RESPONSE', res);
    if (res.status === 404 || res.status === 500) {
      return false;
    }

    await fetch('/api/sendEmail.json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'soporte@invertifast.pe',
        to: 'softwaretoni21@gmail.com',
        // subject: `Nuevo lead: ${formData.nombre} ${formData.apellido}`,
        html: finalHtml,
        text: finalText,
      }),
    });

    return true;
  } catch (error: any) {
    return false;
  }
};

export { getProjects, getProject, getComments, SendMessageService };
