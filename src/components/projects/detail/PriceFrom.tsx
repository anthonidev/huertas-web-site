import FormatCoin from '@/utils/coin';
import React from 'react';

type Props = {
  secondary_color: string;
  separate: number;
  currency: string;
  initial: number;
  price: number;
};

const PriceFrom = ({
  currency,
  initial,
  price,
  separate,
  secondary_color,
}: Props) => {
  return (
    <div
      style={{ backgroundColor: secondary_color }}
      className='relative -left-10 my-20 w-full  rounded-2xl p-7 text-center text-lg text-white lg:p-10 lg:text-2xl'
    >
      <p>Precio al Inicial/ Contado</p>
      <p className='text-xl font-extrabold lg:text-4xl'>
        {FormatCoin(initial, currency)} - {FormatCoin(price, currency)}
      </p>
      <div
        className='absolute  -right-16 -top-14 flex animate-bounce   items-center justify-center rounded-2xl text-center text-white'
        style={{
          backgroundImage: 'url("/svg/hexagon.svg")',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <p className='animate-none p-5 text-xs lg:p-8'>
          Separa <br /> <strong>TU LOTE CON</strong> <br />
          <span className='text-xl font-extrabold lg:text-3xl'>
            {FormatCoin(separate, currency)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default PriceFrom;
