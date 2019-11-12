import React from 'react';
import './style.scss';

const Partners = ({ partnersLogo }) => {
  return (
    <div className="work-with-partners">
      <div className="container">
        <h2 className="text-center section-title">
          View some of the partners that we work with
        </h2>
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
      </div>
    </div>
  );
};
export default Partners;
