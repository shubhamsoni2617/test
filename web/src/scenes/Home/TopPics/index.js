import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
import Constants from '../../../shared/constants';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Image from '../../../shared/components/Image';

const SampleNextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block' }}
      onClick={onClick}
    />
  );
};
const TopPics = props => {
  const [topPics, setTopPics] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const [topPicsData, setTopPicsData] = useState([]);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    getTopPics();
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  const getTopPics = () => {
    const params = {
      client: Constants.CLIENT
    };
    HomeService.getTopPics(params)
      .then(res => {
        if (res && res.data) {
          console.log(res.data);
          setTopPics(res.data.data);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false
        }
      }
    ]
  };

  return (
    <section className="top-picks">
      <div className="container-fluid">
        <h2>Top Picks For You</h2>
        {width <= Constants.MOBILE_BREAK_POINT ? (
          <div className="col-xs-12">
            <div className="grid-container">
              {topPics &&
                topPics.map((pic, i) => {
                  return (
                    <div key={pic.id} className="item">
                      <div className="item-wrapper">
                        <div className="item-desc">
                          <span className="video-icon">
                            <img
                              src="assets/images/video-icon.svg"
                              alt="video"
                            />
                          </span>
                          <div className="item-img">
                            <Image
                              src={pic.thumb_image}
                              className="img-fluid item-image"
                              alt="kurios"
                              type="Vertical"
                            />
                          </div>
                          <span
                            className={`category ${pic.primary_genre
                              .split('/')[0]
                              .toLowerCase()} top-picks-category`}
                          >
                            {pic.primary_genre}
                          </span>
                          <div
                            className={`item-overlay ${pic.primary_genre
                              .split('/')[0]
                              .toLowerCase()}-overlay`}
                          >
                            <div className="overlay-wrapper">
                              <h3>{pic.title}</h3>
                              <span>{pic.event_date}</span>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: pic.description
                                }}
                              ></p>
                            </div>
                          </div>
                        </div>
                        <h3>{Utilities.showLimitedChars(pic.title, 15)}</h3>
                        <a
                          href="/events"
                          onClick={e => e.preventDefault()}
                          className="item-title-overlay"
                        >
                          <span>BUY NOW </span>
                          <img
                            src="assets/images/next-arrow.svg"
                            className="img-fluid"
                            alt="buy-now"
                          />
                        </a>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            {topPics.map((pic, index) => {
              return (
                <div className="grid-container" key={pic.id}>
                  <div className="item">
                    <div className="item-wrapper">
                      <div className="item-desc">
                        <span className="video-icon">
                          <img
                            src="assets/images/video-icon.svg"
                            alt="video-icon"
                          />
                        </span>
                        <div className="item-img">
                          <Image
                            src={pic.thumb_image}
                            className="img-fluid item-image"
                            alt="kurios"
                            type="Vertical"
                          />
                        </div>
                        <span
                          className={`category ${pic.primary_genre
                            .split('/')[0]
                            .toLowerCase()} top-picks-category`}
                        >
                          {pic.primary_genre}
                        </span>
                        <div
                          className={`item-overlay ${pic.primary_genre
                            .split('/')[0]
                            .toLowerCase()}-overlay`}
                        >
                          <div className="overlay-wrapper">
                            <h3>{pic.title}</h3>
                            <span>{pic.event_date}</span>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: pic.description
                              }}
                            ></p>
                          </div>
                        </div>
                      </div>
                      <h3>{Utilities.showLimitedChars(pic.title, 25)}</h3>
                      <span className="item-title-overlay">
                        <span>BUY NOW </span>
                        <img
                          src="assets/images/next-arrow.svg"
                          className="img-fluid"
                          alt="buy-now"
                        />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        )}
      </div>
    </section>
  );
};

export default TopPics;
