import React from 'react';
import { ImageGalleryItem } from 'components/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onClick }) => {
  return (
    <ImageGalleryStyled>
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          imageUrl={image.webformatURL}
          alt={image.tags}
          id={image.id}
          onClick={onClick}
        ></ImageGalleryItem>
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array,
  onClick: PropTypes.func,
};
