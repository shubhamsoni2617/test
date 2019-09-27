import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import './style.scss';
import Constants from '../../../shared/constants';

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

const FeaturedEvents = props => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };
  const featuredEvents = [
    {
      id: '1',
      img: 'assets/images/explore.png',
      category: 'dance'
    },
    {
      id: '2',
      img: 'assets/images/pretty-girls.jpg',
      category: 'comedy'
    },
    {
      id: '3',
      img: 'assets/images/dance-theature.jpg',
      category: 'theatre'
    },
    {
      id: '4',
      img: 'assets/images/hetty-keos.jpg',
      category: 'dance'
    },
    {
      id: '5',
      img: 'assets/images/aladdin.jpg',
      category: 'comedy'
    },
    {
      id: '6',
      img: 'assets/images/voice-legends.jpg',
      category: 'theatre'
    },
    {
      id: '7',
      img: 'assets/images/pride-passion.jpg',
      category: 'dance'
    },
    {
      id: '8',
      img: 'assets/images/hetty-keos.jpg',
      category: 'comedy'
    },
    {
      id: '9',
      img: 'assets/images/aladdin.jpg',
      category: 'theatre'
    },
    {
      id: '10',
      img: 'assets/images/voice-legends.jpg',
      category: 'dance'
    },

    {
      id: '11',
      img: 'assets/images/explore.png',
      category: 'comedy'
    },
    {
      id: '12',
      img: 'assets/images/pretty-girls.jpg',
      category: 'dance'
    },
    {
      id: '13',
      img: 'assets/images/dance-theature.jpg',
      category: 'comedy'
    },
    {
      id: '14',
      img: 'assets/images/hetty-keos.jpg',
      category: 'theatre'
    },
    {
      id: '15',
      img: 'assets/images/aladdin.jpg',
      category: 'theatre'
    },
    {
      id: '16',
      img: 'assets/images/voice-legends.jpg',
      category: 'comedy'
    },
    {
      id: '17',
      img: 'assets/images/pride-passion.jpg',
      category: 'dance'
    },
    {
      id: '18',
      img: 'assets/images/hetty-keos.jpg',
      category: 'comedy'
    },
    {
      id: '19',
      img: 'assets/images/aladdin.jpg',
      category: 'concert'
    },
    {
      id: '20',
      img: 'assets/images/voice-legends.jpg',
      category: 'dance'
    },
    {
      id: '21',
      img: 'assets/images/explore.png',
      category: 'concert'
    },
    {
      id: '22',
      img: 'assets/images/pretty-girls.jpg',
      category: 'dance'
    },
    {
      id: '23',
      img: 'assets/images/dance-theature.jpg',
      category: 'comedy'
    },
    {
      id: '24',
      img: 'assets/images/hetty-keos.jpg',
      category: 'dance'
    },
    {
      id: '25',
      img: 'assets/images/aladdin.jpg',
      category: 'comedy'
    },
    {
      id: '26',
      img: 'assets/images/voice-legends.jpg',
      category: 'comedy'
    },
    {
      id: '27',
      img: 'assets/images/pride-passion.jpg',
      category: 'dance'
    },
    {
      id: '28',
      img: 'assets/images/hetty-keos.jpg',
      category: 'comedy'
    },
    {
      id: '29',
      img: 'assets/images/aladdin.jpg',
      category: 'comedy'
    },
    {
      id: '30',
      img: 'assets/images/voice-legends.jpg',
      category: 'dance'
    }
  ];
  const settings = {
    className: 'center',
    dots: true,
    centerMode: false,
    infinite: false,
    slidesToShow: 1,
    speed: 1500,
    rows: 2,
    slidesPerRow: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    appendDots: dots => {
      return <ul style={{ margin: '0px' }}> {dots} </ul>;
    },
    customPaging: i => {
      return (
        <div className="dots-group">
          <span>
            <a href="/" onClick={e => e.preventDefault()}>
              {i}
            </a>
          </span>
        </div>
      );
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesPerRow: 3,
          infinite: false,
          dots: true
        }
      }
    ]
  };
  return (
    <section className="featured-events">
      <div className="container-fluid">
        <div className="section-top-wrapper">
          <h2>Featured Events</h2>
          <div className="carousel-dots">
            <a href="/events">
              See all{' '}
              <img
                src="assets/images/right-arrow.svg"
                className="img-fluid"
                alt="arrow"
              />
            </a>
          </div>
        </div>
        {width <= Constants.MOBILE_BREAK_POINT ? (
          <div
            style={{ width: '30em', overflowX: 'auto', whiteSpace: 'nowrap' }}
          >
            <div className="grid-container">
              {featuredEvents.map((event, i) => {
                return (
                  <div key={event.id} className="item">
                    <div className="item-wrapper">
                      <div className="featured-item-img">
                        <div className="item-img">
                          <img
                            src={event.img}
                            className="img-fluid"
                            alt="explore"
                          />
                        </div>
                        <span className={`category ${event.category}`}>
                          {event.category}
                        </span>
                      </div>
                      <h3>SSO Red Balloon Series: Rhythums, Rites</h3>
                      <p>Fri, 3 May 2019</p>
                      <p>Esplanade Concert Hall</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <Slider {...settings}>
            <div className="grid-container">
              {featuredEvents.map((event, index) => {
                return (
                  <div key={event.id} className="item">
                    <div className="item-wrapper">
                      <div className="featured-item-img">
                        <div className="item-img">
                          <img
                            src={event.img}
                            className="img-fluid"
                            alt="explore"
                          />
                        </div>
                        <span className={`category ${event.category}`}>
                          {event.category}
                        </span>
                      </div>
                      <h3>SSO Red Balloon Series: Rhythums, Rites</h3>
                      <p>Fri, 3 May 2019</p>
                      <p>Esplanade Concert Hall</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Slider>
        )}
      </div>
    </section>
  );
};

export default FeaturedEvents;
