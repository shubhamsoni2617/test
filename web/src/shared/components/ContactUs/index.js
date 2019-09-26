import React, { useState, useEffect } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import ContactUsService from '../../services/ContactUsService';
import Constants from '../../constants';
import Utilities from '../../utilities';

const ContactUs = props => {
  const [enquiryCategory, setEnquiryCategory] = useState([]);
  const [enquiry, setEnquiry] = useState('Select an Enquiry');
  const [contactDetail, setContactDetail] = useState({});
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [submitResponse, setSubmitResponse] = useState('');

  useEffect(() => {
    fetchEnquiry();
    fetchContactDetail();
  }, []);

  const fetchEnquiry = () => {
    ContactUsService.getEnquiry()
      .then(res => {
        if (res && res.data) {
          setEnquiryCategory(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchContactDetail = () => {
    ContactUsService.getContactDetail()
      .then(res => {
        if (res && res.data) {
          setContactDetail(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (enquiry !== 'Select an Enquiry' && name && email && phone && message) {
      const check = Utilities.mobilecheck();
      const data = {
        category: Number(enquiry),
        name: name,
        email: email,
        contact_number: phone,
        message: message,
        source_from:
          check > Constants.MOBILE_BREAK_POINT
            ? Constants.SOURCE_FROM_WEBSITE
            : Constants.SOURCE_FROM_MOBILE_RESPONSIVE
      };
      submitForm(data);
    } else {
      setErrMsg('Please complete all fields');
    }
  };

  const submitForm = data => {
    ContactUsService.formSubmission(data)
      .then(res => {
        if (res && res.data) {
          setSubmitResponse(res.data[0]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const allowOnlyNum = /^[0-9\b]+$/;
      if (value === '' || allowOnlyNum.test(value)) {
        setPhone(value);
      }
    } else {
      switch (name) {
        case 'enquiry':
          setEnquiry(value);
          break;
        case 'name':
          setName(value);
          break;
        case 'email':
          setEmail(value);
          break;
        case 'message':
          setMessage(value);
          break;
        default:
          return;
      }
    }
    setErrMsg('');
  };

  return (
    <div className="contact-us banner-overlay">
      <h1 className="text-center contact-us-header">Contact Us</h1>
      <h5 className="text-success text-center">{submitResponse}</h5>
      <div className="container">
        <div className="contact-us-block">
          <div className="contact-we-are-at">
            <div className="we-are-at">
              <h3>We are at</h3>
              {/* <h5>SISTIC.com Pte Ltd</h5>
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
              </a> */}
              <p
                className="text"
                dangerouslySetInnerHTML={{
                  __html: contactDetail.address && contactDetail.address.name
                }}
              ></p>
              <a
                href={`https://maps.google.com/?q=${contactDetail.address &&
                  contactDetail.address.latitude},${contactDetail.address &&
                  contactDetail.address.longitude}`}
                target="_blank"
              >
                Open in Maps
              </a>
            </div>
            <div className="contactus-hotline-number">
              <h4>Hotline Number</h4>
              <p>
                {contactDetail.contact_information &&
                  contactDetail.contact_information.contact_number}
              </p>
            </div>
          </div>
          <div className="customer-enquiry-wrapper">
            <div className="customer-enquiry">
              <h3 className="heading-text">Corporate Enquiries</h3>
              <h5 className="text-success"></h5>
              <form onSubmit={handleSubmit}>
                {/* <div className="form-group">
                  <select name="enquiry" className="form-control">
                    <option>Request Type*</option>
                  </select>
                </div> */}
                <div className="form-group">
                  <select
                    name="enquiry"
                    className="form-control"
                    onChange={handleChange}
                    value={enquiry}
                  >
                    <option>Select an Enquiry *</option>
                    {enquiryCategory &&
                      enquiryCategory.map(enq => {
                        return (
                          <option key={enq.id} value={enq.id}>
                            {enq.name}
                          </option>
                        );
                      })}
                  </select>
                </div>
                <div className="form-group">
                  <input
                    name="name"
                    className="form-control"
                    type="text"
                    placeholder="Full Name*"
                    value={name}
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
                    onChange={handleChange}
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
