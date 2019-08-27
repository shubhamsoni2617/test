import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import InputRange from "react-input-range";
import VenueFilter from "../VenueFilter";
import moment from "moment";
import Helmet from "react-helmet";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import { CSSTransitionGroup } from "react-transition-group";
import "react-day-picker/lib/style.css";
import "react-tabs/style/react-tabs.css";
import "react-input-range/lib/css/index.css";
import SearchIcon from "../../../assets/images/search-icon-gray.svg";
import backArrowImage from "../../../assets/images/bakcarrow.svg";
import colorBlueCloseImage from "../../../assets/images/close-blue-color.svg";
import tickWhite from "../../../assets/images/tick-white.svg";
import FilterGrid from "../FilterGrid";
import "./style.scss";

export default class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      priceRangeValue: {
        min: this.props.filterConfig
          ? this.props.filterConfig.price_config.min_price
          : null,
        max: this.props.filterConfig
          ? this.props.filterConfig.price_config.max_price
          : null
      },
      promotionsData: this.props.filterConfig
        ? this.props.filterConfig.promotion_categories
        : [],
      tagsData: this.props.filterConfig ? this.props.filterConfig.tags : [],
      venuesData: this.props.venueData ? this.props.venueData : [],
      genreData: this.props.genreData ? this.props.genreData : [],
      attractionCategoryData: this.props.attractionCategories
        ? this.props.attractionCategories
        : [],
      venueFilterPanelDisplay: false,
      tagShowLimit: this.props.filterConfig
        ? this.props.filterConfig.tags.length > 5
          ? 5
          : this.props.filterConfig.tags.length
        : 0,
      genreShowLimit: this.props.genreData
        ? this.props.genreData.length > 5
          ? 5
          : this.props.genreData.length
        : 0,
      venueShowLimit: this.props.venuesData
        ? this.props.venuesData.length > 5
          ? 5
          : this.props.venuesData.length
        : 0,
      categoryShowLimit: this.props.attractionCategories
        ? this.props.attractionCategories.length > 5
          ? 5
          : this.props.attractionCategories.length
        : 0,
      search: "",
      from: undefined,
      to: undefined,
      checkUncheckGnereActiveClass: false,
      checkUncheckTagsActiveClass: false,
      checkUncheckPromotionsActiveClass: false,
      checkUncheckCategoryActiveClass: false
    };
  }

  componentDidMount() {
    this.applyIsChecked(true); //Value true passed for check route params
  }

  componentDidUpdate(preProps) {
    if (this.props.queryParams.genreId !== preProps.queryParams.genreId) {
      this.applyIsChecked(true); //Value true passed for check route params
    }
  }

  applyIsChecked = status => {
    this.state.promotionsData &&
      this.state.promotionsData.map(promotion => {
        promotion.isChecked = false;
      });

    this.state.genreData.map(genre => {
      if (genre.id == this.props.queryParams.genreId && status) {
        genre.isChecked = true;
      } else {
        genre.isChecked = false;
      }
    });

    let obj = this.state.genreData.find(genre => {
      return genre.id === this.props.queryParams.genreId && status;
    });
    if (obj) {
      let arr = this.state.genreData.filter(genre => {
        return genre.id !== this.props.queryParams.genreId && status;
      });
      arr.unshift(obj);
      this.setState({ genreData: arr });
    }

    this.state.venuesData.map(venue => {
      if (venue.id == this.props.queryParams.venueId) {
        venue.isChecked = true;
      } else {
        venue.isChecked = false;
      }
    });

    this.state.tagsData.map(tag => {
      tag.isChecked = false;
    });

    this.state.attractionCategoryData &&
      this.state.attractionCategoryData.map(category => {
        category.isChecked = false;
      });

    this.setRoutedParams(status);
  };

  setRoutedParams = status => {
    if (status && this.props.queryParams.dateRange)
      this.setState({
        from: moment(
          this.props.queryParams.dateRange.from,
          "DD-MM-YYYY"
        ).format("MM/DD/YYYY"),
        to: moment(this.props.queryParams.dateRange.to, "DD-MM-YYYY").format(
          "MM/DD/YYYY"
        )
      });
  };

  // Clear all the filters
  clearAllFilters = () => {
    this.setState({
      search: "",
      priceRangeValue: {
        min: this.props.filterConfig
          ? this.props.filterConfig.price_config.min_price
          : null,
        max: this.props.filterConfig
          ? this.props.filterConfig.price_config.max_price
          : null
      }
    });
    this.applyIsChecked(false);
    this.clearCalender();
    this.props.resetFilters();
  };

  // Text Search
  textFilter = e => {
    this.setState({ search: e.target.value }, () => {
      this.props.handleFilters("search", this.state.search);
    });
  };

  // Venues
  checkUncheckAllVenues = status => {
    let venuesData = this.state.venuesData;
    let venuesIds = [];
    venuesData.map((venue, key) => {
      if (key < 5) {
        venue.isChecked = status;
        venuesIds.push(venue.id);
      }
    });
    this.setState({ venuesData });
    if (!status) {
      venuesIds = [];
    }
    this.props.handleFilters("venues-check-uncheck", venuesIds, status);
  };

  checkUncheckVenues = (e, key, isChild) => {
    let venuesData = this.state.venuesData;
    if (isChild == "child") {
      venuesData &&
        venuesData.filter((venue, vkey) => {
          if (venue.id === key) {
            key = vkey;
            venuesData[key].isChecked = e.target.checked;
          }
        });
    } else {
      venuesData[key].isChecked = e.target.checked;
    }
    this.setState({ venuesData: venuesData });
    this.props.handleFilters("venues", venuesData[key].id, e.target.checked);
  };

  // Clear calender on clear
  clearCalender = () => {
    this.setState({ from: undefined, to: undefined });
    this.props.handleFilters("date-range", {
      from: "",
      to: ""
    });
  };

  // Clear Price range on clear
  clearPriceRange = priceConfig => {
    let handleFilters = this.props.handleFilters;
    this.setState(
      {
        priceRangeValue: {
          min: priceConfig.min_price,
          max: priceConfig.max_price
        }
      },
      () => {
        this.props.handleFilters("price-range", { min: "", max: "" }, "");
      }
    );
  };

  // Set Price range on slide
  setPriceRange = priceRangeValue => {
    this.setState({ priceRangeValue });
  };

  showFromMonth() {
    const { from, to } = this.state;
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), "months") < 2) {
      this.to.getDayPicker().showMonth(from);
    }
  }

  // Date Range methods
  handleFromChange = from => {
    this.setState({ from });
    // this.props.handleFilters('date-range', { from: moment(this.state.from).format('DD-MM-YYYY'), to: moment(this.state.to).format('DD-MM-YYYY') });
  };

  handleToChange = to => {
    this.setState({ to }, this.showFromMonth);
  };

  filterByDateRange = () => {
    this.props.handleFilters("date-range", {
      from: moment(this.state.from).format("DD-MM-YYYY"),
      to: moment(this.state.to).format("DD-MM-YYYY")
    });
  };

  setOpenVenuePanel = (status, ref) => {
    this.setState({ venueFilterPanelDisplay: status });
    window.scrollTo(0, 1000);
  };

  render() {
    const { venueData, filterConfig, handleFilters } = this.props;
    const { price_config } = filterConfig ? filterConfig : 0;
    const {
      from,
      to,
      attractionCategoryData,
      promotionsData,
      genreData,
      tagsData,
      venuesData,
      search,
      venueFilterPanelDisplay,
      genreShowLimit,
      tagShowLimit,
      venueShowLimit,
      categoryShowLimit
    } = this.state;

    const modifiers = { start: from, end: to };
    return (
      <div>
        <div className="filters">
          <div className="filter-heading">
            <h3>
              FILTERS <a onClick={() => this.clearAllFilters()}>Clear all</a>
            </h3>
          </div>
          <div className="filters-search">
            <button type="submit" className="search-btn">
              <img
                src={SearchIcon}
                className="img-fluid active"
                alt="search-icon"
              />
            </button>
            <input
              type="text"
              value={search}
              placeholder="Search in events"
              onChange={e => this.textFilter(e)}
              className="form-control"
            />
          </div>
          {price_config != undefined && (
            <div className="filter-grid filter-price-range">
              <div className="filter-grid-heading">
                <h3>Price Range</h3>
                <ul>
                  <li className="active">
                    <a onClick={() => this.clearPriceRange(price_config)}>
                      Clear
                    </a>
                  </li>
                </ul>
              </div>
              <div className="filters-panel">
                <span className="input-range-label-container min">
                  S$ {this.state.priceRangeValue.min}
                </span>
                <span className="input-range-label-container max">
                  S$ {this.state.priceRangeValue.max}
                </span>
                <InputRange
                  ref="input_range"
                  formatLabel={value => `${"S$" + value}`}
                  maxValue={parseInt(price_config && price_config.max_price)}
                  minValue={parseInt(price_config && price_config.min_price)}
                  value={this.state.priceRangeValue}
                  onChange={value => this.setPriceRange(value)}
                  onChangeComplete={value =>
                    this.props.handleFilters("price-range", value, "")
                  }
                />
              </div>
            </div>
          )}
          <FilterGrid
            title="Genre"
            category="genre"
            handleFilters={handleFilters}
            data={genreData}
          />
          <FilterGrid
            title="Tags"
            category="tags"
            handleFilters={handleFilters}
            data={tagsData}
          />
          {this.props.showCalendar && (
            <div className="filter-grid">
              <div className="filter-grid-heading">
                <h3>Date Range</h3>
                <ul>
                  <li className="active">
                    <a onClick={this.clearCalender}>Clear</a>
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
                        toMonth: to,
                        modifiers,
                        numberOfMonths: 1,
                        onDayClick: () => this.to.getInput().focus()
                      }}
                      onDayChange={this.handleFromChange}
                    />
                  </span>
                </div>
                <div className="date-input-from">
                  <label>To</label>
                  <span className="InputFromTo-to">
                    <DayPickerInput
                      ref={el => (this.to = el)}
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
                        month: from,
                        fromMonth: from,
                        numberOfMonths: 1
                        //   onDayClick: () => this.from.getInput().focus()
                      }}
                      onDayChange={this.handleToChange}
                    />
                  </span>
                </div>
                {from && to && (
                  <a
                    onClick={this.filterByDateRange}
                    class="cal-apply-btn active"
                  >
                    <img src={tickWhite} class="active" alt="tick" />
                  </a>
                )}
                <Helmet>
                  <style>{`
                                    .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside),
                                    .InputFromTo-to .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                                        background-color: #EFF7FF;
                                        color: #7C86A2;
                                        border-radius: 0px;
                                    }
                                    .InputFromTo .DayPicker-Day--selected,
                                    .InputFromTo-to .DayPicker-Day--selected{
                                        background-color: #0098FF;
                                        color: #ffffff;
                                    }
                                    .InputFromTo .DayPicker-Day,
                                    .InputFromTo-to .DayPicker-Day{
                                        border-radius: 0px;
                                        color: #7C86A2;
                                        height: 25px;
                                        width: 25px;
                                    }
                                    .InputFromTo .DayPicker-Day--start,
                                    .InputFromTo-to .DayPicker-Day--start {
                                        font-weight: bold;
                                        color: #FFFFFF !important;
                                    }
                                    .InputFromTo .DayPicker-Day--end,
                                    .InputFromTo-to .DayPicker-Day--end {
                                        font-weight: bold;
                                        color: #FFFFFF;
                                    }
                                    .InputFromTo .DayPickerInput-Overlay {
                                        width: 250px;
                                    }
                                    .InputFromTo-to .DayPickerInput-Overlay {
                                        margin-left: 0px;
                                    }
                                    .InputFromTo-to .DayPicker-Day.DayPicker-Day--end{
                                        &:before{
                                            left: auto;
                                            right: 100%;
                                        }
                                     }
                                    `}</style>
                </Helmet>
              </div>
            </div>
          )}
          <FilterGrid
            title="Promotion"
            category="promotions"
            handleFilters={handleFilters}
            data={promotionsData}
          />
          {venuesData && venuesData.length > 0 && (
            <div className="filter-grid">
              <div className="filter-grid-heading">
                <h3>Venue</h3>
                <ul>
                  <li className="active">
                    <a onClick={() => this.checkUncheckAllVenues(false)}>
                      Clear
                    </a>
                  </li>
                </ul>
              </div>
              <div className="filters-panel">
                <ul>
                  {venuesData &&
                    venuesData.map((venue, key) => {
                      let id = "venue-" + venue.id;
                      if (key < 5) {
                        return (
                          <li key={key}>
                            <input
                              checked={venue.isChecked}
                              onChange={e => this.checkUncheckVenues(e, key)}
                              className="styled-checkbox"
                              type="checkbox"
                              id={id}
                              value=""
                            />
                            <label for={id}>{venue.name}</label>
                          </li>
                        );
                      }
                    })}
                </ul>
                <a
                  onClick={() =>
                    this.setOpenVenuePanel(true, this.venuePopUpRef)
                  }
                  className="view-all-filters"
                >
                  + {venuesData.length - venueShowLimit} More
                </a>
              </div>
              {/* Venue filter component. */}
              <VenueFilter
                ref={node => (this.venuePopUpRef = node)}
                checkUncheckVenues={this.checkUncheckVenues}
                setOpenVenuePanel={this.setOpenVenuePanel}
                venueFilterPanelDisplay={venueFilterPanelDisplay}
                venueData={venueData}
              />
            </div>
          )}
          <FilterGrid
            title="Categories"
            category="category"
            handleFilters={handleFilters}
            data={attractionCategoryData}
          />
        </div>
      </div>
    );
  }
}
