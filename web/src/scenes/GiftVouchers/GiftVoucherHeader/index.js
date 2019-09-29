import React from 'react';
import './style.scss';

const giftVoucherHeader = ({ bannerDescription, bannerUrl }) => {
  return (
    <div className="banner-leftalign-wrapper">
      <div className="container-fluid">
        <div className="banner-leftalign">
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
