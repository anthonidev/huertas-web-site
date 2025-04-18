'use client';
import { onlyLetter, onlyNumber } from '@/utils/validate';
import Link from 'next/link';
import { SubmitHandler } from 'react-hook-form';

import EmailTemplateLead from '@/components/shared/EmailTemplateLead';
import FormData from '@/components/shared/form/FormData';
import Input2 from '@/components/shared/form/Input2';
import TextArea2 from '@/components/shared/form/TextArea2';
import useMessageStore from '@/context/message-store';
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import { render } from '@react-email/render';
import Confetti from 'react-confetti';
export const ContactForm = () => {
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
    <section className="my-10 bg-pattern p-5 lg:p-20" id="contactanos-form">
      <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="flex basis-1/2 flex-col space-y-7">
          <h1 className="w-36 border-b-4 border-pri text-3xl font-extrabold text-sec md:text-4xl lg:text-5xl">
            CONTÁCTANOS
          </h1>
          <p className="max-w-sm text-pri">
            Envíenos un mensaje y nos pondremos en contacto con usted lo más pronto posible para
            resolver todas sus dudas o preguntas que tenga respecto a nuestros proyectos.
          </p>
          <p className="text-pri">
            ¡Ahora tener <strong> TU LOTE ES ALTOKE!</strong>
          </p>
          <div className="flex flex-col space-y-2 text-pri">
            <Link href="tel:+51948195923" className="flex items-center justify-start space-x-3">
              <PhoneIcon className="h-5 w-5" />
              <span>(+51) 948 195 923</span>
            </Link>
            <Link
              href="mailto:ventas@inmobiliariahuertas.com"
              className="flex items-center justify-start space-x-3"
            >
              <EnvelopeIcon className="h-5 w-5 text-pri" />

              <span>ventas@inmobiliariahuertas.com</span>
            </Link>
          </div>
        </div>
        <FormData<FormContact> onSubmit={onSubmit}>
          {({ register, formState: { errors } }) => (
            <div className="my-5 rounded-[45px] bg-[#EDEDED] px-10 lg:mx-0 lg:my-0">
              <p className="py-10 text-center text-3xl text-pri md:text-3xl">
                Quiero adquirir un
                <br />
                <strong>LOTE PROPIO</strong>
              </p>
              <p className="m-auto mb-10 w-full max-w-sm text-center text-sm text-pri">
                Déjanos tus datos y un asesor se contactará contigo lo antes posible.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 bg-pri-300 md:col-span-1">
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
                <div className="col-span-2 bg-pri-300 md:col-span-1">
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
                <div className="col-span-2 bg-pri-300 md:col-span-1">
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
                <div className="col-span-2 bg-pri-300 md:col-span-1">
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

                <div className="col-span-2 bg-pri-300">
                  <TextArea2
                    title="Mensaje"
                    {...register('message', {
                      required: false,
                      maxLength: 500,
                    })}
                  />
                </div>
                <div className="col-span-2 my-4 flex items-center justify-center">
                  <Button
                    type="submit"
                    isLoading={loading}
                    isDisabled={loading}
                    className="rounded-xl bg-[#00861D] px-7 py-2 text-sm font-bold text-white"
                    disabled={loading}
                  >
                    Solicitar información
                  </Button>
                </div>

                <span className="col-span-2 mx-auto mb-5 max-w-sm text-center text-[10px] text-pri">
                  Al enviar este formulario, aceptas que los datos que nos proporcionas se utilicen
                  para responder a tu consulta.
                </span>
              </div>
            </div>
          )}
        </FormData>
      </div>
      {state && <Confetti width={width} height={height} />}
    </section>
  );
};
