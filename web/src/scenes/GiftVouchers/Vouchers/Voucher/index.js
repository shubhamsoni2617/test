import React from "react";
import "./style.scss";

import Logo from "../../../../assets/images/Logo.png";

import { Link } from "react-router-dom";

const Voucher = ({ voucherdetail }) => {
  return (
    <div style={{ backgroundColor: "orange" }}>
      <div>
        <img src={Logo} alt="Logo" />
        <h1>S${voucherdetail.price}</h1>
      </div>
      <p>Gift Voucher</p>
      <Link to={voucherdetail.url}>Buy Now</Link>
    </div>
  );
};

export default Voucher;
