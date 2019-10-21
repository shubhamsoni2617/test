import React, { useState, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
import Image from '../../../../shared/components/Image';

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
        <div className="row">
          <div className="col-lg-6">
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
          </div>
          <div className="col-lg-6">
            {customSectionThree &&
              customSectionThree
                .slice(1, customSectionThree.length)
                .map((vdo, index) => {
                  return (
                    <div
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
                      <span>
                        <img
                          src={vdo.video_thumb}
                          alt=""
                          width="200"
                          height="200"
                        />
                      </span>
                      <a>{vdo.title}</a>
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomSectionThree;
