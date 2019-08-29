import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const FaqCategory = props => {
  console.log(props);
  console.log(window.location.origin);
  return (
    <section className="footer">
      <div className="container-fluid">
        <div className="footer-top">
          <div className="footer-links">
            <h3>Our Company</h3>
            <ul>
              <li>
                <Link to="/faq/1">About Us</Link>
              </li>
              <li>
                <Link to="/faq/2">Sell with Us</Link>
              </li>
              <li>
                <Link to="/faq/3">Ticketing Technology</Link>
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
