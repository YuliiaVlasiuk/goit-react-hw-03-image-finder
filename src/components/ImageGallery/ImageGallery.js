import { Component } from 'react';

import { MagnifyingGlass } from 'react-loader-spinner';

import css from './ImageGallery.module.css';

import { getGallery } from '../../services/getGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    error: '',
    page: 1,
    loading: false,
    buttonVisial: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      getGallery(this.props.value.trim(), this.state.page)
        .then(response => response.json())
        .then(gallery => {
          this.setState({ gallery: [...this.state.gallery, ...gallery.hits] });
        })
        .catch(error => {
          console.log('error :>> ', error);
        })
        .finally(() => {
          this.setState({ buttonVisial: true });
          this.setState({ loading: false });
        });
    }
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    return (
      <>
        {this.state.loading && (
          <MagnifyingGlass
            visible={true}
            height="60"
            width="60"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#808080"
          />
        )}

        <ul className={css.gallery} onClick={this.toggleModal}>
          <ImageGalleryItem gallery={this.state.gallery} />
        </ul>

        {this.state.buttonVisial && (
          <button className={css.buttonLoad} onClick={this.handleLoadMore}>
            Load more
          </button>
        )}
        {/*        
         {this.state.showModal&& <Modal onClose={this.toggleModal}>
          <h2>iusfiaebfinepkd</h2>
          </Modal>} */}
      </>
    );
  }
}
