import React from 'react';
import banner from '../../../assets/images/faq-banner.png';
import AutoSuggest from './AutoSuggest';
import './style.scss';

const FaqSearch = props => {
  return (
    <section className="faq-wrapper">
      <div className="banner-wrapper">
        <img src={banner} className="img-fluid" alt="page-banner" />
        <div className="banner-overlay">
          <h1>How can we help you?</h1>
          <div className="faq-searchbox">
            <AutoSuggest
              suggestions={props.suggestions}
              categories={props.categories}
              onQuestionIdChange={props.onQuestionIdChange}
              setFilteredSuggestions={props.setFilteredSuggestions}
              toggleContentHandler={props.toggleContentHandler}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSearch;
