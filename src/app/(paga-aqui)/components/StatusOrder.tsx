'use client';
import { CreditCardIcon } from '@heroicons/react/24/outline';
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { useEffect, useState } from 'react';
import Confetti from 'react-confetti';

dayjs.extend(utc);
dayjs.extend(timezone);
type Props = {
  status: 'pending' | 'approved' | 'rejected' | 'cancelled' | 'abandoned';
  date_expiration: string;
  link: string;
};

const StatusOrder = ({ status, link, date_expiration }: Props) => {
  const STATUS: { [key: string]: string } = {
    pending: 'Pendiente',
    approved: 'Aprobado',
    rejected: 'Rechazado',
    cancelled: 'Cancelado',
    abandoned: 'Abandonado',
  };
  const isDateValid = dayjs().isBefore(dayjs(date_expiration));
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [conf, setConf] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
    if (status === 'approved') {
      setConf(true);
      setTimeout(() => {
        setConf(false);
      }, 5000);
    }
  }, [status]);

  return (
    <div className="my-5 rounded-lg border p-6 shadow-lg bg-white">
      <div className="mb-2 flex justify-center flex-col items-center">
      
        <div className="flex justify-center items-center space-x-1">
        <CreditCardIcon className="h-5 w-5  inline-block" />
        <span className="font-bold">
          Estado: </span>
          </div>
        <span
          className={`${
            status === 'pending'
              ? 'text-yellow-500'
              : status === 'approved'
              ? 'text-green-500'
              : status === 'rejected'
              ? 'text-red-500'
              : status === 'cancelled'
              ? 'text-gray-500'
              : 'text-orange-500'
          } font-bold text-xl`}
        >
          {STATUS[status]}
        </span>
      </div>
      <div className="mb-2 flex justify-center flex-col items-center">
      {isDateValid && status === 'pending' && (
        <a
          href={link}
          className="text-blue-600 underline hover:text-blue-800"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pagar ahora
        </a>
      )}
      
      {!isDateValid && (
        <div className="text-red-600">
          La fecha de expiración ha pasado. No se puede realizar el pago.
        </div>
      )}
      {conf && <Confetti width={width} height={height} />}
     
    </div>
    </div>
  );
};

export default StatusOrder;