import React from 'react';
import './style.scss';

const giftVoucherHeader = ({ bannerDescription, bannerUrl }) => {
  return (
    <div className="giftvoucherheader">
      <div className="container-fluid">
        <div className="giftvoucherheader-banner">
          <div className="banner-desc">
            <div
              className="banner-title"
              dangerouslySetInnerHTML={{
                __html: bannerDescription
              }}
            />
            <a className="buy-now" href={bannerUrl}>
              <span>BUY NOW</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default giftVoucherHeader;
