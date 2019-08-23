import React from "react";
import appleImage from "../../../assets/images/apple.svg";
import androidImage from "../../../assets/images/android.png";

const MobileApp = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <img
        style={{ marginRight: "200px" }}
        src="assets/images/ballet.jpg"
        alt="video"
      />
      <div>
        <h1 id="MobileApp">Mobile App</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>

        <div
          className="download-option"
          style={{ display: "flex", flexDirection: "row" }}
        >
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
      </div>
    </div>
  );
};

export default MobileApp;
