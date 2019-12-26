import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import ShimmerEffect from '../../components/ShimmerEffect';
import ArrowBlue from '../../../assets/images/right-arrow-blue.svg';
import arrowSee from '../../../assets/images/right-arrow.svg';
import Article1 from '../../../assets/images/article1.png';
import Image from '../Image';
import './style.scss';
import EventsService from '../../services/EventsService';
import Constants from '../../constants';
import Utilities from '../../utilities';
import ModalPopup from '../../../shared/components/Modal';
import EventHeading from '../EventHeading';

const ArticleSection = ({ flag, code }) => {
  const [articleData, setArticleData] = useState([]);
  const [showPopUp, setShowpopup] = useState(false);
  const [shimmer, setShimmer] = useState(true);

  useEffect(() => {
    let params = { code: code, client: Constants.CLIENT };
    EventsService.getArticleData(params)
      .then(res => {
        if (res.data.data) {
          setArticleData(res.data.data);
          setShimmer(false);
        }
        console.log('article section', res);
      })
      .catch(error => {
        setShimmer(false);
        console.log(error);
      });
  }, []);

  if (!flag || (!shimmer && articleData.length == 0)) return null;

  return (
    <section className="event-articles">
      <div className="container-fluid">
        {shimmer && (
          <CSSTransition
            // transitionName="shimmer"
            // transitionEnter={true}
            // transitionEnterTimeout={500}
            // transitionLeaveTimeout={500}
            in={shimmer}
            timeout={500}
            classNames="shimmer"
          >
            <ShimmerEffect
              propCls="col-md-12"
              height={400}
              count={2}
              type="DETAIL"
              detail={true}
            />
          </CSSTransition>
        )}
        <div className="section-top-wrArticleSectioner">
          <h2>Articles</h2>
          {articleData.length > 3 && (
            <div className="carousel-dots">
              <Link to="/explore/articles">
                See all <img src={arrowSee} className="img-fluid" alt="arrow" />
              </Link>
            </div>
          )}
        </div>
        <div className="grid-container">
          {articleData.slice(0, 5).map((item, index) => {
            return (
              <div className="item">
                <div className="item-wrArticleSectioner">
                  <div className="item-img">
                    <Image
                      src={item.thumb_image}
                      className="img-fluid"
                      alt="article"
                      type="MediumVertical"
                    />
                  </div>
                  <Link to={`/explore/1/${item.id}`}>
                    <EventHeading
                      title={item.title}
                      lines={2}
                      height={19}
                      allowTooltip={false}
                    />
                  </Link>
                  {item.plain_description && (
                    <React.Fragment>
                      <p>
                        {Utilities.showLimitedChars(
                          item.plain_description,
                          100
                        )}

                        {item.plain_description.length > 100 && (
                          <span className="attraction-show-more">
                            <Link to={`/explore/1/${item.id}`}>Read More</Link>
                          </span>
                        )}
                      </p>
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
