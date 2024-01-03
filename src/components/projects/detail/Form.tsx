import React from 'react';

type Props = {};

const Form = (props: Props) => {
  return (
    <form className='rounded-2xl bg-sky-200 p-10'>
      <p>Quiero que me contacten para mayor información</p>
      <p>
        Déjanos tus datos y un asesor se contactará contigo lo antes posible
      </p>
      <div className='grid grid-cols-2 gap-4'>
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <input type='text' />
        <textarea
          className='col-span-2'
          name=''
          id=''
          cols={30}
          rows={10}
        ></textarea>
        <button className='col-span-2'>Enviar</button>
        <span className='col-span-2'>
          Al enviar este formulario, aceptas que los datos que nos proporcionas
          se utilicen para responder a tu consulta.
        </span>
      </div>
    </form>
  );
};

export default Form;
