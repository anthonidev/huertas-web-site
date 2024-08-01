import React from 'react';

const LoadingPage = () => {
  return (
    <div className='fixed left-0 right-0 z-[99] flex min-h-screen flex-col items-center justify-center bg-gray-100'>
      <div className='container '>
        <div className='loader'></div>
        <div className='loader'></div>
        <div className='loader'></div>
      </div>
      <p className='mt-60 text-center text-2xl font-bold text-gray-700'>
        <strong>Cargando...</strong>
      </p>
    </div>
  );
};

export default LoadingPage;
