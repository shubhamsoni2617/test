import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import FaqContent from "../FaqContent";

const FaqCategory = props => {
  return (
    <Fragment>
      {/* {!props.urlExist ? <h2>Please, select appropriate category</h2> : null} */}
      <ul className="faq-listing">
        <li><span className="trending-qus">Trending Question</span></li>
        {props.categories.map(category => {
          return (
            <li key={category.id}>
              <Link
                className={
                  props.categoryId === category.id && props.urlExist
                    ? "nav-item nav-link active"
                    : "nav-item nav-link"
                }
                to={`/faq/${category.name.replace(/\s/g, "-").toLowerCase()}/0`}
              >
                {category.name}
              </Link>
              {props.categoryId === category.id ? (
                <Fragment>
                  <div className="faq-ans-wrapper">
                    <h2>{props.categoryName}</h2>
                    <FaqContent
                      {...props}
                      data={props.faqContentData}
                      categoryId={category.id}
                    />
                  </div>
                </Fragment>
              ) : null}
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default FaqCategory;
