import React, { Fragment } from 'react';
import article1 from '../../../assets/images/Bitmap.png';
import article2 from '../../../assets/images/article-2.jpg';
import article3 from '../../../assets/images/bitmap-3.png';
import article4 from '../../../assets/images/Bitmap-4.png';
import downloadIcon from '../../../assets/images/download-icon-blue.svg';
const Media = ({ mediaData }) => {
  return (
    <section>
      <div class="article-wrapper">
        <div class="container">
          <div class="article-heading">
            <h2>Media</h2>
          </div>
          <div class="article-box">
            {mediaData &&
              mediaData.map(media => {
                return (
                  <div class="article">
                    <div class="article-img">
                      <img
                        src={media.image}
                        alt="article-1"
                        class="img-fluid"
                      />
                    </div>
                    <div class="article-content">
                      <a href="#">
                        <span>{media.category}</span>
                      </a>
                      <h2>{media.title}</h2>
                      <div
                        className="text-center sub-text"
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
          <div class="article-bottom">
            <a href="#">View all Media</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
