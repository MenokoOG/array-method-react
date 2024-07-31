import React from 'react';
import Modal from 'react-modal';
import Draggable from 'react-draggable';

Modal.setAppElement('#root');

const ModalComponent = ({ isOpen, onRequestClose, content }) => {
  const nodeRef = React.useRef(null);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Method Explanation Modal"
      className="bg-transparent flex justify-center items-center"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <Draggable nodeRef={nodeRef}>
        <div ref={nodeRef} className="bg-black bg-opacity-75 text-yellow-400 p-10 rounded-full flex flex-col items-center justify-center max-w-md text-center cursor-move">
          <h2 className="text-2xl font-bold mb-4">{content.title}</h2>
          <pre className="bg-gray-800 p-4 rounded text-white text-left w-full mb-4">
            <code>{content.methodCode}</code>
          </pre>
          <p>{content.explanation}</p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold">New Arrays:</h3>
            {content.newFruits && <p><strong>Fruits:</strong> {content.newFruits.join(', ')}</p>}
            {content.newVegetables && <p><strong>Vegetables:</strong> {content.newVegetables.join(', ')}</p>}
            {content.newFood && <p><strong>Food:</strong> {content.newFood.join(', ')}</p>}
          </div>
          <button
            onClick={onRequestClose}
            className="mt-4 bg-yellow-400 text-black py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Close
          </button>
        </div>
      </Draggable>
    </Modal>
  );
};

export default ModalComponent;
