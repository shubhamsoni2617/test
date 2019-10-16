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
    <div className="personal-info-wrapper" id='applynow'>
      <div className="personal-info">
        <h3>Apply for this position
           <Link to="/careers">View Other Jobs</Link>
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
              className="form-control"
              placeholder="First Name *"
              type="text"
              value={firstName}
              onChange={e => handleChange(e)}
              // required
            />
          </div>
          {errMsg && !firstName && (
            <span className="text-danger">Please enter first name</span>
          )}
          <div className="form-group">
            <input
              name="lastName"
              className="form-control"
              placeholder="Last Name *"
              type="text"
              value={lastName}
              onChange={e => handleChange(e)}
              // required
            />
          </div>
          {errMsg && !lastName && (
            <span className="text-danger">Please enter last name</span>
          )}
          <div className="form-group">
            <input
              name="email"
              className="form-control"
              placeholder="Email Address *"
              type="email"
              value={email}
              onChange={e => handleChange(e)}
              // required
            />
          </div>
          {errMsg && !email && (
            <span className="text-danger">Please enter email address</span>
          )}
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
              // required
            />
          </div>
          {errMsg && !contact_number && (
            <span className="text-danger">Please enter phone number</span>
          )}
          {/* <div className="form-group">
            Earliest Start Date{' '}
            <DayPickerInput
              className="form-control"
              value={startDate}
              placeholder="Start Date"
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
          </div> */}
          <div className="form-group">
            <textarea
              name="message"
              className="form-control"
              placeholder="Message *"
              rows="5"
              cols="30"
              value={message}
              onChange={e => handleChange(e)}
            />
          </div>
          {errMsg && !message && (
            <span className="text-danger">Please enter message</span>
          )}
          <Attachement
            mandatory={isFileMandatory}
            attachedFiles={handleFiles}
            submit={submit}
          />
          {isFileMandatory && errMsg && !filePath.length && (
            <span className="text-danger">Please attach files</span>
          )}
          <div className="form-group custom-checkbox">
            <input
              name="copy"
              type="checkbox"
              checked={sendCopy ? true : false}
              onChange={e => handleCopy(!sendCopy)}
            />
            Send Me a Copy
          </div>
          <input
            className="form-control btn-link"
            type="submit"
            value={loading ? 'Submitting...' : 'Submit Application'}
            disabled={loading ? true : false}
          />
        </form>
      </div>
      <div className="text-center other-job">
        <Link to="/careers">View Other Jobs</Link>
      </div>
    </div>
  );
};

export default PersonalInfo;
