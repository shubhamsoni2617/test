import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import FilterGrid from '../FilterGrid';
import useStickyPanel from '../../hooks/useStickyPanel';
import './style.scss';
import DateRangeFilter from '../DateRangeFilter/filters';
import SearchFilter from '../SearchFilter';
import Utilities from '../../utilities';
import { useGlobalState } from '../../../scenes/App/store';

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

function PriceRangeFilter(props) {
  const { priceConfig, filteredPriceRange, filterFlag } = props;
  const [flag, setFlag] = useState(true);
  const [priceRange, setPriceRange] = useState({
    min: parseInt(priceConfig.min_price) || null,
    max: parseInt(priceConfig.max_price) || null
  });

  // useEffect(() => {
  //   setFlag(false);
  // }, [filterFlag]);

  useEffect(() => {
    if (
      filteredPriceRange.hasOwnProperty('min') &&
      filteredPriceRange.min === ''
    ) {
      clearPriceRange(false);
    }
    if (
      filteredPriceRange.hasOwnProperty('min') &&
      filteredPriceRange.min !== ''
    ) {
      setPriceRange(filteredPriceRange);
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
          <li
            className={
              filteredPriceRange &&
              (filteredPriceRange.min || filteredPriceRange.max)
                ? 'active'
                : ''
            }
          >
            {filteredPriceRange &&
              (filteredPriceRange.min || filteredPriceRange.max) && (
                <a
                  href="/"
                  onClick={e => {
                    e.preventDefault();
                    clearPriceRange();
                  }}
                >
                  Clear
                </a>
              )}
            {!filteredPriceRange.min && !filteredPriceRange.max && (
              <span>Clear</span>
            )}
          </li>
          {/* <li className="active">
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                clearPriceRange();
              }}
            >
              Clear
            </a>
          </li> */}
        </ul>
      </div>
      <div className={`select-range ${flag ? 'active' : ''}`}>
        <button onClick={() => setFlag(!flag)}>Select Range</button>
      </div>
      <div className={`filters-panel ${flag ? 'open' : ''}`}>
        <span className="input-range-label-container min">
          {/* S$ {priceRange.min} */}
          S$ {priceRange.min == 0 || !priceRange.min ? '0' : priceRange.min}
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
            props.handleFilters(
              Utilities.mobilecheck()
                ? { localfilteredPriceRange: value }
                : { filteredPriceRange: value }
            )
          }
        />
      </div>
    </div>
  );
}

function Filters(props) {
  const element = useRef();
  const [fixed, setFixed] = useState(false);
  const [state] = useGlobalState('global');
  // const [elementOffsetTop, setElementOffsetTop] = useState('');
  let stickyObj = {
    sticky: { bottom: -10 },
    bottom: 0
    // pixelBuffer: 40
  };
  if (props.attractions) {
    stickyObj = {
      sticky: { top: 153 },
      pixelBuffer: 153,
      // bottom: 0,
      distanceFromTop: 153
    };
  }
  useEffect(() => {
    const handleResize = () => {
      if (window.innerHeight > window.innerWidth) {
        props.changeMode('PORTRAIT');
      } else if (window.innerHeight < window.innerWidth) {
        props.changeMode('LANDSCAPE');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [props.filterFlag]);
  const [scrollContainerRef, styleObj] = useStickyPanel(stickyObj);

  const clearAllFilters = () => {
    props.resetFilters();
  };

  const {
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
    hideCalendar,
    filterFlag,
    toggleFilterSection
  } = props;
  const { genreData } = state;
  const { price_config } = filterConfig ? filterConfig : 0;

  if (props.shimmerFilter) {
    return;
  }
  return (
    <div className="filter-conatiner">
      <div
        style={{
          position: 'relative',
          display: 'block',
          height: '100%',
          zIndex: 2
        }}
        ref={scrollContainerRef}
      >
        <div className={`inner ${fixed ? 'fixed' : ''}`} style={styleObj}>
          <div className="filter-heading">
            <h3>
              Filters{' '}
              {((filteredPriceRange && filteredPriceRange.min) ||
                (filteredGnere && filteredGnere.length > 0) ||
                (filteredTags && filteredTags.length > 0) ||
                (filteredDateRange && filteredDateRange.to) ||
                (filteredPromotions && filteredPromotions.length) ||
                (filteredVenues && filteredVenues.length > 0) ||
                (filteredCategory && filteredCategory.length > 0)) && (
                <a
                  href="/"
                  onClick={e => {
                    e.preventDefault();
                    clearAllFilters();
                  }}
                >
                  Clear All
                </a>
              )}
              {!(filteredPriceRange && filteredPriceRange.min) &&
                !(filteredGnere && filteredGnere.length > 0) &&
                !(filteredTags && filteredTags.length > 0) &&
                !(filteredDateRange && filteredDateRange.to) &&
                !(filteredPromotions && filteredPromotions.length > 0) &&
                !(filteredVenues && filteredVenues.length > 0) &&
                !(filteredCategory && filteredCategory.length > 0) && (
                  <span>Clear All</span>
                )}
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
              filterFlag={filterFlag}
            />
          )}
          <FilterGrid
            title="Genre"
            category={'filteredGnere'}
            handleFilters={handleFilters}
            data={genreData ? genreData : []}
            selectedFilter={filteredGnere}
            limit={5}
            toggleFilterSection={toggleFilterSection}
            setFixed={setFixed}
          />
          <FilterGrid
            title="Tags"
            category={'filteredTags'}
            handleFilters={handleFilters}
            data={filterConfig ? filterConfig.tags : []}
            selectedFilter={filteredTags}
            limit={5}
            toggleFilterSection={toggleFilterSection}
            setFixed={setFixed}
          />
          {!hideCalendar && (
            <DateRangeFilter
              title="Date Range"
              filteredDateRange={filteredDateRange}
              selectedFilter={filteredDateRange}
              handleFilters={handleFilters}
              autoSubmit={true}
              filterFlag={filterFlag}
              toggleFilterSection={toggleFilterSection}
              setFixed={setFixed}
            />
          )}
          <FilterGrid
            title="Promotion"
            category={'filteredPromotions'}
            handleFilters={handleFilters}
            data={filterConfig ? filterConfig.promotion_categories : []}
            selectedFilter={filteredPromotions}
            limit={5}
            toggleFilterSection={toggleFilterSection}
            setFixed={setFixed}
          />
          <FilterGrid
            title="Venue"
            category={'filteredVenues'}
            handleFilters={handleFilters}
            data={venueData ? venueData : []}
            showPanel={true}
            selectedFilter={filteredVenues}
            limit={5}
            toggleFilterSection={toggleFilterSection}
            setFixed={setFixed}
          />
          <FilterGrid
            title="Categories"
            category={'filteredCategory'}
            handleFilters={handleFilters}
            data={attractionCategories ? attractionCategories : []}
            selectedFilter={filteredCategory}
            limit={10}
            toggleFilterSection={toggleFilterSection}
            setFixed={setFixed}
          />
        </div>
      </div>
      {typeof props.children === 'function' && props.children(fixed, setFixed)}
      {typeof props.children !== 'function' && props.children}
    </div>
  );
}

export default Filters;

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
  toggleFilterSection: PropTypes.func.isRequired,
  queryParams: PropTypes.object.isRequired,
  resetFilter: PropTypes.func,
  venueData: PropTypes.array.isRequired
};
