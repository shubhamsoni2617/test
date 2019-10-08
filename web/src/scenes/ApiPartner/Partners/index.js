import React from 'react';
import './style.scss';
import codpartner from '../../../assets/images/cod.png';
import showpartner from '../../../assets/images/show.png';
import galaxypartner from '../../../assets/images/galaxy-macau-vector-logo.png';

const Partners = ({ partnersLogo }) => {
  return (
    <div className="work-with-partners">
      <div className="container">
        <h2>View some of the partners that we work with</h2>
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
          {/* <li><img src={codpartner} alt="api-parrtner-cod" /></li>
                    <li><img src={showpartner} alt="api-parrtner-cod" /></li>
                    <li><img src={galaxypartner} alt="api-parrtner-cod" /></li>
                    <li><img src={codpartner} alt="api-parrtner-cod" /></li>
                    <li><img src={showpartner} alt="api-parrtner-cod" /></li>
                    <li><img src={galaxypartner} alt="api-parrtner-cod" /></li>
                    <li><img src={codpartner} alt="api-parrtner-cod" /></li>
                    <li><img src={showpartner} alt="api-parrtner-cod" /></li>
                    <li><img src={galaxypartner} alt="api-parrtner-cod" /></li>
                    <li><img src={codpartner} alt="api-parrtner-cod" /></li>
                    <li><img src={showpartner} alt="api-parrtner-cod" /></li>
                    <li><img src={galaxypartner} alt="api-parrtner-cod" /></li> */}
        </ul>
      </div>
    </div>
  );
};
export default Partners;
