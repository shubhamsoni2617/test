import React from 'react';
import './style.scss';

const PersonalInfo = ({ state, handleChange,allowNumbersOnly, handleFiles, handleSubmit }) => {
  const { firstName, lastName, email, contact_number, message, errMsg } = state;
  return (
    <div className="personal-info">
      <h3>Apply for this position</h3>
      <hr />
      <h5>Personal Information</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>
            First Name<span className="text-danger">*</span>
          </label>
          <input
            name="firstName"
            className="form-control"
            type="text"
            value={firstName}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            Last Name<span className="text-danger">*</span>
          </label>
          <input
            name="lastName"
            className="form-control"
            type="text"
            value={lastName}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            Email Address<span className="text-danger">*</span>
          </label>
          <input
            name="email"
            className="form-control"
            type="email"
            value={email}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            Phone Number<span className="text-danger">*</span>
          </label>
          <input
            name="contact_number"
            className="form-control"
            type="text"
            // value={contact_number}
            minLength={0}
            maxLength={10}
            onKeyPress={event => allowNumbersOnly(event)}
            // onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>
            Message<span className="text-danger">*</span>
          </label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            cols="30"
            value={message}
            onChange={e => handleChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-lg-4">Attach Documents</div>
            <div className="col-lg-8">
              {/* <label htmlFor="file-upload" className="custom-file-upload  form-control text-right">
                <img src={attach} height="20" width="20" />
              </label> */}
              <input
                encType="multipart/form-data"
                id="file-upload"
                className="form-control"
                type="file"
                multiple
                onChange={e => handleFiles(e.target.files)}
                accept=".jpeg,.png,.pdf"
              />
              <p>*File Size should be maximum 5mb and it can be pdf,jpeg,png</p>
            </div>
          </div>
        </div>
        <div className="form-group">
          <input
            name="copy"
            className="form-control"
            type="checkbox"
            onChange={e => handleChange(e)}
          />Send Me a Copy
        </div>
        {errMsg ? <p className="text-danger">{errMsg}</p> : null}
        <input className="form-control btn-info" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default PersonalInfo;
