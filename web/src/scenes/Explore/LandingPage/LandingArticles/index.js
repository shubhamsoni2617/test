import React from 'react';
import './style.scss';
import Arrow from '../../../../assets/images/right-arrow.svg';
import Article from './Article';

const LandingArticles = ({}) => {
  return (
    <section className="articles-wrapper">
      <div className="container-fluid">
        <div class="section-top-wrapper">
          <h2>Articles</h2>
          <div class="carousel-dots">
            <a href="">
              More from Articles{' '}
              <img src={Arrow} class="img-fluid" alt="arrow" />
            </a>
          </div>
        </div>
        <div className="articles-item-wrapper">
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </section>
  );
};

export default LandingArticles;
