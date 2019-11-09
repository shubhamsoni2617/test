import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Location } from '../../../assets/images/find-us-location.svg';
// import { ReactComponent as Call } from '../../../assets/images/call.svg';
import Call from '../../../assets/images/call.svg';
import { ReactComponent as Ticket } from '../../../assets/images/find-us-ticket.svg';
import { ReactComponent as Corporate } from '../../../assets/images/find-us-question.svg';
import { ReactComponent as Career } from '../../../assets/images/find-us-career.svg';
import { ReactComponent as Arrow } from '../../../assets/images/arrow-right.svg';
import { useCustomContactDetail } from '../../../shared/components/CustomHooks';
import './style.scss';

const FindUs = ({ }) => {
  const [contactDetail] = useCustomContactDetail();

  return (
    <Fragment>
      <h3 className="heading-text">Find Us</h3>
      <div className="find-us">
        <div className="find-us-content">
          <div className="find-us-img">
            <Location />
          </div>
          <div className="find-us-desc">
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html: contactDetail.address && contactDetail.address.name
              }}
            ></div>
            <a
              href={`https://maps.google.com/?q=${contactDetail.address &&
                contactDetail.address.latitude},${contactDetail.address &&
                contactDetail.address.longitude}`}
              target="_blank"
            >
              Open in Maps
            </a>
          </div>
        </div>
        <div className="find-us-content">
          <div className="find-us-img">
            <img src={Call} alt="call-image" />
          </div>
          <div className="find-us-desc">
            <h5 className="text contact-number">
              {contactDetail.contact_information &&
                contactDetail.contact_information.contact_number}
            </h5>
            <div
              className="text"
              dangerouslySetInnerHTML={{
                __html:
                  contactDetail.contact_information &&
                  contactDetail.contact_information.description
              }}
            ></div>
          </div>
        </div>
        <div className="find-us-content">
          <div className="find-us-img">
            <Ticket />
          </div>
          <div className="find-us-desc d-flex align-items-center">
            <a>
              <h5 className="text">
                Sell Tickets With Us
                <span>
                  <Arrow />
                </span>
              </h5>
            </a>
          </div>
        </div>
        <div className="find-us-content">
          <div className="find-us-img">
            <Corporate />
          </div>
          <div className="find-us-desc d-flex align-items-center">
            <a>
              <h5 className="text">
                Corporate Enquiries
                <span>
                  <Arrow />
                </span>
              </h5>
            </a>
          </div>
        </div>
        <div className="find-us-content">
          <div className="find-us-img">
            <Career />
          </div>
          <div className="find-us-desc d-flex align-items-center">
            <Link to="/career">
              <h5 className="text">
                Careers
                <span>
                  <Arrow />
                </span>
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FindUs;
