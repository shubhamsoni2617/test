import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../../../shared/components/Carousel';
import rightArrow from '../../../assets/images/right-arrow.svg';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import './style.scss';
import Utilities from '../../../shared/utilities';

const CarouselConatiner = props => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const params = {
      client: 1
    };
    props
      .api(params)
      .then(res => {
        if (res.data.data.length) {
          setData(res.data.data);
          setLoading(false);
        } else {
          setLoading(false);
          element.current.classList.add('hide-container');
        }
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return null;
  }

  if (!loading && data && data.length === 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <section className={props.classStr}>
        <div className="container-fluid custom-container">
          <div className="section-top-wrapper">
            <h2>{props.title}</h2>
            <div className="carousel-dots">
              <Link to={props.link} id={props.classStr}>
                See all{' '}
                <img src={rightArrow} className="img-fluid" alt="arrow" />
                &nbsp;
              </Link>
            </div>
          </div>
          {loading && (
            <ShimmerEffect
              propCls={`shimmer-inner`}
              height={Utilities.mobilecheck() ? 60 : 298}
              count={
                Utilities.mobilecheck()
                  ? 3
                  : Utilities.mobileAndTabletcheck()
                  ? 4
                  : 6
              }
              type="TILE"
            />
          )}
          {!loading && data && data.length && (
            <Carousel
              imgArray={data}
              arrows={props.arrows}
              slidesToShow={6}
              slidesToScroll={6}
              dots={true}
              autoplay={props.autoplay}
              infinite={props.infinite}
            />
          )}
        </div>
      </section>
    </div>
  );
};

export default CarouselConatiner;
