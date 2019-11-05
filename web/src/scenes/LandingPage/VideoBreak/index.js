import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import moment from 'moment';
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
                        height="316px"
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
          <div className="article-bottom">
            <span onClick={() => setSeeMore(true)}>View all Video</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoBreak;
