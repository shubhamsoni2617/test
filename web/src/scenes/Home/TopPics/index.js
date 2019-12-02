import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.scss';
import { Link } from 'react-router-dom';
import Constants from '../../../shared/constants';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Image from '../../../shared/components/Image';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import EventHeading from '../../../shared/components/EventHeading';

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
  const [data, setData] = useState([]);
  const [width, setWidth] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // setWidth(window.innerWidth);
    // window.addEventListener('resize', handleWindowResize);
    getTopPics();
    // return () => {
    //   window.removeEventListener('resize', handleWindowResize);
    // };
  }, []);

  // const handleWindowResize = () => {
  //   setWidth(window.innerWidth);
  // };

  const getTopPics = () => {
    const params = {
      client: Constants.CLIENT
    };
    HomeService.getTopPics(params)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setData(res.data.data);
            setLoading(false);
          }, 2000);
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    // initialSlide: 0,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: false,
          dots: false
        }
      }
    ]
  };

  if (!loading && data && data.length === 0) {
    return null;
  }

  if (error) return null;

  return (
    <section className="top-picks">
      <div className="container-fluid">
        <h2>{props.heading}</h2>
        {Utilities.mobilecheck() ? (
          !data.length ? (
            <ShimmerEffect
              height={60}
              count={3}
              type="TILE"
              propCls={`shm_col-xs-2 col-md-2`}
            />
          ) : (
            <div className="col-xs-12">
              <div className="grid-container">
                {data &&
                  data.map((pic, i) => {
                    return (
                      <div key={pic.id} className="item">
                        <Link to={`/events/${pic.alias}`}>
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
                                  type="TopPicks"
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
                                  {pic.description && (
                                    <p
                                      dangerouslySetInnerHTML={{
                                        __html: Utilities.showLimitedChars(
                                          pic.description.replace(
                                            /(<([^>]+)>)/gi,
                                            ''
                                          ),
                                          50
                                        )
                                      }}
                                    ></p>
                                  )}
                                </div>
                              </div>
                            </div>
                            {/* <h3>{Utilities.showLimitedChars(pic.title, 15)}</h3> */}
                            <EventHeading
                              title={pic.title}
                              lines={2}
                              height={
                                Utilities.mobileAndTabletcheck() ? 22 : 20
                              }
                            />
                            <Link
                              to={`/events/${pic.alias}`}
                              className="item-title-overlay"
                            >
                              <span>BUY NOW </span>
                              <img
                                src="assets/images/next-arrow.svg"
                                className="img-fluid"
                                alt="buy-now"
                              />
                            </Link>
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          )
        ) : !data.length ? (
          <ShimmerEffect
            height={200}
            count={Utilities.mobileAndTabletcheck() ? 4 : 6}
            type="TILE"
            propCls={`shm_col-xs-2 col-md-2`}
          />
        ) : (
          <Slider {...settings}>
            {data.map(pic => {
              return (
                <div className="grid-container" key={pic.id}>
                  <div className="item">
                    <Link to={`/events/${pic.alias}`}>
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
                              type="TopPicks"
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
                              {pic.description && (
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: Utilities.showLimitedChars(
                                      pic.description.replace(
                                        /(<([^>]+)>)/gi,
                                        ''
                                      ),
                                      200
                                    )
                                  }}
                                ></p>
                              )}
                            </div>
                          </div>
                        </div>
                        <h3>
                          <EventHeading
                            title={pic.title}
                            lines={2}
                            height={Utilities.mobileAndTabletcheck() ? 25 : 25}
                          />
                        </h3>

                        <Link to={`/events/${pic.alias}`}>
                          <span className="item-title-overlay">
                            <span>BUY NOW </span>
                            <img
                              src="assets/images/next-arrow.svg"
                              className="img-fluid"
                              alt="buy-now"
                            />
                          </span>
                        </Link>
                      </div>
                    </Link>
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
