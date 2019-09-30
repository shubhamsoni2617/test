import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import SearchIcon from '../../../assets/images/search-icon-gray.svg';
import FilterGrid from '../FilterGrid';
import useStickyPanel from '../../hooks/useStickyPanel';
import './style.scss';
import DateRangeFilter from '../DateRangeFilter';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

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

function PriceRangeFilter(props) {
  const { priceConfig, filteredPriceRange } = props;
  const [flag, setFlag] = useState(false);
  const [priceRange, setPriceRange] = useState({
    min: parseInt(priceConfig.min_price) || null,
    max: parseInt(priceConfig.max_price) || null
  });

  useEffect(() => {
    if (!filteredPriceRange.min) {
      clearPriceRange(false);
    }
  }, [filteredPriceRange]);

  const clearPriceRange = (reset = true) => {
    setPriceRange({
      min: parseInt(priceConfig.min_price) || null,
      max: parseInt(priceConfig.max_price) || null
    });
    if (reset)
      props.handleFilters({ filteredPriceRange: { min: '', max: '' } });
  };

  return (
    <div className="filter-grid filter-price-range">
      <div className="filter-grid-heading">
        <h3>Price Range</h3>
        <ul>
          <li className="active">
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                clearPriceRange();
              }}
            >
              Clear
            </a>
          </li>
        </ul>
      </div>
      <div className="select-range">
        <button onClick={() => setFlag(!flag)}>Select range</button>
      </div>
      <div className={`filters-panel ${flag ? 'open' : ''}`}>
        <span className="input-range-label-container min">
          S$ {priceRange.min}
        </span>
        <span className="input-range-label-container max">
          S$ {priceRange.max}
        </span>
        <InputRange
          formatLabel={value => `${'S$' + value}`}
          maxValue={parseInt(priceConfig && priceConfig.max_price)}
          minValue={parseInt(priceConfig && priceConfig.min_price)}
          value={priceRange}
          onChange={value => setPriceRange(value)}
          onChangeComplete={value =>
            props.handleFilters({ filteredPriceRange: value })
          }
        />
      </div>
    </div>
  );
}

function Filters(props) {
  const element = useRef();
  // const [elementOffsetTop, setElementOffsetTop] = useState('');
  const [scrollContainerRef, styleObj] = useStickyPanel({
    sticky: { bottom: 0 },
    bottom: 0
  });

  const clearAllFilters = () => {
    props.resetFilters();
  };

  const {
    genreData,
    venueData,
    attractionCategories,
    filterConfig,
    handleFilters,
    filteredSearch,
    filteredDateRange,
    filteredPriceRange,
    filteredGnere,
    filteredPromotions,
    filteredTags,
    filteredVenues,
    filteredCategory,
    hideCalendar
  } = props;
  const { price_config } = filterConfig ? filterConfig : 0;

  if (props.shimmerFilter) {
    return;
  }
  return (
    <div className="filter-conatiner" ref={scrollContainerRef}>
      <div className="inner" style={styleObj}>
        <div className="filter-heading">
          <h3>
            FILTERS{' '}
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                clearAllFilters();
              }}
            >
              Clear all
            </a>
          </h3>
        </div>
        <SearchFilter
          handleFilters={handleFilters}
          searchPlaceholder={props.searchPlaceholder}
          searchText={filteredSearch}
        />
        {price_config != undefined && (
          <PriceRangeFilter
            priceConfig={price_config}
            filteredPriceRange={filteredPriceRange}
            handleFilters={handleFilters}
          />
        )}
        <FilterGrid
          title="Genre"
          category="filteredGnere"
          handleFilters={handleFilters}
          data={genreData ? genreData : []}
          selectedFilter={filteredGnere}
          limit={5}
        />
        <FilterGrid
          title="Tags"
          category="filteredTags"
          handleFilters={handleFilters}
          data={filterConfig ? filterConfig.tags : []}
          selectedFilter={filteredTags}
          limit={5}
        />
        {!hideCalendar && (
          <DateRangeFilter
            filteredDateRange={filteredDateRange}
            handleFilters={handleFilters}
          />
        )}
        <FilterGrid
          title="Promotion"
          category="filteredPromotions"
          handleFilters={handleFilters}
          data={filterConfig ? filterConfig.promotion_categories : []}
          selectedFilter={filteredPromotions}
          limit={5}
        />
        <FilterGrid
          title="Venue"
          category="filteredVenues"
          handleFilters={handleFilters}
          data={venueData ? venueData : []}
          showPanel={true}
          selectedFilter={filteredVenues}
          limit={5}
        />
        <FilterGrid
          title="Categories"
          category="filteredCategory"
          handleFilters={handleFilters}
          data={attractionCategories ? attractionCategories : []}
          selectedFilter={filteredCategory}
          limit={10}
        />
      </div>
      {props.children}
    </div>
  );
}

export default Filters;

SearchFilter.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  searchText: PropTypes.array,
  searchPlaceholder: PropTypes.string.isRequired
};

PriceRangeFilter.propTypes = {
  filteredPriceRange: PropTypes.object.isRequired,
  handleFilters: PropTypes.func.isRequired,
  priceConfig: PropTypes.object.isRequired
};

Filters.propTypes = {
  resetFilters: PropTypes.func.isRequired,
  filterConfig: PropTypes.object.isRequired,
  filteredDateRange: PropTypes.object.isRequired,
  filteredGnere: PropTypes.array.isRequired,
  filteredPriceRange: PropTypes.object.isRequired,
  filteredPromotions: PropTypes.array.isRequired,
  filteredSearch: PropTypes.array.isRequired,
  filteredTags: PropTypes.array.isRequired,
  filteredVenues: PropTypes.array.isRequired,
  genreData: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  queryParams: PropTypes.object.isRequired,
  resetFilter: PropTypes.func,
  venueData: PropTypes.array.isRequired
};
