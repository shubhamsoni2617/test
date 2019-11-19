import React from 'react';
import './style.scss';
import Review from './Review';

const Reviews = ({ reviewsData }) => {
  return (
    <section className="review-guide-surveys-wrapper">
      <div className="container-fluid">
        <div className="rgs-wrapper">
          {reviewsData &&
            reviewsData.map(data => {
              return <Review reviewData={data} key={data.name} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
