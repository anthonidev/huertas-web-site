import Image from 'next/image';
import React from 'react';

type Props = {
  photo_map: string;
  title: string;
  km: string;
  location: string;
};

const MapProject = ({ km, location, photo_map, title }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center py-20 lg:flex-row'>
      <div className='basis-1/2'>
        <p className='text-2xl  text-pri'>
          <span className='font-bold'>¿Cómo llegar </span>a Condominio {title}?
        </p>
        <p className='mt-5 text-xl'>
          {km}, {location}
        </p>
      </div>
      <div className='basis-1/2'>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo_map}`}
          width={800}
          height={800}
          alt={title}
        />
      </div>
    </div>
  );
};

export default MapProject;
