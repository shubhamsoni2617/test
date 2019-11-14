import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import ShimmerEffect from '../../../shared/components/ShimmerEffect';
import './style.scss';
import Constants from '../../../shared/constants';
import AdvertisementService from '../../../shared/services/AdvertisementService';

const CustomSectionThree = ({ heading, customData }) => {
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

  useEffect(() => {
    if (customData && customData.length > 0) {
      setData(customData);
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

  console.log(data);

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
                  height="465px"
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
                        className="video-item-image"
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
