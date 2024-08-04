import http from '@/utils/http';
import { toast } from 'react-toastify';

export const SendMessageSevice = async (data: FormContact, project?: string) => {
  if (project === undefined) project = '';

  const sendData = {
    first_name: data.firstname,
    last_name: data.lastname,
    email: data.email,
    phone: data.phone,
    message: data.message,
    project_lead: project,
  };
  let send = true;

  console.log(sendData);
  await http
    .post(`/api/web/leads/`, JSON.stringify(sendData))
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
