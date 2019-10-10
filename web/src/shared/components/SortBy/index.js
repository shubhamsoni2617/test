import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import Utilities from '../../utilities';
import prevArrow from '../../../assets/images/prev-arrow-white.svg';
// import useOrientation from '../../hooks/useOrientation';

import './style.scss';

export default class SortBy extends Component {
  state = {
    sort: {
      tag: this.props.defaultSortType ? this.props.defaultSortType : 'Date',
      active: ''
    },
    showSortMenu: Utilities.mobilecheck() ? true : false,
    orientation: ''
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize = () => {
    if (window.innerWidth > window.innerHeight) {
      this.setState({ showSortMenu: false });
    } else {
      this.setState({ showSortMenu: true });
    }
  };

  setSortFilter = (tag, sortBy, order) => {
    this.setState({ sort: { tag: tag } });
    if (!Utilities.mobilecheck()) {
      this.setState({ showSortMenu: false }, () => {
        document.removeEventListener('click', this.closeSortMenu);
      });
    }
    this.props.handleFilters({
      filteredSortType: sortBy,
      filteredSortOrder: order
    });
  };

  showSortMenu = () => {
    this.setState({ showSortMenu: true }, () => {
      document.addEventListener('click', this.closeSortMenu);
    });
  };

  closeSortMenu = () => {
    this.setState({ showSortMenu: false }, () => {
      document.removeEventListener('click', this.closeSortMenu);
    });
  };

  render() {
    const {
      sortList,
      filteredSortType,
      filteredSortOrder,
      goBack,
      clearSortFilters
    } = this.props;
    const { sort } = this.state;
    return (
      <div className={`sortby ${this.props.sortByFlag ? 'open' : ''}`}>
        <div className="sortby-filter">
          <div onClick={this.showSortMenu} className="filter-topbar">
            <span className="sortby-text">Sort by:</span>
            <span className="active-filter">{sort.tag}</span>
          </div>
          <CSSTransitionGroup
            transitionName="dropdown"
            transitionEnter={true}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <div className="sortby-topbar-mobileonly">
              <div className="left-arrow-sortby">
                {/* <a onClick={goBack}>
                  <img src={prevArrow} alt="left-arrow" />
                </a> */}
                <span> Sort By</span>
                <a className="clear-filters" onClick={clearSortFilters}>
                  Clear Filters
                </a>
              </div>
            </div>
            {this.state.showSortMenu ? (
              <ul className="sortby-wrapper">
                {sortList &&
                  sortList.map((list, index) => {
                    return (
                      <li
                        key={index}
                        className={`${
                          (list.sortOrder === filteredSortOrder &&
                            list.sortType === filteredSortType) ||
                          (this.props.promotion &&
                            list.sortOrder === filteredSortOrder)
                            ? 'checked'
                            : ''
                        }`}
                        onClick={() =>
                          this.setSortFilter(
                            list.sortTitle,
                            list.sortType,
                            list.sortOrder
                          )
                        }
                      >
                        {list.sortTag}
                      </li>
                    );
                  })}
              </ul>
            ) : null}
            {this.props.children}
          </CSSTransitionGroup>
        </div>
      </div>
    );
  }
}

SortBy.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  sortList: PropTypes.array.isRequired
};
