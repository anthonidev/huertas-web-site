'use client';
import { ObrasIcon } from '@/components/icons/Icons';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useEffect } from 'react';

type Props = {
  gallery: Gallery[];
  secondary_color: string;
  primary_color: string;
};

const Galllery = ({ gallery, primary_color, secondary_color }: Props) => {
  const [viewImages, setViewImages] = React.useState<Gallery[]>([]);
  useEffect(() => {
    setViewImages(gallery.slice(0, 3));
  }, [gallery]);

  const changeImages = () => {
    const lastImage = viewImages[viewImages.length - 1];
    const index = gallery.findIndex((item) => item.id === lastImage.id);
    const newImages = gallery.slice(index + 1, index + 4);
    if (newImages.length === 0) {
      setViewImages(gallery.slice(0, 3));
    } else {
      setViewImages(newImages);
    }
  };

  return (
    <div className='mx-auto max-w-7xl  py-10 '>
      <div className='relative flex flex-col justify-end lg:flex-row '>
        <ObrasIcon
          className='absolute left-0 hidden h-96 w-96 lg:block'
          style={{ color: secondary_color }}
        />
        <div className='right-0 top-2 flex flex-col  items-end p-4 text-4xl font-extrabold lg:absolute'>
          <p className='flex items-center space-x-2'>
            <ObrasIcon className='h-10 w-10' />
            <span style={{ color: secondary_color }}>AVANCE </span>
            <span
              style={{
                color: primary_color,
                borderBottom: '2px solid ' + secondary_color,
                marginLeft: '0.5rem',
              }}
            >
              DE OBRAS
            </span>
          </p>
          <span
            style={{
              color: primary_color,
            }}
            className='text-base font-light'
          >
            Galeria de fotos
          </span>
        </div>
        <div
          className=' flex 
         space-x-3 overflow-x-auto overflow-y-hidden py-20 
        '
        >
          {viewImages.map((item, index) => (
            <Image
              key={index}
              src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.image}`}
              alt={'gallery'}
              width={300}
              height={300}
            />
          ))}
          {gallery.length > 3 && (
            <button onClick={changeImages}>
              <ArrowRightCircleIcon className='h-10 w-10' />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Galllery;
