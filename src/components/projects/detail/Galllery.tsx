'use client';
import {
  ImagePreviewIcon,
  ObrasIcon,
  WorkingIcon,
} from '@/components/icons/Icons';
import { Dialog, Transition } from '@headlessui/react';
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
type Props = {
  gallery: Gallery[];
  secondary_color: string;
  primary_color: string;
};

const Galllery = ({ gallery, primary_color, secondary_color }: Props) => {
  const [open, setOpen] = useState(false);
  const [render, setRender] = useState(false);

  const [currentImage, setCurrentImage] = useState<Gallery>();

  const handleOpen = (id: number) => {
    setCurrentImage(gallery.find((item) => item.id === id));
    setOpen(true);
  };

  useEffect(() => {
    setRender(true);
  }, [gallery]);

  const nextCurrentImage = () => {
    const index = gallery.findIndex((item) => item.id === currentImage?.id);
    if (index === gallery.length - 1) {
      setCurrentImage(gallery[0]);
    } else {
      setCurrentImage(gallery[index + 1]);
    }
  };

  const prevCurrentImage = () => {
    const index = gallery.findIndex((item) => item.id === currentImage?.id);
    if (index === 0) {
      setCurrentImage(gallery[gallery.length - 1]);
    } else {
      setCurrentImage(gallery[index - 1]);
    }
  };

  return (
    <div className='mx-auto max-w-7xl  py-10 '>
      <div className=' flex flex-col  items-end p-4 text-4xl font-extrabold '>
        <p className='flex items-center space-x-2'>
          <WorkingIcon
            className='h-20 w-20'
            style={{ color: secondary_color }}
          />
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
      <div className='mx-5 flex flex-col justify-end space-y-20 lg:flex-row '>
        <ObrasIcon
          className='absolute left-0 z-20 hidden h-96 w-96 lg:block'
          style={{ color: secondary_color }}
        />
        {render && (
          <AliceCarousel
            mouseTracking
            autoPlay
            autoPlayInterval={3000}
            infinite
            disableDotsControls
            responsive={{
              0: { items: 1 },
              1024: { items: 2 },
            }}
            items={gallery.map((item) => (
              <div className='relative flex justify-end' key={item.id}>
                <button
                  onClick={() => handleOpen(item.id)}
                  className='absolute  right-4 top-4 '
                >
                  <ImagePreviewIcon className='h-14 w-14 text-white' />
                </button>
                <Image
                  src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${item.image}`}
                  alt={'gallery'}
                  width={500}
                  height={500}
                />
              </div>
            ))}
          />
        )}
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='relative z-50' onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <Dialog.Panel className='relative flex w-full max-w-5xl transform justify-center overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8'>
                  {currentImage && (
                    <div className='flex items-center '>
                      <button onClick={prevCurrentImage}>
                        <ArrowLeftCircleIcon className='h-10 w-10 text-pri' />
                      </button>
                      <Image
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}${currentImage.image}`}
                        alt={'gallery'}
                        width={800}
                        height={800}
                      />

                      <button onClick={nextCurrentImage}>
                        <ArrowRightCircleIcon className='h-10 w-10 text-pri' />
                      </button>
                    </div>
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
};

export default Galllery;
