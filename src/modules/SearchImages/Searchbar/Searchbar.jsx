import { useState } from 'react';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';

import styles from '../Searchbar/Searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => { 
    setSearch(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (search.trim().toLowerCase() === '') {
      return toast.warn('Enter correct search!');
    }

    onSubmit(search);
    setSearch('');
  };

      return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={handleSubmit}>
          <button
            type="submit"
            className={styles.Button}
            aria-label="search-button"
          >
            <span className={styles.Label}>
              <ImSearch />
            </span>
          </button>

          <input
            name="search"
            value={search}
            className={styles.Input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            required
            onChange={handleChange}
          />
        </form>
      </header>
    );
};

export default Searchbar;

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
