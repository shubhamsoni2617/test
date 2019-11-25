import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Image from '../../../../../shared/components/Image';
import Utilities from '../../../../../shared/utilities';

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
          {Utilities.showLimitedChars(
            article.description,
            Utilities.mobilecheck() ? 80 : 98
          )}
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
        <Image
          src={article.image && article.image[0]}
          type="MediumHorizontal"
        />
      </div>
    </div>
  );
};

export default Article;
