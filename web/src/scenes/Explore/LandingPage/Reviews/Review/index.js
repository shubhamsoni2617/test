import React from 'react';
import './style.scss';
import rightArrow from '../../../../../assets/images/right-arrow.svg';
import Image from '../../../../../shared/components/Image';
import Utilities from '../../../../../shared/utilities';

const Review = ({ heading, reviewData }) => {
  return (
    <div class="reviews-item">
      <div className="section-title">
        <h3>{heading}</h3>
      </div>
      <div className="active-review">
        <div className="review-item-image">
          <Image src={reviewData && reviewData[0].imgPath} type="Horizontal" />
        </div>
        <div className="review-content">
          <h3>
            {reviewData && reviewData[0] && reviewData[0].title}
            {/* {Utilities.showLimitedChars(
              reviewData && reviewData[0] && reviewData[0].title,
              Utilities.mobilecheck() ? 25 : 50
            )} */}
          </h3>
          <span className="review-subtext">
            {reviewData && reviewData[0].by}
          </span>
        </div>
      </div>
      <div className="all-reviews">
        <div className="review-item-wrapper">
          {reviewData &&
            reviewData
              .slice(1, reviewData.length)
              .map(({ imgPath, title, by }, index) => {
                return (
                  <div className="review-item" key={index}>
                    <div className="review-item-image">
                      <img src={imgPath} alt="review" />
                    </div>
                    <div className="review-content">
                      <h3>{title}</h3>
                      <span>{by}</span>
                    </div>
                  </div>
                );
              })}
        </div>
        <a className="more-review" href="">
          More from {heading} <img src={rightArrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Review;
