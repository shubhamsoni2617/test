import React from 'react';
import './style.scss';
import ArticleImg from '../../../../../assets/images/explore-article.png';
import { Link } from 'react-router-dom';

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
        <Link
          to={
            article.type === 'multi_show_template'
              ? `/explore/festival/${article.id}`
              : `/explore/article/${article.id}`
          }
        >
          <h3>{article.title}</h3>
        </Link>
        <div className="article-place-date">
          <span className="article-place">{article.author_name}</span>
          <span className="date">{article.date}</span>
        </div>
        <p>
          {article.description}
          <Link
            to={
              article.type === 'multi_show_template'
                ? `/explore/festival/${article.id}`
                : `/explore/article/${article.id}`
            }
          >
            More
          </Link>
        </p>
      </div>
      <div className="article-item-img">
        <img src={ArticleImg} alt="article" className="img-fluid" />
      </div>
    </div>
  );
};

export default Article;
