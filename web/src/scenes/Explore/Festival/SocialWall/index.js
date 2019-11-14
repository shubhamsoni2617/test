import React, { useState, useEffect } from 'react';
import './style.scss';
import Slider from 'react-slick';
import axios from 'axios';
import { useCustomWidth } from '../../../../shared/components/CustomHooks';
import Constants from '../../../../shared/constants';

const SocialWall = ({ socialUrl }) => {
  console.log(socialUrl);
  const [width] = useCustomWidth();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState([]);

  const settings = {
    centerMode: false,
    infinite: true,
    slidesToScroll: 4,
    centerPadding: '60px',
    slidesToShow: 7,
    speed: 500
  };

  useEffect(() => {
    if (socialUrl) {
      axios
        .get(`${socialUrl}/?access_token=` + Constants.INSTAGRAM_ACCESS_TOKEN)
        .then(result => {
          setFeeds(result.data.data);
          setIsLoaded(true);
        })
        .catch(error => {
          setIsLoaded(false);
          setError(error);
        });
    }
  }, [socialUrl]);

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
          {width <= Constants.MOBILE_BREAK_POINT ? (
            feeds &&
            feeds.map(feed => (
              <img key={feed.id} src={feed.images.thumbnail.url} alt="" />
            ))
          ) : (
            <Slider {...settings}>
              {feeds &&
                feeds.map(feed => (
                  <img key={feed.id} src={feed.images.thumbnail.url} alt="" />
                ))}
            </Slider>
          )}
        </div>
      </section>
    );
  }
};

export default SocialWall;
