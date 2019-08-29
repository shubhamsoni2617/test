import React, { Fragment, useState, useEffect } from "react";
import "./style.scss";
import SearchFaq from "./SearchFaq";
const Faq = () => {
  return (
    <Fragment>
      <SearchFaq />
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="col-lg-4">
            <ul>
              <li>section 1</li>
              <li>section 1</li>
              <li>section 1</li>
            </ul>
          </div>
          <div className="col-lg-8">
            {/* <a href="/" className="find-map-mob">Find in map <img src={grayArrow} alt="Arrow"/></a> */}
            <h3>Payment Mode</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
