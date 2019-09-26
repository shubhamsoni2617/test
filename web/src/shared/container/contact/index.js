import React, { Fragment } from 'react';

const Contact = () => {
  return (
    <Fragment>
      <h5 className="text-success">{submitResponse}</h5>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <select
            name="enquiry"
            className="form-control"
            onChange={handleChange}
            value={enquiry}
            required
          >
            <option value="Select an Enquiry">Select an Enquiry *</option>
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
            placeholder="Name*"
            value={name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            name="email"
            className="form-control"
            type="email"
            placeholder="Email Address*"
            value={email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            name="phone"
            className="form-control"
            type="text"
            placeholder="Phone Number*"
            value={phone}
            onChange={handlePhone}
            maxLength={10}
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            rows="5"
            placeholder="Message*"
            cols="30"
            value={message}
            onChange={handleChange}
            required
          />
        </div>
        {/* <div className="form-group attach-doc">
            <div className="row">
              <div className="col-lg-4 label pr-0">Attach Documents</div>
              <div className="col-lg-8">
                <label
                  htmlFor="file-upload"
                  className="custom-file-upload  form-control text-right"
                >
                  <img src={attach} height="20" width="20" />
                </label>
                <input
                  encType="multipart/form-data"
                  id="file-upload"
                  className="form-control"
                  type="file"
                  multiple
                  onChange={handleFile}
                  accept=".jpeg,.png,.pdf"
                />
                <span>
                  *File Size should be maximum 5mb and it can be pdf,jpeg,png
                </span>
                <span className="text-danger">{maxFileLimitMsg}</span>
              </div>
            </div>
          </div> */}
        {errMsg ? <p className="text-danger">{errMsg}</p> : null}
        <input className="form-control btn-info" type="submit" value="Submit" />
      </form>
    </Fragment>
  );
};

export default Contact;
