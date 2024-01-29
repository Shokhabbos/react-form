import React from "react";
import ReactModal from "react-modal";

const Modal = ({ isOpen, backTo, close }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={backTo}
      className="modal absolute left-1/2 top-1/2 flex h-1/3  w-1/3 -translate-x-1/2 -translate-y-1/2 transform flex-col justify-between rounded-md bg-white p-6 shadow-lg"
      overlayClassName="overlay fixed inset-0 bg-blue-50  opacity-80"
    >
      <h2 className="mb-4 text-center text-2xl font-bold">Congratulations!</h2>
      <p className="text-center">Your data has been saved successfully.</p>
      <div className="flex">
        <button
          onClick={backTo}
          className="mx-auto mt-4 block w-1/3  rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
        >
          Back
        </button>
        <button
          onClick={close}
          className="mx-auto mt-4 block w-1/3  rounded-md bg-purple-500 px-4 py-2 text-white hover:bg-purple-600 focus:outline-none focus:ring focus:ring-purple-200"
        >
          Close
        </button>
      </div>
    </ReactModal>
  );
};

export default Modal;
