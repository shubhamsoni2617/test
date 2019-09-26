import React from 'react';
import './style.scss';
import {Link} from 'react-router-dom';

const ContactUs = ({
  name,
  email,
  phone,
  message,
  errMsg,
  handleChange,
  handleSubmit
}) => {
  return (
    <div className="contact-us banner-overlay">
      <h1 className="text-center contact-us-header">Contact Us</h1>
      <div className="container">
        <div className="contact-us-block">
          <div className="contact-we-are-at">
            <div className="we-are-at">
              <h3>We are at</h3>
              <h5>SISTIC.com Pte Ltd</h5>
              <p>10 Eunos Road 8, #03-04,</p>
              <p>Singapore Post Centre </p>
              <p>Singapore 408600</p>
              <p>(accessible via Singapore Post </p>
              <p>Centre Main Lift Lobby on Level 1)</p>
              <a
                href="https://www.google.com/maps/place/SISTIC+Singapore/@1.3188674,103.8925123,17z/data=!3m1!4b1!4m5!3m4!1s0x31da199e55248753:0x31c66e32389bd65b!8m2!3d1.318862!4d103.8947064"
                target="_blank"
              >
                Open in Maps
              </a>
            </div>
            <div className="contactus-hotline-number">
              <h4>Hotline Number</h4>
              <p>+65 6348 5555</p>
            </div>
          </div>
          <div className="customer-enquiry-wrapper">
            <div className="customer-enquiry">
              <h3 className="heading-text">Corporate Enquiries</h3>
              <h5 className="text-success"></h5>
              <form onSubmit={e => handleSubmit(e)}>
                <div className="form-group">
                  <select name="enquiry" className="form-control">
                    <option>Request Type*</option>
                  </select>
                </div>
                <div className="form-group">
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder="Full Name*"
                    value={name}
                    onChange={e => handleChange(e)}
                    // required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="email"
                    className="form-control"
                    type="email"
                    placeholder="Email*"
                    value={email}
                    onChange={e => handleChange(e)}
                    // required
                  />
                </div>
                <div className="form-group">
                  <input
                    name="phone"
                    className="form-control"
                    type="text"
                    placeholder="Mobile No.*"
                    value={phone}
                    maxLength={10}
                    onChange={e => handleChange(e)}
                    // required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    className="form-control"
                    rows="5"
                    placeholder=""
                    cols="30"
                    value={message}
                    onChange={e => handleChange(e)}
                    // required
                  />
                  {errMsg ? <span className="error-msg">{errMsg}</span> : null}
                </div>
                <input
                  className="form-control btn-info"
                  type="submit"
                  value="Submit"
                />
                <span className="help-text">
                  Looking to sell tickets with us? Contact us{' '}
                  <Link to="/contact-us">here</Link>.
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
