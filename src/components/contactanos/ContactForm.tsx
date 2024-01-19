'use client';
import React, { useState } from 'react';
import Input from '../shared/form/Input';
import TextArea from '../shared/form/TextArea';
import Image from 'next/image';
import { SubmitHandler } from 'react-hook-form';
import { SendMessageSevice } from '@/service/SendMessage';
import FormData from '../shared/form/FormData';
import Input2 from '../shared/form/Input2';
import { onlyLetter, onlyNumber } from '@/utils/validate';
import TextArea2 from '../shared/form/TextArea2';

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<FormContact> = (data, event: any) => {
    setLoading(true);
    SendMessageSevice(data)
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
    <section className='  my-10 bg-pattern p-5 lg:p-20' id='contactanos-form'>
      <div className='mx-auto flex w-full max-w-7xl flex-col px-4  sm:px-6  md:flex-row lg:px-8'>
        <div className='basis-1/2'>
          <Image
            src='/imgs/contact.png'
            width={500}
            height={500}
            alt='contact'
          />
        </div>
        <FormData<FormContact> onSubmit={onSubmit}>
          {({ register, formState: { errors } }) => (
            <div className='my-5 rounded-2xl  px-10 lg:mx-0 lg:my-0 '>
              <p className=' py-10 text-center text-3xl text-sec md:text-3xl '>
                Quiero que me contacten <br />{' '}
                <strong> para mayor información</strong>
              </p>

              <div className='grid grid-cols-2 gap-4'>
                <div className='col-span-2 bg-pri-300 md:col-span-1'>
                  <Input2
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
                <div className='col-span-2 bg-pri-300 md:col-span-1'>
                  <Input2
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
                <div className='col-span-2 bg-pri-300 md:col-span-1'>
                  <Input2
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
                <div className='col-span-2 bg-pri-300 md:col-span-1'>
                  <Input2
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

                <div className='col-span-2 bg-pri-300'>
                  <TextArea2
                    title='Mensaje'
                    {...register('message', {
                      required: false,
                      maxLength: 500,
                    })}
                  />
                </div>
                <div className='col-span-2 flex items-center justify-center'>
                  <button
                    type='submit'
                    className='  bg-sec px-7 py-4 uppercase  text-white'
                    disabled={loading}
                  >
                    Solicitar información
                  </button>
                </div>

                <span className='col-span-2 mb-5 text-center text-xs text-white md:text-sm'>
                  Al enviar este formulario, aceptas que los datos que nos
                  proporcionas se utilicen para responder a tu consulta.
                </span>
              </div>
            </div>
          )}
        </FormData>
      </div>
    </section>
  );
};
