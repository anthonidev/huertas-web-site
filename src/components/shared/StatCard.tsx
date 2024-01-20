import React, { SVGProps } from 'react';

type Props = {
  stat: {
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
    title: string;
    description: string;
  };
  par: boolean;
};

import clsx from 'clsx';
const StatCard = ({ par, stat: { description, icon: Icon, title } }: Props) => {
  return (
    <li>
      <div className={clsx('rounded-lg py-5', !par ? 'bg-sec' : 'bg-pri')}>
        <Icon className='mx-auto h-32 w-32 text-white' />
        <h3 className='text-center text-3xl font-extrabold text-white'>
          {title}
        </h3>
      </div>
      <p className='  p-2 text-center font-light  '>{description}</p>
    </li>
  );
};

export default StatCard;
