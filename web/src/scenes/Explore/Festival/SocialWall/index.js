import React, { useState, useEffect, Fragment } from 'react';
import './style.scss';
import axios from 'axios';
import { useCustomWidth } from '../../../../shared/components/CustomHooks';
import Constants from '../../../../shared/constants';
import Image from '../../../../assets/images/core-value.png';

const SocialWall = ({ socialUrl }) => {
  const [width] = useCustomWidth();
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    if (socialUrl) {
      axios
        // .get(`${socialUrl}/?access_token=` + Constants.INSTAGRAM_ACCESS_TOKEN)
        .get(
          `https://api.instagram.com/v1/users/self/media/recent/?access_token=` +
            Constants.INSTAGRAM_ACCESS_TOKEN
        )
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

  const imagesArr = [
    { path: Image, height: 100, width: 30 },
    { path: Image, height: 50, width: 130 },
    { path: Image, height: 200, width: 300 },
    { path: Image, height: 400, width: 400 },
    { path: Image, height: 100, width: 300 },
    { path: Image, height: 100, width: 300 },
    { path: Image, height: 100, width: 30 },
    { path: Image, height: 50, width: 130 },
    { path: Image, height: 200, width: 300 },
    { path: Image, height: 400, width: 400 },
    { path: Image, height: 100, width: 300 },
    { path: Image, height: 100, width: 300 },
    { path: Image, height: 100, width: 30 },
    { path: Image, height: 50, width: 130 },
    { path: Image, height: 200, width: 300 },
    { path: Image, height: 400, width: 400 },
    { path: Image, height: 100, width: 300 },
    { path: Image, height: 100, width: 300 },
    { path: Image, height: 100, width: 30 },
    { path: Image, height: 50, width: 130 },
    { path: Image, height: 200, width: 300 },
    { path: Image, height: 400, width: 400 },
    { path: Image, height: 100, width: 300 },
    { path: Image, height: 100, width: 300 }
  ];

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="instafeeds-loading">Loading...</div>;
  } else {
    return (
      <Fragment>
        {feeds && (
          <section className="sistic-moments">
            <div className="container-fluid">
              <h2>SocialWall</h2>
            </div>
            {/* <div className="sistic-moments-wrapper" style={{ width: '1400px' }}>
              {imagesArr &&
                imagesArr.map(feed => (
                  <img
                    src={feed.path}
                    height={feed.height}
                    width={feed.width}
                    alt=""
                  />
                ))}
            </div> */}

            <div className="sistic-moments-wrapper">
              {feeds &&
                feeds.map(feed => (
                  <img
                    key={feed.id}
                    src={feed.images.thumbnail.url}
                    height={feed.images.thumbnail.height}
                    width={feed.images.thumbnail.width}
                    alt=""
                  />
                ))}
            </div>
          </section>
        )}
      </Fragment>
    );
  }
};

export default SocialWall;
