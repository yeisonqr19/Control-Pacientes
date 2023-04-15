import React from 'react';

export const Error = ({ mensaje }) => {
  return (
    <div>
      <p className="bg-red-800 text-white font-bold uppercase p-3 text-center rounded-md mb-5">
        {mensaje}
      </p>
    </div>
  );
};
