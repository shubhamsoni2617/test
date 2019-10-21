import React, { useState, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import Image from '../../../../shared/components/Image';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
import './style.scss';

const CustomSectionThree = ({ customSectionThree }) => {
  const [url, setUrl] = useState(null);
  const [controls, setControls] = useState(false);

  const [pip, setPip] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [light, setLight] = useState(true);
  const [volume, setVolume] = useState(null);

  useEffect(() => {
    if (customSectionThree && customSectionThree[0]) {
      setUrl(customSectionThree[0].video_url);
    }
  }, [customSectionThree]);

  // const customSectionThree = [
  //   {
  //     title: '1',
  //     video_url: 'https://www.youtube.com/watch?v=fAE0bDqfPnE'
  //   },
  //   {
  //     title: '1',

  //     video_url: 'https://www.youtube.com/watch?v=Vw6r5pUJI8s'
  //   },
  //   {
  //     title: '1',

  //     video_url: 'https://www.youtube.com/watch?v=AETFvQonfV8'
  //   }
  // ];

  return (
    <div>
      {!customSectionThree.length ? (
        <ShimmerEffect
          propCls={`shm_col-xs-6 col-md-2`}
          height={300}
          count={2}
          type="TILE"
        />
      ) : (
          <section className="video-gallery">
            <div className="container-fluid">
              <div className="section-top-wrapper">
                <h2>{customSectionThree && customSectionThree[0] && customSectionThree[0].title}</h2>
                <div className="carousel-dots">
                  <a href="/events">
                    See all {' '}
                    <img
                      src="assets/images/right-arrow.svg"
                      className="img-fluid"
                      alt="arrow"
                    />
                  </a>
                </div>
              </div>
              <div className="video-gallery-wrapper">
                <div className="video-only-section">
                  <ReactPlayer
                    width="100%"
                    height="100%"
                    controls
                    pip={pip}
                    muted={muted}
                    url={url && url}
                    playing={playing}
                    // light={light}
                    volume={volume}
                  />{' '}
                  <h3>Celebrate 2016 - Teaser: Tickets at SISTIC from 9 Nov</h3>
                </div>
                <div className="video-subwrapper">
                  {customSectionThree &&
                    customSectionThree
                      .slice(1, customSectionThree.length)
                      .map((vdo, index) => {
                        return (
                          <div className="video-item-image"
                            key={index}
                            onClick={() => {
                              setUrl(vdo.video_url);
                              setControls(true);
                              setPip(true);
                              setLight(false);
                              setMuted(false);
                              setVolume(0.5);
                            }}
                          >
                            <span className="video-subwrapper-image">
                              <img
                                src={vdo.video_thumb}
                                alt=""
                                className="img-fluid"
                              />
                            </span>
                            <a className="video-subwrapper-text">{vdo.title}</a>
                            {/* <a >[HD] Universal Studios Singapore Tour - Universal Studios Theme Park</a> */}
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          </section>
        )}
    </div>
  );
};

export default CustomSectionThree;
