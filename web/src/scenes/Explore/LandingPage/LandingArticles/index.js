import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Arrow from '../../../../assets/images/right-arrow.svg';
import Article from './Article';

const LandingArticles = ({ articles }) => {
  return (
    <section className="articles-wrapper">
      <div className="container-fluid custom-container">
        <div className="section-top-wrapper">
          <h2>{articles && articles.heading}</h2>
          <div className="carousel-dots">
            <Link to={`/explore/articles?c=${articles.id}`}>
              More from Articles
              <img src={Arrow} className="img-fluid" alt="arrow" />
            </Link>
          </div>
        </div>
        <div className="articles-item-wrapper">
          {articles &&
            articles.data &&
            articles.data.map((article, index) => {
              return <Article key={index} article={article} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default LandingArticles;
