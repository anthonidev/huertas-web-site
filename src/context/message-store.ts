import { create } from 'zustand';
import { toast } from 'react-toastify';
import { SendMessageService } from '@/server/actions/project';

export interface MessageState {
  loading: boolean;
  sendMessage: (data: FormContact, event: any) => void;
}

const useMessageStore = create<MessageState>((set) => ({
  loading: false,
  sendMessage: (data, event) => {
    set({ loading: true });
    SendMessageService(data)
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
