import React from 'react';
import './style.scss';
import rightArrow from '../../../../../assets/images/right-arrow.svg';
import Image from '../../../../../shared/components/Image';
import Utilities from '../../../../../shared/utilities';
import { Link } from 'react-router-dom';
import EventHeading from '../../../../../shared/components/EventHeading';
import Ellipsis from '../../../../../shared/components/Ellipsis';

const Review = ({ reviewData }) => {
  return (
    <div className="reviews-item">
      <div className="section-title">
        <h3>{reviewData.name}</h3>
      </div>
      <Link
        to={
          reviewData &&
          reviewData.data &&
          reviewData.data[0].type === 'multi_show_template'
            ? `/explore/2/${reviewData.data[0].id}`
            : `/explore/1/${reviewData.data[0].id}`
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
          <EventHeading
            title={reviewData && reviewData.data[0] && reviewData.data[0].title}
            lines={1}
            height={22}
          />
          <Ellipsis
            title={
              reviewData && reviewData.data[0] && reviewData.data[0].description
            }
            lines={2}
            height={22}
          />
          {reviewData &&
            reviewData.data.length > 0 &&
            reviewData.data[0].author_name && (
              <span className="review-subtext">
                By{' '}
                {reviewData.data[0].author_name &&
                  reviewData.data[0].author_name[0].toUpperCase() +
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
              .map(
                (
                  { image, title, author_name, type, id, description },
                  index
                ) => {
                  return (
                    <Link
                      to={
                        type === 'multi_show_template'
                          ? `/explore/2/${id}`
                          : `/explore/1/${id}`
                      }
                      className="review-item"
                      key={index}
                    >
                      <div className="review-item-image">
                        <Image src={image} type="VdoSmall" />
                      </div>
                      <div className="review-content">
                        <EventHeading title={title} lines={1} height={22} />
                        <Ellipsis title={description} lines={1} height={22} />
                        {author_name && (
                          <span>
                            By{' '}
                            {author_name[0].toUpperCase() +
                              author_name.slice(1)}
                          </span>
                        )}
                      </div>
                    </Link>
                  );
                }
              )}
        </div>
        {reviewData.name && (
          <a
            className="more-review"
            href={`/explore/articles?id=${reviewData.id}`}
            target="_blank"
          >
            More from {reviewData.name} <img src={rightArrow} alt="arrow" />
          </a>
        )}
      </div>
    </div>
  );
};

export default Review;
