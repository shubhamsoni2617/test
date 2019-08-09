import React from 'react'
import PromotionCard from '../PromotionCard';
import './style.scss';
import SortBy from '../SortBy';

const Tab = (props) => {

  const { handleLoadMore, tabsSort, handleFilters, limit } = props;
  const { first, listingArray, totalRecords } = props.state;

  // const listingArray = [
  //   {
  //     "id": 1,
  //     "title": "Alladin arrives",
  //     "alias": "promo-aladin",
  //     "thumb_image": "<thumb_image of image or video>",
  //     "featured_image": "<image of image or video>",
  //     "publish_start_date": "Tue, 23 Jul 2019",
  //     "publish_end_date": "Thu, 25 Jul 2019",
  //     "show_timer": "<0/1>",
  //     "short_description": "Magic is going to happen",
  //     "is_featured": "<0/1>",
  //     "featured_label_text": "Selling Fast!",
  //     "featured_label_color": "#ffF556",
  //     "custom_label_text": "Hurry up!",
  //     "custom_label_color": "#ffF596",
  //     "buttons": [
  //       {
  //         "text": "Join early!",
  //         "color": "#fff456",
  //         "url": "<full url>"
  //       },
  //       {
  //         "text": "Few best slots!",
  //         "color": "#fff499",
  //         "url": "<full url>"
  //       }
  //     ]
  //   },
  // ];
  return (
    <div className="promotion-grid">
      <div className="sortby-filter">
        {tabsSort && tabsSort.isSortBy && <SortBy handleFilters={handleFilters} sortList={tabsSort.sortList} />}
      </div>
      <div className="tab-content-wrapper">
        <ul className="promotions-listing">
          {listingArray && listingArray.map((elem, index) => {
            return (
              <PromotionCard data={elem} key={index} {...props}/>
            );
          })
          }
        </ul>
      </div>
      {totalRecords - listingArray.length > 0 &&
        <div className="promotion-load-more" onClick={() => handleLoadMore((first + limit))}>
          <a className="btn-link load-more-btn">
            <span>Load More ({totalRecords - listingArray.length})</span>
            <img src="assets/images/down-arrow-blue.svg" alt="down-arrow" />
          </a>
        </div>
      }
    </div>
  )
}

export default Tab;
