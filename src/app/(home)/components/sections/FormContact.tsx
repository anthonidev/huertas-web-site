'use client';
import EmailTemplateLead from '@/components/shared/EmailTemplateLead';
import FormData from '@/components/shared/form/FormData';
import Input2 from '@/components/shared/form/Input2';
import TextArea2 from '@/components/shared/form/TextArea2';
import useMessageStore from '@/context/message-store';
import { onlyLetter, onlyNumber } from '@/utils/validate';
import { CursorArrowRaysIcon } from '@heroicons/react/24/solid';
import { render } from '@react-email/render';
import { SubmitHandler } from 'react-hook-form';
import Confetti from 'react-confetti';

const FormContact = () => {
  const {
    loading,
    sendMessage,
    confetti: { height, state, width },
  } = useMessageStore();

  const onSubmit: SubmitHandler<FormContact> = (data, event: any) => {
    const finalHtml = render(
      <EmailTemplateLead
        name={data.firstname}
        lastname={data.lastname}
        email={data.email}
        phone={data.phone}
        message={data.message}
      />,
      { pretty: true },
    );
    const finalText = render(
      <EmailTemplateLead
        name={data.firstname}
        lastname={data.lastname}
        email={data.email}
        phone={data.phone}
        message={data.message}
      />,
      { plainText: true },
    );

    sendMessage(data, event, finalHtml, finalText, window.innerWidth, window.innerHeight);
  };
  return (
    <>
      <FormData<FormContact> onSubmit={onSubmit}>
        {({ register, formState: { errors } }) => (
          <div className="my-5 rounded-2xl bg-pri px-10 lg:mx-10 lg:my-0">
            <p className="py-10 text-center text-lg text-white md:text-2xl xl:text-3xl">
              Quiero que me contacten para mayor información
            </p>

            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 md:col-span-1">
                <Input2
                  title="Nombres "
                  type="text"
                  {...register('firstname', {
                    required: true,
                    maxLength: 120,
                  })}
                  onKeyDown={(e) => onlyLetter(e)}
                  aria-errormessage={errors.firstname ? 'Este campo es requerido' : ''}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input2
                  title="Apellidos"
                  type="text"
                  {...register('lastname', {
                    required: true,
                    maxLength: 120,
                  })}
                  onKeyDown={(e) => onlyLetter(e)}
                  aria-errormessage={errors.lastname ? 'Este campo es requerido' : ''}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input2
                  title="Correo electrónico"
                  type="email"
                  {...register('email', {
                    required: true,
                    maxLength: 120,
                  })}
                  aria-errormessage={errors.email ? 'Este campo es requerido' : ''}
                />
              </div>
              <div className="col-span-2 md:col-span-1">
                <Input2
                  title="Número de teléfono"
                  type="text"
                  {...register('phone', {
                    required: true,
                    maxLength: 9,
                  })}
                  minLength={9}
                  maxLength={9}
                  onKeyDown={(e) => onlyNumber(e)}
                  aria-errormessage={errors.phone ? 'Este campo es requerido' : ''}
                />
              </div>

              <div className="col-span-2">
                <TextArea2
                  title="Mensaje"
                  {...register('message', {
                    required: false,
                    maxLength: 500,
                  })}
                />
              </div>
              <div className="col-span-2 flex items-center justify-center">
                <button
                  type="submit"
                  className="pushable group flex uppercase text-white"
                  disabled={loading}
                >
                  <span className="edge"></span>
                  <span className="front flex flex-col items-center lg:flex-row">
                    <CursorArrowRaysIcon className="mr-2 h-5 w-5 animate-bounce group-hover:animate-none" />
                    {loading ? 'Enviando...' : 'Solicitar información'}
                  </span>
                </button>
              </div>

              <span className="col-span-2 mb-5 text-center text-xs text-white">
                Al enviar este formulario, aceptas que los datos que nos proporcionas se utilicen
                para responder a tu consulta.
              </span>
            </div>
          </div>
        )}
      </FormData>
      {state && <Confetti width={width} height={height} />}
    </>
  );
};

export default FormContact;
