import React from 'react';
import './style.scss';
import { Select } from './MultipleCheckBox';
import attach from '../../../assets/images/attach.png';

const StayUpdated = ({
  state,
  handleEmail,
  handleFiles,
  handleMultipleCheckbox,
  handleSubmit
}) => {
  const { email, files, options, errMsg } = state;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6"></div>
        <div className="col-lg-6">
          <h1>
            Stay Updated <br />
            @Sistic Careers
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived no.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="container form-group">
              <Select
                // label="React Multiple Select"
                placeholder="Select Area(s) of interest"
                options={options}
                multiple
                handleMultipleCheckbox={handleMultipleCheckbox}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={e => handleEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-lg-4">Attach Documents</div>
                <div className="col-lg-8">
                  {/* <label
                htmlFor="file-upload"
                className="custom-file-upload  form-control text-right"
              >
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
                  <p>
                    *File Size should be maximum 5mb and it can be pdf,jpeg,png
                  </p>
                </div>
              </div>
            </div>
            {errMsg ? <p className="text-danger">{errMsg}</p> : null}
            <input
              className="form-control btn-info col-lg-5"
              type="submit"
              value="Stay Tuned"
            />
            {/* <input
              type="text"
              minLength={0}
              maxLength={10}
              onKeyPress={event => allowNumbersOnly(event)}
            /> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated;
