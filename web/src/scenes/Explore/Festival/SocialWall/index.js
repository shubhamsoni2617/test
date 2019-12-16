import React, { useState, useEffect, Fragment } from 'react';
import './style.scss';
import axios from 'axios';
import Masonry from '../SocialWall/Masonry';
import Tiles from '../SocialWall/Tiles';
import Utilities from '../../../../shared/utilities';

const SocialWall = ({ socialUrl }) => {
  let brakePoints = [350, 500, 750];

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [feeds, setFeeds] = useState([]);

  useEffect(() => {
    if (socialUrl) {
      axios
        .get(`${socialUrl}/?__a=1`)
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
    return null;
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
                  <Masonry brakePoints={brakePoints}>
                    {feeds &&
                      feeds.map(({ node }, id) => {
                        return <Tiles src={node.display_url} key={id} />;
                      })}
                  </Masonry>
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
