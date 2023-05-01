import React from "react";

const Button = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-secondary text-gray-800 shadow-xl hover:shadow-lg active:shadow-sm transition-all px-4 py-3 font-semibold tracking-wide text-xl rounded mx-auto block mt-8 w-full"
    >
      {children}
    </button>
  );
};

export default Button;
