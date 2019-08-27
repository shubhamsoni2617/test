import React from "react";
import "./style.scss";

import Voucher from "./Voucher";

const Vouchers = ({ vouchers }) => {
  return (
    <div className="vouchers">
      <div className="wrapper">
        {vouchers.map((voucher, i) => {
          return (
            <div key={voucher.price + i}>
              <Voucher voucherdetail={voucher} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Vouchers;
