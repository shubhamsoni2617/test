import React, { useState, useEffect, useRef } from 'react'
import PromotionCard from '../PromotionCard';
import './style.scss';
import PromotionService from '../../services/PromotionService';



const Tab = (props) => {
  const { id } = props;
  const usePrevious = (value) => {
    const ref = useRef();
    useEffect(() => {
      ref.current = value;
    });
    return ref.current;
  }

  const prevProps = usePrevious(id);
  const [first, setFirst] = useState(0);
  const [visible, setVisible] = useState(2);
  const [totalRecords, setTotalRecords] = useState(0);
  const [sortBy, setSortBy] = useState("Date");
  const [listingArray, setListingArray] = useState([]);


  useEffect(() => {
    console.log("prev", prevProps);
    console.log("current", id)
    fetchData()
  }, [id, sortBy, first]);

  const fetchData = () => {
    const params = {
      client: 1,
      category: id,
      first: first,
      limit: 2,
      sort_type: "title",
      sort_order: sortBy
    };

    PromotionService.getPromotionList(params)
      .then((res) => {
        if (res.data && res.data.data[0]) {
          console.log("response", res);
          setTotalRecords(res.data.total_records)
          setListingArray(prevProps === id ? [...listingArray, ...res.data.data[0]] : res.data.data[0])
        }
      })
  }

  const handleLoadMore = () => {
    setVisible(visible + 2);
    setFirst(first + 2);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSortBy(value)
  }

  const handleShow = (id) => {
    console.log("id====", id)
    // this.setState({ show: true })
  }

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
        <div className="filter-topbar">
          <span className="sortby-text">Sort by:</span>
          <select value={sortBy} onChange={handleChange}>
            <option value="Date">Date</option>
            <option value="ASC">Promotions - A to Z</option>
            <option value="DESC">Promotions - Z to A</option>
          </select>
        </div>
        {/* <div className="filter-topbar">
            <span className="sortby-text">Sort by:</span>
            <span className="active-filter">Date</span>
          </div>
          <ul>
            <li><a href="/">Promotions - A to Z</a></li>
            <li><a href="/">Promotions - Z to A</a></li>
            <li className="active"><a href="/">Date</a></li>
          </ul> */}
      </div>
      <div className="tab-content-wrapper">
        <ul className="promotions-listing">
          {listingArray.map((elem, index) => {
            return (
              <PromotionCard data={elem} handleShow={handleShow} key={index} />
            );
          })
          }
        </ul>
      </div>
      {totalRecords - listingArray.length > 0 &&
        <div className="promotion-load-more" onClick={handleLoadMore}>
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
