import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import SearchIcon from '../../../assets/images/search-icon-gray.svg';
import './style.scss';

const SearchFilter = props => {
  // const [search, setSearch] = useState('');
  // const debouncedSearchTerm = useDebounce(search, 500);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef();

  // useEffect(() => {
  //   // if (search === '') {
  //   //   props.handleFilters({ filteredSearch: search });
  //   // }
  //   // if (debouncedSearchTerm) {
  //   //   props.handleFilters({ filteredSearch: search });
  //   // }
  // }, [search]);

  const onChangeHandler = () => {
    if (loading) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);

      props.handleFilters({ filteredSearch: searchRef.current.value });
    }, 500);
  };

  return (
    <div className="filters-search">
      <button type="submit" className="search-btn">
        <img src={SearchIcon} className="img-fluid active" alt="search-icon" />
      </button>
      <input
        ref={searchRef}
        type="text"
        placeholder={
          props.searchPlaceholder ? props.searchPlaceholder : 'Search in events'
        }
        onChange={e => {
          onChangeHandler();
        }}
        className="form-control"
      />
    </div>
  );
};

export default SearchFilter;

SearchFilter.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  searchText: PropTypes.array,
  searchPlaceholder: PropTypes.string.isRequired
};
