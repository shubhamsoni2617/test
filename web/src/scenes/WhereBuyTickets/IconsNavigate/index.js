import React from 'react';
import { Link } from 'react-scroll';

const IconsNavigate = ({ tabsArray }) => {
  let props = {
    activeClass: 'active',
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
    className: 'wtbt-tab'
  };
  return (
    <section className="wtbt-sections-tab">
      <div className="container-fluid">
        <div className="container">
          <ul className="wtbt-nav" id="nav-tab" role="tablist">
            <li key={tabsArray[0].title} className="wtbt-tab-website">
              <Link to={tabsArray[0].title} {...props}>
                <span>Website</span>
              </Link>
            </li>
            <li key={tabsArray[1].title} className="wtbt-tab-mobile-app">
              <Link to={tabsArray[1].title} {...props}>
                <span>Mobile App</span>
              </Link>
            </li>
            <li key={tabsArray[2].title} className="wtbt-tab-agent">
              <Link to={tabsArray[2].title} {...props}>
                <span>Find an Agent</span>
              </Link>
            </li>
            <li key={tabsArray[3].title} className="wtbt-tab-partners">
              <Link to={tabsArray[3].title} {...props}>
                <span>Partners</span>
              </Link>
            </li>
            <li key={tabsArray[4].title} className="wtbt-tab-hotline">
              <Link to={tabsArray[4].title} {...props}>
                <span>Hotline</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IconsNavigate;
