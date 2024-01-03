import Image from 'next/image';
import React from 'react';

type Props = {
  areas: Area[];
};

const Stats = ({ areas }: Props) => {
  return (
    <div>
      <p>ATRIBUTOS DEL CONDOMINIO</p>
      <div className='grid grid-cols-3 gap-4'>
        {areas.map(({ icon, id, alt }) => (
          <div key={id} className='flex flex-col items-center'>
            <Image
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${icon}`}
              width={200}
              height={200}
              alt={alt}
            />
            <span>{alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;
