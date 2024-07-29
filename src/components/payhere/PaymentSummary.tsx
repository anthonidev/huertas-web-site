import { Button } from '@nextui-org/react';
import FormatCoin from '../../utils/coin';

type Props = {
  amount: string;
  loading: boolean;
};

const PaymentSummary = ({ amount, loading }: Props) => {
  return (
    <div className='mx-auto max-w-md rounded-lg bg-pri p-6 shadow-md'>
      <div className='mb-4 flex items-center justify-between'>
        <h2 className='text-xl font-bold text-white'>Producto</h2>
        <h2 className='text-xl font-bold text-white'>Subtotal</h2>
      </div>
      <div className='mb-2 flex items-center justify-between'>
        <p className='text-gray-300'>Pago por separación</p>
        <p className='text-gray-300'>{FormatCoin(parseFloat(amount), 'USD')}</p>
      </div>
      <div className='flex items-center justify-between border-t-2 border-gray-200 pt-2'>
        <p className='text-lg font-bold text-gray-200'>Subtotal</p>
        <p className='text-lg font-bold text-gray-200'>
          {FormatCoin(parseFloat(amount), 'USD')}
        </p>
      </div>
      <div className='mt-4 flex items-center justify-between border-t-2 border-gray-200 pt-2'>
        <p className='text-xl font-bold text-white'>Total</p>
        <p className='text-xl font-bold text-white'>
          {FormatCoin(parseFloat(amount), 'USD')}
        </p>
      </div>

      <Button
        type='submit'
        className='mt-4 w-full bg-white font-bold uppercase text-pri'
        size='lg'
        variant='solid'
        isLoading={loading}
        isDisabled={loading}
      >
        Pagar
      </Button>
    </div>
  );
};

export default PaymentSummary;
