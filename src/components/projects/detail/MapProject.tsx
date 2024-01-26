import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  photo_map: string;
  title: string;
  km: string;
  location: string;
  lat: string;
  lng: string;
};

const MapProject = ({ km, location, photo_map, title, lng, lat }: Props) => {
  return (
    <div className='flex flex-col items-center justify-center py-20 text-center'>
      <div className=''>
        <p className='text-2xl  text-pri'>
          <span className='font-bold'>¿Cómo llegar </span>a Condominio {title}?
        </p>
        <p className='mt-5 text-xl'>
          {km}, {location}
        </p>
      </div>
      <div className=''>
        <Image
          src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${photo_map}`}
          width={800}
          height={800}
          alt={title}
        />
      </div>
      <div className='mt-5 flex items-center justify-center space-x-5 text-xl'>
        <Link
          href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
          target='_blank'
          rel='noopener noreferrer'
          className='button2 bg-pri'
        >
          <svg
            className=' svgIcon '
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='M502.2 201.7C516.7 287.5 471.2 369.6 389 409.8c13 34.1-12.4 70.2-48.3 70.2a51.7 51.7 0 0 1 -51.6-49c-6.4 .2-64.2 0-76.3-.6A51.7 51.7 0 0 1 159 479.9c-33.9-1.4-58-34.8-47-67.9-37.2-13.1-72.5-34.9-99.6-70.8-13-17.3-.5-41.8 20.8-41.8 46.3 0 32.2-54.2 43.2-110.3C94.8 95.2 193.1 32 288.1 32c102.5 0 197.2 70.7 214.1 169.7zM373.5 388.3c42-19.2 81.3-56.7 96.3-102.1 40.5-123.1-64.2-228-181.7-228-83.5 0-170.3 55.4-186.1 136-9.5 48.9 5 131.4-68.8 131.4C58.2 358.6 91.6 378.1 127 389.5c24.7-21.8 63.9-15.5 79.8 14.3 14.2 1 79.2 1.2 87.9 .8a51.7 51.7 0 0 1 78.8-16.4zM205.1 187.1c0-34.7 50.8-34.8 50.8 0s-50.8 34.7-50.8 0zm116.6 0c0-34.7 50.9-34.8 50.9 0s-50.9 34.8-50.9 0zm-122.6 70.7c-3.4-16.9 22.2-22.2 25.6-5.2l.1 .3c4.1 21.4 29.9 44 64.1 43.1 35.7-.9 59.3-22.2 64.1-42.8 4.5-16.1 28.6-10.4 25.5 6-5.2 22.2-31.2 62-91.5 62.9-42.6 0-80.9-27.8-87.9-64.3z' />
          </svg>
        </Link>
        <Link
          href={`https://www.waze.com/ul?ll=${lat}%2C${lng}&navigate=yes&zoom=17`}
          target='_blank'
          rel='noopener noreferrer'
          className='button3 bg-pri'
        >
          <svg
            className='svgIcon2'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
          >
            <path d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z' />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default MapProject;
