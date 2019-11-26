import React from 'react';
import './style.scss';
import rightArrow from '../../../../../assets/images/right-arrow.svg';
import Image from '../../../../../shared/components/Image';
import Utilities from '../../../../../shared/utilities';
import { Link } from 'react-router-dom';

const Review = ({ reviewData }) => {
  return (
    <div className="reviews-item">
      <div className="section-title">
        <h3>{reviewData.name}</h3>
      </div>
      <Link
        to={
          reviewData && reviewData.data[0].type === 'multi_show_template'
            ? `/explore/festival/${reviewData.data[0].id}`
            : `/explore/article/${reviewData.data[0].id}`
        }
        className="active-review"
      >
        <div className="review-item-image">
          <Image
            src={reviewData && reviewData.data[0].image}
            type="Horizontal"
          />
        </div>
        <div className="review-content">
          <h3>
            {Utilities.showLimitedChars(
              reviewData && reviewData.data[0] && reviewData.data[0].title,
              Utilities.mobilecheck() ? 30 : 60
            )}
          </h3>
          {reviewData && reviewData.data[0] && (
            <span className="review-subtext">
              By{' '}
              {reviewData.data[0].author_name[0].toUpperCase() +
                reviewData.data[0].author_name.slice(1)}
            </span>
          )}
        </div>
      </Link>
      <div className="all-reviews">
        <div className="review-item-wrapper">
          {reviewData &&
            reviewData.data &&
            reviewData.data
              .slice(1, reviewData.data.length)
              .map(({ image, title, author_name, type, id }, index) => {
                return (
                  <Link
                    to={
                      type === 'multi_show_template'
                        ? `/explore/festival/${id}`
                        : `/explore/article${id}`
                    }
                    className="review-item"
                    key={index}
                  >
                    <div className="review-item-image">
                      <Image src={image} type="VdoSmall" />
                    </div>
                    <div className="review-content">
                      <h3>
                        {Utilities.showLimitedChars(
                          title,
                          Utilities.mobilecheck() ? 20 : 40
                        )}
                      </h3>
                      {author_name && (
                        <span>
                          By{' '}
                          {author_name[0].toUpperCase() + author_name.slice(1)}
                        </span>
                      )}
                    </div>
                  </Link>
                );
              })}
        </div>
        {reviewData.name && (
          <a className="more-review" href="/articles" target="_blank">
            More from {reviewData.name} <img src={rightArrow} alt="arrow" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Review;
