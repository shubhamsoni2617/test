import React, { Component } from 'react';
import { GridView } from '../../../assets/images/grid-view.svg';
import { ListView } from '../../../assets/images/list-view.svg';
import './style.scss';

export default class SortBy extends Component {

    constructor(props) {
        super(props);
        this.state = {
            sort: { tag: 'Date', active: '' },
            showSortMenu: false
        }
    }

    componentDidMount() {   
    }

    setSortFilter = (tag, sortBy, order) => {
        this.setState({ sort: { tag: tag } })
        this.setState({ showSortMenu: false }, () => {
            document.removeEventListener('click', this.closeSortMenu);
        });
        let handleFilters = this.props.handleFilters;
        handleFilters(sortBy, order);
    }

    showSortMenu = () => {
        this.setState({ showSortMenu: true }, () => {
            document.addEventListener('click', this.closeSortMenu);
        });
    }

    closeSortMenu = () => {
        this.setState({ showSortMenu: false }, () => {
            document.removeEventListener('click', this.closeSortMenu);
        });
    }


    render() {
        const { handleListGridView, handleFilters } = this.props
        const { sort } = this.state;

        return (
            <div className="sortby">
                <div className="sortby-filter">
                    <div onClick={this.showSortMenu} className="filter-topbar">
                        <span className="sortby-text">Sort by:</span>
                        <span className="active-filter">{sort.tag}</span>
                    </div>
                    {this.state.showSortMenu
                        ? (
                            <ul>
                                <li onClick={() => this.setSortFilter('A to Z', 'sort', 'ASC')}>Events - A to Z</li>
                                <li onClick={() => this.setSortFilter('Z to A', 'sort', 'DESC')}>Events - Z to A</li>
                                <li onClick={() => this.setSortFilter('Price Low to High', 'price', 'ASC')}>Price Low to High</li>
                                <li onClick={() => this.setSortFilter('Price High to Low', 'price', 'DESC')}>Price High to Low</li>
                                <li onClick={() => this.setSortFilter('Date', 'date', '')}>Date</li>
                            </ul>
                        )
                        : (null)
                    }
                </div>
                <ul className="sortby-view">
                    <li className="active">
                        <a><img onClick={() => handleListGridView('grid')} src={GridView} alt="Grid" /></a>
                    </li>
                    <li>
                        <a><img onClick={() => handleListGridView('list')} src={ListView} alt="List" /></a>
                    </li>
                </ul>
            </div>
        )
    }
}