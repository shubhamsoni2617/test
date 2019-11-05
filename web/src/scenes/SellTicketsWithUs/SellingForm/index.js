import React from 'react';
import './style.scss';

const SellingForm = ({
  content,
  handleChange,
  name,
  email,
  contactNo,
  companyName,
  eventName,
  eventCapacity,
  venueName
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
          <form>
            <div className="form-info">
              <div className="seller-info-heading">
                <h2>Seller Information</h2>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="seller-info">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name*"
                      className="form-control"
                      value={name}
                      onChange={handleChange}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      className="form-control"
                      value={email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="seller-info">
                    <input
                      type="text"
                      name="company-name"
                      placeholder="Company Name"
                      className="form-control"
                      value={companyName}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="contact-no"
                      placeholder="Contact No.*"
                      className="form-control"
                      value={contactNo}
                      maxLength={10}
                      onChange={handleChange}
                    />
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
                    <input
                      type="text"
                      name="event-name"
                      placeholder="Event Name*"
                      className="form-control"
                      value={eventName}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="venue-name"
                      placeholder="Venue Name*"
                      className="form-control"
                      value={venueName}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="ticket-pride"
                      placeholder="Ticket Pride (SGD)"
                      className="form-control"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="seller-info">
                    <input
                      type="text"
                      name="event-date"
                      placeholder="Event Date"
                      className="form-control"
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="event-capacity"
                      placeholder="Event Capacity (pax)*"
                      className="form-control"
                      value={eventCapacity}
                      maxLength={3}
                      onChange={handleChange}
                    />
                    <textarea
                      placeholder="Additional Information"
                      name="additional-information"
                      onChange={handleChange}
                    ></textarea>
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
                      <input
                        type="text"
                        name="security-check"
                        placeholder="Type the word above"
                        className="form-control"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="submit-btn">
                    <button type="submit" className="btn submit">
                      Submit
                    </button>
                    <button type="submit" className="btn reset">
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
