'use client';

import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

// eslint-disable-next-line react/display-name
const TextArea = React.forwardRef<HTMLTextAreaElement, InputProps>(
  (props, ref) => {
    return (
      <div>
        <div className='relative z-0 rounded-lg bg-white p-2'>
          <textarea
            placeholder=' '
            ref={ref}
            maxLength={props.maxLength}
            rows={5}
            {...props}
            className={`input_form peer resize-none  ${
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
      </div>
    );
  }
);

export default TextArea;
