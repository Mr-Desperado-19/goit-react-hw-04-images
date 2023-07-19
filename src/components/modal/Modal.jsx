import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ image, onClose }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className='overlay' onClick={handleBackdropClick}>
      <div className='modal'>
        {image && (
          <>
            <img src={image.largeImageURL} alt={image.tags} />
            <button className='close_btn' type='button' onClick={onClose}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Modal.propTypes = {
  selectedImage: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onClose: PropTypes.func.isRequired,
};

export default Modal;