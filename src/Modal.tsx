import React from "react";

type ModalProps = {
  isOpen: boolean;
  children: React.ReactNode;
  onClose: () => void;
};

const Modal = ({ isOpen, children, onClose }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded shadow-md">
        {children}
        <button
          onClick={onClose}
          className="bg-red-500 text-white p-2 rounded mt-4"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
