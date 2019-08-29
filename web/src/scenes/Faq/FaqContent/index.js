import React, { Fragment, useState, useEffect } from "react";
import SingleFaqContent from "./SingleFaqContent";
import "./style.scss";

const FaqContent = () => {
  const data = [1, 2, 3];

  return (
    <div className="wrapper">
      <ul className="accordion-list">
        {data.map((data, key) => {
          return (
            <li className="accordion-list__item">
              <SingleFaqContent question={"srdh"} answer={"rdrtdfxg"} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FaqContent;
