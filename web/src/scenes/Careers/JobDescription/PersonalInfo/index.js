import React from 'react';
import './style.scss';
import Attachement from '../../../../shared/components/Attachement';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import { formatDate, parseDate } from 'react-day-picker/moment';
import { Link } from 'react-router-dom';

const PersonalInfo = ({
  firstName,
  lastName,
  email,
  contact_number,
  startDate,
  message,
  isFileMandatory,
  filePath,
  sendCopy,
  loading,
  submit,
  errMsg,
  successMsg,
  serverErr,
  handleChange,
  handleStartDate,
  handleCopy,
  handleFiles,
  handleSubmit
}) => {
  return (
    <div className="personal-info-wrapper" id="applynow">
      <div className="personal-info">
        <h3>
          Apply for this position
          <Link to="/corporate/careers">View Other Jobs</Link>
        </h3>
        {successMsg && <h5 className="text-success">{successMsg}</h5>}
        {serverErr &&
          serverErr.map(elem => {
            return (
              <h5 className="text-danger" key={elem}>
                {elem}
              </h5>
            );
          })}
        <h5>Personal Information</h5>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="firstName"
              className="form-control custom-required"
              type="text"
              value={firstName}
              onChange={e => handleChange(e)}
            // required
            />
            {!firstName && <label className="custom-label">First Name</label>}
            {errMsg && !firstName && (
              <span className="text-danger mt-1 d-block">
                Please enter first name
              </span>
            )}
          </div>

          <div className="form-group">
            <input
              name="lastName"
              className="form-control custom-required"
              type="text"
              value={lastName}
              onChange={e => handleChange(e)}
            // required
            />
            {!lastName && <label className="custom-label">Last Name</label>}
            {errMsg && !lastName && (
              <span className="text-danger mt-1 d-block">
                Please enter last name
              </span>
            )}
          </div>

          <div className="form-group">
            <input
              name="email"
              className="form-control custom-required"
              type="email"
              value={email}
              onChange={e => handleChange(e)}
            // required
            />
            {!email && <label className="custom-label">Email Address</label>}
            {errMsg && !email && (
              <span className="text-danger mt-1 d-block">
                Please enter email address
              </span>
            )}
          </div>

          <div className="form-group">
            <input
              name="contact_number"
              className="form-control"
              type="text"
              value={contact_number}
              minLength={0}
              maxLength={10}
              onChange={e => handleChange(e)}
            // required
            />
            {!contact_number && <label className="custom-label">Phone Number</label>}
            {errMsg && !contact_number && (
              <span className="text-danger mt-1 d-block">
                Please enter phone number
              </span>
            )}
          </div>

          <div className="form-group earliest-date no-gutters">
            <span className="col-lg-5 col-5 pl-2">Earliest Start Date</span>{' '}
            <div className="datepicker col-lg-7 col-7">
              <DayPickerInput
                className="form-control"
                value={startDate}
                placeholder="DD/MM/YYYY"
                format="DD/MM/YYYY"
                showOverlay={false}
                formatDate={formatDate}
                parseDate={parseDate}
                inputProps={{ readOnly: true }}
                dayPickerProps={{
                  selectedDays: [startDate],
                  disabledDays: { before: new Date() },
                  fromMonth: new Date(),
                  numberOfMonths: 1
                }}
                onDayChange={handleStartDate}
              />
            </div>
          </div>
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              cols="30"
              value={message}
              onChange={e => handleChange(e)}
            />
            {!message && <label className="custom-label">Message</label>}
            {errMsg && !message && (
              <span className="text-danger mt-1 d-block">
                Please enter message
              </span>
            )}
          </div>

          <Attachement
            mandatory={isFileMandatory}
            attachedFiles={handleFiles}
            submit={submit}
          />
          {isFileMandatory && errMsg && !filePath.length && (
            <span className="text-danger margin-negative d-block">
              Please attach files
            </span>
          )}
          <div className="form-group custom-checkbox">
            <div className="checkbox-block">
              <div className="container-checkbox">
                <input
                  name="copy"
                  type="checkbox"
                  id="first"
                  name="first"
                  checked={sendCopy ? true : false}
                  onChange={e => handleCopy(!sendCopy)}
                />
                <label htmlFor="first" className="block-box">
                  Send Me a Copy
                </label>
              </div>
            </div>
          </div>
          <input
            className="form-control btn-link"
            type="submit"
            value="Submit Application"
            disabled={loading ? true : false}
          />
        </form>
      </div>
      <div className="text-center other-job">
        <Link to="/corporate/careers">View Other Jobs</Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
