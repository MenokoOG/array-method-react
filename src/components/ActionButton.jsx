import React from 'react';

const ActionButton = ({ onClick, method }) => {
  return (
    <button
      onClick={() => onClick(method)}
      className="bg-white text-black font-bold py-2 px-4 rounded-full hover:bg-gray-300 transition duration-300 mb-2"
    >
      {method}
    </button>
  );
};

export default ActionButton;
