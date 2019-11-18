import React from 'react';
import './style.scss';
import Survey from '../../../../assets/images/survey.png';
import surveySmall from '../../../../assets/images/survey-small.png';
import Review from './Review';

const Reviews = ({}) => {
  const reviewData = [
    {
      imgPath: Survey,
      title:
        'Singapore Neon Lights Festival 2019 - Mumford & Sons Honne\
        Singapore Neon Lights Festival 2019 - Mumford & Sons Honne',
      by: 'By Larva May'
    },
    {
      imgPath: surveySmall,
      title:
        'Singapore Neon Lights Festival 2019 - Mumford & Sons Honne\
      Singapore Neon Lights Festival 2019 - Mumford & Sons Honne',
      by: 'By Larva May'
    },
    {
      imgPath: surveySmall,
      title:
        'Singapore Neon Lights Festival 2019 - Mumford & Sons Honne\
      Singapore Neon Lights Festival 2019 - Mumford & Sons Honne',
      by: 'By Larva May'
    }
  ];
  return (
    <section className="review-guide-surveys-wrapper">
      <div className="container-fluid">
        <div className="rgs-wrapper">
          <Review heading={'Reviews'} reviewData={reviewData} />
          <Review heading={'Guides'} reviewData={reviewData} />
          <Review heading={'Surveys/ Quizzes'} reviewData={reviewData} />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
