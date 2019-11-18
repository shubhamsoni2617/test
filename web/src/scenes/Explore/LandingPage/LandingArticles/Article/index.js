import React from 'react';
import './style.scss';
import ArticleImg from '../../../../../assets/images/explore-article.png';

const Article = ({ article }) => {
  return (
    <div className="articles-item">
      <div className="article-item-desc">
        <div className="category-group">
          <ul>
            {article &&
              article.genre &&
              article.genre.map(data => {
                return (
                  <li key={data}>
                    <a>{data}</a>
                  </li>
                );
              })}
          </ul>
        </div>
        <h3>{article.title}</h3>
        <div className="article-place-date">
          <span className="article-place">By Larva May </span>
          <span className="date">{article.date}</span>
        </div>
        <p>
          {article.description}
          <a>More</a>
        </p>
      </div>
      <div className="article-item-img">
        <img src={ArticleImg} alt="article" className="img-fluid" />
      </div>
    </div>
  );
};

export default Article;
