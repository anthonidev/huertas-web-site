'use client';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import FormData from '../shared/form/FormData';
import PaymentSummary from './PaymentSummary';
import SectionClient from './SectionClient';
import { toast } from 'react-toastify';

const FormPayHere = () => {
  const [loading, setLoading] = useState(false);
  const onSubmit: SubmitHandler<FormPayHere> = (data, event: any) => {
    console.log(data);
    if (!data.policy) {
      toast.error('Debes aceptar las políticas de privacidad', {
        position: 'bottom-right',
      });
    }
    setLoading(true);
    console.log(data);
    toast.success('Pago realizado con éxito', {
      position: 'top-right',
    });
    setLoading(false);
  };

  return (
    <FormData<FormPayHere> onSubmit={onSubmit}>
      {({ register, watch, setValue, formState: { errors } }) => (
        <div className='mx-auto flex flex-col md:flex-row space-x-0 md:space-x-5 md:space-y-0 space-y-5 rounded-lg bg-white px-6 py-16 shadow-md'>
          <div className='w-full md:basis-1/2'>
            <h2 className='mb-4 text-xl font-semibold'>
              Detalles de facturación
            </h2>
            <SectionClient
              register={register}
              watch={watch}
              setValue={setValue}
              errors={errors}
            />
          </div>
          <div className="w-full md:basis-1/2">

            <PaymentSummary
              amount={watch('amount')?.toString() || '5000'}
              loading={loading}
            />
          </div>
        </div>
      )}
    </FormData>
  );
};

export default FormPayHere;
