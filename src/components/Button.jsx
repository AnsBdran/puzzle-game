import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className='bg-neutral-950 hover:bg-neutral-900 text-sky-100 shadow-xl hover:shadow-lg active:shadow-sm transition-all px-8 py-3 font-semibold tracking-wide lg:text-xl rounded mx-auto block w-full'
    >
      {children}
    </button>
  );
};

export default Button;
