'use client';
import FormData from '@/components/shared/form/FormData';
import { useState } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { toast } from 'react-toastify';
import PaymentSummary from './PaymentSummary';
import SectionClient from './SectionClient';
import { createPaymentOrder } from '@/server/actions/payments';
import { useRouter } from 'next/navigation';

const FormPayHere = () => {
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  const onSubmit: SubmitHandler<FormPayHere> = (data) => {
    setLoading(true);
    let data_send = data;
    data_send.amount = Math.round(data.amount * 100);
    createPaymentOrder(data_send)
      .then((res: false | ResponsePayHere) => {
        if (res && res.status === 'pending') {
          toast.success('Orden creada correctamente');
          window.open(res.url_payment, '_blank');
          push('paga-aqui/' + res.id);
        } else {
          toast.error('Ocurrió un error al procesar el pago1');
        }
      })
      .catch((error) => {
        toast.error('Ocurrió un error al procesar el pago2');
      })
      .finally(() => setLoading(false));
  };

  return (
    <FormData<FormPayHere> onSubmit={onSubmit}>
      {({ register, watch, setValue, formState: { errors } }) => (
        <div className="mx-auto flex flex-col space-x-0 space-y-5 rounded-lg bg-white px-6 py-16 shadow-md md:flex-row md:space-x-5 md:space-y-0">
          <div className="w-full md:basis-1/2">
            <h2 className="mb-4 text-xl font-semibold">Detalles de facturación</h2>
            <SectionClient register={register} watch={watch} setValue={setValue} errors={errors} />
          </div>
          <div className="w-full md:basis-1/2">
            <PaymentSummary
              amount={watch('amount')?.toString() || '5000'}
              loading={loading}
              currency={watch('currency')}
            />
          </div>
        </div>
      )}
    </FormData>
  );
};

export default FormPayHere;
