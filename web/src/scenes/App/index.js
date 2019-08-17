import React from "react";
import Footer from "./Footer";
import Navigator from "./Navigator";
import TopNav from "./TopNav";
import Advertisement from '../../shared/components/Advertisement';
import "./style.css";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false
    };

  }

  componentDidMount(){
    setTimeout(() => {
      document.body.classList.remove("fix-height");
      document.getElementById('loader').classList.add("loaded");
    }, 1000);
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
        <div className="wrapper">
          {/* <Advertisement {...this.props} /> */}
          <TopNav {...this.props} />
          <Navigator {...this.props} />
          <Footer />
        </div>

    );
  }
}
