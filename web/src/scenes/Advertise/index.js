import React, { useState, useEffect } from 'react';
import './style.scss';
import B2BService from '../../shared/services/B2BService';
import Constants from '../../shared/constants';
import banner from '../../assets/images/Group-5.png';
import img1 from '../../assets/images/website.png';
import img2 from '../../assets/images/Group-5.png';
import img3 from '../../assets/images/buzz.png';
import img4 from '../../assets/images/send.svg';
import fb from '../../assets/images/fb.png';
import insta from '../../assets/images/insta.png';
import social from '../../assets/images/social.png';
import apple from '../../assets/images/apple.svg';
import android from '../../assets/images/android.png';

const Advertise = props => {
  const [advertiseData, setAdvertiseData] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
    const params = {
      client: Constants.CLIENT
    };
    B2BService.getAdvertiseWithUs(params)
      .then(res => {
        if (res && res.data) {
          setAdvertiseData(res.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  console.log(advertiseData);
  return (
    <div>
      <section>
        <div className="event-wrapper">
          <div className="event-banner">
            <div className="container-fluid">
              <div className="row advertise-banner">
                <div className="col-md-6 col-sm-6">
                  {advertiseData && (
                    <div className="banner-content">
                      <h2>{advertiseData.banner_title} </h2>
                      <a href={advertiseData.button_link}>
                        {advertiseData.button_text}
                      </a>
                    </div>
                  )}
                </div>
                <div className="col-md-6 col-sm-6 pos-static">
                  <div className="banner-image">
                    <img
                      src={banner}
                      alt="banner-image"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="why-sistic">
            {advertiseData && (
              <div className="why-sistic-head">
                <h2>{advertiseData.content[0].title}</h2>
                <div
                  dangerouslySetInnerHTML={{
                    __html: advertiseData.content[0].description
                  }}
                />
              </div>
            )}
            <div className="why-sistic-tab">
              <h2>Our Advertising channels</h2>
              <div className="sistic-tab-button">
                <a href="#">Website</a>
                <a href="#">Mobile App</a>
                <a href="#">SISTIC Buzz</a>
                <a href="#">Social Media</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="website-wrapper">
          {advertiseData && (
            <div className="website-content">
              <h2>{advertiseData.content[1].title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: advertiseData.content[1].description
                }}
              />
            </div>
          )}
          <div className="website-image text-right">
            <img src={img1} alt="websiter-image" className="img-fluid" />
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="app-wrapper flex-row-reverse">
            <div className="app-content text-right pl-5">
              {advertiseData && (
                <>
                  <h2>{advertiseData.content[2].title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: advertiseData.content[2].description
                    }}
                  />
                </>
              )}

              <div className="download-option app-option">
                <a>
                  <img src={apple} className="ios" alt="" />
                  <span>
                    Available on the
                    <br />
                    <strong>App Store</strong>
                  </span>
                </a>
                <a>
                  <img src={android} className="android" alt="" />
                  <span>
                    Get it on
                    <br />
                    <strong>Play Store</strong>
                  </span>
                </a>
              </div>
            </div>
            <div className="app-image">
              <img src={img2} alt="mobile-image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="app-wrapper">
            <div className="app-content pr-5">
              {advertiseData && (
                <>
                  <h2>{advertiseData.content[3].title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: advertiseData.content[3].description
                    }}
                  />
                </>
              )}
              <div className="stay-connect buzz-connect">
                <h3>Subscribe to receive our newsletter</h3>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your email"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <div className="input-group-prepend">
                    <a className="input-group-text" id="basic-addon1">
                      <img src={img4} className="img-fluid" alt="send" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="app-image text-right">
              <img src={img3} alt="buzz-image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="app-wrapper flex-row-reverse">
            <div className="app-content text-right pl-5">
              {advertiseData && (
                <>
                  <h2>{advertiseData.content[4].title}</h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: advertiseData.content[4].description
                    }}
                  />
                </>
              )}
              <div className="download-option social-option">
                <a>
                  <img src={fb} className="fb" alt="" />
                  <span>Facebook</span>
                </a>
                <a>
                  <img src={insta} className="insta" alt="" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
            <div className="app-image">
              <img src={social} alt="social-image" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertise;
