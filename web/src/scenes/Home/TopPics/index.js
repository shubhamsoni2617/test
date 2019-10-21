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
          setTopPicsData(res.data.data);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  };

  const topPics = [
    {
      id: '1',
      img: 'assets/images/kurios.png',
      description: 'Kurios Cabinet of Curiosities',
      category: 'musical'
    },
    {
      id: '2',
      img: 'assets/images/katya.jpg',
      description: 'Kurios Cabinet of Curiosities',
      category: 'comedy'
    },
    {
      id: '3',
      img: 'assets/images/ballet.jpg',
      description: 'Kurios Cabinet of Curiosities',
      category: 'dance'
    },
    {
      id: '4',
      img: 'assets/images/panthom-of-opera.jpg',
      description: 'Kurios Cabinet of Curiosities',
      category: 'musical'
    },
    {
      id: '5',
      img: 'assets/images/kurios.png',
      description: 'Kurios Cabinet of Curiosities',
      category: 'comedy'
    },
    {
      id: '6',
      img: 'assets/images/ballet.jpg',
      description: 'Kurios Cabinet of Curiosities',
      category: 'dance'
    },
    {
      id: '7',
      img: 'assets/images/kurios.png',
      description: 'Kurios Cabinet of Curiosities',
      category: 'musical'
    },
    {
      id: '8',
      img: 'assets/images/katya.jpg',
      description: 'Kurios Cabinet of Curiosities',
      category: 'comedy'
    },
    {
      id: '9',
      img: 'assets/images/ballet.jpg',
      description: 'Kurios Cabinet of Curiosities',
      category: 'dance'
    },
    {
      id: '10',
      img: 'assets/images/panthom-of-opera.jpg',
      description: 'Kurios Cabinet of Curiosities',
      category: 'musical'
    }
  ];

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
              {topPicsData &&
                topPicsData.map((pic, i) => {
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
                            className={`category ${pic.primary_genre.toLowerCase()} top-picks-category`}
                          >
                            {pic.primary_genre}
                          </span>
                          <div
                            className={`item-overlay ${pic.primary_genre.toLowerCase()}-overlay`}
                          >
                            <div className="overlay-wrapper">
                              <h3>{pic.title}</h3>
                              <span>{pic.event_date}</span>
                              {/* <p>
                                Under the big top Bayfront Avenue, beside Marina
                                Bay Sands
                              </p>
                              <p>
                                Cirque du Soleil comes to Singapore with its
                                most acclaimed touring show, KURIOS – Cabinet of
                                Curiosities.
                              </p> */}
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
            {topPicsData &&
              topPicsData.map((pic, index) => {
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
                            className={`category ${pic.primary_genre.toLowerCase()} top-picks-category`}
                          >
                            {pic.primary_genre}
                          </span>
                          <div
                            className={`item-overlay ${pic.primary_genre.toLowerCase()}-overlay`}
                          >
                            <div className="overlay-wrapper">
                              <h3>{pic.title}</h3>
                              <span>{pic.event_date}</span>
                              {/* <p>
                                Under the big top Bayfront Avenue, beside Marina
                                Bay Sands
                              </p>
                              <p>
                                Cirque du Soleil comes to Singapore with its
                                most acclaimed touring show, KURIOS – Cabinet of
                                Curiosities.
                              </p> */}
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: pic.description
                                }}
                              ></p>
                            </div>
                          </div>
                        </div>
                        <h3>{pic.title}</h3>
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
