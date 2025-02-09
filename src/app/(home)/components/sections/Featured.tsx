"use client"
import React, { useState, useEffect } from 'react';
import { Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import { BeachIcon, CampoIcon, WorkerIcon } from '@/components/icons/Icons';

export const Featured = () => {
  const calculateTimeLeft = () => {
    const startDate = new Date('2025-02-08T12:00:00');
    const endDate = new Date('2025-02-14T12:00:00');
    const now = new Date();
    
    if (now < startDate) {
      const difference = endDate.getTime() - startDate.getTime();
      return {
        hours: Math.floor(difference / (1000 * 60 * 60)),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    if (now > endDate) return { hours: 0, minutes: 0, seconds: 0 };
    
    const difference = endDate.getTime() - now.getTime();
    
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
      
      const startDate = new Date('2025-02-08T12:00:00').getTime();
      const endDate = new Date('2025-02-14T12:00:00').getTime();
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
      className="min-h-screen flex flex-col justify-center relative overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, 
            rgba(66, 47, 154, 0.95), 
            rgba(66, 47, 154, 0.85)
          ),
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
          opacity: '0.1'
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col items-center justify-center space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-lg md:text-xl font-medium text-blue-200 tracking-wider">
              PRÓXIMAMENTE
            </h2> 
            <h1 className="text-3xl md:text-5xl  font-bold text-white text-center leading-tight">
              LANZAMIENTO DE UN <br/>
              <span className="bg-gradient-to-r from-blue-400 to-green-400 text-transparent bg-clip-text">
                NUEVO PROYECTO
              </span>
            </h1>
          </div>
          
          <div className="grid grid-cols-3 gap-6 md:gap-12 backdrop-blur-sm bg-white/5 p-6 rounded-2xl border border-white/10">
            {[
              { label: 'HORAS', value: timeLeft.hours, max: 144 },
              { label: 'MINUTOS', value: timeLeft.minutes, max: 60 },
              { label: 'SEGUNDOS', value: timeLeft.seconds, max: 60 }
            ].map((item) => (
              <div key={item.label} className="relative">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-blue-300/20 bg-white/10 flex items-center justify-center relative backdrop-blur-sm">
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-blue-400"
                    style={{
                      clipPath: `polygon(50% 50%, -50% -50%, ${Math.min((item.value / item.max) * 100, 100)}% 0%)`,
                      transform: 'rotate(-90deg)'
                    }}
                  />
                  <span className="text-3xl md:text-4xl font-bold text-purple-700">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-4 text-sm md:text-base text-blue-200 text-center font-medium tracking-wider">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          
          <div className="w-full max-w-3xl mx-auto px-4">
            <div className="h-8 bg-white/10 backdrop-blur-sm rounded-full relative  border border-white/20">
              <div className="absolute inset-0 flex items-center">
                <div 
                  className="relative transition-all duration-1000 ease-out"
                  style={{ left: `${progress}%` }}
                >
                  <WorkerIcon
                    className="w-8 h-8 drop-shadow-lg animate-bounce"
                  />
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-end px-4">
                <div className="w-2 h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-sm" />
              </div>
            </div>
          </div>
          
          <Zoom className="w-full max-w-2xl">
            <Link
              href="/proyectos-inmobiliaria-huertas"
              className="group mx-auto flex items-center justify-center gap-3 rounded-full bg-white/90 px-8 py-4 text-lg font-bold tracking-tight transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 hover:shadow-lg md:text-xl backdrop-blur-sm"
            >
              <CampoIcon
                className="w-8 text-green-600 group-hover:text-white md:w-10"
                width={40}
              />
              <span className="text-green-600 group-hover:text-white">CAMPO</span>
              <span className="mx-2 text-gray-400 group-hover:text-white">O</span>
              <span className="text-blue-600 group-hover:text-white">PLAYA</span>
              <BeachIcon
                className="w-8 text-blue-600 group-hover:text-white md:w-10"
                width={40}
              />
            </Link>
          </Zoom>
        </div>
      </div>
    </header>
  );
};

export default Featured;