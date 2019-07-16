import React from "react";

import Footer from "./Footer";
import Navigator from "./Navigator";
import TopNav from "./TopNav";

import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collapsed: false
    };
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (      
        // SISTIC wrapper start
        <div className="st-wrapper">  
          <div className="st-top-advertisment">
            <div className="container-fluid">
                <div className="st-advertisment-image">
                    <img src="assets/images/Header-banner.png" alt="Advertisment-image" className="img-fluid" />
                </div>
                <a href="" className="st-advertisment-close"><img src="assets/images/close-adv.svg" className="img-fluid"
                        alt="close" /></a>
            </div>
          </div>
          {/* TopNav */}
          <TopNav />

          {/* Main Content */}
          <Navigator {...this.props} />
          
          {/* Footer */}
          <Footer />
        </div>
        
    );
  }
}
