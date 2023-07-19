import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./Searchbar.scss"

const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim()) {
      onSubmit(query);
      setQuery('');
    }
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <header className='searchbar'>
      <form onSubmit={handleSubmit} className='search-form'>
        <input
          className='search-form_input'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
        <button type="submit" className='search-form_btn'>
          Search
        </button>
      </form>
    </header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;