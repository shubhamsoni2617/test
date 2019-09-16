import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';

import './style.scss';

export default class SortBy extends Component {
  state = {
    sort: { tag: 'Date', active: '' },
    showSortMenu: false
  };

  componentDidMount() {}

  setSortFilter = (tag, sortBy, order) => {
    this.setState({ sort: { tag: tag } });
    this.setState({ showSortMenu: false }, () => {
      document.removeEventListener('click', this.closeSortMenu);
    });
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
    const { sortList } = this.props;
    const { sort } = this.state;

    return (
      <div className="sortby">
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
            <div className="sortby-topbar-mobileonly" style={{display: "none"}}>
              <div className="left-arrow-sortby"><img src="../../assets/images/next.svg" /><span> Sort By</span></div>
              <a href="" className="clear-filter-sortby">clear filters</a>
            </div>
            {this.state.showSortMenu ? (
              <ul>
                {sortList &&
                  sortList.map((list, index) => {
                    return (
                      <li
                        key={index}
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
            <a href="" className="sortby-apply-mobileonly" style={{display: "none"}}>Apply</a>
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
