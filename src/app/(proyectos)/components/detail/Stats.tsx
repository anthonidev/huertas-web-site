'use client';
import Image from 'next/image';
import React from 'react';
import { Fade } from 'react-awesome-reveal';

type Props = {
  areas: Area[];
  primary_color: string;
};

const Stats = ({ areas, primary_color }: Props) => {
  return (
    <div className="py-20">
      <p className="mb-20 text-center text-2xl md:text-3xl" style={{ color: primary_color }}>
        <span className="font-extrabold">ATRIBUTOS </span>
        DEL CONDOMINIO
      </p>
      <Fade direction="up" triggerOnce cascade>
        <ul className="grid grid-cols-3 gap-4">
          {areas.map(({ icon, id, alt }) => (
            <li key={id} className="flex flex-col items-center space-y-5">
              <Image src={icon} width={80} height={80} alt={alt} />
              <span className="text-center text-base font-light text-pri lg:text-xl">{alt}</span>
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  );
};

export default Stats;
