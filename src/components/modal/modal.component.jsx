import { useRef, useEffect } from "react";

import Upload from "../upload/upload.component";

import { ModalWrapper, ModalContent, Subtitle, Title, CloseButton } from "./modal.styles";
import { ICON_BUTTON_TYPE_CLASSES } from "../buttons/iconButton/iconButton.component";
import SpriteIcon from "../icon/icon.component";

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
				<Title>Upload a .jpg or .png Cat's Image</Title>
				<Subtitle>Any uploads must comply with the 
					<a href="https://thecatapi.com/privacy"> upload guidelines </a>
					or face deletion.
				</Subtitle>
				<Upload />
					<CloseButton
						buttonType={ICON_BUTTON_TYPE_CLASSES.reactionhistory}
						onClick={onClose}
					>
						<SpriteIcon icon="close"/>
					</CloseButton>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;