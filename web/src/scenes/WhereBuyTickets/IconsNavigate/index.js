import React, { Component } from "react";

// import './style.scss';

import { Link, Events, animateScroll as scroll } from "react-scroll";

export default class Promotions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabsArray: []
    };
  }

  componentDidMount() {
    this.fetchIconCategoriesData();
  }

  fetchIconCategoriesData = () => {
    let iconCategories = [
      "Website",
      "MobileApp",
      "Find an Agent",
      "Partners",
      "Hotline"
    ];
    this.setState({ tabsArray: iconCategories });
  };

  render() {
    return (
      <div>
        <section className="promotions-wrapper">
          <div className="container-fluid">
            <div className="container">
              <div className="promotions-nav">
                <ul className="nav nav-tabs" id="nav-tab" role="tablist">
                  {this.state.tabsArray &&
                    this.state.tabsArray.map(category => {
                      return (
                        <Link
                          activeClass="active"
                          to={category}
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          className="nav-item"
                        >
                          {category}
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
  }
}
