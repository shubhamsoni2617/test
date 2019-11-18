import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import moment from 'moment';
import downArrow from '../../../assets/images/more-arrow-white-blue.svg';

const VideoBreak = ({ videoData }) => {
  const [seeMore, setSeeMore] = useState(false);
  let twoVideoData;
  if (videoData && videoData.length > 2 && !seeMore) {
    twoVideoData = videoData.slice(0, 2);
  } else {
    twoVideoData = videoData;
  }
  return (
    <section>
      <div className="video-wrapper">
        <div className="container">
          <div className="video-heading">
            <h2>Video Break</h2>
          </div>
          <div className="video-box">
            {twoVideoData &&
              twoVideoData.map(video => {
                return (
                  <div className="video" key={video.title}>
                    <div className="video-img">
                      <ReactPlayer
                        width="100%"
                        height="250px"
                        controls
                        pip={true}
                        muted={true}
                        url={video.video_url}
                        playing={false}
                      />
                    </div>
                    <div className="video-content">
                      <h3>{video.title}</h3>
                      {video.date && (
                        <span>{moment(video.date).format('DD MMM YYYY')}</span>
                      )}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: video.description
                        }}
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        {videoData && videoData.length > 2 && !seeMore && (
          <div className="video-bottom">
            <span className="view-all-btn" onClick={() => setSeeMore(true)}>View all Video <img src={downArrow} alt="down-arrow" /></span>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoBreak;
