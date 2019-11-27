import React, { useEffect, useState, memo } from 'react';
import './style.scss';
import Image from '../Image';
import ShimmerEffect from '../ShimmerEffect';
import Utilities from '../../utilities';
import ExploreService from '../../services/ExploreService';
import { Link } from 'react-router-dom';

const Explore = props => {
  const [exploreData, setExploreData] = useState(null);
  useEffect(() => {
    if (exploreData === null) {
      getExploreData();
    }
  }, []);
  const getExploreData = () => {
    const params = {
      first: 0,
      limit: 5,
      client: 1
    };
    setTimeout(() => {
      ExploreService.getExploreArticleList(params)
        .then(res => {
          setExploreData(res.data.data);
        })
        .catch(err => {
          console.log(err);
        });
    }, 1000);
  };

  return exploreData && exploreData.length ? (
    <section className="explore">
      <div className="container-fluid">
        <div className="section-top-wrapper">
          <h2>{props.heading}</h2>
          {!props.article && (
            <div className="carousel-dots">
              <Link to="/explore">
                See all{' '}
                <img
                  src="../../../assets/images/right-arrow.svg"
                  className="img-fluid"
                  alt="arrow"
                />
              </Link>
            </div>
          )}
        </div>
        {!props.article && (
          <span className="explore-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
            justo.{' '}
          </span>
        )}
        <div className="grid-container">
          <div className="item">
            <div className="item-wrapper explore-article">
              <div className="explore-image item-img">
                <img
                  src={exploreData[0].image}
                  className="img-fluid"
                  alt="explore"
                />
              </div>
              <div className="explore-text-wrapper">
                {exploreData[0].categories.map(category => {
                  return (
                    <span
                      className="explore-category"
                      key={category}
                      className="explore-category"
                    >
                      {category}
                    </span>
                  );
                })}
                <h3>{exploreData[0].description.slice(0, 60)}</h3>
              </div>
            </div>
          </div>
          {exploreData.slice(1).map(cardData => {
            return (
              <div key={cardData.id} className="item explore-rightside-content">
                <div className="item-wrapper">
                  <div className="explore-image item-img">
                    <Image src={cardData.image} className="img-fluid" />
                  </div>
                  <div className="explore-text-wrapper">
                    {cardData.categories &&
                      cardData.categories.map(category => {
                        return (
                          <span key={category} className="explore-category">
                            {category}
                          </span>
                        );
                      })}
                    <h3>{cardData.description.slice(0, 50)}</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  ) : exploreData === null ? (
    <ShimmerEffect
      height={Utilities.mobilecheck() ? 100 : 200}
      count={Utilities.mobilecheck() ? 2 : 6}
      type="TILE"
      propCls={'shm_col-xs-2 col-md-2'}
    />
  ) : null;
};

export default memo(Explore);
