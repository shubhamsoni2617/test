import React from "react";

import MacBook from "../../../assets/images/macbook.png";
import Iphone from "../../../assets/images/iphone.png";
import Map from "../../../assets/images/map.png";
import Contact from "../../../assets/images/contact-us.png";

const Images = ({ title, apiPartners }) => {
  console.log(apiPartners);
  if (title === "SISTIC Singapore") {
    return <img src={MacBook} alt="partner" className="img-fluid" />;
  }
  if (title === "Mobile App") {
    return <img src={Iphone} alt="partner" className="img-fluid" />;
  }
  if (title === "Find an Agent") {
    return <img src={Map} alt="partner" className="img-fluid" />;
  }
  if (title === "API Partners") {
    return apiPartners.map(partner => {
      return (
        <a href={partner.url} key={partner.logo} className="api-images">
          <img
            src={partner.logo}
            key={partner.logo}
            alt="partner Image"
            className="img-fluid"
          />
        </a>
      );
    });
  }
  if (title === "Hotline @ +65 6348 5555") {
    return <img src={Contact} alt="partner" className="img-fluid" />;
  }
  // return <img src="assets/images/ballet.jpg" alt="partner" />;
};

export default Images;
