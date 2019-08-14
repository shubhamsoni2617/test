import React, { Component, createRef } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import InputRange from "react-input-range";
import VenueFilter from "../VenueFilter";
import moment from "moment";
import Helmet from "react-helmet";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { formatDate, parseDate } from "react-day-picker/moment";
import { CSSTransitionGroup } from 'react-transition-group';
import "react-day-picker/lib/style.css";
import "react-tabs/style/react-tabs.css";
import "react-input-range/lib/css/index.css";
import SearchIcon from "../../../assets/images/search-grey.png";
import "./style.scss";

export default class Filters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            priceRangeValue: {
                min: this.props.filterConfig.price_config.min_price,
                max: this.props.filterConfig.price_config.max_price
            },
            promotionsData: this.props.filterConfig.promotion_categories,
            tagsData: this.props.filterConfig.tags,
            venuesData: this.props.venueData,
            genreData: this.props.genreData,
            venueFilterPanelDisplay: false,
            tagShowLimit: 5,
            genreShowLimit: 5,
            venueShowLimit: 5,
            search: "",
            from: undefined,
            to: undefined,
            checkUncheckGnereActiveClass: false,
            checkUncheckTagsActiveClass: false,
            checkUncheckPromotionsActiveClass: false
        };

    }

    componentWillMount() {
        this.applyIsChecked(true); //Value true passed for check route params
    }

    componentDidUpdate(preProps) {
        if (this.props.queryParams.genreId != preProps.queryParams.genreId) {
            this.applyIsChecked(true); //Value true passed for check route params
        }
    }

    applyIsChecked = (status) => {
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

        this.setRoutedParams(status);

    };

    setRoutedParams = (status) => {
        if (status && this.props.queryParams.dateRange) this.setState({ from: moment(this.props.queryParams.dateRange.from, 'DD-MM-YYYY').format('MM/DD/YYYY'), to: moment(this.props.queryParams.dateRange.to, 'DD-MM-YYYY').format('MM/DD/YYYY') })
    }


    // Clear all the filters
    clearAllFilters = () => {
        this.setState({
            search: "",
            priceRangeValue: {
                min: this.props.filterConfig.price_config.min_price,
                max: this.props.filterConfig.price_config.max_price
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

    //Genres
    checkUncheckAllGenre = status => {
        let genreData = this.state.genreData;
        let genreIds = [];
        genreData.map(genre => {
            genre.isChecked = status;
            genreIds.push(genre.id);
        });
        this.setState({ genreData: genreData, checkUncheckGnereActiveClass: status });
        if (!status) {
            genreIds = [];
        }
        this.props.handleFilters("genre-check-uncheck", genreIds);
    };

    showMoreLessGenre = status => {
        if (status) {
            this.setState({ genreShowLimit: this.state.genreData.length });
        } else {
            this.setState({ genreShowLimit: 5 });
        }
    };

    checkUnckeckGenre = (e, key) => {
        let genreData = this.state.genreData;
        genreData[key].isChecked = e.target.checked;
        this.setState({ genreData: genreData });
        this.props.handleFilters("genre", genreData[key].id, e.target.checked);
    };

    // Promotions
    checkUncheckPromotions = (e, key) => {
        let promotionsData = this.state.promotionsData;
        promotionsData[key].isChecked = e.target.checked;
        this.setState({ promotionsData: promotionsData });
        this.props.handleFilters(
            "promotions",
            promotionsData[key].id,
            e.target.checked
        );
    };

    checkUncheckAllPromotions = status => {
        let promotionsData = this.state.promotionsData;
        let promotionsIds = [];
        promotionsData.map(promotion => {
            promotion.isChecked = status;
            promotionsIds.push(promotion.id);
        });
        this.setState({ promotionsData: promotionsData, checkUncheckPromotionsActiveClass: status });
        if (!status) {
            promotionsIds = [];
        }
        this.props.handleFilters("promotions-check-uncheck", promotionsIds, status);
    };

    // Tags
    checkUncheckTags = (e, key) => {
        let tagsData = this.state.tagsData;
        tagsData[key].isChecked = e.target.checked;
        this.setState({ tagsData: tagsData });
        this.props.handleFilters("tags", tagsData[key].id, e.target.checked);
    };

    checkUncheckAllTags = status => {
        let tagsData = this.state.tagsData;
        let tagsIds = [];
        tagsData.map(tag => {
            tag.isChecked = status;
            tagsIds.push(tag.id);
        });
        this.setState({ tagsData: tagsData, checkUncheckTagsActiveClass: status });
        if (!status) {
            tagsIds = [];
        }
        this.props.handleFilters("tags-check-uncheck", tagsIds, status);
    };

    showMoreLessTags = status => {
        if (status) {
            this.setState({ tagShowLimit: this.state.tagsData.length });
        } else {
            this.setState({ tagShowLimit: 5 });
        }
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
            from: '',
            to: ''
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
        const { price_config } = filterConfig;
        const {
            from,
            to,
            promotionsData,
            genreData,
            tagsData,
            venuesData,
            search,
            venueFilterPanelDisplay,
            genreShowLimit,
            tagShowLimit,
            venueShowLimit
        } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div>
                <div className="apply-filter-mob">
                    <div className="title">
                        <a>
                            <img src="assets/images/bakcarrow.svg" /> Filters
            </a>
                        <a>Clear All</a>
                    </div>
                    <div className="filters-search">
                        <button type="submit" className="search-btn">
                            <img
                                src="assets/images/search-blue.svg"
                                className="img-fluid active"
                                alt="search-icon"
                            />
                        </button>
                        <input
                            type="text"
                            placeholder="Search experiences..."
                            className="form-control"
                        />
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Price Range</Tab>
                            <Tab>
                                Genre <span />
                            </Tab>
                            <Tab>Date Range</Tab>
                            <Tab>Promotion</Tab>
                            <Tab>Venue</Tab>
                        </TabList>
                        <TabPanel>
                            {/* <InputRange
                                maxValue={price_config && price_config.max_price}
                                minValue={price_config && price_config.min_price}
                                value={this.state.value}
                                onChange={value => this.setState({ value })} /> */}
                        </TabPanel>
                        <TabPanel>
                            <div className="list-head">
                                <div className="all-selection">
                                    <input
                                        className="styled-checkbox"
                                        type="checkbox"
                                        id="styled-checkbox-8"
                                        value=""
                                    />
                                    <label htmlFor="styled-checkbox-8">Student discount</label>
                                </div>
                                <a href="/" className="clear">
                                    Clear
                </a>
                            </div>
                            <div className="filters-list">
                                <ul>
                                    <li>
                                        <input
                                            className="styled-checkbox"
                                            type="checkbox"
                                            id="styled-checkbox-8"
                                            value=""
                                        />
                                        <label htmlFor="styled-checkbox-8">Concert (23)</label>
                                    </li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel />
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="list-head">
                                <div className="all-selection">
                                    <input
                                        className="styled-checkbox"
                                        type="checkbox"
                                        id="styled-checkbox-8"
                                        value=""
                                    />
                                    <label htmlFor="styled-checkbox-8">Student discount</label>
                                </div>
                                <a href="/" className="clear">
                                    Clear
                </a>
                            </div>
                            <div className="filters-list">
                                <ul>
                                    <li>
                                        <input
                                            className="styled-checkbox"
                                            type="checkbox"
                                            id="styled-checkbox-8"
                                            value=""
                                        />
                                        <label htmlFor="styled-checkbox-8">
                                            Amara Singapore, Ballroom 1&2
                    </label>
                                    </li>
                                </ul>
                            </div>
                        </TabPanel>
                    </Tabs>
                    <button className="apply-filter" type="button">
                        Apply
          </button>
                </div>
                <div className="mobileview-filter">
                    <div className="sortby-bg" />
                    <div className="sortby-filter">
                        <div className="filter-title">
                            <span>Sort By</span>
                            <a href="/">
                                <img src="assets/images/close-blue-color.svg" alt="" />
                            </a>
                        </div>
                        <ul>
                            <li>Events - A to Z</li>
                            <li>Events - Z to A</li>
                            <li>Price Low to High</li>
                            <li>Price High to Low</li>
                            <li className="active">Date</li>
                        </ul>
                    </div>
                </div>
                <div className="filters-mob">
                    <a>Sort By</a>
                    <a>Filter</a>
                </div>
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
                            <InputRange
                                ref="input_range"
                                formatLabel={value => `${'S$' + value}`}
                                maxValue={parseInt(price_config && price_config.max_price)}
                                minValue={parseInt(price_config && price_config.min_price)}
                                value={this.state.priceRangeValue}
                                onChange={value => this.setPriceRange(value)}
                                onChangeComplete={(value) => this.props.handleFilters("price-range", value, "")}
                            />
                        </div>
                    </div>
                    <div className="filter-grid">
                        <div className="filter-grid-heading">
                            <h3>Genre</h3>
                            <ul>
                                <li className={this.state.checkUncheckGnereActiveClass ? 'active' : ''}>
                                    <a onClick={() => this.checkUncheckAllGenre(true)}>
                                        Select all
                  </a>
                                </li>
                                <li className={this.state.checkUncheckGnereActiveClass ? '' : 'active'}>
                                    <a onClick={() => this.checkUncheckAllGenre(false)}>Clear</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filters-panel">
                            <ul>
                                <CSSTransitionGroup
                                    transitionName="dropdown"
                                    transitionEnter={true}
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}>
                                    {genreData.length &&
                                        genreData.slice(0, genreShowLimit).map((genre, key) => {
                                            let id = "genre-" + genre.id;
                                            return (
                                                <li key={key}>
                                                    <input
                                                        checked={genre.isChecked}
                                                        onChange={e => this.checkUnckeckGenre(e, key)}
                                                        className="styled-checkbox"
                                                        type="checkbox"
                                                        id={id}
                                                        value=""
                                                    />
                                                    <label htmlFor={id}>
                                                        {genre.name} ({genre.events_count})
                        </label>
                                                </li>
                                            );
                                        })}
                                </CSSTransitionGroup>
                            </ul>
                            {genreData.length > genreShowLimit && (
                                <a
                                    onClick={() => this.showMoreLessGenre(true)}
                                    className="view-all-filters"
                                >
                                    + {genreData.length - genreShowLimit} More
                </a>
                            )}
                            {genreData.length == genreShowLimit && (
                                <a
                                    onClick={() => this.showMoreLessGenre(false)}
                                    className="view-all-filters"
                                >
                                    Show Less
                </a>
                            )}
                        </div>
                    </div>
                    <div className="filter-grid">
                        <div className="filter-grid-heading">
                            <h3>Tags</h3>
                            <ul>
                                <li className={this.state.checkUncheckTagsActiveClass ? 'active' : ''}>
                                    <a onClick={() => this.checkUncheckAllTags(true)}>
                                        Select all
                  </a>
                                </li>
                                <li className={this.state.checkUncheckTagsActiveClass ? '' : 'active'}>
                                    <a onClick={() => this.checkUncheckAllTags(false)}>Clear</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filters-panel">
                            <ul>
                                <CSSTransitionGroup
                                    transitionName="dropdown"
                                    transitionEnter={true}
                                    transitionEnterTimeout={300}
                                    transitionLeaveTimeout={300}>
                                    {tagsData &&
                                        tagsData.slice(0, tagShowLimit).map((tag, key) => {
                                            let id = "tags-" + tag.id;
                                            return (
                                                <li key={key}>
                                                    <input
                                                        key={key}
                                                        checked={tag.isChecked}
                                                        onChange={e => this.checkUncheckTags(e, key)}
                                                        className="styled-checkbox"
                                                        type="checkbox"
                                                        id={id}
                                                    />
                                                    <label htmlFor={id}>{tag.name}</label>
                                                </li>
                                            );
                                        })}
                                </CSSTransitionGroup>
                            </ul>
                            {tagsData.length > tagShowLimit && (
                                <a
                                    onClick={() => this.showMoreLessTags(true)}
                                    className="view-all-filters"
                                >
                                    + {tagsData.length - tagShowLimit} More
                </a>
                            )}
                            {tagsData.length == tagShowLimit && (
                                <a
                                    onClick={() => this.showMoreLessTags(false)}
                                    className="view-all-filters"
                                >
                                    Show Less
                </a>
                            )}
                        </div>
                    </div>
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
                                            numberOfMonths: 1,
                                            //   onDayClick: () => this.from.getInput().focus()
                                        }}
                                        onDayChange={this.handleToChange}
                                    />
                                </span>
                            </div>
                            <a onClick={this.filterByDateRange} class="cal-apply-btn active">
                                <img src="/static/media/tick-grey.0af2386c.svg" alt="" />
                                <img
                                    src="/static/media/tick-white.a08b5f03.svg"
                                    class="active"
                                    alt=""
                                />
                            </a>
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
                                        color: #FFFFFF;
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
                    <div className="filter-grid">
                        <div className="filter-grid-heading">
                            <h3>Promotion</h3>
                            <ul>
                                <li className={this.state.checkUncheckPromotionsActiveClass ? 'active': ''}>
                                    <a onClick={() => this.checkUncheckAllPromotions(true)}>
                                        Select all
                  </a>
                                </li>
                                <li className={this.state.checkUncheckPromotionsActiveClass ? '': 'active'}>
                                    <a onClick={() => this.checkUncheckAllPromotions(false)}>
                                        Clear
                  </a>
                                </li>
                            </ul>
                        </div>
                        <div className="filters-panel">
                            <ul>
                                {promotionsData &&
                                    promotionsData.map((promotion, key) => {
                                        let id = "promotions-" + promotion.id;
                                        return (
                                            <li key={key}>
                                                <input
                                                    key={key}
                                                    checked={promotion.isChecked}
                                                    onChange={e => this.checkUncheckPromotions(e, key)}
                                                    className="styled-checkbox"
                                                    type="checkbox"
                                                    id={id}
                                                />
                                                <label htmlFor={id}>{promotion.name}</label>
                                            </li>
                                        );
                                    })}
                            </ul>
                            {/* <a className="view-all-filters">
                                + 4 More
                    </a> */}
                        </div>
                    </div>
                    <div className="filter-grid">
                        <div className="filter-grid-heading">
                            <h3>Venue</h3>
                            <ul>
                                {/* <li className="">
                                    <a onClick={() => this.checkUncheckAllVenues(true)}>Select All</a>
                                </li> */}
                                <li className="active">
                                    <a onClick={() => this.checkUncheckAllVenues(false)}>Clear</a>
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
                                onClick={() => this.setOpenVenuePanel(true, this.venuePopUpRef)}
                                className="view-all-filters"
                            >
                                + {venuesData.length - venueShowLimit} More
              </a>
                        </div>
                        {/* Venue filter component. */}
                        <VenueFilter ref={(node) => this.venuePopUpRef = node}
                            checkUncheckVenues={this.checkUncheckVenues}
                            setOpenVenuePanel={this.setOpenVenuePanel}
                            venueFilterPanelDisplay={venueFilterPanelDisplay}
                            venueData={venueData}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
