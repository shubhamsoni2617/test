import React, { Fragment, useState, useEffect } from 'react';
import Constants from '../../shared/constants';
import GiftVouchersService from '../../shared/services/GiftVouchersService';
import GiftVoucherHeader from './GiftVoucherHeader';
import Vouchers from './Vouchers';
import SendGiftCard from './SendGiftCard';
import './style.scss';
import ShimmerEffect from '../../shared/components/ShimmerEffect';
import MetaData from '../../shared/components/MetaData';

const GiftVouchers = props => {
  const [GiftVouchersDetails, SetGiftVouchersDetails] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const params = {
      client: Constants.CLIENT
    };
    GiftVouchersService.getGiftVouchers(params)
      .then(res => {
        setTimeout(() => {
          SetGiftVouchersDetails(res.data.data);
        }, 700);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return GiftVouchersDetails ? (
    <Fragment>
      <div className="giftvoucher-wrapper">
        <MetaData location={props.location} data={props.staticContext} />
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
            <div className="container-fluid custom-container">
              <h3>Pick a Voucher that suits you best</h3>
              <Vouchers vouchers={GiftVouchersDetails.vouchers} />
            </div>
          </div>
          <div className="gift-card">
            <div className="container-fluid custom-container">
              <h3>How to Send a Gift Card</h3>
              <SendGiftCard />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  ) : (
    <ShimmerEffect
      propCls="shm_col-xs-6 col-md-12"
      height={80}
      count={3}
      type="TILE"
    />
  );
};

export default GiftVouchers;
