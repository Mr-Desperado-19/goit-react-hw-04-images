import React, { useState, useEffect } from 'react';
import Searchbar from '../searchbar';
import ImageGallery from '../image-gallery';
import Button from '../button';
import Modal from '../modal';
import { fetchImages } from '../../services/api';
import "./App.scss"

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    const query = 'CSS'; 
    const page = 1;

    fetchImages(query, page)
      .then(data => setTotalHits(data.totalHits))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    if (searchQuery !== '') {
      fetchImagesApp(searchQuery, page);
    }
  }, [searchQuery, page]);

  const onChangeQuery = query => {
    setSearchQuery(query);
    setPage(1);
    setImages([]);
  };

  const fetchImagesApp = (searchQuery, page) => {
    setIsLoading(true);

    fetchImages(searchQuery, page)
      .then(images => {
        setImages(prevImages => [...prevImages, ...images.hits]);
        setTotalHits(images.totalHits);
      })
      .catch(error => setError(error))
      .finally(() => setIsLoading(false));
  };

  const btnClick = () => {
    setPage(prevPage => prevPage + 1);
  };

  const openModal = ({ src, tags }) => {
    setSelectedImage({ largeImageURL: src, tags });
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='app-container'>
      <Searchbar onSubmit={onChangeQuery} />

      {images.length > 0 && (
        <ImageGallery images={images} onSelect={openModal} />
      )}

      {!isLoading && images.length < totalHits && images.length > 0 && (
        <Button label="Load more" onClick={btnClick} />
      )}

      {selectedImage && (
        <Modal image={selectedImage} onClose={closeModal} />
      )}

      {error && <p>Whoops, something went wrong: {error.message}</p>}
    </div>
  );
};

export default App;