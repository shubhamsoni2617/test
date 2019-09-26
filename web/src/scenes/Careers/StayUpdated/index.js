import React from 'react';
import './style.scss';
import { Select } from './MultipleCheckBox';
import attach from '../../../assets/images/attach.png';
import stayUpdate from '../../../assets/images/career/stay-update.png';
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
      <div className="row mb-5">
        <div className="col-lg-5 stay-update-img">
        <img src={stayUpdate} alt="satyupdate" />
        </div>
        <div className="col-lg-7">
          <div className="stay-update">
            <h2 className="career-title">
              Stay Updated
              <b>@Sistic Careers</b>
            </h2>
            <p className="career-subtext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt,.
            </p>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
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
                className="form-control email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={email}
                onChange={e => handleEmail(e.target.value)}
              />
            </div>
            <div className="form-group attach-doc">
              <div className="row no-gutters">
                <div className="col-lg-4 pl-2">Attach Documents</div>
                <div className="col-lg-8">
                  {/* <label
                htmlFor="file-upload"
                className="custom-file-upload  form-control text-right"
              >
                <img src={attach} height="20" width="20" />
              </label> */}
                <label htmlFor="file-upload" className="custom-file-upload  form-control text-right">
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
                  />
                </div>
              </div>
            </div>
            {errMsg ? <p className="text-danger">{errMsg}</p> : null}
            <input
              className="form-control col-lg-5 btn-link"
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
    </div>
  );
};

export default StayUpdated;
