import React, { useState, useEffect } from 'react';
import Constants from '../../../shared/constants';
import Utilities from '../../../shared/utilities';
import HomeService from '../../../shared/services/HomeService';
import Carousel from '../../../shared/components/Carousel';

const TopPics = props => {
  const [topPics, setTopPics] = useState([]);

  useEffect(() => {
    getTopPics();
  }, []);

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

  return (
    <section className="top-picks">
      <div className="container-fluid">
        <h2>Top Picks For You</h2>
        <Carousel
          imgArray={topPics}
          arrows={true}
          slidesToShow={6}
          slidesToScroll={6}
          autoplay={false}
          infinite={false}
          dots={true}
        />
        {/* {width <= Constants.MOBILE_BREAK_POINT ? (
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
                            <img
                              src={pic.img}
                              className="img-fluid item-image"
                              alt="kurios"
                            />
                          </div>
                          <span
                            className={`category ${pic.category} top-picks-category`}
                          >
                            {pic.category}
                          </span>
                          <div
                            className={`item-overlay ${pic.category}-overlay`}
                          >
                            <div className="overlay-wrapper">
                              <h3>Kurios Cabinet of Curiosities</h3>
                              <span>Fri, 19 Apr- Sun, 19 May 2019</span>
                              <p>
                                Under the big top Bayfront Avenue, beside Marina
                                Bay Sands
                              </p>
                              <p>
                                Cirque du Soleil comes to Singapore with its
                                most acclaimed touring show, KURIOS – Cabinet of
                                Curiosities.
                              </p>
                            </div>
                          </div>
                        </div>
                        <h3>
                          {Utilities.showLimitedChars(pic.description, 15)}
                        </h3>
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
                          <img
                            src={pic.img}
                            className="img-fluid item-image"
                            alt="kurios"
                          />
                        </div>
                        <span
                          className={`category ${pic.category} top-picks-category`}
                        >
                          {pic.category}
                        </span>
                        <div className={`item-overlay ${pic.category}-overlay`}>
                          <div className="overlay-wrapper">
                            <h3>Kurios Cabinet of Curiosities</h3>
                            <span>Fri, 19 Apr- Sun, 19 May 2019</span>
                            <p>
                              Under the big top Bayfront Avenue, beside Marina
                              Bay Sands
                            </p>
                            <p>
                              Cirque du Soleil comes to Singapore with its most
                              acclaimed touring show, KURIOS – Cabinet of
                              Curiosities.
                            </p>
                          </div>
                        </div>
                      </div>
                      <h3>Kurios Cabinet of Curiosities</h3>
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
        )} */}
      </div>
    </section>
  );
};

export default TopPics;
