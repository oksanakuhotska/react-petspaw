import { ModalWrapper, ModalContent } from "./modal.styles";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalWrapper>
      <ModalContent>
        <h1>MODAL</h1>
        <button onClick={onClose}>Close</button>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;