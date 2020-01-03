import React, { useState, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import Scrollbar from '../../../shared/components/Scrollbar';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import './style.scss';
import Constants from '../../../shared/constants';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Image from '../../../shared/components/Image';
import Utilities from '../../../shared/utilities';
import EventHeading from '../../../shared/components/EventHeading';

const CustomSectionThree = ({
  heading,
  customData,
  isHomePage,
  orientation
}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(null);
  const [title, setTitle] = useState(null);
  const [channelTitle, setChannelTitle] = useState(null);
  const [views, setViews] = useState(null);
  const [postedDate, setPostedDate] = useState(null);

  const [controls, setControls] = useState(false);

  const [pip, setPip] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(true);
  const [light, setLight] = useState(true);
  const [volume, setVolume] = useState(null);
  const [vdoIndex, setVdoIndex] = useState(0);

  useEffect(() => {
    if (customData && customData.length > 0) {
      setData(customData);
      setUrl(customData[0].video_url);
      setTitle(customData[0].title);
      setChannelTitle(!isHomePage && customData[0].channel_title);
      setViews(!isHomePage && customData[0].count);
      setPostedDate(!isHomePage && customData[0].posted_date);
      setVdoIndex(0);
      setLoading(false);
    } else if (customData && !customData.length && !orientation) {
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
          setData(res.data.data);
          setLoading(false);
          if (res.data.data && res.data.data[0]) {
            setUrl(res.data.data[0].video_url);
            setTitle(res.data.data[0].title);
            setVdoIndex(0);
          }
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

  const displayDuration = duration => {
    if (duration) {
      let allDuration;
      let durationIndex = duration
        .replace('H', ':')
        .replace('M', ':')
        .replace('S', '')
        .indexOf(':');
      let vdoDuration = duration
        .replace('H', ':')
        .replace('M', ':')
        .replace('S', '');
      if (durationIndex === -1) {
        allDuration = 0 + ':' + vdoDuration;
      } else if (vdoDuration.length === 2) {
        allDuration = vdoDuration + 0;
      } else {
        allDuration = vdoDuration;
      }
      return allDuration;
    }
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
          <div className="container-fluid custom-container">
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
                <EventHeading
                  title={title}
                  lines={1}
                  height={Utilities.mobileAndTabletcheck() ? 20 : 20}
                />
                {!isHomePage && (
                  <span>
                    {channelTitle} {channelTitle ? ' . ' : null}{' '}
                    {views !== ' views' ? views : null}{' '}
                    {views !== ' views' ? ' . ' : null} {postedDate}
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
                            setChannelTitle(vdo.channel_title);
                            setPostedDate(vdo.posted_date);
                            setViews(vdo.count);
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
                            <div className="video-restrict-overlay">
                              <Image
                                src={vdo.video_thumb}
                                alt=""
                                className="img-fluid"
                                type="VdoSmall"
                              />
                              <span className="video-duration">
                                {displayDuration(vdo.duration)}
                              </span>
                            </div>
                          </span>
                          <div className="video-subwrapper-text">
                            <a>
                              <EventHeading
                                title={vdo.title}
                                lines={isHomePage ? 3 : 2}
                                height={
                                  Utilities.mobilecheck()
                                    ? 20
                                    : Utilities.mobileAndTabletcheck()
                                    ? 20
                                    : 20
                                }
                              />
                            </a>
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
