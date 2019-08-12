import React from 'react'
import PromotionCard from '../PromotionCard';
import './style.scss';
import SortBy from '../SortBy';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import DownArrow from '../../../assets/images/down-arrow-blue.svg';

const Tab = (props) => {

  const { handleLoadMore, tabsSort, handleFilters, limit } = props;
  const { first, listingArray, totalRecords } = props.state;

  return (
    <div>
      {listingArray.length === 0 ?
        <ShimmerEffect height={150} count={5} type="grid" />
        :
        <div className="promotion-grid">
          <div className="sortby-filter">
            {tabsSort && tabsSort.isSortBy && <SortBy handleFilters={handleFilters} sortList={tabsSort.sortList} />}
          </div>
          <div className="tab-content-wrapper">
            <ul className="promotions-listing">
              {listingArray && listingArray.map((elem, index) => {
                return (
                  <PromotionCard data={elem} key={index} {...props} />
                );
              })
              }
            </ul>
          </div>
          {totalRecords - listingArray.length > 0 &&
            <div className="promotion-load-more" onClick={() => handleLoadMore((first + limit))}>
              <a className="btn-link load-more-btn">
                <span>Load More ({totalRecords - listingArray.length})</span>
                <img src={DownArrow} alt="down-arrow" />
              </a>
            </div>
          }
        </div>
      }
    </div>
  )
}

export default Tab;
