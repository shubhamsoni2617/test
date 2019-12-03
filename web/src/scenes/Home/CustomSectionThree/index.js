import React, { useState, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import Scrollbar from '../../../shared/components/Scrollbar';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import './style.scss';
import Constants from '../../../shared/constants';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Image from '../../../shared/components/Image';
import Utilities from '../../../shared/utilities';

const CustomSectionThree = ({ heading, customData, isHomePage }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [controls, setControls] = useState(false);
  let [duration, setDuration] = useState([]);

  const [pip, setPip] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [light, setLight] = useState(true);
  const [volume, setVolume] = useState(null);
  const [vdoIndex, setVdoIndex] = useState(0);

  useEffect(() => {
    setDuration([]);
    if (customData && customData.length > 0) {
      setData(customData);
      setUrl(customData[0].video_url);
      setTitle(customData[0].title);
      setVdoIndex(0);
      setLoading(false);
    } else if (customData && !customData.length) {
      getData();
    }
  }, [customData]);

  const getData = () => {
    const params = {
      client: Constants.CLIENT
    };
    AdvertisementService.getCustomizeSectionThree(params)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setData(res.data.data);
            setLoading(false);
            if (res.data.data && res.data.data[0]) {
              setUrl(res.data.data[0].video_url);
              setTitle(res.data.data[0].title);
              setVdoIndex(0);
            }
          }, 2000);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  };

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };
  const renderThumbHorizontal = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgba(35, 49, 86, 0.8)'
    };
    return <span />;
  };

  const secondToMinute = sec => {
    let minutes = Math.floor(sec / 60);
    let seconds = sec - minutes * 60;
    let duration = minutes + ':' + seconds;
    return duration;
  };

  if (!loading && data && data.length === 0) {
    return null;
  }

  return (
    <div>
      {loading ? (
        <ShimmerEffect
          propCls={`shm_col-xs-6 col-md-6`}
          height={300}
          count={2}
          type="LIST"
        />
      ) : (
          <section className="video-gallery">
            <div className="container-fluid">
              <div className="section-top-wrapper">
                <h2>{heading}</h2>
              </div>
              <div className="video-gallery-wrapper">
                <div className="video-only-section">
                  <ReactPlayer
                    width="100%"
                    height={Utilities.mobilecheck() ? '190px' : '465px'}
                    controls
                    pip={pip}
                    muted={muted}
                    url={url && url}
                    playing={playing}
                    light={light}
                    volume={volume}
                  />
                  <h3>{title}</h3>
                  {!isHomePage && (
                    <span>{data && data[0] && data[0].channel_title}</span>
                  )}

                  {!isHomePage && (
                    <span>
                      {data && data[0] && data[0].count !== ' views'
                        ? data[0].count
                        : null}{' '}
                      {data && data[0] && data[0].count !== ' views'
                        ? ' . '
                        : null}
                      {data && data[0] && data[0].posted_date}
                    </span>
                  )}
                </div>
                <div className="video-subwrapper">
                  <Scrollbar>
                    {data &&
                      data.map((vdo, index) => {
                        return (
                          <div
                            className={
                              vdoIndex === index
                                ? 'video-item-image active'
                                : 'video-item-image'
                            }
                            key={index}
                            onClick={() => {
                              setUrl(vdo.video_url);
                              setTitle(vdo.title);
                              setControls(true);
                              setPip(true);
                              setLight(false);
                              setMuted(false);
                              setVolume(0.5);
                              setPlaying(true);
                              setVdoIndex(index);
                            }}
                          >
                            <span className="video-subwrapper-image">
                              <Fragment>
                                <div
                                  className="video-restrict-overlay"
                                  style={{ display: 'none' }}
                                >
                                  <ReactPlayer
                                    width="100%"
                                    height="70px"
                                    muted={true}
                                    url={vdo.video_url}
                                    playing={false}
                                    pip={false}
                                    controls={false}
                                    onDuration={sec => {
                                      duration = [
                                        ...duration,
                                        secondToMinute(sec)
                                      ];
                                      setDuration(duration);
                                    }}
                                  />
                                </div>
                              </Fragment>
                              <div className="video-restrict-overlay">
                                <Image
                                  src={vdo.video_thumb}
                                  alt=""
                                  className="img-fluid"
                                  type="VdoSmall"
                                />
                                {!isHomePage && (
                                  <span className="video-duration">
                                    {duration && duration[index]}
                                  </span>
                                )}
                              </div>
                            </span>
                            <div className="video-subwrapper-text">
                              <a>{vdo.title}</a>
                              {!isHomePage && <span>{vdo.channel_title}</span>}

                              {!isHomePage && (
                                <span>
                                  {vdo.count !== ' views' ? vdo.count : null}{' '}
                                  {vdo.count !== ' views' ? '. ' : null}
                                  {vdo.posted_date}
                                </span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                  </Scrollbar>
                </div>
              </div>
            </div>
          </section>
        )}
    </div>
  );
};

export default CustomSectionThree;
