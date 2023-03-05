import { Component } from 'react';

import css from './ImageGallery.module.css';

import { getGallery } from '../../services/getGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export class ImageGallery extends Component {
  state = {
    gallery: [],
    error: '',
    page: 1,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevProps.value !== this.props.value
      // ||			prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      getGallery(this.props.value.trim())
        .then(response => response.json())
        .then(gallery => this.setState({ gallery: gallery.hits }))
        .catch(error => {
          console.log('error :>> ', error);
        });
    }
  }

  // handleLoad = () => {
  // 	this.setState((prev) => ({ page: prev.page + 1 }))
  // }

  render() {
    return (
      <ul className={css.gallery}>
        <ImageGalleryItem gallery={this.state.gallery} />
      </ul>
    );
  }
}
