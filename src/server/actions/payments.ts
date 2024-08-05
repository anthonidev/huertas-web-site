'use server';
const apiUrl = process.env.API_URL;

const createPaymentOrder = async (data: FormPayHere) => {

  const datasend=JSON.stringify(data)
  console.log(datasend)

  try {
    const res = await fetch(`${apiUrl}/api/payweb/create/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:datasend,
    });

    if (res.status === 404 || res.status === 500) {
      throw new Error(`Request failed with status code ${res.status}`);
    }
    return (await res.json()) as ResponsePayHere;
  } catch (error: any) {
    return error?.message || 'Ocurrió un error al crear la orden';
  }
};

const getOrder = async (id: string) => {
  try {
    const res = await fetch(`${apiUrl}/api/payweb/detail/${id}/`, {
      headers: {
        Accept: 'application/json',
      },
    });

    if (res.status === 404 || res.status === 500) {
      throw new Error(`Request failed with status code ${res.status}`);
    }
    return (await res.json()) as ResponsePayHere;
  } catch (error: any) {
    return error?.message || 'Ocurrió un error al obtener la orden';
  }
}

export { createPaymentOrder, getOrder };