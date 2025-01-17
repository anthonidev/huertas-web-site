import { ComplaintsBookForm } from '@/lib/interface/book';
import { createBookService } from '@/server/actions/books';

import { toast } from 'react-toastify';
import { create } from 'zustand';

interface ComplaintsBookState {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  createComplaintsBook: (book: ComplaintsBookForm) => Promise<boolean>;
}

const useComplaintsBookStore = create<ComplaintsBookState>((set) => ({
  loading: false,
  setLoading: (loading: boolean) => set({ loading }),
  createComplaintsBook: async (book: ComplaintsBookForm) => {
    let res = false;
    set({ loading: true });
    try {
      await createBookService(book);
      toast.success('Se registró en el libro de reclamaciones correctamente');
      set({ loading: false });
      res = true;
    } catch (error: unknown) {
      set({ loading: false });
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('Ocurrió un error al registrar el libro de reclamaciones');
      }
      res = false;
    }
    return res;
  },
}));

export default useComplaintsBookStore;
