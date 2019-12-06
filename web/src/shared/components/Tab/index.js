import React, { Fragment } from 'react';
import PromotionCard from '../PromotionCard';
import './style.scss';
import SortBy from '../SortBy';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import DownArrow from '../../../assets/images/down-arrow-blue.svg';
import Utilities from '../../utilities';

const Tab = props => {
  const { handleLoadMore, tabsSort, handleFilters, limit } = props;
  const { first, listingArray, totalRecords } = props.state;

  return (
    <Fragment>
      <div className="promotion-grid">
        <div className="sortby-filter">
          {tabsSort && tabsSort.isSortBy && (
            <SortBy
              defaultSortType="Promotion Date - Earliest to Lates"
              handleFilters={handleFilters}
              sortList={tabsSort.sortList}
            />
          )}
        </div>
        <div className="tab-content-wrapper">
          <div className="promotions-listing">
            {listingArray.length === 0 ? (
              <ShimmerEffect
                height={Utilities.mobilecheck() ? 200 : 400}
                count={Utilities.mobilecheck() ? 2 : 4}
                type="SOLID"
                propCls={`shm_col-xs-2 col-md-${
                  Utilities.mobilecheck() ? 12 : 6
                }`}
              />
            ) : (
              listingArray.map((elem, index, array) => {
                if (index % 2 === 0) {
                  if (array[index] && array[index + 1]) {
                    return (
                      <div className="promotion-events-row" key={index}>
                        <PromotionCard data={array[index]} {...props} />
                        <PromotionCard data={array[index + 1]} {...props} />
                      </div>
                    );
                  } else if (array[index]) {
                    return (
                      <div className="promotion-events-row" key={index}>
                        <PromotionCard
                          data={array[index]}
                          {...props}
                          arrayIndex={index}
                        />
                      </div>
                    );
                  }
                }
              })
            )}
          </div>
        </div>
        {totalRecords - listingArray.length > 0 && (
          <div
            className="promotion-load-more"
            onClick={() => handleLoadMore(first + limit)}
          >
            <a className="btn-link load-more-btn">
              <span>Load More ({totalRecords - listingArray.length})</span>
              <img src={DownArrow} alt="down-arrow" />
            </a>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Tab;
