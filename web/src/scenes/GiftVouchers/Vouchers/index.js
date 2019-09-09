import React from "react";
import "./style.scss";
import Voucher from "./Voucher";

const Vouchers = ({ vouchers }) => {
  return (
    <div className="vouchers">
      {vouchers.map((voucher, i) => {
        return (
          <div className="voucher-wrapper" key={voucher.price + i}>
            <Voucher voucherdetail={voucher} />
          </div>
        );
      })}
    </div>
  );
};

export default Vouchers;
