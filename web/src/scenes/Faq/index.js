import React, { Fragment, useState, useEffect } from "react";
import "./style.scss";
import Constants from "../../shared/constants";
import FaqSearch from "./FaqSearch";
import FaqCategory from "./FaqCategory";
import FaqService from "../../shared/services/FaqService";
import FaqContent from "./FaqContent";

const Faq = props => {
  const [faqContentData, setFaqContentData] = useState(null);
  const [faqCategoryData, setFaqCategoryData] = useState(null);
  const [categoryId, setCategoryId] = useState("124");

  const [categoryName, setCategoryName] = useState("");
  const [questionId, setQuestionId] = useState("299");

  useEffect(() => {
    fetchFaqCategoriesService();
    fetchFaqContentService();
  }, []);

  useEffect(() => {
    if (faqCategoryData) {
      faqCategoryData.findIndex(category => {
        if (
          category.name.toLowerCase().replace(/[^a-z]/g, "") ===
          props.match.params.id.replace(/[^a-z]/g, "")
        ) {
          setCategoryId(category.id);
          setCategoryName(category.name);
        }
        // return category.name.toLowerCase().replace(/[^a-z]/g, "") ===
        //   props.match.params.id.replace(/[^a-z]/g, "")
        //   ? setCategoryId(category.id)

        //   : null;
      });
    }
  }, [props.match.params.id, faqCategoryData]);

  console.log(categoryId);
  const fetchFaqCategoriesService = () => {
    const params = {
      client: Constants.CLIENT
    };
    FaqService.getFaqCategoriesService(params)
      .then(res => {
        setFaqCategoryData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchFaqContentService = () => {
    const params = {
      client: Constants.CLIENT
    };
    FaqService.getFaqContentService(params)
      .then(res => {
        setFaqContentData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const onQuestionIdChange = questionId => {
    console.log(questionId);
    setQuestionId(questionId);
  };

  return (
    <Fragment>
      {faqContentData && faqCategoryData && (
        <FaqSearch
          {...props}
          suggestions={faqContentData}
          // onIdChange={onIdChange}
          categories={faqCategoryData}
          onQuestionIdChange={onQuestionIdChange}
        />
      )}
      <div className="find-agent-wrapper">
        <div className="container-fluid row agent-list">
          <div className="col-lg-4">
            {faqCategoryData && faqContentData && (
              <FaqCategory
                categoryId={categoryId}
                categories={faqCategoryData}
                faqContentData={faqContentData}
                onQuestionIdChange={onQuestionIdChange}
              />
            )}
          </div>
          <div className="col-lg-8">
            <h2>{categoryName}</h2>
            {faqContentData && (
              <FaqContent
                data={faqContentData}
                categoryId={categoryId}
                questionId={questionId}
              />
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Faq;
