import React from 'react';
import { LoadMoreStyled } from './LoadMore.styled';
import PropTypes from 'prop-types';

export const LoadMore = ({ onClick }) => {
  return (
    <LoadMoreStyled type="button" onClick={onClick}>
      Load more
    </LoadMoreStyled>
  );
};

LoadMore.propTypes = {
  onClick: PropTypes.func,
};
