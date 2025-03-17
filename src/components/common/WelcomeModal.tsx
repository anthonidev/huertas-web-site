'use client';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { SendMessageService } from '@/server/actions/project';
import { toast } from 'react-toastify';
import { onlyLetter, onlyNumber } from '@/utils/validate';

interface FormFinanciamiento {
  firstname: string;
  lastname: string;
  phone: string;
}

interface WelcomeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WelcomeModal = ({ isOpen, onClose }: WelcomeModalProps) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormFinanciamiento>();

  const onSubmit: SubmitHandler<FormFinanciamiento> = async (data) => {
    setLoading(true);

    // Crear un objeto que coincida con la estructura de FormContact esperada por SendMessageService
    const formData = {
      firstname: data.firstname,
      lastname: data.lastname,
      phone: data.phone,
      email: 'financiamiento@lead.com', // Valor por defecto
      message: 'Interesado en financiamiento directo sin intereses', // Mensaje predeterminado
    };

    try {
      const result = await SendMessageService(formData);
      if (result) {
        toast.success('¡Gracias por registrarte! Pronto te contactaremos');
        reset();
        onClose();
      } else {
        toast.error('Ocurrió un error al enviar tu información');
      }
    } catch (error) {
      toast.error('Ocurrió un error inesperado');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="absolute right-4 top-4">
                  <button
                    type="button"
                    className="text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <span className="sr-only">Cerrar</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <Dialog.Title as="h3" className="text-center text-2xl font-bold text-pri">
                  ¡Financiamiento directo sin intereses!
                </Dialog.Title>

                <div className="mt-3">
                  <p className="text-center text-sm text-gray-500">
                    Regístrate ahora para obtener más información sobre nuestro plan de
                    financiamiento directo.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                  <div className="mb-4">
                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                      Nombres
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-pri focus:ring-1 focus:ring-pri"
                      {...register('firstname', { required: 'Este campo es obligatorio' })}
                      onKeyDown={(e) => onlyLetter(e)}
                    />
                    {errors.firstname && (
                      <p className="mt-1 text-xs text-red-600">{errors.firstname.message}</p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                      Apellidos
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-pri focus:ring-1 focus:ring-pri"
                      {...register('lastname', { required: 'Este campo es obligatorio' })}
                      onKeyDown={(e) => onlyLetter(e)}
                    />
                    {errors.lastname && (
                      <p className="mt-1 text-xs text-red-600">{errors.lastname.message}</p>
                    )}
                  </div>

                  <div className="mb-6">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Número de teléfono
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-pri focus:ring-1 focus:ring-pri"
                      {...register('phone', {
                        required: 'Este campo es obligatorio',
                        minLength: { value: 9, message: 'Debe tener 9 dígitos' },
                        maxLength: { value: 9, message: 'Debe tener 9 dígitos' },
                      })}
                      maxLength={9}
                      onKeyDown={(e) => onlyNumber(e)}
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div className="mt-6">
                    {/* Botón simple sin el efecto "pushable" que causa problemas de colores */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full rounded-lg bg-pri py-3 text-center font-bold text-white transition-all duration-300 hover:bg-pri-200 focus:outline-none focus:ring-2 focus:ring-pri focus:ring-offset-2 disabled:opacity-70"
                    >
                      {loading ? 'Enviando...' : 'Quiero más información'}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default WelcomeModal;
