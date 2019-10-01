import React, { useState, useEffect } from 'react';
import './style.scss';
import Constants from '../../shared/constants';
import FaqSearch from './FaqSearch';
import FaqCategory from './FaqCategory';
import FaqService from '../../shared/services/FaqService';
import { Link } from 'react-router-dom';
import PageNotFound from '../PageNotFound';
import ShimmerEffect from '../../shared/components/ShimmerEffect';

const Faq = props => {
  const [faqContentData, setFaqContentData] = useState(null);
  const [faqCategoryData, setFaqCategoryData] = useState(null);
  const [categoryId, setCategoryId] = useState(null);
  const [categoryName, setCategoryName] = useState('');

  const [suggestions, setSuggestions] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFaqCategoriesService();
    fetchFaqContentService();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [faqCategoryData]);

  useEffect(() => {
    if (faqCategoryData && props.match.params.id) {
      setLoading(true);
      let url = false;
      faqCategoryData.findIndex((category, index) => {
        if (
          category.name.toLowerCase().replace(/[^a-z]/g, '') ===
          props.match.params.id.replace(/[^a-z]/g, '')
        ) {
          url = true;
          setLoading(false);
          setCategoryId(category.id);
          setCategoryName(category.name);
        } else if (!url && faqCategoryData.length === index + 1) {
          setLoading(null);
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
  return loading ? (
    <ShimmerEffect
      propCls="shm_col-xs-6 col-md-12"
      height={80}
      count={3}
      type="TILE"
    />
  ) : loading === false ? (
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
            categoryId={categoryId}
            categoryName={categoryName}
            categories={faqCategoryData}
            faqContentData={faqContentData}
          />
        </div>
      </div>
      <h3>
        Still need help? <Link to="/contact-us">Contact Us</Link> Here
      </h3>
    </div>
  ) : (
    <PageNotFound />
  );
};
export default Faq;
