import React from 'react';
import PropTypes from 'prop-types';

import ArrowBlue from '../../../assets/images/right-arrow-blue.svg';
import Article1 from '../../../assets/images/article1.png';
import Image from '../Image';
import './style.scss';

const ArticleSection = ({ flag }) => {
  if (!flag) return null;
  return (
    <section className="event-articles">
      <div className="container-fluid">
        <div className="section-top-wrArticleSectioner">
          <h2>Articles</h2>
          <div className="carousel-dots">
            <a href="/" onClick={() => {}}>
              See all <img src={ArrowBlue} className="img-fluid" alt="arrow" />
            </a>
          </div>
        </div>
        <div className="grid-container">
          <div className="item">
            <div className="item-wrArticleSectioner">
              <div className="item-img">
                <Image
                  src={Article1}
                  className="img-fluid"
                  alt="article"
                  type="Vertical"
                />
              </div>
              <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
              <p>
                Artists who are ground-breaking in their fields have always
                inspired me...{' '}
                <a href="/" onClick={() => {}}>
                  More
                </a>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-wrArticleSectioner">
              <div className="item-img">
                <Image
                  src={Article1}
                  className="img-fluid"
                  alt="article"
                  type="Vertical"
                />
              </div>
              <h3>Best Ever Opera Lorem Ipsum Sit Dolor Amet</h3>
              <p>
                Artists who are ground-breaking in their fields have always
                inspired me...{' '}
                <a href="/" onClick={() => {}}>
                  More
                </a>
              </p>
            </div>
          </div>
          <div className="item">
            <div className="item-wrArticleSectioner">
              <div className="item-img">
                <Image
                  src={Article1}
                  className="img-fluid"
                  alt="article"
                  type="Vertical"
                />
              </div>
              <h3>Mauris malesuada nisi sit amet augue</h3>
              <p>
                Artists who are ground-breaking in their fields have always
                inspired me...{' '}
                <a href="/" onClick={() => {}}>
                  More
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;

ArticleSection.propTypes = {
  flag: PropTypes.bool.isRequired
};
