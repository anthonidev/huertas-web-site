import FormatCoin from '@/utils/coin';
import React from 'react';

type Props = {
  secondary_color: string;
  separate: number;
  currency: string;
  initial: number;
  price: number;
};

const PriceFrom = ({ currency, initial, price, separate, secondary_color }: Props) => {
  return (
    <div
      style={{ backgroundColor: secondary_color }}
      className="relative mt-32 w-full rounded-2xl p-7 text-center text-lg text-white lg:p-10 lg:text-2xl"
    >
      <p>Precio al Inicial/ Contado</p>
      <p className="text-xl font-extrabold lg:text-4xl">
        {FormatCoin(initial, currency)} - {FormatCoin(price, currency)}
      </p>
    </div>
  );
};

export default PriceFrom;
