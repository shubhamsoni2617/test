import React, { useState } from 'react';

export function SubmenuWrap({
  menueStatus,
  setMenuStatus,
  heading,
  children,
  submenuClass
}) {
  return (
    <div
      className={`submenu-holder ${submenuClass || ''} ${
        menueStatus ? 'active' : ''
      }`}
    >
      {heading && (
        <div className="subholder-wrapper">
          <div className="filter-heading">
            <button
              type="button"
              onClick={() => {
                setMenuStatus(false);
              }}
            >
              <img src="../../assets/images/next.svg"></img>
            </button>
            <h3>{heading}</h3>
          </div>
        </div>
      )}
      <div className="filters-panel open">{children}</div>
    </div>
  );
}

export function Submenu(props) {
  const [menueStatus, setMenuStatus] = useState(false);
  return (
    <>
      {typeof props.children === 'function' &&
        props.children(menueStatus, setMenuStatus)}
      {typeof props.children !== 'function' && props.children}
    </>
  );
}
