import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import InputRange from 'react-input-range';
import VenueFilter from '../VenueFilter';
import moment from 'moment';
import Helmet from 'react-helmet';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import MomentLocaleUtils, { formatDate, parseDate } from 'react-day-picker/moment';
import 'react-day-picker/lib/style.css';
import "react-tabs/style/react-tabs.css";
import "react-input-range/lib/css/index.css";
import './style.scss';

export default class Filters extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: { min: 200, max: 800 },
            from: undefined,
            to: undefined,
        };
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
    }

    clearCalender() {
    }

    showFromMonth() {
        const { from, to } = this.state;
        if (!from) {
            return;
        }
        if (moment(to).diff(moment(from), 'months') < 2) {
            this.to.getDayPicker().showMonth(from);
        }
    }

    handleFromChange(from) {
        // Change the from date and focus the "to" input field
        this.setState({ from });
    }

    handleToChange(to) {
        this.setState({ to }, this.showFromMonth);
    }


    componentDidMount() {

    }

    render() {
        const { genreData, venueData, filterConfig, handleFilters} = this.props;
        const { promotion_categories, price_config } = filterConfig;
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };

        return (
            <div>
                <div className="apply-filter-mob">
                    <div className="title">
                        <a><img src="assets/images/bakcarrow.svg" /> Filters</a>
                        <a>Clear All</a>
                    </div>
                    <div className="filters-search">
                        <button type="submit" className="search-btn">
                            <img src="assets/images/search-blue.svg" className="img-fluid active" alt="search-icon" />
                        </button>
                        <input type="text" placeholder="Search experiences..." className="form-control" />
                    </div>
                    <Tabs>
                        <TabList>
                            <Tab>Price Range</Tab>
                            <Tab>Genre <span></span></Tab>
                            <Tab>Date Range</Tab>
                            <Tab>Promotion</Tab>
                            <Tab>Venue</Tab>
                        </TabList>
                        <TabPanel>
                            <h2>Any content 1</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="list-head">
                                <div className="all-selection">
                                    <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                    <label for="styled-checkbox-8">
                                        Student discount
                                </label>
                                </div>
                                <a href="/" className="clear">Clear</a>
                            </div>
                            <div className="filters-list">
                                <ul>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Concert (23)
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Musical (34)
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Comedy (12)
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Dance (32)
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Family (2)
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Theatre (22)
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Sports (12)
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Orchestra (1)
                                    </label>
                                    </li>
                                </ul>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                            <div className="list-head">
                                <div className="all-selection">
                                    <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                    <label for="styled-checkbox-8">
                                        Student discount
                                </label>
                                </div>
                                <a href="/" className="clear">Clear</a>
                            </div>
                            <div className="filters-list">
                                <ul>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Amara Singapore, Ballroom 1&2
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Anglo-Chinese Junior College
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Bay Front Avenue
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Bay Front Avenue
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Bukit Jalil Extreme Park
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Capitol Theatre
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Capella Singapore
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Amara Singapore, Ballroom 1&2
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Anglo-Chinese Junior College
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Bay Front Avenue
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Bay Front Avenue
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Bukit Jalil Extreme Park
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Capitol Theatre
                                    </label>
                                    </li>
                                    <li>
                                        <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                                        <label for="styled-checkbox-8">
                                            Capella Singapore
                                    </label>
                                    </li>
                                </ul>
                            </div>
                        </TabPanel>
                    </Tabs>
                    <button className="apply-filter" type="button">Apply</button>
                </div>
                <div className="mobileview-filter">
                    <div className="sortby-bg"></div>
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
                    <a href="/">Sort By</a>
                    <a href="/">Filter</a>
                </div>
                <div className="filters">
                    <div className="filter-heading">
                        <h3>Filters <a href="">Clear all</a></h3>
                    </div>
                    <div className="filters-search">
                        <button type="submit" className="search-btn">
                            <img src="assets/images/search-blue.svg" className="img-fluid active" alt="search-icon" />
                        </button>
                        <input type="text" placeholder="Search experiences..." className="form-control" />
                    </div>
                    <div className="filter-grid">
                        <div className="filter-grid-heading">
                            <h3>Price Range</h3>
                            <ul>
                                <li className="active">
                                    <a href="">Clear</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filters-panel">
                            <InputRange
                                maxValue={price_config && price_config.max_price}
                                minValue={price_config && price_config.min_price}
                                value={this.state.value}
                                onChange={value => this.setState({ value })} />
                        </div>
                    </div>
                    <div className="filter-grid">
                        <div className="filter-grid-heading">
                            <h3>Genre</h3>
                            <ul>
                                <li>
                                    <a href="">Select all</a>
                                </li>
                                <li className="active">
                                    <a href="">Clear</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filters-panel">
                            <ul>
                                {genreData.length && genreData.map((genre) => {
                                    return <li key={genre.id}>
                                        <input key={genre.id} className="styled-checkbox" type="checkbox" id="styled-checkbox-1" value="" />
                                        <label for="styled-checkbox-1">
                                            {genre.name} ({genre.events_count})
                        </label></li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="filter-grid">
                        <div className="filter-grid-heading">
                            <h3>Date Range</h3>
                            <ul>
                                <li className="active">
                                    <a>Clear</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filters-panel">
                            <label>From</label>
                            <div className="InputFromTo">

                                <DayPickerInput
                                    ref={el => (this.from = el)}
                                    value={from}
                                    placeholder="mm/dd/yyyy"
                                    format="MM/DD/YYYY"
                                    formatDate={formatDate}
                                    parseDate={parseDate}
                                    dayPickerProps={{
                                        selectedDays: [from, { from, to }],
                                        disabledDays: { after: to },
                                        toMonth: to,
                                        modifiers,
                                        numberOfMonths: 1,
                                        onDayClick: () => this.to.getInput().focus(),
                                    }}
                                    onDayChange={this.handleFromChange}
                                />
                                <label>To</label>
                                <span className="InputFromTo-to">

                                    <DayPickerInput
                                        ref={el => (this.to = el)}
                                        value={to}
                                        placeholder="mm/dd/yyyy"
                                        format="MM/DD/YYYY"
                                        formatDate={formatDate}
                                        parseDate={parseDate}
                                        dayPickerProps={{
                                            selectedDays: [from, { from, to }],
                                            disabledDays: { before: from },
                                            modifiers,
                                            month: from,
                                            fromMonth: from,
                                            numberOfMonths: 1,
                                            onDayClick: () => this.from.getInput().focus(),

                                        }}
                                        onDayChange={this.handleToChange}
                                    />
                                </span>
                                <Helmet>
                                    <style>{`
  .InputFromTo .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
    background-color: #f0f8ff !important;
    color: #4a90e2;
  }
  .InputFromTo .DayPicker-Day {
    border-radius: 0 !important;
  }
  .InputFromTo .DayPicker-Day--start {
    border-top-left-radius: 50% !important;
    border-bottom-left-radius: 50% !important;
  }
  .InputFromTo .DayPicker-Day--end {
    border-top-right-radius: 50% !important;
    border-bottom-right-radius: 50% !important;
  }
  .InputFromTo .DayPickerInput-Overlay {
    width: 250px;
  }
  .InputFromTo-to .DayPickerInput-Overlay {
    margin-left: 0px;
  }
`}</style>
                                </Helmet>
                            </div>


                        </div>
                    </div>
                    <div className="filter-grid">
                        <div className="filter-grid-heading">
                            <h3>Promotion</h3>
                            <ul>
                                <li>
                                    <a href="">Select all</a>
                                </li>
                                <li className="active">
                                    <a href="">Clear</a>
                                </li>
                            </ul>
                        </div>
                        <div className="filters-panel">
                            <ul>
                                {promotion_categories && promotion_categories.map((promotion) => {
                                    return <li key={promotion.id}>
                                        <input onChange={(e)=>handleFilters('promotions', promotion.id, e.target.checked)} key={promotion.id} className="styled-checkbox" type="checkbox" id={promotion.id} />
                                        <label htmlFor={promotion.id}>
                                            {promotion.name}
                                        </label>
                                    </li>
                                })}
                            </ul>
                            <a className="view-all-filters">
                                + 4 More
                    </a>
                        </div>
                    </div>
                    <div className="filter-grid">
                        {/* Venue filter component. */}
                        <VenueFilter venueData={venueData} />
                    </div>
                </div>
            </div>
        )
    }
}