import React from "react";

import appleImage from "../../../assets/images/apple.svg";
import androidImage from "../../../assets/images/android.png";
import { Link } from "react-router-dom";

const Buttontext = ({ title }) => {
  if (title === "SISTIC Singapore") {
    return <Link to="/events">Find an Event</Link>;
  }
  if (title === "Mobile App") {
    return (
      <div className="download-option">
        <a>
          <img src={appleImage} className="ios" alt="" />
          <span>
            Available on the
            <br />
            <strong>App Store</strong>
          </span>
        </a>
        <a>
          <img src={androidImage} className="android" alt="" />
          <span>
            Get it on
            <br />
            <strong>Play Store</strong>
          </span>
        </a>
      </div>
    );
  }
  if (title === "Find an Agent") {
    return <button>Find an Agent</button>;
  }
  if (title === "API Partners") {
    return <button>See All Partners</button>;
  }
  if (title === "Hotline @ +65 6348 5555") {
    return <button>Contact Us</button>;
  }
  return <button>View</button>;
};

export default Buttontext;
