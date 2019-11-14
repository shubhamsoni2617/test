import React from 'react';
import './style.scss';
import Review from './Review';

const Reviews = ({}) => {
  return (
    <section className="review-guide-surveys-wrapper">
      <div className="container-fluid">
        <div className="rgs-wrapper">
          <Review heading={'Reviews'} />
          <Review heading={'Guides'} />
          <Review heading={'Surveys/ Quizzes'} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
