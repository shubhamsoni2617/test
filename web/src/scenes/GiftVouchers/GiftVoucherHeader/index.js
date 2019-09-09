import React from "react";
import "./style.scss";
import happygirldesktop from "../../../assets/images/happy-girl-desktop.png";
import happygirlmobile from "../../../assets/images/happy-girl.png";
import arrow from "../../../assets/images/buy-arrow.png";

const giftVoucherHeader = ({ bannerDescription }) => {
  return (
    <div className="giftvoucherheader">      
      <div className="container-fluid">
        <div className="giftvoucherheader-banner">
          <div className="banner-desc">
            <div className="banner-title"
              dangerouslySetInnerHTML={{
                __html: bannerDescription
              }}
            />
            <a className="buy-now" href="/">
              <span>BUY NOW</span>
            </a>
          </div>
          {/* <div className="banner-image">
            <img src={happygirldesktop} alt="HappyGirl" className="img-fluid desktop-banner-img" />
            <img src={happygirlmobile} alt="HappyGirl" className="img-fluid mobile-banner-img" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default giftVoucherHeader;
