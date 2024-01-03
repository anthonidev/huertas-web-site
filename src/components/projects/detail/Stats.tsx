import Image from 'next/image';
import React from 'react';

type Props = {
  areas: Area[];
};

const Stats = ({ areas }: Props) => {
  return (
    <div className='py-10'>
      <p className='mb-5  text-center text-2xl text-gray-700 md:text-3xl lg:text-4xl'>
        <span className='font-extrabold'>ATRIBUTOS </span>
        DEL CONDOMINIO
      </p>
      <div className='grid grid-cols-3 gap-4'>
        {areas.map(({ icon, id, alt }) => (
          <div key={id} className='flex flex-col items-center'>
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${icon}`}
              width={200}
              height={200}
              alt={alt}
            />
            <span className='text-center text-xl  text-pri'>{alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
