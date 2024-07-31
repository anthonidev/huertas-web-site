import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// eslint-disable-next-line react/display-name
const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <div className='relative z-0 rounded-lg bg-white p-2 '>
        <input
          ref={ref}
          maxLength={props.maxLength}
          {...props}
          placeholder=' '
          className={`input_form peer  ${
            props['aria-errormessage'] ? '' : ''
          } `}
        />

        <label className='label_form'>{props.title}</label>
      </div>
      {props['aria-errormessage'] && (
        <span className='text-xs text-red-500'>
          {props['aria-errormessage']}
        </span>
      )}
    </>
  );
});

export default Input;
