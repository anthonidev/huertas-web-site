'use server';
const apiUrl = process.env.API_URL;

const generateViewerId = () => {
  return 'xxxx-xxxx-xxxx-xxxx'.replace(/[x]/g, () => {
    const r = (Math.random() * 16) | 0;
    return r.toString(16);
  });
};
const getDeviceInfo = () => {
  return {
    deviceType: /Mobile|Android|iPad|iPhone|iPod/.test(navigator.userAgent) ? 'Mobile' : 'Desktop',
    deviceOS: navigator.platform,
    browserType: navigator.userAgent,
  };
};

const getProject = async (slug: string) => {
  // Generar y establecer el viewer_id si no existe
  // let viewerId = localStorage?.getItem('viewer_id');
  // if (!viewerId) {
  //   viewerId = generateViewerId();
  //   localStorage.setItem('viewer_id', viewerId);
  // }

  // Obtener la información del navegador
  // const userAgent = navigator.userAgent || '';
  // const { deviceType, deviceOS, browserType } = getDeviceInfo();
  // const referrerUrl = document.referrer || '';
  try {
    const res = await fetch(`${apiUrl}/api/web/front/projects/client/${slug}/`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        // 'User-Agent': userAgent,
        // 'X-Viewer-Id': viewerId,
        // 'X-Device-OS': deviceOS,
        // 'X-Browser-Type': browserType,
        // 'X-Device-Type': deviceType,
        // 'X-Referrer-URL': referrerUrl,
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

const SendMessageService = async (data: FormContact, project?: string) => {
  if (project === undefined) project = '';
  const sendData = {
    first_name: data.firstname,
    last_name: data.lastname,
    email: data.email,
    phone: data.phone,
    message: data.message,
    project_lead: project,
  };
  let response = false;

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
    if (res.status === 404 || res.status === 500 || res.status === 400) {
      return response;
    }
    response = true;
    return response;
  } catch (error: any) {
    console.log('ERROR', error);
    return response;
  }
};

export { getProjects, getProject, getComments, SendMessageService };
