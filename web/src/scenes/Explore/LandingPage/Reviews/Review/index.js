import React from 'react';
import './style.scss';
import rightArrow from '../../../../../assets/images/right-arrow.svg';
import Image from '../../../../../shared/components/Image';
import Utilities from '../../../../../shared/utilities';

const Review = ({ reviewData }) => {
  return (
    <div className="reviews-item">
      <div className="section-title">
        <h3>{reviewData.name}</h3>
      </div>
      <div className="active-review">
        <div className="review-item-image">
          <Image
            src={reviewData && reviewData.data[0].image}
            type="Horizontal"
          />
        </div>
        <div className="review-content">
          <h3>
            {reviewData && reviewData.data[0] && reviewData.data[0].title}
            {/* {Utilities.showLimitedChars(
              reviewData && reviewData[0] && reviewData[0].title,
              Utilities.mobilecheck() ? 25 : 50
            )} */}
          </h3>
          <span className="review-subtext">
            {reviewData && reviewData.data[0] && reviewData.data[0].author_name}
          </span>
        </div>
      </div>
      <div className="all-reviews">
        <div className="review-item-wrapper">
          {reviewData &&
            reviewData.data &&
            reviewData.data
              .slice(1, reviewData.data.length)
              .map(({ image, title, author_name }, index) => {
                return (
                  <div className="review-item" key={index}>
                    <div className="review-item-image">
                      <Image src={image} type="Small" />
                    </div>
                    <div className="review-content">
                      <h3>{title}</h3>
                      <span>{author_name}</span>
                    </div>
                  </div>
                );
              })}
        </div>
        <a className="more-review" href="">
          More from {reviewData.name} <img src={rightArrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Review;
