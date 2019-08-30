import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FaqCategory = props => {
  let param = "About Us";
  let final = { a: `/faq/${param.replace(/\s/g, "-").toLowerCase()}` };
  return (
    <section className="footer">
      <div className="container-fluid">
        <div className="footer-top">
          <div className="footer-links">
            <h3>Our Company</h3>
            <ul>
              <li>
                <Link to="faq/about/1" onClick={() => props.onIdChange(1)}>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/faq/sell/2" onClick={() => props.onIdChange(2)}>
                  Sell with Us
                </Link>
              </li>
              <li>
                <Link to="/faq/ticket/3" onClick={() => props.onIdChange(3)}>
                  Ticketing Technology
                </Link>
              </li>
              <li>
                <Link to="/faq/4">Partner with Us</Link>
              </li>
              <li>
                <Link to="/faq/5">Careers</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqCategory;
