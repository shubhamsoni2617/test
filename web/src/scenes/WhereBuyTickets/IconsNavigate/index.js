import React, { Fragment } from "react";
import { Link } from "react-scroll";

const IconsNavigate = ({ tabsArray }) => {
  return (
    <section className="wtbt-sections-tab">
      <div className="container-fluid">
        <div className="container">
          <ul className="wtbt-nav" id="nav-tab" role="tablist">
            {tabsArray.map(category => {
               let className;
               if(category.title==='SISTIC Singapore'){
                   className="wtbt-tab-website"
               }else if(category.title==='Mobile App'){
                 className="wtbt-tab-mobile-app"
               }else if(category.title==='Find an Agent'){
                 className="wtbt-tab-agent"
               }else if(category.title==='API Partners'){
                 className="wtbt-tab-partners"
               }else if(category.title==='Hotline @ +65 6348 5555'){
                 className="wtbt-tab-hotline"
               }
            return <li className={className}>
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
                  <span>{category.icon_text}</span>
                </Link>
              </li>
            })}
          </ul> 
        </div>
      </div>
    </section>
  );
};

export default IconsNavigate;
