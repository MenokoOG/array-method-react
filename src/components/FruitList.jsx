import React, { useRef } from 'react';
import Draggable from 'react-draggable';

const FruitList = ({ fruits }) => {
  const nodeRef = useRef(null);
  return (
    <Draggable nodeRef={nodeRef}>
      <div ref={nodeRef} className="bg-yellow-300 bg-opacity-75 p-4 rounded shadow-md cursor-move">
        <h2 className="text-2xl font-semibold">Fruits</h2>
        <ul>
          {fruits.map((item, index) => (
            <li key={index} className="transition-all duration-500">{item}</li>
          ))}
        </ul>
      </div>
    </Draggable>
  );
};

export default FruitList;
