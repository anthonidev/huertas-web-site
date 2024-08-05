'use client';
import FormatCoin from '@/utils/coin';
import { Button } from '@nextui-org/react';

type Props = {
  amount: string;
  loading: boolean;
  currency?: string;
  status?: string;
};

const PaymentSummary = ({ amount, loading, status ,currency="USD"}: Props) => {
  return (
    <div className="mx-auto max-w-md rounded-lg bg-pri p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Producto</h2>
        <h2 className="text-xl font-bold text-white">Subtotal</h2>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-gray-300">Pago por separación</p>
        <p className="text-gray-300">{FormatCoin(parseFloat(amount),currency)}</p>
      </div>
      <div className="flex items-center justify-between border-t-2 border-gray-200 pt-2">
        <p className="text-lg font-bold text-gray-200">Subtotal</p>
        <p className="text-lg font-bold text-gray-200">{FormatCoin(parseFloat(amount), currency)}</p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t-2 border-gray-200 pt-2">
        <p className="text-xl font-bold text-white">Total</p>
        <p className="text-xl font-bold text-white">{FormatCoin(parseFloat(amount), currency)}</p>
      </div>
      {!status && (
        <Button
          type="submit"
          className="mt-4 w-full bg-white font-bold uppercase text-pri"
          size="lg"
          variant="solid"
          isLoading={loading}
          isDisabled={loading}
        >
          Continuar
        </Button>
      )}
    </div>
  );
};

export default PaymentSummary;
