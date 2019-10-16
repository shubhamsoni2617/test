import React from 'react';
import './style.scss';
import Select from '../../../../src/shared/components/SelectBox';
import stayUpdate from '../../../assets/images/career/stay-update.png';
import Attachement from '../../../shared/components/Attachement';
const StayUpdated = ({
  stayUpdated,
  staticContentErr,
  options,
  areaOfInterestErr,
  email,
  selectedAreas,
  errMsg,
  submit,
  successMsg,
  serverErr,
  loading,
  handleEmail,
  handleFiles,
  handleSubmit,
  onClickSubmit,
  onSelect
}) => {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-lg-5 stay-update-img">
          <img src={stayUpdate} alt="satyupdate" />
        </div>
        <div className="col-lg-7">
          <div className="stay-update">
            {successMsg && <h5 className="text-success">{successMsg}</h5>}
            {serverErr &&
              serverErr.map((elem, index) => {
                return (
                  <h5 key={index} className="text-danger">
                    {elem}
                  </h5>
                );
              })}
            <h2 className="career-title">{stayUpdated && stayUpdated.title}</h2>
            <p
              className="career-subtext"
              dangerouslySetInnerHTML={{
                __html: stayUpdated && stayUpdated.description
              }}
            ></p>
            <form onSubmit={handleSubmit}>
              <div
                className={
                  errMsg && !selectedAreas.length
                    ? 'form-group err'
                    : 'form-group'
                }
              >
                <Select
                  submit={submit}
                  options={submit ? [] : options}
                  multiple
                  onSelect={onSelect}
                  placeholder="Select Area(s) of interest *"
                  onClickSubmit={onClickSubmit}
                />
              </div>
              {errMsg && !selectedAreas.length ? (
                <span className="text-danger">
                  Please select Area(s) of interest    
                </span>
              ) : null}
              <div
                className={errMsg && !email ? 'form-group err' : 'form-group'}
              >
                <input
                  className="form-control email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email *"
                  value={email}
                  onChange={e => handleEmail(e.target.value)}
                />
              </div>
              {errMsg && !email ? (
                <span className="text-danger">Please enter your email    </span>
              ) : null}
              <Attachement
                attachedFiles={handleFiles}
                submit={submit}
                cv={true}
              />
              <input
                className="form-control col-lg-5 btn-link"
                type="submit"
                value={loading ? 'Tunning...' : 'Stay Tuned'}
                disabled={loading ? true : false}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated;
