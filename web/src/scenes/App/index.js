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
        <div className="wrapper">  
         {/* Top advertisment section start */}
         <div className="top-ads">
            <div className="container-fluid">
               <div className="ads-image">
                  <img src="assets/images/header-banner.png" alt="advertisment-image" className="img-fluid" />
               </div>
               <a href="" className="ads-close"><img src="assets/images/close-ad.svg" className="img-fluid" alt="close" /></a>
            </div>
         </div>
            {/* Top advertisment section end */}
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
