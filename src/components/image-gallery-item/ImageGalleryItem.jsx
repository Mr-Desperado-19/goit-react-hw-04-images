import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./ImageGalleryItem.scss"

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  handleClick = () => {
    const { largeImage } = this.props;
    this.props.onClick(largeImage);
  };

  render() {
    const { src, tags } = this.props;

    return (
      <li className="image-gallery-item">
        <img
          src={src}
          alt={tags}
          className="image-gallery-item-image"
          onClick={this.handleClick}
        />
      </li>
    );
  }
}

export default ImageGalleryItem;