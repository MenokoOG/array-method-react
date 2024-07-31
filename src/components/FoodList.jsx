import React from 'react';

const FoodList = ({ food }) => {
  return (
    <div className="mt-4">
      <h2 className="text-2xl font-semibold text-white">Food Array</h2>
      <ul>
        {food.map((item, index) => (
          <li key={index} className="text-white transition-all duration-500">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FoodList;
