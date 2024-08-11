import { create } from 'zustand';
import { toast } from 'react-toastify';
import { SendMessageService } from '@/server/actions/project';

export interface MessageState {
  loading: boolean;
  sendMessage: (
    data: FormContact,
    event: any,
    finalHtml: string,
    finalText: string,
    project?: string,
  ) => void;
  sendEmail: boolean;
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
  sendMessage: (data, event, project, finalHtml, finalText) => {
    set({ loading: true });
    SendMessageService(data, project, finalHtml, finalText)
      .then((res) => {
        if (res) {
          event.target.reset();
        }
      })
      .finally(() => {
        set({ loading: false });
        toast.success('Mensaje enviado correctamente');
      });
  },
}));

export default useMessageStore;
