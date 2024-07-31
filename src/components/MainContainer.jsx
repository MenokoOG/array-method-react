import React from 'react';

const MainContainer = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-opacity-75 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-center">
      {children}
    </div>
  );
};

export default MainContainer;
