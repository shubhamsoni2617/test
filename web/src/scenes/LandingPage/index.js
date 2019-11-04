import React, { useState, useEffect } from 'react';
import './style.scss';
import video1 from '../../assets/images/video-1.png';
import video2 from '../../assets/images/video-2.png';
import Banner from './Banner';
import GetStarted from './GetStarted';
import B2BService from '../../shared/services/B2BService';
import Media from './Media';

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState(null);

  useEffect(() => {
    fetchLandingPageData();
  }, []);

  const fetchLandingPageData = () => {
    B2BService.getLandingPage()
      .then(res => {
        setLandingPageData(res.data);
      })
      .catch(err => console.log(err));
  };
  return (
    <div class="b2b-landing">
      <Banner bannerData={landingPageData} />

      {/* <GetStarted
        getStartedData={landingPageData && landingPageData.content.get_started}
      /> */}
      <Media mediaData={landingPageData && landingPageData.content.media} />
      {/* video break starts here */}
      <section>
        <div class="video-wrapper">
          <div class="container">
            <div class="video-heading">
              <h2>Video Break</h2>
            </div>
            <div class="video-box">
              <div class="video">
                <div class="video-img">
                  <img src={video1} alt="article-4" />
                </div>
                <div class="video-content">
                  <h3>SISTIC- The Phantom of Opera</h3>
                  <span>26 May 2019</span>
                  <p>
                    The world’s most popular musical makes its way to Singapore.
                    Opens April 2019. Now on Pre-sale, book your tickets through
                    SISTIC.
                  </p>
                  <a href="#">Learn More ></a>
                </div>
              </div>

              <div class="video">
                <div class="video-img">
                  <img src={video2} alt="article-4" />
                </div>
                <div class="video-content">
                  <h3>
                    SISTIC - Unbelievable Trevor Noah Loud & Clear! Facebook
                  </h3>
                  <span>8 Jun 2019 </span>
                  <p>
                    The world’s most popular musical makes its way to Singapore.
                    Opens April 2019. Now on Pre-sale, book your tickets through
                    SISTIC.
                  </p>
                  <a href="#">Learn More ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
