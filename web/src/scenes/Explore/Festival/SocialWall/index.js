import React, { useState, useEffect, Fragment } from 'react';
import './style.scss';
import axios from 'axios';
import Constants from '../../../../shared/constants';

const SocialWall = ({ socialUrl }) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    if (socialUrl) {
      console.log(socialUrl);
      axios
        .get(`${socialUrl}/?__a=1`)
        // .get(
        //   `https://api.instagram.com/v1/users/self/media/recent/?access_token=` +
        //     Constants.INSTAGRAM_ACCESS_TOKEN
        // )
        .then(result => {
          setFeeds(result.data.graphql.user.edge_owner_to_timeline_media.edges);
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
      <Fragment>
        {feeds && (
          <section className="sistic-moments">
            <div className="container-fluid">
              <div className="social-wall">
                <h2>SocialWall</h2>
                <div className="sistic-moments-wrapper">
                  {feeds &&
                    feeds.map(({ node }) => {
                      console.log(node.display_url);
                      return (
                        <img
                          key={node.display_url}
                          src={node && node.display_url}
                          // height={100}
                          // width={100}
                          alt={node.display_url}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </section>
        )}
      </Fragment>
    );
  }
};

export default SocialWall;
