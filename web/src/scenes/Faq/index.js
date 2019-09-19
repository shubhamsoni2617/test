import React, { useState, useEffect } from 'react';
import './style.scss';
import Constants from '../../shared/constants';
import FaqSearch from './FaqSearch';
import FaqCategory from './FaqCategory';
import FaqService from '../../shared/services/FaqService';

const Faq = props => {
  // console.log(props);
  const [faqContentData, setFaqContentData] = useState(null);
  const [faqCategoryData, setFaqCategoryData] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState('');
  const [urlExist, setUrlExist] = useState(false);
  const [suggestions, setSuggestions] = useState(true);

  useEffect(() => {
    fetchFaqCategoriesService();
    fetchFaqContentService();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [faqCategoryData]);

  useEffect(() => {
    if (faqCategoryData) {
      faqCategoryData.findIndex(category => {
        if (
          category.name.toLowerCase().replace(/[^a-z]/g, '') ===
          props.match.params.id.replace(/[^a-z]/g, '')
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

  return (
    faqContentData &&
    faqCategoryData && (
      <div onClick={() => setSuggestions(!suggestions)}>
        <FaqSearch
          suggestions={faqContentData}
          categories={faqCategoryData}
          setFilteredSuggestions={suggestions}
        />
        <div className="faq-body-wrapper">
          <div className="container-fluid">
            <FaqCategory
              {...props}
              urlExist={urlExist}
              categoryId={categoryId}
              categoryName={categoryName}
              categories={faqCategoryData}
              faqContentData={faqContentData}
            />
          </div>
        </div>
      </div>
    )
  );
};
export default Faq;
