'use client';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

export const Featured = () => {
  return (
    <main
      className="opa min-h-screen bg-white bg-opacity-50 bg-pattern bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: 'url(/imgs/bannerProject.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(255,255,255,0.7)',
        //brillo maximo
      }}
      id="featured-project"
    >
      <header className="flex min-h-screen w-full flex-col items-center justify-between lg:flex-row">
        <Fade
          direction="left"
          triggerOnce
          className="mt-10 flex items-center justify-center lg:top-0 lg:w-1/2"
        >
          <div className="relative flex">
            <Image
              src="/imgs/altoke.png"
              className="absolute left-10 top-0 z-10 -rotate-12"
              width={250}
              height={250}
              alt="consigue tu lote altoke en inmobiliaria huertas"
            />

            <Image
              src="/imgs/foto-familia.png"
              width={1200}
              height={1200}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              alt="logo"
            />
          </div>
        </Fade>

        <Fade direction="right" triggerOnce className="z-0 flex items-end justify-end lg:w-1/2">
          <div className="flex flex-col items-center justify-center rounded-t-[45px] bg-sec/90 p-20 text-center lg:rounded-bl-[45px] lg:rounded-tr-none">
            <h1 className="text-3xl font-extrabold uppercase tracking-tighter text-white md:text-4xl">
              TU LOTE IDEAL <br />
              <span className="font-light">¡TE ESPERA!</span>
            </h1>
            <p className="mt-4 flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-bold tracking-tighter text-pri shadow-2xl shadow-black sm:py-3 md:py-4 2xl:py-6">
              ELIGE EL PROYECTO PARA TI
            </p>
          </div>
        </Fade>
      </header>
    </main>
  );
};
