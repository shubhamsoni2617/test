import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import codpartner from '../../../assets/images/cod.png';
import showpartner from '../../../assets/images/show.png';
import galaxypartner from '../../../assets/images/galaxy-macau-vector-logo.png';
import arrowDown from '../../../assets/images/more-arrow-white-blue.svg';

const Partners = ({ partnersLogo, systemLicensing, clients }) => {
  return (
    <div className="work-with-partners">
      <div className="container">
        {!systemLicensing && <h2 className="text-center section-title">View some of the partners that we work with</h2>}
        {systemLicensing &&
          <>
            <h2 className="text-center section-title">{clients.title}</h2>
            <div
              className="sub-text"
              dangerouslySetInnerHTML={{ __html: clients.description }}
            />
          </>}

        <ul className="partners-list">
          {partnersLogo &&
            partnersLogo.map(({ logo, url }) => {
              return (
                <li key={logo}>
                  <a href={url} target="_blank">
                    <img src={logo} alt="api-parrtner-cod" />
                  </a>
                </li>
              );
            })}
        </ul>
        {systemLicensing && <Link to="apipartners" className="view-all-clients">View all Clients
        <img src={arrowDown} alt='down' />
        </Link>}
      </div>
    </div>
  );
};
export default Partners;
