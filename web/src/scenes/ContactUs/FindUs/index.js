import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Location } from '../../../assets/images/find-us-location.svg';
import { ReactComponent as Call } from '../../../assets/images/find-us-call.svg';
import { ReactComponent as Ticket } from '../../../assets/images/find-us-ticket.svg';
import { ReactComponent as Corporate } from '../../../assets/images/find-us-question.svg';
import { ReactComponent as Career } from '../../../assets/images/find-us-career.svg';
import { ReactComponent as Arrow } from '../../../assets/images/arrow-right.svg';
const FindUs = (props) => {

  const { contactDetail } = props;

  return (
    <Fragment>
      <div className="find-us">
        <h3 className="heading-text">Find Us</h3>
        <div className="find-us-content row">
          <div className="img col-lg-2"><Location /></div>
          <div className="col-lg-8 pl-0">
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
          <div className="img col-lg-2"><Call /></div>
          <div className="col-lg-8 pl-0">
            <h5 className="text">{contactDetail.contact_information && contactDetail.contact_information.contact_number}</h5>
            <div className="text" dangerouslySetInnerHTML={{ __html: contactDetail.contact_information && contactDetail.contact_information.description }}></div>
          </div>
        </div>
        <div className="find-us-content row">
          <div className="img col-lg-2"><Ticket /></div>
          <div className="col-lg-7 pl-0 d-flex align-items-center">
            <a>
              <h5 className="text">Sell Tickets With Us
                <span><Arrow /></span>
              </h5>
            </a>
          </div>
        </div>
        <div className="find-us-content row">
          <div className="img col-lg-2"><Corporate /></div>
          <div className="col-lg-7 pl-0 d-flex align-items-center">
            <a>
              <h5 className="text">Corporate Enquiries
                <span><Arrow /></span>
              </h5>
            </a>
          </div>
        </div>
        <div className="find-us-content row">
          <div className="img col-lg-2"><Career /></div>
          <div className="col-lg-7 pl-0 d-flex align-items-center">
            <a>
              <h5 className="text">Careers
                <span><Arrow /></span>
              </h5>
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FindUs;
