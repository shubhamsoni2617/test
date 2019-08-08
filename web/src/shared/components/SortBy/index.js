import React, { Component } from 'react';
import './style.scss';

export default class SortBy extends Component {

    constructor(props) {
        super(props);
        console.log('props', props)
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
        const { handleListGridView, sortList } = this.props
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
                                {sortList && sortList.map((list, index) => {
                                    return <li key={index} onClick={() => this.setSortFilter(list.sortTitle, list.sortType, list.sortOrder)}>{list.sortTag}</li>
                                })}
                            </ul>
                        )
                        : (null)
                    }
                </div>
            </div>
        )
    }
}