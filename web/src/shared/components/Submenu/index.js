import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Submenu(props) {
  const {
    heading,
    buttonText,
    data,
    submenuClass = '',
    backButtonRequired = true,
    link = '',
    closeSubmenu,
    applyFilters,
    clearFilters,
    resetFilters
  } = props;
  const [menueStatus, setMenuStatus] = useState(false);
  return (
    <>
      <button
        className={`backbutton ${menueStatus ? 'active' : ''}`}
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
            <button
              type="button"
              onClick={() => {
                resetFilters();
                setMenuStatus(false);
              }}
            >
              <img src="../../assets/images/next.svg"></img>
            </button>
          )}
          <h1>{heading}</h1>
          <button onClick={() => clearFilters(false)}>Clear Filters</button>
        </div>
        {props.children}
        {data && data.length && (
          <ul className={`submenu  ${menueStatus ? 'active' : ''}`}>
            {data.map(event => {
              return (
                <li key={event.id}>
                  <Link
                    to={`${link}${event.id}`}
                    onClick={() => {
                      setMenuStatus(false);
                      closeSubmenu(false);
                    }}
                  >
                    {event.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
        <div>
          <button
            onClick={() => {
              setMenuStatus(false);
              applyFilters();
            }}
          >
            Apply
          </button>
        </div>
      </div>
    </>
  );
}
export default Submenu;
