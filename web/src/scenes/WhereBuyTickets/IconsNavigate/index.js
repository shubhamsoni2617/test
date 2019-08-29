import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const IconsNavigate = ({ tabsArray }) => {
  return (
    <div>
      <section className="promotions-wrapper">
        <div className="container-fluid">
          <div className="container">
            <div className="promotions-nav">
              <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                {tabsArray &&
                  tabsArray.map(category => {
                    return (
                      <Link
                        key={category.title}
                        activeClass="active"
                        to={category.title}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="nav-item"
                      >
                        {category.icon_text}
                      </Link>
                    );
                  })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconsNavigate;
