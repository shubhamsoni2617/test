import React, { Fragment } from 'react';
import { ReactComponent as Location } from '../../../assets/images/location-blue.svg';

const FindUs = (props) => {
  const { contactDetail } = props;
  return (
    <Fragment>
      <h3 className="heading-text">Find Us</h3>
      <div className="find-us-content row">
        <div className="img col-lg-2"><Location /></div>
        <div className="col-lg-6">
          <div className="text" dangerouslySetInnerHTML={{ __html: contactDetail.address && contactDetail.address.name }}></div>
          <a
            href={`https://maps.google.com/?q=${contactDetail.address && contactDetail.address.latitude},${contactDetail.address && contactDetail.address.longitude}`}
            target="_blank"
          >
            Open in Maps
          </a>
        </div>
      </div>
      <div className="find-us-content row">
        <div className="img col-lg-2"></div>
        <div className="col-lg-6">
          <div className="text" >{contactDetail.contact_information && contactDetail.contact_information.contact_number}</div>
          <div className="text" dangerouslySetInnerHTML={{ __html: contactDetail.contact_information && contactDetail.contact_information.description }}></div>
        </div>
      </div>
      <div className="find-us-content">
        <div className="img"></div>
      </div>
      <div className="find-us-content">
        <div className="img"></div>
        <div className="text"></div>
      </div>
      <div className="find-us-content">
        <div className="img"></div>
        <div className="text"></div>
      </div>
    </Fragment>
  );
};

export default FindUs;
