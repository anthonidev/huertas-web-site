import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

// eslint-disable-next-line react/display-name
const Input2 = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <>
      <div className='relative z-0 border px-1  xl:p-2 '>
        <input
          ref={ref}
          maxLength={props.maxLength}
          {...props}
          placeholder=' '
          className={`input_form2 peer  ${
            props['aria-errormessage'] ? '' : ''
          } `}
        />

        <label className='label_form2 text-sm'>{props.title}</label>
      </div>
      {props['aria-errormessage'] && (
        <span className='text-xs text-red-200'>
          {props['aria-errormessage']}
        </span>
      )}
    </>
  );
});

export default Input2;
