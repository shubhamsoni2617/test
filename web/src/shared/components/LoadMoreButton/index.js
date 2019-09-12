import React from 'react';
import DownArrowBlue from "../../../assets/images/down-arrow-blue.svg";

const LoadMoreButton = (props) => {
  const { totalRecords, dataLength, loadMore } = props;
  return (
    <div className="promotion-load-more">
      <a onClick={() => loadMore()}
        className="btn-link load-more-btn"
        target=""
      >
        <span>Load More ({totalRecords - dataLength})</span>
        <img src={DownArrowBlue} />
      </a>
    </div>
  );
}

export default LoadMoreButton;
