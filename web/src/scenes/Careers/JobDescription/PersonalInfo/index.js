import React from 'react';
import './style.scss';
import attach from '../../../../assets/images/attach.png';

const PersonalInfo = ({
  state,
  handleChange,
  handleFiles,
  handleSubmit
}) => {
  const { firstName, lastName, email, contact_number, message, errMsg } = state;
  return (
    <div className="personal-info-wrapper">
    <div className="personal-info">
      <h3>Apply for this position</h3>
      <h5>Personal Information</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="firstName"
            className="form-control"
            placeholder="First Name *"
            type="text"
            value={firstName}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            name="lastName"
            className="form-control"
            placeholder="Last Name *"
            type="text"
            value={lastName}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            className="form-control"
            placeholder="Email Address *"
            type="email"
            value={email}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            name="contact_number"
            className="form-control"
            placeholder="Phone Number *"
            type="text"
            value={contact_number}
            minLength={0}
            maxLength={10}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            placeholder="Message"
            rows="5"
            cols="30"
            value={message}
            onChange={e => handleChange(e)}
          />
        </div>
        <div className="form-group attach-doc">
          <div className="row">
            <div className="col-lg-4 label">Attach Documents<span className="text-danger"> *</span></div>
            <div className="col-lg-8">
              {/* <label htmlFor="file-upload" className="custom-file-upload  form-control text-right">
                <img src={attach} height="20" width="20" />
              </label> */}
              <label htmlFor="file-upload" className="custom-file-upload form-control text-right">
                <img src={attach} height="20" width="20" />
              </label>
              
              <input
                encType="multipart/form-data"
                id="file-upload"
                className="form-control"
                type="file"
                multiple
                onChange={e => handleFiles(e.target.files)}
                accept=".jpeg,.png,.pdf"
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group custom-checkbox">
            <input
              name="copy"
              type="checkbox"
              onChange={e => handleChange(e)}
            />Send Me a Copy
        </div>
        {errMsg ? <p className="text-danger">{errMsg}</p> : null}
        <input className="form-control btn-link" type="submit" value="Submit Application" />
      </form>
    </div>
    <div className="text-center other-job">
      <a>View Other Jobs</a>
    </div>
    </div>
  );
};

export default PersonalInfo;
