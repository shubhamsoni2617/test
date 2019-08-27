import React, { Component, Fragment } from "react";
import Constants from "../../shared/constants";
import GiftVouchersService from "../../shared/services/GiftVouchersService";

import GiftVoucherHeader from "./GiftVoucherHeader";
import Vouchers from "./Vouchers";
import SendGiftCard from "./SendGiftCard";

class GiftVouchers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GiftVouchersDetails: null
    };
  }

  componentDidMount() {
    this.fetchGiftVouchers();
  }

  fetchGiftVouchers = () => {
    const params = {
      client: Constants.CLIENT
    };
    GiftVouchersService.getGiftVouchers()
      .then(res => {
        console.log(res.data.data);
        this.setState({
          GiftVouchersDetails: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    let { GiftVouchersDetails } = this.state;

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
  }
}

export default GiftVouchers;
