import React, { useEffect, useState, memo } from 'react';
import './style.scss';
import Image from '../Image';
import ShimmerEffect from '../ShimmerEffect';
import Utilities from '../../utilities';
import ExploreService from '../../services/ExploreService';
import { Link } from 'react-router-dom';
import EventHeading from '../../../shared/components/EventHeading';
import { OneBigEightSmall } from '../ShimmerEffect/HomeShimmer';

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
    ExploreService.getExploreArticleList(params)
      .then(res => {
        setExploreData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return exploreData && exploreData.length ? (
    <section className="explore">
      <div className="container-fluid custom-container">
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
          <span
            className="explore-text"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></span>
        )}
        <div className="grid-container">
          <Link
            to={
              exploreData[0].type === 'multi_show_template'
                ? `/explore/2/${exploreData[0].id}`
                : `/explore/1/${exploreData[0].id}`
            }
            className="item"
          >
            <div className="item-wrapper explore-article">
              <div className="explore-image item-img">
                <Image
                  src={exploreData[0].thumb_image}
                  className="img-fluid"
                  alt="explore"
                />
              </div>
              <div className="explore-text-wrapper">
                {exploreData[0].categories.slice(0, 1).map(category => {
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
                <EventHeading
                  title={exploreData[0].title}
                  lines={1}
                  height={
                    Utilities.mobilecheck()
                      ? 18
                      : Utilities.mobileAndTabletcheck()
                      ? 18
                      : 20
                  }
                />
              </div>
            </div>
          </Link>
          {exploreData.slice(1).map(cardData => {
            return (
              <Link
                to={
                  cardData.type === 'multi_show_template'
                    ? `/explore/2/${cardData.id}`
                    : `/explore/1/${cardData.id}`
                }
                key={cardData.id}
                className="item explore-rightside-content"
              >
                <div className="item-wrapper">
                  <div className="explore-image item-img">
                    <Image src={cardData.thumb_image} className="img-fluid" />
                  </div>
                  <div className="explore-text-wrapper">
                    {cardData.categories &&
                      cardData.categories.slice(0, 1).map(category => {
                        return (
                          <span key={category} className="explore-category">
                            {category}
                          </span>
                        );
                      })}
                    <EventHeading
                      title={cardData.title}
                      lines={3}
                      height={
                        Utilities.mobilecheck()
                          ? 18
                          : Utilities.mobileAndTabletcheck()
                          ? 18
                          : 20
                      }
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  ) : exploreData === null ? (
    <OneBigEightSmall></OneBigEightSmall>
  ) : // <ShimmerEffect
  //   height={Utilities.mobilecheck() ? 100 : 200}
  //   count={Utilities.mobilecheck() ? 2 : 6}
  //   type="TILE"
  //   propCls={'shm_col-xs-2 col-md-2'}
  // />
  null;
};

export default memo(Explore);
