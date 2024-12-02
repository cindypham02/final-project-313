import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="modal-content bg-white p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="modal-close text-xl font-bold text-red-500">
          Close
        </button>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default Modal;

