import { SendMessageService } from '@/server/actions/project';
import { toast } from 'react-toastify';
import { create } from 'zustand';

export interface MessageState {
  loading: boolean;
  sendMessage: (
    data: FormContact,
    event: any,
    finalHtml: string,
    finalText: string,
    width: number,
    height: number,
    project?: string,
  ) => void;
  confetti: {
    width: number;
    height: number;
    state: boolean;
  };
}

const useMessageStore = create<MessageState>((set) => ({
  loading: false,
  sendEmail: false,
  confetti: {
    width: 0,
    height: 0,
    state: false,
  },
  sendMessage: (data, event, finalHtml, finalText, width, height, project) => {
    set({ loading: true });

    SendMessageService(data, project)
      .then((response) => {
        if (response) {
          event.target.reset();
          fetch('/api/sendmail', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              from: 'soporte@invertifast.pe',
              to: 'softwaretoni21@gmail.com',
              subject: `Nuevo lead: ${data.firstname} ${data.lastname}`,
              html: finalHtml,
              text: finalText,
            }),
          }).finally(() => {
            set({ confetti: { width, height, state: false } });
          });
          toast.success('Mensaje enviado correctamente');
        }
      })
      .finally(() => {
        set({ loading: false });
        setTimeout(() => {
          set({ confetti: { width: 0, height: 0, state: false } });
        }, 4000);
      });
  },
}));

export default useMessageStore;
