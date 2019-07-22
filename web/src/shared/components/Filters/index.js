import React, { Component } from 'react'
import './style.scss';

export default class Filters extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
  } 

  render() {
    return (
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
                        <div class="FilterDirectory-titleBar">
                            <div className="FilterDirectory-heading">
                                <h3>Venue</h3>
                                <span class="FilterDirectory-close"> 
                                    <img src="assets/images/close-icon.svg" alt="Close"/>
                                </span>
                            </div>
                            <div className="FilterDirectory-indices-list">
                                <input type="text" placeholder="Search brand" class="FilterDirectory-searchInput"/>
                                <ul class="FilterDirectory-indices">
                                    <li data-item="#" class="">#</li>
                                    <li data-item="a" class="">a</li>
                                    <li data-item="b" class="">b</li>
                                    <li data-item="c" class="">c</li>
                                    <li data-item="d" class="">d</li>
                                    <li data-item="e" class="">e</li>
                                    <li data-item="f" class="">f</li>
                                    <li data-item="g" class="">g</li>
                                    <li data-item="h" class="">h</li>
                                    <li data-item="i" class="">i</li>
                                    <li data-item="j" class="">j</li>
                                    <li data-item="k" class="">k</li>
                                    <li data-item="l" class="">l</li>
                                    <li data-item="m" class="">m</li>
                                    <li data-item="n" class="">n</li>
                                    <li data-item="o" class="">o</li>
                                    <li data-item="p" class="">p</li>
                                    <li data-item="q" class="">q</li>
                                    <li data-item="r" class="">r</li>
                                    <li data-item="s" class="">s</li>
                                    <li data-item="t" class="">t</li>
                                    <li data-item="u" class="">u</li>
                                    <li data-item="v" class="">v</li>
                                    <li data-item="w" class="">w</li>
                                    <li data-item="x" class="FilterDirectory-disabled">x</li>
                                    <li data-item="y" class="">y</li>
                                    <li data-item="z" class="">z</li>
                                </ul>
                            </div>
                        </div>
                        <ul className="FilterDirectory-list">
                            <li className="FilterDirectory-listTitle ">A</li>
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
                            <li className="FilterDirectory-listTitle ">A</li>
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
                            <li className="FilterDirectory-listTitle ">A</li>
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
                            <li className="FilterDirectory-listTitle ">A</li>
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
                            <li className="FilterDirectory-listTitle ">A</li>
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
                            <li className="FilterDirectory-listTitle ">A</li>
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
    )
  }
}