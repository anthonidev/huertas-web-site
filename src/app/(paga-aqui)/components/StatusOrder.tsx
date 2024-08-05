'use client';
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
    <div className="mt-5 rounded border p-4 shadow-md">
      <div className="mb-2">
        <span className="font-bold">Estado: </span>
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
          }`}
        >
          {STATUS[status]}
        </span>
      </div>
      {isDateValid && status === 'pending' && (
        <a
          href={link}
          className="text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pagar ahora
        </a>
      )}
      {!isDateValid && (
        <div className="text-red-500">
          La fecha de expiración ha pasado. No se puede realizar el pago.
        </div>
      )}
      {conf && <Confetti width={width} height={height} />}
    </div>
  );
};

export default StatusOrder;
