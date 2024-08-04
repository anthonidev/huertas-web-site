'use client';
import { BuildPlanIcon } from '@/components/icons/Icons';
import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {};

export const KnowProject = (props: Props) => {
  return (
    <div className="mx-auto flex max-w-7xl flex-col justify-center px-10 py-32 md:flex-row md:space-x-20">
      <Fade direction="left" triggerOnce>
        <div className="flex flex-col items-center justify-center">
          <BuildPlanIcon className="h-16 w-16 text-pri" />
          <h2 className="py-4 text-center text-4xl font-extrabold uppercase text-pri md:text-6xl">
            Conoce <br /> nuestros <br />
            <span className="text-sec">proyectos</span>
          </h2>
          <span className="w-full rounded-b-[45px] bg-sec py-3 text-center text-2xl font-light text-white md:py-7 md:text-4xl">
            ¿Como iniciamos?
          </span>
        </div>
      </Fade>
      <Fade direction="right" triggerOnce>
        <Image src="/imgs/build2.png" width={400} height={400} alt=" Conoce nuestros proyectos" />
      </Fade>
    </div>
  );
};
