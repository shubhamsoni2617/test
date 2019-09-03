import React, { useState } from "react";
import { Link } from "react-router-dom";

const FaqCategory = props => {
  const [id, setId] = useState(props.id);
  console.log("dhhsjkhd", props.id);
  let param = "About Us";
  let final = { a: `/faq/${param.replace(/\s/g, "-").toLowerCase()}` };

  return (
    <section className="promotions-nav">
      <div className="container-fluid">
        <div className="nav-tabs">
          <ul>
            {props.categories.map(category => {
              return (
                <Link
                  key={category.id}
                  className={
                    props.id === category.id
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                  to={`/faq/${category.name.replace(/\s/g, "-").toLowerCase()}`}
                  onClick={() => props.onIdChange(category.id)}
                >
                  {category.name}
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FaqCategory;
