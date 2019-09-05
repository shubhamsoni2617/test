import React, { useState } from "react";
import { Link } from "react-router-dom";

const FaqCategory = props => {
  const spreadData = props.faqContentData.flatMap(element => {
    return element.category_id.map(x => ({ ...element, category_id: x }));
  });

  const setQuestionId = categoryId => {
    console.log(categoryId);
    let value = spreadData.find(obj => {
      return obj.category_id === categoryId;
    });
    console.log(value);
    if (!value) {
      props.onQuestionIdChange(null);
    } else {
      props.onQuestionIdChange(value.id);
    }
  };

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
                    props.categoryId === category.id && props.urlExist
                      ? "nav-item nav-link active"
                      : "nav-item nav-link"
                  }
                  to={`/faq/${category.name.replace(/\s/g, "-").toLowerCase()}`}
                  onClick={() => {
                    setQuestionId(category.id);
                  }}
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
