import React from "react";

// import Footer from "./Footer";
import Navigator from "./Navigator";
// import TopNav from "./TopNav";

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
      
        <div id="wrapper test">
          {/* TopNav */}
          {/* <TopNav /> */}

          {/* Main Content */}
          <Navigator {...this.props} />
          
          {/* Footer */}
          {/* <Footer /> */}
        </div>
        
    );
  }
}
