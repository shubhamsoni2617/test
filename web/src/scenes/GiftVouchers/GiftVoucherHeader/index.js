import React from "react";
import "./style.scss";
import happygirl from "../../../assets/images/happy-girl.png";
import arrow from "../../../assets/images/buy-arrow.png";

const giftVoucherHeader = ({ bannerDescription }) => {
  return (
    <div className="giftvoucherheader">
      <div className="giftvoucherheader-wrapper">
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
            <div className="banner-image">
              <img src={happygirl} alt="HappyGirl" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default giftVoucherHeader;
