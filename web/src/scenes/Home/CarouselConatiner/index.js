import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import Carousel from '../../../shared/components/Carousel';
import rightArrow from '../../../assets/images/right-arrow.svg';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import './style.scss';

const CarouselConatiner = props => {
  const element = useRef(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [callAPI, setCallAPI] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler, true);
    return () => {
      window.removeEventListener('scroll', scrollHandler, true);
    };
  }, []);

  useEffect(() => {
    const params = {
      client: 1
    };
    if (callAPI) {
      props
        .api(params)
        .then(res => {
          if (res.data.data.length) {
            // Utilities.preloadImages(res.data.data, "thumb_image", () => {
            setData(res.data.data);
            setTimeout(() => {
              setLoading(false);
            }, 1000);
            // });
          } else {
            setLoading(false);
            element.current.classList.add('hide-container');
          }
        })
        .catch(err => {
          setError(true);
          setLoading(false);
        });
    }
  }, [callAPI]);

  const scrollHandler = () => {
    if (!callAPI && window.pageYOffset >= element.current.offsetTop - 400) {
      setCallAPI(true);
    }
  };

  if (error) {
    return null;
  }

  return (
    <div ref={element} className="carousel-container">
      <section className={props.classStr}>
        <div className="container-fluid">
          <div className="section-top-wrapper">
            <h2>{props.title}</h2>
            <div className="carousel-dots">
              <Link to="/events">
                See all{' '}
                <img src={rightArrow} className="img-fluid" alt="arrow" />
                &nbsp;
              </Link>
            </div>
          </div>
          <CSSTransitionGroup
            transitionName="shimmer-carousel"
            transitionEnter={true}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
            {loading && (
              <ShimmerEffect
                propCls={`col-md-2`}
                height={298}
                count={6}
                type="TILE"
              />
            )}
          </CSSTransitionGroup>
          <CSSTransitionGroup
            transitionName="shimmer-carousel"
            transitionEnter={true}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
          >
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
          </CSSTransitionGroup>
        </div>
      </section>
    </div>
  );
};

export default CarouselConatiner;
