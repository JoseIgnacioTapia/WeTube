import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal }) => {
  const handleModalContainerClick = e => e.stopPropagation();

  return (
    <article className={`modal ${isOpen && 'is-open'}`} onClick={closeModal}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button className="modal-close bg-indigo-600" onClick={closeModal}>
          X
        </button>
        <p>Esto es un modal</p>
      </div>
    </article>
  );
};

export default Modal;
