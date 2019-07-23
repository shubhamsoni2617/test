import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './style.scss';

export default class Filters extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
  } 

  render() {
    return (
        <div>
            <div className="apply-filter-mob">
                <div className="title">
                    <a href="/"><img src="assets/images/bakcarrow.svg" /> Filters</a>
                    <a href="/">Clear All</a>
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
                            <img src="assets/images/close-blue-color.svg" alt=""/>
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
                        <li>
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-1" value="" />
                            <label for="styled-checkbox-1">
                                Concert (23)
                            </label>
                        </li>
                        <li >
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-2" value="" />
                            <label for="styled-checkbox-2">
                                Comedy (12)
                            </label>
                        </li>
                        <li >
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-3" value="" />
                            <label for="styled-checkbox-3">
                                Dance (32)
                            </label>
                        </li>
                        <li >
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-4" value="" />
                            <label for="styled-checkbox-4">
                                Family (2)
                            </label>
                        </li>
                        <li >
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-5" value="" />
                            <label for="styled-checkbox-5">
                                Theatre (22)
                            </label>
                        </li>
                        <li >
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-6" value="" />
                            <label for="styled-checkbox-6">
                                Sports (12)
                            </label>
                        </li>
                        <li >
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-7" value="" />
                            <label for="styled-checkbox-7">
                                Orchestra (1)
                            </label>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="filter-grid">
                <div className="filter-grid-heading">
                    <h3>Date Range</h3>
                    <ul>
                        <li className="active">
                            <a href="">Clear</a>
                        </li>
                    </ul>
                </div>
                <div className="filters-panel">
                    <div className="form-group">
                        <label>From</label>
                        <input type="text" placeholder="mm/dd/yyyy" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <label>To</label>
                        <input type="text" placeholder="mm/dd/yyyy" className="form-control"/>
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
                        <li>
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-8" value="" />
                            <label for="styled-checkbox-8">
                                Student discount
                            </label>
                        </li>
                        <li>
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                            <label for="styled-checkbox-9">
                                General
                            </label>
                        </li>
                        <li>
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-10" value="" />
                            <label for="styled-checkbox-10">
                                Group discount
                            </label>
                        </li>
                        <li>
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-11" value="" />
                            <label for="styled-checkbox-11">
                                Flash sale
                            </label>
                        </li>
                    </ul>
                    <a href="/" className="view-all-filters">
                        + 4 More
                    </a>
                </div>
            </div>
            <div className="filter-grid">
                <div className="filter-grid-heading">
                    <h3>Venue</h3>
                    <ul>
                        <li className="active">
                            <a href="/">Clear</a>
                        </li>
                    </ul>
                </div>
                <div className="filters-panel">
                    <ul>
                        <li>
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-12" value="" />
                            <label for="styled-checkbox-12">
                                Esplanade Concert Hall
                            </label>
                        </li>
                        <li>
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-13" value="" />
                            <label for="styled-checkbox-13">
                                Sands Theatre at Marina Bay Sands
                            </label>
                        </li>
                        <li>
                            <input className="styled-checkbox" type="checkbox" id="styled-checkbox-14" value="" />
                            <label for="styled-checkbox-14">
                                Victoria Theatre
                            </label>
                        </li>
                    </ul>
                    <a href="/" className="view-all-filters">
                        + 94 More
                    </a>
                    <div className="filter-directory-panel">
                        <div className="filter-directory-titlebar">
                            <div className="filter-directory-heading">
                                <h3>Venue</h3>
                                <span className="filter-directory-close"> 
                                    <img src="assets/images/close-icon.svg" alt="Close"/>
                                </span>
                            </div>
                            <div className="filter-directory-indices-list">
                                <input type="text" placeholder="Search brand" className="filter-directory-search-input"/>
                                <ul className="filter-directory-indices">
                                    <li data-item="#" className="">#</li>
                                    <li data-item="a" className="">a</li>
                                    <li data-item="b" className="">b</li>
                                    <li data-item="c" className="">c</li>
                                    <li data-item="d" className="">d</li>
                                    <li data-item="e" className="">e</li>
                                    <li data-item="f" className="">f</li>
                                    <li data-item="g" className="">g</li>
                                    <li data-item="h" className="">h</li>
                                    <li data-item="i" className="">i</li>
                                    <li data-item="j" className="">j</li>
                                    <li data-item="k" className="">k</li>
                                    <li data-item="l" className="">l</li>
                                    <li data-item="m" className="">m</li>
                                    <li data-item="n" className="">n</li>
                                    <li data-item="o" className="">o</li>
                                    <li data-item="p" className="">p</li>
                                    <li data-item="q" className="">q</li>
                                    <li data-item="r" className="">r</li>
                                    <li data-item="s" className="">s</li>
                                    <li data-item="t" className="">t</li>
                                    <li data-item="u" className="">u</li>
                                    <li data-item="v" className="">v</li>
                                    <li data-item="w" className="">w</li>
                                    <li data-item="x" className="filter-directory-disabled">x</li>
                                    <li data-item="y" className="">y</li>
                                    <li data-item="z" className="">z</li>
                                </ul>
                            </div>
                        </div>
                        <ul className="filter-directory-list">
                            <li className="filter-directory-list-title">A</li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li className="filter-directory-list-title ">A</li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li className="filter-directory-list-title ">A</li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li className="filter-directory-list-title ">A</li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li className="filter-directory-list-title ">A</li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li className="filter-directory-list-title ">A</li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                            <li>
                                <input className="styled-checkbox" type="checkbox" id="styled-checkbox-9" value="" />
                                <label for="styled-checkbox-9">
                                    General
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
  }
}