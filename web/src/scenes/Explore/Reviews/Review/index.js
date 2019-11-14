import React from 'react';
import './style.scss';
import Survey from '../../../../assets/images/survey.png';
import surveySmall from '../../../../assets/images/survey-small.png';
import rightArrow from '../../../../assets/images/right-arrow.svg';

const Review = ({ heading }) => {
  return (
    <div class="reviews-item">
      <div className="section-title">
        <h3>{heading}</h3>
      </div>
      <div className="active-review">
        <div className="review-item-image">
          <img src={Survey} alt="" />
        </div>
        <div className="review-content">
          <h3>Singapore Neon Lights Festival 2019 - Mumford & Sons Honne</h3>
          <span className="review-subtext">By Larva May</span>
        </div>
      </div>
      <div className="all-reviews">
        <div className="review-item-wrapper">
          <div className="review-item">
            <div className="review-item-image">
              <img src={surveySmall} alt="review" />
            </div>
            <div className="review-content">
              <h3>Crowd by Gisèle Vienne</h3>
              <span>By Larva May</span>
            </div>
          </div>
          <div className="review-item">
            <div className="review-item-image">
              <img src={surveySmall} alt="review" />
            </div>
            <div className="review-content">
              <h3>Crowd by Gisèle Vienne</h3>
              <span>By Larva May</span>
            </div>
          </div>
        </div>
        <a className="more-review" href="">
          More from {heading} <img src={rightArrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Review;
