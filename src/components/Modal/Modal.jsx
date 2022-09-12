import React, { useEffect } from 'react';
import { ModalStyled, ModalOverlay } from './Modal.styled';
import { createPortal } from 'react-dom';

export function Modal({ chosenImg: { largeImageURL, tags }, onModalClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  });

  function handleKeydown(e) {
    if (e.code === 'Escape') {
      onModalClose();
    }
  }

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      onModalClose();
    }
  }

  return createPortal(
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalStyled>
        <img src={largeImageURL} alt={tags} />
      </ModalStyled>
    </ModalOverlay>,
    document.getElementById('modal-root')
  );
}
