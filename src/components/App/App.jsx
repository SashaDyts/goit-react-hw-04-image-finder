import { Component } from 'react';
import { Searchbar } from '../Searchbar';
import { ImageGallery } from '../ImageGallery';
import { LoadMore } from '../LoadMore/LoadMore';
import { InfinitySpin } from 'react-loader-spinner';
import { Modal } from 'components/Modal/Modal';
import { getImages } from 'services/api';
import { AppStyled } from './App.styled';

export class App extends Component {
  state = {
    page: 1,
    search: '',
    images: [],
    isLoading: false,
    showModal: false,
    chosenImg: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      const data = await getImages(this.state.search, this.state.page);

      this.setState({ images: data.hits, isLoading: false });
    }
  }

  onSubmit = search => {
    this.setState({ search, page: 1, images: [] });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1, images: [] }));
  };

  getImgId = id => {
    const chosenImg = this.state.images.find(image => image.id === id);

    this.setState({ chosenImg });

    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, isLoading, showModal, chosenImg } = this.state;

    return (
      <AppStyled>
        <Searchbar onSubmit={this.onSubmit} />
        {isLoading ? (
          <InfinitySpin />
        ) : (
          <ImageGallery images={images} onClick={this.getImgId} />
        )}

        {images.length > 0 && <LoadMore onClick={this.loadMore} />}
        {showModal && (
          <Modal chosenImg={chosenImg} onModalClose={this.toggleModal} />
        )}
      </AppStyled>
    );
  }
}
