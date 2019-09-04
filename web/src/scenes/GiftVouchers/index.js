import React, { Fragment, useState, useEffect } from "react";
import Constants from "../../shared/constants";
import GiftVouchersService from "../../shared/services/GiftVouchersService";
import GiftVoucherHeader from "./GiftVoucherHeader";
import Vouchers from "./Vouchers";
import SendGiftCard from "./SendGiftCard";

const GiftVouchers = () => {
  const [GiftVouchersDetails, SetGiftVouchersDetails] = useState(null);

  useEffect(() => {
    const params = {
      client: Constants.CLIENT
    };
    GiftVouchersService.getGiftVouchers(params)
      .then(res => {
        console.log(res.data.data);
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
        />
        <h1>{GiftVouchersDetails.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: GiftVouchersDetails.description
          }}
        />
        <h1>Pick a Voucher that suits you best</h1>
        <Vouchers vouchers={GiftVouchersDetails.vouchers} />
        <h1>How to Send a Gift Card</h1>
        <SendGiftCard />
      </Fragment>
    )
  );
};

export default GiftVouchers;
