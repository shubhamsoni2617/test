import React from "react";

import MacBook from "../../../assets/images/MacBook.png";
import Iphone from "../../../assets/images/Iphone.png";
import Map from "../../../assets/images/Group 162.png";
import Contact from "../../../assets/images/Group 20.png";

const Images = ({ title, apiPartners }) => {
  console.log(apiPartners);
  if (title === "SISTIC Singapore") {
    return <img src={MacBook} alt="partner" />;
  }
  if (title === "Mobile App") {
    return <img src={Iphone} alt="partner" />;
  }
  if (title === "Find an Agent") {
    return <img src={Map} alt="partner" />;
  }

  if (title === "API Partners") {
    return apiPartners.map(partner => {
      return (
        <a href={partner.url} key={partner.logo}>
          <img
            src={partner.logo}
            key={partner.logo}
            height="300px"
            width="200px"
            alt="partner Image"
          />
        </a>
      );
    });
  }
  if (title === "Hotline @ +65 6348 5555") {
    return <img src={Contact} alt="partner" />;
  }
  // return <img src="assets/images/ballet.jpg" alt="partner" />;
};

export default Images;
