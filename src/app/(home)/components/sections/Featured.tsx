'use client';
import React, { useState, useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import { BeachIcon, CampoIcon, WorkerIcon } from '@/components/icons/Icons';

export const Featured = () => {
  const calculateTimeLeft = () => {
    const startDate = new Date('2025-03-10T10:00:00');
    const endDate = new Date('2025-03-15T11:00:00');

    const now = new Date();

    if (now < startDate) {
      const difference = endDate.getTime() - startDate.getTime();
      return {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    if (now > endDate) return { hours: 0, minutes: 0, seconds: 0 };

    const difference = endDate.getTime() - now.getTime();

    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      const startDate = new Date('2025-03-10T10:00:00').getTime();
      const endDate = new Date('2025-03-15T11:00:00').getTime();
      const now = new Date().getTime();
      const totalDuration = endDate - startDate;
      const elapsed = now - startDate;
      const newProgress = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 100);
      setProgress(newProgress);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header
      id="featured"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: `
         
          url(/imgs/fondo.jpg)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Decorative wave overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 md:h-48"
        style={{
          background: 'url("/waves.svg") repeat-x bottom',
          opacity: '0.1',
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-16">
          <div className="space-y-4 text-center">
            <h2 className="text-lg font-medium tracking-wider text-blue-200 md:text-xl">
              PRÓXIMAMENTE
            </h2>
            <h1 className="text-center text-3xl font-bold leading-tight text-white md:text-5xl">
              <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                NUEVO PROYECTO EN PROCESO
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-6 rounded-2xl border border-white/10 bg-white/5 px-10 py-7 backdrop-blur-sm md:gap-12">
            {[
              { label: 'HORAS', value: timeLeft.hours, max: 144 },
              { label: 'MINUTOS', value: timeLeft.minutes, max: 60 },
              { label: 'SEGUNDOS', value: timeLeft.seconds, max: 60 },
            ].map((item) => (
              <div key={item.label} className="relative">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-4 border-blue-300/20 bg-white/10 backdrop-blur-sm md:h-28 md:w-28">
                  <div
                    className="absolute inset-0 rounded-full border-4 border-blue-400"
                    style={{
                      clipPath: `polygon(50% 50%, -50% -50%, ${Math.min(
                        (item.value / item.max) * 100,
                        100,
                      )}% 0%)`,
                      transform: 'rotate(-90deg)',
                    }}
                  />
                  <span className="text-4xl font-bold text-white md:text-5xl">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-4 text-center text-sm font-medium tracking-wider text-blue-200 md:text-lg">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto w-full max-w-3xl px-4">
            <div className="relative h-8 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center">
                <div
                  className="relative transition-all duration-1000 ease-out"
                  style={{ left: `${progress}%` }}
                >
                  <WorkerIcon className="h-10 w-10 animate-bounce drop-shadow-lg md:h-14 md:w-14" />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-end px-4">
                <div className="h-8 w-2 rounded-sm bg-gradient-to-r from-blue-400 to-green-400" />
              </div>
            </div>
          </div>

          <h1 className="text-center text-2xl font-bold leading-tight text-white md:text-4xl">
            MUY PRONTO
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Featured;
