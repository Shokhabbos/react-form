// Modal.js
import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, onClose }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-md bg-white p-6 shadow-lg"
      overlayClassName="overlay fixed inset-0 bg-blue-200"
    >
      <h2 className="mb-4 text-2xl font-bold">Congratulations!</h2>
      <p>Your data has been saved successfully.</p>
      <button
        onClick={onClose}
        className="mt-4 rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
      >
        Close
      </button>
    </ReactModal>
  );
};

export default Modal;
