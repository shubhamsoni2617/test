import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';
import 'react-tabs/style/react-tabs.css';
import 'react-input-range/lib/css/index.css';
import SearchIcon from '../../../assets/images/search-icon-gray.svg';
import tickWhite from '../../../assets/images/tick-white.svg';
import FilterGrid from '../FilterGrid';
import './style.scss';

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

function SearchFilter(props) {
  const [search, setSearch] = useState(props.searchText);
  const debouncedSearchTerm = useDebounce(search, 500);

  useEffect(() => {
    if (search === '') {
      props.handleFilters({ filteredSearch: search });
    }
    if (debouncedSearchTerm) {
      props.handleFilters({ filteredSearch: search });
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="filters-search">
      <button type="submit" className="search-btn">
        <img src={SearchIcon} className="img-fluid active" alt="search-icon" />
      </button>
      <input
        type="text"
        value={search}
        placeholder="Search in events"
        onChange={e => {
          setSearch(e.target.value);
        }}
        className="form-control"
      />
    </div>
  );
}

function PriceRangeFilter(props) {
  const { priceConfig, filteredPriceRange } = props;

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
      <div className="filters-panel">
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

function DateRangeFilter(props) {
  const element = useRef(null);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');

  useEffect(() => {
    const getDate = dateStr => {
      const date = new Date(dateStr);
      return date.toString() === 'Invalid Date' ? '' : date;
    };

    setTo(
      props.filteredDateRange && props.filteredDateRange.to
        ? getDate(props.filteredDateRange.to)
        : ''
    );
    setFrom(
      props.filteredDateRange && props.filteredDateRange.from
        ? getDate(props.filteredDateRange.from)
        : ''
    );
  }, [props.filteredDateRange]);

  const clearCalender = () => {
    props.handleFilters({
      filteredDateRange: {
        from: '',
        to: ''
      }
    });
  };

  const showFromMonth = () => {
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      element.current.getDayPicker().showMonth(from);
    }
  };

  // Date Range methods
  const handleFromChange = from => {
    setFrom(from);
    // this.props.handleFilters('date-range', { from: moment(this.state.from).format('DD-MM-YYYY'), to: moment(this.state.to).format('DD-MM-YYYY') });
  };

  const handleToChange = to => {
    setTo(to);
    showFromMonth();
  };

  const filterByDateRange = () => {
    props.handleFilters({
      filteredDateRange: {
        from: moment(from).format('YYYY-MM-DD'),
        to: moment(to).format('YYYY-MM-DD')
      }
    });
  };

  const modifiers = { start: from, end: to };

  return (
    <div className="filter-grid">
      <div className="filter-grid-heading">
        <h3>Date Range</h3>
        <ul>
          <li className="active">
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                clearCalender();
              }}
            >
              Clear
            </a>
          </li>
        </ul>
      </div>
      <div className="filters-panel">
        <div className="date-input-to">
          <label>From</label>
          <span className="InputFromTo">
            <DayPickerInput
              value={from}
              placeholder="mm/dd/yyyy"
              format="MM/DD/YYYY"
              showOverlay={false}
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { before: new Date(), after: to },
                fromMonth: new Date(),
                toMonth: to ? new Date(moment(to).format('YYYY-MM-DD')) : null,
                modifiers,
                numberOfMonths: 1,
                onDayClick: () => element.current.getInput().focus()
              }}
              onDayChange={handleFromChange}
            />
          </span>
        </div>
        <div className="date-input-from">
          <label>To</label>
          <span className="InputFromTo-to">
            <DayPickerInput
              ref={element}
              value={to}
              placeholder="mm/dd/yyyy"
              format="MM/DD/YYYY"
              showOverlay={false}
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { before: from },
                modifiers,
                month: from
                  ? new Date(moment(from).format('YYYY-MM-DD'))
                  : null,
                fromMonth: from
                  ? new Date(moment(from).format('YYYY-MM-DD'))
                  : new Date(),
                numberOfMonths: 1
                //   onDayClick: () => this.from.getInput().focus()
              }}
              onDayChange={handleToChange}
            />
          </span>
        </div>
        {from && to && (
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              filterByDateRange();
            }}
            className="cal-apply-btn active"
          >
            <img src={tickWhite} className="active" alt="tick" />
          </a>
        )}
      </div>
    </div>
  );
}

function Filters(props) {
  const element = useRef();
  // const [elementOffsetTop, setElementOffsetTop] = useState('');

  const clearAllFilters = () => {
    props.resetFilters();
  };

  const handleScroll = () => {
    if (
      element.current.parentElement.offsetHeight >
        element.current.offsetHeight + 20 &&
      window.pageYOffset + 377 >
        window.document.body.clientHeight - window.innerHeight
    ) {
      element.current.classList.add('fixed-filter-absolute');
      element.current.classList.remove('fixed-filter');
    } else if (
      element.current.parentElement.offsetHeight >
        element.current.offsetHeight + 20 &&
      window.pageYOffset + 299 >= element.current.clientHeight - 45
    ) {
      element.current.classList.add('fixed-filter');
      element.current.classList.remove('fixed-filter-absolute');
    } else {
      element.current.classList.remove('fixed-filter');
      element.current.classList.remove('fixed-filter-absolute');
    }
  };

  useLayoutEffect(() => {
    if (!element.current['top'])
      element.current['top'] = element.current.offsetTop;
  }, [element.current]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className="filter-conatiner" ref={element}>
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
      <SearchFilter handleFilters={handleFilters} searchText={filteredSearch} />
      {price_config && (
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
  );
}

export default Filters;

SearchFilter.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  searchText: PropTypes.array
};

PriceRangeFilter.propTypes = {
  filteredPriceRange: PropTypes.object.isRequired,
  handleFilters: PropTypes.func.isRequired,
  priceConfig: PropTypes.object.isRequired
};

DateRangeFilter.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  filteredDateRange: PropTypes.object.isRequired
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
