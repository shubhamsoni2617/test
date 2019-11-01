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
            <div className="why-sistic-head">
              <h2>Why SISTIC?</h2>
              <p>
                The SISTIC audience is a perfect fit for show organisers and
                companies offering lifestyle products. For advertising rates and
                bookings of your preferred medium
              </p>
              <span>
                Reach us via email at{' '}
                <a herf="#">sisticservices@sistic.com.sg</a>
              </span>
            </div>
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
          <div className="website-content">
            <h2>Website</h2>
            <p>
              Advertising banners on the Homepage, Events Calendar and spaces
              across the website are available in a myriad of sizes and
              placements to suit your needs. With monthly page views of more
              than 4 million on average and growing, these spaces are prime real
              estate to increase visibility and awareness of your event.
            </p>
          </div>
          <div className="website-image text-right">
            <img src={img1} alt="websiter-image" className="img-fluid" />
          </div>
        </div>
      </section>

      <section>
        <div className="container-fluid">
          <div className="app-wrapper flex-row-reverse">
            <div className="app-content text-right pl-5">
              <h2>Mobile App</h2>
              <p>
                Access live entertainment at one’s fingertips – The SISTIC
                mobile app has garnered over 210k downloads since it’s revamp in
                2015 and records an average of 21,000 users each month.
                Advertise your show on the Home Screen Carousel Banner for all
                app users to see up front and centre from the moment they launch
                their app.
              </p>
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
              <h2>SISTIC Buzz</h2>
              <p>
                Over 500,000 of our subscribers stays on top of what’s hot
                through a fortnightly entertainment feed via SISTIC Buzz, our
                free in-house e-newsletter. Besides featuring the latest events
                on sale through SISTIC, SISTIC Buzz also rewards our readers
                with special discounts and exciting contests. Show and event
                promoters gets an extra push for their events via advertising in
                the newsletter as well.
              </p>
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
              <h2>Social Media</h2>
              <p>
                Want first dibs on upcoming SISTIC events? Then let’s get
                social! Like us on Facebook and follow us on Instagram for daily
                updates on the hottest events in town, our latest giveaways and
                exclusive behind the scenes content. Whether you are a concert
                junkie or a theatre fan, be sure to tag us and share your live
                experiences with us.
              </p>
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
