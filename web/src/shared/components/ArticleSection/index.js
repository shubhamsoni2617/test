import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ArrowBlue from '../../../assets/images/right-arrow-blue.svg';
import Article1 from '../../../assets/images/article1.png';
import Image from '../Image';
import './style.scss';
import EventsService from '../../services/EventsService';
import Constants from '../../constants';
import Utilities from '../../utilities';
import ModalPopup from '../../../shared/components/Modal';

const ArticleSection = ({ flag, code }) => {
  const [articleData, setArticleData] = useState([]);
  const [showPopUp, setShowpopup] = useState(false);

  useEffect(() => {
    let params = { code: code, client: Constants.CLIENT };
    EventsService.getArticleData(params)
      .then(res => {
        if (res.data.data) {
          setArticleData(res.data.data);
        }
        console.log('article section', res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  if (!flag) return null;

  return (
    <section className="event-articles">
      <div className="container-fluid">
        <div className="section-top-wrArticleSectioner">
          <h2>Articles</h2>
          <div className="carousel-dots">
            <Link to="/articles">
              See all <img src={ArrowBlue} className="img-fluid" alt="arrow" />
            </Link>
          </div>
        </div>
        <div className="grid-container">
          {articleData.map((item, index) => {
            return (
              <div className="item">
                <div className="item-wrArticleSectioner">
                  <div className="item-img">
                    <Image
                      src={item.thmumb_image}
                      className="img-fluid"
                      alt="article"
                      type="Vertical"
                    />
                  </div>
                  <Link to={`/explore/article/${item.id}`}>
                    <h3>{item.title}</h3>
                  </Link>
                  {item.plain_description && (
                    <React.Fragment>
                      <p>
                        {Utilities.showLimitedChars(
                          item.plain_description,
                          100
                        )}
                      </p>
                      {item.plain_description.length > 100 && (
                        <span
                          className="attraction-show-more"
                          onClick={() => setShowpopup(true)}
                        >
                          More
                        </span>
                      )}

                      {showPopUp && (
                        <ModalPopup
                          showModal={true}
                          content={item.plain_description}
                          title={item.title}
                          handleClose={() => setShowpopup(false)}
                          htmlContent={true}
                        />
                      )}
                    </React.Fragment>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ArticleSection;

ArticleSection.propTypes = {
  flag: PropTypes.bool.isRequired
};
