'use server';
const apiUrl = process.env.API_URL;

const createPaymentOrder = async (data: FormPayHere) => {
  const datasend = JSON.stringify(data);

  try {
    const res = await fetch(`${apiUrl}/api/payweb/create/`, {
      method: 'POST',
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: datasend,
    });

    if (res.status === 404 || res.status === 500) {
      throw new Error(`Request failed with status code ${res.status}`);
    }
    const response = await res.json();
    if (res.status === 201) {
      return response;
    } else {
      return false;
    }
  } catch (error: any) {
    console.log('ERRORRRRRR');
    return false;
  }
};

const getOrder = async (id: string) => {
  try {
    const res = await fetch(`${apiUrl}/api/payweb/detail/${id}/`, {
      cache: 'no-store',
      headers: {
        Accept: 'application/json',
      },
     
    });

    if (res.status === 404 || res.status === 500) {
      throw new Error(`Request failed with status code ${res.status}`);
    }
    return (await res.json()) as ResponsePayHere;
  } catch (error: any) {
    return false;
  }
};

export { createPaymentOrder, getOrder };
