import React, { useState } from 'react';
import downloadIcon from '../../../assets/images/download-icon-blue.svg';
import downArrow from '../../../assets/images/more-arrow-white-blue.svg';

const Media = ({ mediaData }) => {
  const [seeMore, setSeeMore] = useState(false);
  let fourMediaData;
  if (mediaData && mediaData.length > 2 && !seeMore) {
    fourMediaData = mediaData.slice(0, 4);
  } else {
    fourMediaData = mediaData;
  }
  return (
    <section>
      <div className="article-wrapper">
        <div className="container">
          <div className="article-heading">
            <h2>Media</h2>
          </div>
          <div className="article-box">
            {fourMediaData &&
              fourMediaData.map(media => {
                return (
                  <div className="article" key={media.title}>
                    <div className="article-img">
                      <img
                        src={media.image}
                        alt="article-1"
                        className="img-fluid"
                      />
                    </div>
                    <div className="article-content">
                      <a href="#">
                        <span>{media.category}</span>
                      </a>
                      <h3>{media.title}</h3>
                      <div
                        className="sub-text"
                        dangerouslySetInnerHTML={{
                          __html: media.description
                        }}
                      />
                    </div>
                    {media.download_file && (
                      <a
                        href={media.download_file}
                        className="download-icon"
                        download
                        target="_blank"
                      >
                        <img src={downloadIcon} alt="Download" />{' '}
                      </a>
                    )}
                  </div>
                );
              })}
          </div>
          {/* {mediaData && mediaData.length > 2 && !seeMore && (
            <div className="article-bottom">
              <span onClick={() => setSeeMore(true)}>View all Media</span>
            </div>
          )} */}
          <div className="article-bottom">
            <span className="view-all-btn" onClick={() => setSeeMore(true)}>View all Media <img src={downArrow} alt="down-arrow" /></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
