import React from "react";
import "./style.scss";
import Logo from "../../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import buynowarrow from "../../../../assets/images/buy-arrow-b.png";

const Voucher = ({ voucherdetail }) => {
  let priceArray = voucherdetail.price.split('.');
  let price = priceArray[0];
  if (Number(priceArray[1]) !== 0) {
    price = price + '.' + priceArray[1].slice(0, 2);
  }

  return (
    <div className="voucher-content">
      <div className="voucher-top">
        <img src={Logo} alt="Logo" />
        <span className="voucher-price">S${price}</span>
      </div>
      <div className="voucher-footer">
        <p>Gift Voucher</p>
        <a href={voucherdetail.url}>
          Buy Now <img src={buynowarrow} alt="arrow" />
        </a>
      </div>
    </div>
  );
};

export default Voucher;
