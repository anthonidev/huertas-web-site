'use client';
import FormatCoin from '@/utils/coin';
import { Button } from '@nextui-org/react';

type Props = {
  amount: string;
  loading: boolean;
  currency?: string;
  status?: string;
  order?:boolean
};

const PaymentSummary = ({ amount, loading, status ,currency="USD",order}: Props) => {
  
  const convertDe = (value:string)=>{
    if (order){
      let stringValue = value.toString();
  
      // Insert the decimal point two places from the end
      let length = stringValue.length;
      let integerPart = stringValue.substring(0, length - 2);
      let decimalPart = stringValue.substring(length - 2);
    
      // Handle cases where the integer part might be empty (e.g., for numbers less than 100)
      if (integerPart === "") {
        integerPart = "0";
      }
    
      // Combine the integer part and the decimal part
      let formattedValue = integerPart + "." + decimalPart;
    
      return FormatCoin(parseFloat(formattedValue),currency)
    }
    else{
      return FormatCoin(parseFloat(amount),currency)
    }
   
  }
  
  return (
    <div className="mx-auto max-w-md rounded-lg bg-pri p-6 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white">Producto</h2>
        <h2 className="text-xl font-bold text-white">Subtotal</h2>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <p className="text-gray-300">Pago por separación</p>
        <p className="text-gray-300">{convertDe(amount)}</p>
      </div>
      <div className="flex items-center justify-between border-t-2 border-gray-200 pt-2">
        <p className="text-lg font-bold text-gray-200">Subtotal</p>
        <p className="text-lg font-bold text-gray-200">{convertDe(amount)}</p>
      </div>
      <div className="mt-4 flex items-center justify-between border-t-2 border-gray-200 pt-2">
        <p className="text-xl font-bold text-white">Total</p>
        <p className="text-xl font-bold text-white">{convertDe(amount)}</p>
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
