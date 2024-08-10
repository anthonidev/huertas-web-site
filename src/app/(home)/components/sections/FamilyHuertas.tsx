'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

type Props = {
  // comments: Comment[];
  // comments: any;
};

export const FamilyHuertas = ({}: Props) => {
  // const [render, setRender] = useState(false);
  // useEffect(() => {
  //   setRender(true);
  // }, [comments]);
  return (
    <main className="bg-pattern" id="familia-huertas">
      <header
        style={{ backgroundImage: 'url(/imgs/familyhuertas.webp)' }}
        className="h-[30rem] items-end bg-cover bg-center bg-no-repeat"
      >
        <div className="flex flex-row items-stretch">
          <div className="mb-20 max-w-sm basis-1/3 self-end text-xl font-extrabold uppercase text-white md:text-4xl lg:mx-auto lg:pl-5 lg:text-5xl xl:text-7xl">
            Familia Huertas
          </div>
          <div className="flex h-[30rem] basis-2/3 justify-end bg-gradient-to-r from-pri/85 to-sec-100/85">
            <div className="flex w-full items-end justify-end p-20 text-lg text-white md:text-xl lg:text-2xl xl:text-3xl">
              <p className="flex w-full justify-end border-t-4 border-white pt-2">
                Invierte con confianza en <br /> un futuro seguro
              </p>
            </div>
          </div>
        </div>
      </header>
      {/* <div className="pt-40">
        {render && (
          <AliceCarousel
            mouseTracking
            autoPlay
            autoPlayInterval={5000}
            infinite
            disableButtonsControls
            responsive={{
              0: { items: 1 },
              1024: { items: 1 },
            }}
            items={comments.map((item) => (
              <div
                className="mx-auto flex max-w-7xl flex-col space-y-5 px-5 md:flex-row md:space-y-0"
                key={item.id}
              >
                <div className="flex basis-1/2 flex-col items-center justify-center space-y-4">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full md:h-48 md:w-48">
                    <Image
                      src={item.photo}
                      alt={'gallery'}
                      width={200}
                      height={200}
                      className="object-cover"
                    />
                  </div>

                  <span className="text-3xl font-bold text-pri">{item.name}</span>
                  <span className="bg-pri p-2 text-xl font-light text-white">
                    {item.occupation}
                  </span>
                </div>
                <div className="relative flex basis-1/2 justify-center">
                  <Image
                    src="/imgs/burbuja.png"
                    width={600}
                    height={500}
                    alt="comentarios huertas inmobiliaria"
                  />

                  <div className="absolute left-0 top-1 space-y-4 px-16 py-7 md:top-1/4">
                    <p className="w-full p-4 text-justify text-xs font-light sm:text-lg md:text-lg">
                      {item.comment}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          />
        )}
      </div> */}
    </main>
  );
};
