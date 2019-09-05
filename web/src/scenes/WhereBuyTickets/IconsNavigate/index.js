import React, { Fragment } from "react";
import { Link } from "react-scroll";
import Website from "../../../assets/images/noun_website_1353550.svg";
import Hotline from "../../../assets/images/hotline.svg";
import Partners from "../../../assets/images/partners.svg";
import MobileApp from "../../../assets/images/smartphone.svg";
import FindAnAgent from "../../../assets/images/user.svg";

const IconsNavigate = ({ tabsArray }) => {
  return (
    <section className="wtbt-sections-tab">
      <div className="container-fluid">
        <div className="container">
          <ul className="wtbt-nav" id="nav-tab" role="tablist">
            {tabsArray.map(category => (
              <li>
                <Link
                  key={category.title}
                  activeClass="active"
                  to={category.title}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="wtbt-tab"
                >
                  <img src={Website} alt={category.title} />
                  {category.icon_text}
                </Link>
              </li>
            ))}
          </ul> 
        </div>
      </div>
    </section>
  );
};

export default IconsNavigate;
