import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import Constant from '../../constants';
// import { useCustomWidth } from '../CustomHooks';
import Utilities from '../../utilities';

const InstagramFeed = () => {
  // const [width] = useCustomWidth();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState([]);

  const settings = {
    centerMode: false,
    infinite: true,
    slidesToScroll: 4,
    centerPadding: '60px',
    slidesToShow: 7,
    speed: 1000,
    autoplay: true
  };

  useEffect(() => {
    axios
      .get(
        'https://api.instagram.com/v1/users/self/media/recent/?access_token=' +
          Constant.INSTAGRAM_ACCESS_TOKEN
      )
      .then(result => {
        setFeeds(result.data.data);
        setIsLoaded(true);
      })
      .catch(error => {
        setIsLoaded(false);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="instafeeds-loading">Loading...</div>;
  } else {
    return (
      <section className="sistic-moments">
        <div className="container-fluid">
          <h2>#SISTICMoments</h2>
        </div>
        <div className="sistic-moments-wrapper">
          {Utilities.mobilecheck() ? (
            feeds &&
            feeds.map(feed => (
              <a href={feed.link} target="_blank">
                <img
                  key={feed.id}
                  src={feed.images.low_resolution.url}
                  alt=""
                />
              </a>
            ))
          ) : (
            <Slider {...settings}>
              {feeds &&
                feeds.map(feed => (
                  <a href={feed.link} target="_blank">
                    <img
                      key={feed.id}
                      src={feed.images.low_resolution.url}
                      alt=""
                    />
                  </a>
                ))}
            </Slider>
          )}
        </div>
      </section>
    );
  }
};

export default InstagramFeed;
