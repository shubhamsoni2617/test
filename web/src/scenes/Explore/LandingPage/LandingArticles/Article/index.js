import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Image from '../../../../../shared/components/Image';
import Utilities from '../../../../../shared/utilities';

const Article = ({ article }) => {
  return (
    <Link
      className="articles-item"
      to={
        article.type === 'multi_show_template'
          ? `/explore/2/${article.id}`
          : `/explore/1/${article.id}`
      }
    >
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
        <a>
          <h3>{article.title}</h3>
        </a>
        <div className="article-place-date">
          {article.author_name && (
            <span className="article-place">
              By{' '}
              {article.author_name[0].toUpperCase() +
                article.author_name.slice(1)}
            </span>
          )}
          <span className="date">{article.date}</span>
        </div>
        <p>
          {Utilities.showLimitedChars(
            article.description,
            Utilities.mobilecheck() ? 80 : 98
          )}
          <a>More</a>
        </p>
      </div>
      <div className="article-item-img">
        <Image
          src={article && article.image}
          type="BigBanner"
          className="img-fluid"
        />
      </div>
    </Link>
  );
};

export default Article;
