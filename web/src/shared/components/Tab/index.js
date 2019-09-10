import React, { useRef } from 'react'
import PromotionCard from '../PromotionCard';
import './style.scss';
import SortBy from '../SortBy';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import DownArrow from '../../../assets/images/down-arrow-blue.svg';

const Tab = (props) => {

  const { handleLoadMore, tabsSort, handleFilters, limit } = props;
  const { first, listingArray, totalRecords } = props.state;

  const getPosition = (element) => {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += (element.offsetLeft - element.scrollLeft + element.clientLeft);
      yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
      element = element.offsetParent;
    }
    console.log(yPosition, "yPosition")

    return { x: xPosition, y: yPosition };
  }
  const promotionWrapper = (e) => {
  }

  return (
    <>
      <div className="promotion-grid">
        <div className="sortby-filter">
          {tabsSort && tabsSort.isSortBy && <SortBy defaultSortType="Promotions - A to Z" handleFilters={handleFilters} sortList={tabsSort.sortList} />}
        </div>
        <div className="tab-content-wrapper">
          <div className="promotions-listing">
            {listingArray.length === 0 ?
              <ShimmerEffect height={150} count={4} type="LIST" propCls='shm_col-xs-2 col-md-5' />
              :
              listingArray.map((elem, index, array) => {
                if (index % 2 === 0) {
                  if (array[index] && array[index + 1]) {
                    return (
                      <div className="promotion-events-row" key={index} onClick={(e) => promotionWrapper(e)}>
                        <PromotionCard data={array[index]} {...props} />
                        <PromotionCard data={array[index + 1]} {...props} />
                      </div>
                    );
                  } else if (array[index]) {
                    return (
                      <div className="promotion-events-row" key={index} onClick={(e) => promotionWrapper(e)}>
                        <PromotionCard data={array[index]} {...props} arrayIndex={index} />
                      </div>
                    )
                  }
                }
              })
            }
          </div>
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
    </>
  )
}

export default Tab;
