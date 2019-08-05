import React from "react";
import Footer from "./Footer";
import Navigator from "./Navigator";
import TopNav from "./TopNav";
import "./style.css";
import Advertisement from '../../shared/components/Advertisement';
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
         <Advertisement />
            {/* Top advertisment section end */}
          {/* TopNav */}
          <TopNav {...this.props} />

          {/* Main Content */}
          <Navigator {...this.props} />
          
          {/* Footer */}
          <Footer />
        </div>

    );
  }
}
