import React, { useState } from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import arrowDown from '../../../assets/images/more-arrow-white-blue.svg';

const Partners = ({ partnersLogo, clients }) => {
  const [seeMore, setSeeMore] = useState(false);
  let fourPartnerLogo;
  if (partnersLogo && partnersLogo.length > 2 && !seeMore) {
    fourPartnerLogo = partnersLogo.slice(0, 4);
  } else {
    fourPartnerLogo = partnersLogo;
  }
  return (
    <div className="work-with-partners">
      <div className="container">
        <h2 className="text-center section-title">{clients.title}</h2>
        <div
          className="sub-text"
          dangerouslySetInnerHTML={{ __html: clients.description }}
        />
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
        {partnersLogo && partnersLogo.length > 2 && !seeMore && (
          <div className="view-all-clients" onClick={() => setSeeMore(true)}>
            View all Clients
            <img src={arrowDown} alt="down" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Partners;
