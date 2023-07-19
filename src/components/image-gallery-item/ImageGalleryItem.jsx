import React from 'react';
import PropTypes from 'prop-types';
import "./ImageGalleryItem.scss"

const ImageGalleryItem = ({ src, tags, onSelect }) => {
  const handleClick = () => {
    onSelect({ src, tags });
  };

  return (
    <li className="image-gallery-item">
      <img
        src={src}
        alt={tags}
        className="image-gallery-item-image"
        onClick={handleClick}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGalleryItem;