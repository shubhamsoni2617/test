import React, { Component, useState, useRef, useEffect } from "react";
import InputRange from "react-input-range";
import VenueFilter from "../VenueFilter";
import moment from "moment";
import Helmet from "react-helmet";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import "react-day-picker/lib/style.css";
import "react-tabs/style/react-tabs.css";
import "react-input-range/lib/css/index.css";
import SearchIcon from "../../../assets/images/search-icon-gray.svg";
import tickWhite from "../../../assets/images/tick-white.svg";
import FilterGrid from "../FilterGrid";
import "./style.scss";

function SearchFilter(props) {
  const [search, setSearch] = useState(props.searchText);

  useEffect(() => {
    setSearch(props.searchText);
  }, [props.searchText]);

  // Text Search
  const textFilter = e => {
      setSearch(e.target.value);
      props.handleFilters({filteredSearch: e.target.value});
  };

  return (
    <div className="filters-search">
      <button type="submit" className="search-btn">
        <img src={SearchIcon} className="img-fluid active" alt="search-icon" />
      </button>
      <input
        type="text"
        value={search}
        placeholder="Search in events"
        onChange={e => textFilter(e)}
        className="form-control"
      />
    </div>
  );
}

function PriceRangeFilter(props) {
  const {priceConfig, filteredPriceRange} = props;
  const [priceRange, setPriceRange] = useState({
    min: parseInt(priceConfig.min_price) || null,
    max: parseInt(priceConfig.max_price) || null
  });

  useEffect(() => {
    if(!filteredPriceRange.min){
      clearPriceRange(false);
    }
  }, [filteredPriceRange]);

  const clearPriceRange = (reset=true) => {
    setPriceRange({
      min: parseInt(priceConfig.min_price) || null,
      max: parseInt(priceConfig.max_price) || null
    });
    if(reset) props.handleFilters({filteredPriceRange: { min: "", max: "" }});
  };

  return (
    <div className="filter-grid filter-price-range">
      <div className="filter-grid-heading">
        <h3>Price Range</h3>
        <ul>
          <li className="active">
            <a onClick={() => clearPriceRange()}>Clear</a>
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
          formatLabel={value => `${"S$" + value}`}
          maxValue={parseInt(priceConfig && priceConfig.max_price)}
          minValue={parseInt(priceConfig && priceConfig.min_price)}
          value={priceRange}
          onChange={value => setPriceRange(value)}
          onChangeComplete={value =>
            props.handleFilters({filteredPriceRange: value})
          }
        />
      </div>
    </div>
  );
}

function DateRangeFilter(props) {
  const element = useRef(null);
  const [to, setTo] = useState("");
  const [from, setFrom] = useState("");

  useEffect(() => {

    const getDate = (dateStr) => {
      const date = new Date(dateStr);
      return date.toString() === 'Invalid Date' ? '' : date;
    }

    setTo(props.filteredDateRange && props.filteredDateRange.to ? getDate(props.filteredDateRange.to) : "");
    setFrom(props.filteredDateRange && props.filteredDateRange.from ? getDate(props.filteredDateRange.from) : "");
  }, [props.filteredDateRange]);

  const clearCalender = () => {
      props.handleFilters({filteredDateRange: {
      from: "",
      to: ""
    }});
  };

  const showFromMonth = () => {
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
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
    props.handleFilters({filteredDateRange: {
      from: moment(from).format("YYYY-MM-DD"),
      to: moment(to).format("YYYY-MM-DD")
    }});
  };

  const modifiers = { start: from, end: to };

  return (
    <div className="filter-grid">
      <div className="filter-grid-heading">
        <h3>Date Range</h3>
        <ul>
          <li className="active">
            <a onClick={() => clearCalender()}>Clear</a>
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
                selectedDays: [from, {from, to}],
                disabledDays: { before: new Date(), after: to },
                toMonth: to ? new Date(moment(to).format("YYYY-MM-DD")) : null,
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
                selectedDays: [from, {from, to}],
                disabledDays: { before: from },
                modifiers,
                month: from ? new Date(moment(from).format("YYYY-MM-DD")) : null,
                fromMonth: from ? new Date(moment(from).format("YYYY-MM-DD")) : null,
                numberOfMonths: 1
                //   onDayClick: () => this.from.getInput().focus()
              }}
              onDayChange={handleToChange}
            />
          </span>
        </div>
        {from && to && (
          <a onClick={filterByDateRange} className="cal-apply-btn active">
            <img src={tickWhite} className="active" alt="tick" />
          </a>
        )}
      </div>
    </div>
  );
}

export default class Filters extends Component {
  constructor(props) {
    super(props);
  }

  clearAllFilters = () => {
    this.applyIsChecked(false);
    this.props.resetFilters();
  };

  render() {
    const {
      filterConfig,
      handleFilters,
      filteredSearch,
      filteredDateRange,
      filteredPriceRange,
      filteredGnere,
      filteredPromotions,
      filteredTags,
      filteredVenues,
      filteredCategory
    } = this.props;
    const { price_config } = filterConfig ? filterConfig : 0;

    return (
      <div>
        <div className="filters">
          <div className="filter-heading">
            <h3>
              FILTERS <a onClick={() => this.clearAllFilters()}>Clear all</a>
            </h3>
          </div>
          <SearchFilter handleFilters={handleFilters} searchText={filteredSearch} />
          {price_config != undefined && (
            <PriceRangeFilter priceConfig={price_config} filteredPriceRange={filteredPriceRange} handleFilters={handleFilters}  />
          )}
          <FilterGrid
            title="Genre"
            category="filteredGnere"
            handleFilters={handleFilters}
            data={this.props.genreData ? this.props.genreData : []}
            selectedFilter={filteredGnere}
          />
          <FilterGrid
            title="Tags"
            category="filteredTags"
            handleFilters={handleFilters}
            data={filterConfig ? filterConfig.tags : []}
            selectedFilter={filteredTags}
          />
          <DateRangeFilter filteredDateRange={filteredDateRange} handleFilters={handleFilters} />
          {/* {this.props.showCalendar && (
          )} */}
          <FilterGrid
            title="Promotion"
            category="filteredPromotions"
            handleFilters={handleFilters}
            data={
              filterConfig
                ? filterConfig.promotion_categories
                : []
            }
            selectedFilter={filteredPromotions}
          />
          <FilterGrid
            title="Venue"
            category="filteredVenues"
            handleFilters={handleFilters}
            data={
              this.props.venueData
                ? this.props.venueData
                : []
            }
            showPanel={true}
            selectedFilter={filteredVenues} />
          <FilterGrid
            title="Categories"
            category="filteredCategory"
            handleFilters={handleFilters}
            data={
              this.props.attractionCategories
                ? this.props.attractionCategories
                : []
            }
            selectedFilter={filteredCategory}
          />
        </div>
      </div>
    );
  }
}
