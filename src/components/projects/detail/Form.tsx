'use client';
import FormData from '@/components/shared/form/FormData';
import Input from '@/components/shared/form/Input';
import TextArea from '@/components/shared/form/TextArea';
import { SendMessageSevice } from '@/service/SendMessage';
import { onlyLetter, onlyNumber } from '@/utils/validate';
import React, { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';

type Props = {
  project: string;
};

const Form = ({ project }: Props) => {
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormContact> = (data, event: any) => {
    setLoading(true);
    SendMessageSevice(data, project)
      .then((send) => {
        if (send) {
          event.target.reset();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <FormData<FormContact> onSubmit={onSubmit}>
      {({ register, formState: { errors } }) => (
        <div className='rounded-2xl bg-sky-200 px-10 py-20'>
          <p className='mb-5 text-center text-2xl text-pri md:text-3xl lg:text-4xl xl:text-5xl'>
            Quiero que me contacten
            <span className='font-extrabold text-pri'>
              {' '}
              para mayor información
            </span>
          </p>
          <p className='mb-5 text-center text-sm text-pri md:text-lg '>
            Déjanos tus datos y un asesor se contactará contigo lo antes posible
          </p>
          <div className='grid grid-cols-2 gap-4'>
            <div className='col-span-2 md:col-span-1'>
              <Input
                title='Nombres '
                type='text'
                {...register('firstname', {
                  required: true,
                  maxLength: 120,
                })}
                onKeyDown={(e) => onlyLetter(e)}
                aria-errormessage={
                  errors.firstname ? 'Este campo es requerido' : ''
                }
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Input
                title='Apellidos'
                type='text'
                {...register('lastname', {
                  required: true,
                  maxLength: 120,
                })}
                onKeyDown={(e) => onlyLetter(e)}
                aria-errormessage={
                  errors.lastname ? 'Este campo es requerido' : ''
                }
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Input
                title='Correo electrónico'
                type='email'
                {...register('email', {
                  required: true,
                  maxLength: 120,
                })}
                aria-errormessage={
                  errors.email ? 'Este campo es requerido' : ''
                }
              />
            </div>
            <div className='col-span-2 md:col-span-1'>
              <Input
                title='Número de teléfono'
                type='text'
                {...register('phone', {
                  required: true,
                  maxLength: 9,
                })}
                minLength={9}
                maxLength={9}
                onKeyDown={(e) => onlyNumber(e)}
                aria-errormessage={
                  errors.phone ? 'Este campo es requerido' : ''
                }
              />
            </div>

            <div className='col-span-2'>
              <TextArea
                title='Mensaje'
                {...register('message', {
                  required: false,
                  maxLength: 500,
                })}
              />
            </div>

            <button
              type='submit'
              className='col-span-2 rounded-xl bg-pri py-2 text-white'
              disabled={loading}
            >
              Solicitar información
            </button>
            <span className='col-span-2 mb-5 text-center text-xs text-pri md:text-sm'>
              Al enviar este formulario, aceptas que los datos que nos
              proporcionas se utilicen para responder a tu consulta.
            </span>
          </div>
        </div>
      )}
    </FormData>
  );
};

export default Form;
