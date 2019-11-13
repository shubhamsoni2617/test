import React from 'react';
import './style.scss';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import ReCAPTCHA from 'react-google-recaptcha';
import Constants from '../../../shared/constants';

const SellingForm = ({
  content,
  handleChange,
  name,
  email,
  contactNo,
  companyName,
  eventName,
  eventCapacity,
  venueName,
  eventDate,
  ticketPrice,
  additionalInformation,
  captcha,
  error,
  loading,
  successMsg,
  serverErr,
  handleCaptcha,
  handleReset,
  handleSubmit
}) => {
  return (
    <section>
      <div className="container">
        <div className="selling-head">
          <h2>{content && content[5].title}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: content && content[5].description
            }}
          ></p>
        </div>

        <div className="selling-form">
          {successMsg && <h5 className="text-success">{successMsg}</h5>}
          {serverErr &&
            serverErr.map(errMsg => {
              return (
                <h5 key={errMsg} className="text-danger">
                  {errMsg}
                </h5>
              );
            })}
          <form onSubmit={handleSubmit}>
            <div className="form-info">
              <div className="seller-info-heading">
                <h2>Seller Information</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="seller-info">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name*"
                        className={error ? 'form-control error' : 'form-control'}
                        value={name}
                        onChange={handleChange}
                      />
                      {error && !name && (
                        <span className="text-danger">Please enter name</span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email*"
                        className={error ? 'form-control error' : 'form-control'}
                        value={email}
                        onChange={handleChange}
                      />
                      {error && !email && (
                        <span className="text-danger">Please enter email</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="seller-info">
                    <div className="form-group">
                      <input
                        type="text"
                        name="company-name"
                        placeholder="Company Name"
                        className="form-control"
                        value={companyName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="contact-no"
                        placeholder="Contact No.*"
                        className={error ? 'form-control error' : 'form-control'}
                        value={contactNo}
                        maxLength={10}
                        onChange={handleChange}
                      />
                      {error && !contactNo && (
                        <span className="text-danger">
                          Please enter contact number
                      </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form-info">
              <div className="seller-info-heading">
                <h2>Event Information</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="seller-info">
                    <div className="form-group">
                      <input
                        type="text"
                        name="event-name"
                        placeholder="Event Name*"
                        className={error ? 'form-control error' : 'form-control'}
                        value={eventName}
                        onChange={handleChange}
                      />
                      {error && !eventName && (
                        <span className="text-danger">
                          Please enter event name
                      </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="venue-name"
                        placeholder="Venue Name*"
                        className={error ? 'form-control error' : 'form-control'}
                        value={venueName}
                        onChange={handleChange}
                      />
                      {error && !venueName && (
                        <span className="text-danger">
                          Please enter venue name
                      </span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="ticket-price"
                        placeholder="Ticket Price (SGD)"
                        className="form-control"
                        maxLength={3}
                        value={ticketPrice}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="seller-info">
                    <div className="form-group">
                      <input
                        type="text"
                        name="event-date"
                        placeholder="Event Date"
                        className='form-control'
                        value={eventDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="event-capacity"
                        placeholder="Event Capacity (pax)*"
                        className={error ? 'form-control error' : 'form-control'}
                        value={eventCapacity}
                        maxLength={3}
                        onChange={handleChange}
                      />
                      {error && !eventCapacity && (
                        <span className="text-danger">
                          Please enter event capacity
                      </span>
                      )}
                    </div>
                    <div className="form-group">
                      <textarea
                        placeholder="Additional Information"
                        name="additional-information"
                        value={additionalInformation}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-info security-info">
                  <div className="security-check">
                    <div className="seller-info-heading">
                      <h2>Security Check</h2>
                    </div>
                    <div className="seller-info capcha-text">
                      <ReCAPTCHA
                        sitekey={Constants.SITE_KEY}
                        name="captcha"
                        onChange={handleCaptcha}
                      />
                      {error && !captcha && (
                        <span className="text-danger">
                          Please mark the security check
                        </span>
                      )}
                      {/* <input
                        type="text"
                        name="security-check"
                        placeholder="Type the word above"
                        className="form-control"
                        value={captchaInput}
                        onChange={handleChange}
                      /> */}
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button
                      type="submit"
                      className="btn submit"
                      disabled={loading ? true : false}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      className="btn reset"
                      onClick={handleReset}
                      disabled={loading ? true : false}
                    >
                      Reset
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SellingForm;
