import React from 'react';
import {
  ImageGalleryItemStyled,
  ImageGalleryItemImg,
} from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ imageUrl, alt, id, onClick }) => {
  //   console.log(imageUrl);
  return (
    <ImageGalleryItemStyled
      onClick={() => {
        onClick(id);
      }}
    >
      <ImageGalleryItemImg src={imageUrl} alt={alt} />
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  imageUrl: PropTypes.string,
  alt: PropTypes.string,
  onClick: PropTypes.func,
};
