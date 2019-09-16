import React, { Fragment, useState, useEffect } from 'react';
import Constants from '../../shared/constants';
import GiftVouchersService from '../../shared/services/GiftVouchersService';
import GiftVoucherHeader from './GiftVoucherHeader';
import Vouchers from './Vouchers';
import SendGiftCard from './SendGiftCard';
import './style.scss';

const GiftVouchers = () => {
  const [GiftVouchersDetails, SetGiftVouchersDetails] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const params = {
      client: Constants.CLIENT
    };
    GiftVouchersService.getGiftVouchers(params)
      .then(res => {
        SetGiftVouchersDetails(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    GiftVouchersDetails && (
      <Fragment>
        <GiftVoucherHeader
          bannerDescription={GiftVouchersDetails.banner_description}
          bannerUrl={GiftVouchersDetails.banner_url}
        />
        <div className="giftvoucher-body">
          <div className="container">
            <div className="easy-give-receive">
              <h1>{GiftVouchersDetails.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: GiftVouchersDetails.description
                }}
              />
            </div>
          </div>
          <div className="pick-voucher">
            <div className="container">
              <h3>Pick a Voucher that suits you best</h3>
              <Vouchers vouchers={GiftVouchersDetails.vouchers} />
            </div>
          </div>
          <div className="gift-card">
            <div className="container">
              <h3>How to Send a Gift Card</h3>
              <SendGiftCard />
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};

export default GiftVouchers;
