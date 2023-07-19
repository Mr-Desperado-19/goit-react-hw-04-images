import PropTypes from 'prop-types';
import ImageGalleryItem from '../image-gallery-item';
import "./ImageGallery.scss"

const ImageGallery = ({ images, onSelect }) => (
  <ul className="image-gallery">
    {images.map(({ id, webformatURL, largeImageURL }) => (
      <ImageGalleryItem
        key={id}
        src={webformatURL}
        alt={id}
        largeImage={largeImageURL}
        onClick={onSelect}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ImageGallery;