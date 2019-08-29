import React, { Fragment } from "react";
import { Link } from "react-scroll";
import Website from "../../../assets/images/noun_website_1353550.svg";
import Hotline from "../../../assets/images/hotline.svg";
import Partners from "../../../assets/images/partners.svg";
import MobileApp from "../../../assets/images/smartphone.svg";
import FindAnAgent from "../../../assets/images/user.svg";

const IconsNavigate = ({ tabsArray }) => {
  return (
    <div>
      <section className="promotions-wrapper">
        <div className="container-fluid">
          <div className="container">
            <div className="promotions-nav">
              <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                {tabsArray.map(category => (
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
                    <img src={Website} alt={category.title} />
                    {category.icon_text}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconsNavigate;
