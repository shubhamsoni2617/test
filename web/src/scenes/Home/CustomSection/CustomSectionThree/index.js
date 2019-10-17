import React, { useState, useEffect, Fragment } from 'react';
import ReactPlayer from 'react-player';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';
import Image from '../../../../shared/components/Image';

const CustomSectionThree = ({ customSectionThree }) => {
  const [url, setUrl] = useState(null);

  useEffect(() => {
    if (customSectionThree && customSectionThree[0]) {
      setUrl(customSectionThree[0].video_url);
    }
  }, []);

  console.log(url);
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
              controls
              url={url}
              playing
              // muted={false}
              light
            />{' '}
          </div>
          <div className="col-lg-6">
            {customSectionThree &&
              customSectionThree
                .slice(1, customSectionThree.length)
                .map((vdo, index) => {
                  return (
                    <div key={index} onClick={() => setUrl(vdo.video_url)}>
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
      )
      // <div>
      //   <ul>
      //     {url.map(({ link }) => {
      //       return <li onClick={() => setUrlLink(link)}>{link}</li>;
      //     })}
      //   </ul>
      // </div>
      }
    </div>
  );
};

export default CustomSectionThree;
