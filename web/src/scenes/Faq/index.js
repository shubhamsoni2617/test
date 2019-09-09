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
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState("");
  const [questionId, setQuestionId] = useState(null);
  const [urlExist, setUrlExist] = useState(false);

  useEffect(() => {
    fetchFaqCategoriesService();
    fetchFaqContentService();
  }, []);

  useEffect(() => {
    if (faqCategoryData) {
      faqCategoryData.findIndex((category, i) => {
        if (
          category.name.toLowerCase().replace(/[^a-z]/g, "") ===
          props.match.params.id.replace(/[^a-z]/g, "")
        ) {
          setCategoryId(category.id);
          setCategoryName(category.name);
          setUrlExist(true);
        }
      });
    }
  }, [props.match.params.id, faqCategoryData]);

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
    setQuestionId(questionId);
  };

  return (
    faqContentData &&
    faqCategoryData && (
      <Fragment>
        <FaqSearch
          suggestions={faqContentData}
          categories={faqCategoryData}
          onQuestionIdChange={onQuestionIdChange}
        />
        <div className="find-agent-wrapper">
          <div className="container-fluid row agent-list">
            <div className="col-lg-4">
              <FaqCategory
                categoryId={categoryId}
                urlExist={urlExist}
                categories={faqCategoryData}
                faqContentData={faqContentData}
                onQuestionIdChange={onQuestionIdChange}
              />
            </div>
            <div className="col-lg-8">
              {urlExist ? (
                <Fragment>
                  <h2>{categoryName}</h2>
                  {questionId ? (
                    <FaqContent
                      data={faqContentData}
                      categoryId={categoryId}
                      questionId={questionId}
                    />
                  ) : (
                    <h2>No Data Found</h2>
                  )}
                </Fragment>
              ) : (
                <h1>No Data Found</h1>
              )}
            </div>
          </div>
        </div>
      </Fragment>
    )
  );
};
export default Faq;
