import { useRef, useEffect } from "react";

import { ModalWrapper, ModalContent } from "./modal.styles";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <ModalWrapper>
      <ModalContent ref={modalRef}>
				<h1>MODAL</h1>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;