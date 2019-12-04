import React from 'react';
import './style.scss';
import 'react-day-picker/lib/style.css';
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
                        className={
                          error ? 'form-control error custom-required' : 'form-control custom-required'
                        }
                        value={name}
                        maxLength={100}
                        onChange={handleChange}
                      />
                      {!name && <label className="custom-label">Name</label>}
                      {error && !name && (
                        <span className="text-danger">Please enter name</span>
                      )}
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        className={
                          error ? 'form-control error custom-required' : 'form-control custom-required'
                        }
                        value={email}
                        maxLength={255}
                        onChange={handleChange}
                      />
                      {!email && <label className="custom-label">Email</label>}
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
                        maxLength={150}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="contact-no"
                        className={
                          error ? 'form-control error custom-required' : 'form-control custom-required'
                        }
                        value={contactNo}
                        maxLength={10}
                        onChange={handleChange}
                      />
                      {!contactNo && <label className="custom-label">Contact No.</label>}
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
              <div className="row event-info-formfields">
                <div className="col-md-6">
                  <div className="seller-info">
                    <div className="form-group">
                      <input
                        type="text"
                        name="event-name"
                        className={
                          error ? 'form-control error custom-required' : 'form-control custom-required'
                        }
                        value={eventName}
                        maxLength={150}
                        onChange={handleChange}
                      />
                      {!eventName && <label className="custom-label">Event Name</label>}
                      {error && !eventName && (
                        <span className="text-danger">
                          Please enter event name
                        </span>
                      )}
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
                        className="form-control"
                        value={eventDate}
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
                        name="venue-name"
                        className={
                          error ? 'form-control error custom-required' : 'form-control custom-required'
                        }
                        value={venueName}
                        maxLength={100}
                        onChange={handleChange}
                      />
                      {!venueName && <label className="custom-label">Venue Name</label>}
                      {error && !venueName && (
                        <span className="text-danger">
                          Please enter venue name
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="seller-info">
                    <div className="form-group">
                      <input
                        type="text"
                        name="event-capacity"
                        className={
                          error ? 'form-control error custom-required' : 'form-control custom-required'
                        }
                        value={eventCapacity}
                        maxLength={3}
                        onChange={handleChange}
                      />
                      {!eventCapacity && <label className="custom-label">Event Capacity (pax)</label>}
                      {error && !eventCapacity && (
                        <span className="text-danger">
                          Please enter event capacity
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="seller-info">
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
                      <textarea
                        placeholder="Additional Information"
                        name="additional-information"
                        value={additionalInformation}
                        maxLength={500}
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
