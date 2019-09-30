import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function Submenu(props) {
  const {
    heading,
    buttonText,
    data,
    handleMouseStatus,
    submenuClass = '',
    backButtonRequired = true
  } = props;
  const [menueStatus, setMenuStatus] = useState(false);
  return (
    <>
      <button
        className="backbutton"
        type="button"
        onClick={() => setMenuStatus(!menueStatus)}
      >
        {buttonText}
      </button>
      <div
        className={`submenu-holder ${submenuClass} ${
          menueStatus ? 'active' : ''
        }`}
      >
        <div className="subholder-wrapper">
          {backButtonRequired && (
            <button type="button" onClick={() => setMenuStatus(false)}>
              <img src="../../assets/images/next.svg"></img>
            </button>
          )}
          <h1>{heading}</h1>
        </div>
        {props.children}
        {data && data.length && (
          <ul className={`submenu  ${menueStatus ? 'active' : ''}`}>
            {data.map(event => {
              return (
                <li key={event.id}>
                  <Link
                    to={`/events/search?c=${event.id}`}
                    onClick={() => {
                      handleMouseStatus(false);
                    }}
                  >
                    {event.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </>
  );
}
export default Submenu;
