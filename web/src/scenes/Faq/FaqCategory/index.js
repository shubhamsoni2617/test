import React, { useState } from "react";
import { Link } from "react-router-dom";

const FaqCategory = props => {
  let spreadData = [];
  for (let data of props.faqContentData) {
    for (let id of data["category_id"]) {
      spreadData.push({
        ...data,
        category_id: id
      });
    }
  }
  const setQuestionId = categoryId => {
    let value = spreadData.find(obj => {
      return obj.category_id === categoryId;
    });
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
