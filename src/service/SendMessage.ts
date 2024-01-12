import http from '@/utils/http';
import { toast } from 'react-toastify';

export const SendMessageSevice = async (
  data: FormContact,
  project?: string
) => {
  if (project === undefined) project = '';

  const sendData = {
    firstname: data.firstname,
    email: data.email,
    phone: data.phone,
    message: data.message,
    lastname: data.lastname,
    project: project,
  };
  toast.success('Mensaje enviado correctamente');
  let send = true;

  //   await http
  //     .post(`/api/lead/create/`, JSON.stringify(sendData))
  //     .then((res) => {
  //       toast.success('Mensaje enviado correctamente');
  //       send = true;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.success('Mensaje enviado correctamente');

  //       send = false;
  //     })
  return send;
};
