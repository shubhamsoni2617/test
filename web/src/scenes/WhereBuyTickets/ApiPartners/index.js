import React from "react";

import sampleImage from "../../../assets/images/thumb-img3.jpg";

const ApiPartners = () => {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      {[sampleImage, sampleImage, sampleImage].map(image => {
        return <img src={image} key={image} alt="partner Image" />;
      })}
      <div>
        <h1 id="Partners">API Partners</h1>
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

        <button>See All Partners</button>
      </div>
    </div>
  );
};

export default ApiPartners;
