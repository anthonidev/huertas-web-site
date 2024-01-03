import React from 'react';

type Props = {
  left: JSX.Element;
  right: JSX.Element;
};

const TwoColums = ({ left, right }: Props) => {
  return (
    <div className=' w-full  bg-pattern bg-cover bg-center bg-no-repeat'>
      <div className='mx-auto flex h-full max-w-7xl space-x-10 px-5'>
        <div className='basis-1/2'>{left}</div>
        <div className=' sticky top-28 h-full basis-1/2'>{right}</div>
      </div>
    </div>
  );
};

export default TwoColums;
