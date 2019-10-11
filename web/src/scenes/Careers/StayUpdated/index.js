import React from 'react';
import './style.scss';
import Select from '../../../../src/shared/components/SelectBox';
import stayUpdate from '../../../assets/images/career/stay-update.png';
import Attachement from '../../../shared/components/Attachement';
const StayUpdated = ({
  options,
  email,
  submit,
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
            <h2 className="career-title">
              Stay Updated
              <b>@Sistic Careers</b>
            </h2>
            <p className="career-subtext">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu
              enim justo. Vestibulum aliquam hendrerit molestie. Mauris
              malesuada nisi sit amet augue accumsan tincidunt. Maecenas
              tincidunt,.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <Select
                  submit={submit}
                  options={submit ? [] : options}
                  multiple
                  onSelect={onSelect}
                  placeholder="Select Area(s) of interest *"
                  onClickSubmit={onClickSubmit}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control email"
                  name="email"
                  type="email"
                  placeholder="Enter Your Email *"
                  value={email}
                  onChange={e => handleEmail(e.target.value)}
                />
              </div>
              <Attachement attachedFiles={handleFiles} />
              {/* {errMsg ? <p className="text-danger">{errMsg}</p> : null} */}
              <input
                className="form-control col-lg-5 btn-link"
                type="submit"
                value="Stay Tuned"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StayUpdated;
