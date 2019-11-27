import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
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

  const [pip, setPip] = useState(false);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [light, setLight] = useState(true);
  const [volume, setVolume] = useState(null);
  const [vdoIndex, setVdoIndex] = useState(0);

  useEffect(() => {
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
                  // light={light}
                  volume={volume}
                />
                <h3>{title}</h3>
              </div>
              <div className="video-subwrapper">
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
                          <Image
                            src={vdo.video_thumb}
                            alt=""
                            className="img-fluid"
                            type="VdoSmall"
                          />
                        </span>
                        <a className="video-subwrapper-text">{vdo.title}</a>
                        {!isHomePage && (
                          <span>
                            {vdo.count !== ' views' ? vdo.count : null}{' '}
                            {vdo.posted_date}
                          </span>
                        )}
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
