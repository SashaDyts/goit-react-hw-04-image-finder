import React, { Component } from 'react';
import { ModalStyled, ModalOverlay } from './Modal.styled';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onModalClose();
    }
  };

  handleOverlayClick = e => {
    if (e.target === e.currentTarget) {
      this.props.onModalClose();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.chosenImg;
    return createPortal(
      <ModalOverlay onClick={this.handleOverlayClick}>
        <ModalStyled>
          <img src={largeImageURL} alt={tags} />
        </ModalStyled>
      </ModalOverlay>,
      document.getElementById('modal-root')
    );
  }
}
