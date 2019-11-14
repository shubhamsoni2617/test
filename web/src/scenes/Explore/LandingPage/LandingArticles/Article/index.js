import React from 'react';
import './style.scss';
import ArticleImg from '../../../../../assets/images/explore-article.png';

const Article = () => {
  return (
    <div className="articles-item">
      <div className="article-item-desc">
        <div className="category-group">
          <ul>
            <li>
              <a>Musical</a>
            </li>
            <li>
              <a>Currently Showing</a>
            </li>
            <li>
              <a>Phantom of Opera</a>
            </li>
          </ul>
        </div>
        <h3>
          We Can Dance by Daily tous les jours19’s Best Ever Opera lorem Ipsum
          Sit Dolor Amet Gems Lorem ipsum
        </h3>
        <div className="article-place-date">
          <span className="article-place">By Larva May </span>
          <span className="date">13 Jan 2019</span>
        </div>
        <p>
          Artists who are ground-breaking in their fields have always inspired
          me lorem Ipsum Sit Dolor Amet Gems Lorem ipsum.. <a>More</a>
        </p>
      </div>
      <div className="article-item-img">
        <img src={ArticleImg} alt="article" className="img-fluid" />
      </div>
    </div>
  );
};

export default Article;
