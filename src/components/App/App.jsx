import React, { useState, useEffect } from 'react';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery';
import { LoadMore } from '../LoadMore/LoadMore';
import { InfinitySpin } from 'react-loader-spinner';
import { Modal } from 'components/Modal/Modal';
import { getImages } from 'services/api';
import { AppStyled } from './App.styled';

export function App() {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [chosenImg, setChosenImg] = useState(null);

  useEffect(() => {
    if (query === '') {
      return;
    }
    const fetchData = async () => {
      const data = await getImages(query, page);
      setImages(data.hits);
      setIsLoading(false);
    };
    fetchData();

    setIsLoading(true);
  }, [query]);

  function onSubmit(search) {
    setQuery(search);
    setPage(1);
    setImages([]);
  }

  function loadMore() {
    setPage(page => {
      return page + 1;
    });

    setImages([]);
  }

  function getImgId(id) {
    const chosenImg = images.find(image => image.id === id);

    setChosenImg(chosenImg);
    console.log(chosenImg);
    toggleModal();
  }

  function toggleModal() {
    setShowModal(prev => {
      return !prev;
    });
  }

  return (
    <AppStyled>
      <Searchbar onSubmit={onSubmit} />
      {isLoading ? (
        <InfinitySpin />
      ) : (
        <ImageGallery images={images} onClick={getImgId} />
      )}

      {images.length > 0 && <LoadMore onClick={loadMore} />}
      {showModal && <Modal chosenImg={chosenImg} onModalClose={toggleModal} />}
    </AppStyled>
  );
}
