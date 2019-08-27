import React from "react";
import "./style.scss";
import HappyGirl from "../../../assets/images/Happy Girl.png";

const giftVoucherHeader = ({ bannerDescription }) => {
  return (
    <div className="giftVoucherHeader">
      <div className="giftVoucherHeader-wrapper">
        <div className="container">
          <div className="giftVoucherHeader-banner">
            <div className="giftVoucherHeader-desc">
              <div
                dangerouslySetInnerHTML={{
                  __html: bannerDescription
                }}
              />
              <a href="/">BUY NOW</a>
            </div>
            <div className="giftVoucherHeader-image">
              <span>
                <img src={HappyGirl} alt="HappyGirl" className="img-fluid" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default giftVoucherHeader;
