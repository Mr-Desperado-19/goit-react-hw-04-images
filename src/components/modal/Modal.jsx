import React, { Component } from 'react';
import PropTypes from 'prop-types';
import "./Modal.scss"

class Modal extends Component {
  static propTypes = {
    image: PropTypes.shape({
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { image, onClose } = this.props;

    return (
      <div className="overlay" onClick={this.handleBackdropClick}>
        <div className="modal">
          <img src={image} alt={"qwe"} />
          <button className='close_btn' type="button" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;