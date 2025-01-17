'use server';
import { ComplaintsBookForm } from '@/lib/interface/book';
import axios from 'axios';

export const createBookService = async (data: ComplaintsBookForm) => {
  const apiUrl = process.env.API_NEST_URL;
  const url = `${apiUrl}/api/complaints-book`;
  try {
    const response = await axios.post(url, data);

    return await response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return {
        message: error.response?.data.message,
        status: error.response?.status,
      };
    } else {
      return {
        message: 'Error al registrar el libro de reclamaciones',
        status: 500,
      };
    }
  }
};
