import http from '@/utils/http';
import { toast } from 'react-toastify';

export const SavePaymentService = async (data: FormPayHere) => {
  let send = true;

  await http
    .post(`/api/web/payment/`, JSON.stringify(data))
    .then((res) => {
      toast.success('Mensaje enviado correctamente');
      send = true;
    })
    .catch((err) => {
      console.log(err);
      toast.error('Error al enviar el mensaje');

      send = false;
    });
  return send;
};
