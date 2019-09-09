import React from "react";
import "./style.scss";
import Logo from "../../../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import buynowarrow from "../../../../assets/images/buy-arrow-b.png";

const Voucher = ({ voucherdetail }) => {
  return (
    <div className="voucher-content">
      <div className="voucher-top">
        <img src={Logo} alt="Logo" />
        <span className="voucher-price">S${voucherdetail.price}</span>
      </div>
      <div className="voucher-footer">
        <p>Gift Voucher</p>
        <Link to={voucherdetail.url}>Buy Now <img src={buynowarrow} alt="arrow" /></Link>
      </div>
    </div>
  );
};

export default Voucher;
