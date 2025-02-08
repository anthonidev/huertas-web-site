"use client"
import React, { useState, useEffect } from 'react';
import { HeartIcon, WrenchIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import { Zoom } from 'react-awesome-reveal';
import Link from 'next/link';
import { BeachIcon, CampoIcon } from '@/components/icons/Icons';

export const Featured = () => {
  const calculateTimeLeft = () => {
    const startDate = new Date('2025-02-08T12:00:00');
    const endDate = new Date('2025-02-14T12:00:00');
    const now = new Date();
    
    if (now < startDate) {
      const difference = endDate.getTime() - startDate.getTime();
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    
    if (now > endDate) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    
    const difference = endDate.getTime() - now.getTime();
    
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
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
    
    className="min-h-screen flex flex-col justify-center bg-gradient-to-b from-blue-950 to-blue-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col items-center justify-center space-y-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white text-center">
            LANZAMIENTO DE UN NUEVO PROYECTO
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
            {[
              { label: 'DÍAS', value: timeLeft.days, max: 6 },
              { label: 'HORAS', value: timeLeft.hours, max: 24 },
              { label: 'MINUTOS', value: timeLeft.minutes, max: 60 },
              { label: 'SEGUNDOS', value: timeLeft.seconds, max: 60 }
            ].map((item) => (
              <div key={item.label} className="relative">
                <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-green-700 bg-blue-900 flex items-center justify-center relative">
                  <div 
                    className="absolute inset-0 rounded-full border-4 border-green-500"
                    style={{
                      clipPath: `polygon(50% 50%, -50% -50%, ${Math.min((item.value / item.max) * 100, 100)}% 0%)`,
                      transform: 'rotate(-90deg)'
                    }}
                  />
                  <span className="text-3xl md:text-4xl font-bold text-white">
                    {String(item.value).padStart(2, '0')}
                  </span>
                </div>
                <p className="mt-3 text-sm md:text-base text-gray-300 text-center font-medium tracking-wide">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
          
          <div className="w-full max-w-3xl mx-auto">
            <div className="h-10 bg-blue-900 rounded-full relative overflow-hidden border border-green-700">
              <div className="absolute inset-0 flex items-center">
                <div 
                  className="relative transition-all duration-1000 ease-out"
                  style={{ left: `${progress}%` }}
                >
                  <WrenchScrewdriverIcon
                    className="text-orange-500 w-10 h-10"
                  />
                

                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-end px-4">
                <div className="w-4 h-10 bg-green-500 rounded-sm" />
              </div>
            </div>
          </div>
          
          <Zoom className="w-full max-w-2xl">
            <Link
              href="/proyectos-inmobiliaria-huertas"
              className="group mx-auto flex items-center justify-center gap-2 rounded-full bg-white/90 px-6 py-3 text-lg font-bold tracking-tight transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-green-600 hover:to-blue-600 hover:shadow-lg md:py-3 md:text-xl"
            >
              <CampoIcon
                className="w-8 text-green-600 group-hover:text-white md:w-10"
                width={40}
              />
              <span className="text-green-600 group-hover:text-white">CAMPO</span>
              <span className="mx-1 text-gray-400 group-hover:text-white">O</span>
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