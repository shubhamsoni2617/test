import React, { Fragment, useState, useEffect } from 'react';
import termsBanner from '../../assets/images/tc-banner.png';
import TermsAndPrivacyService from '../../shared/services/TermsAndPrivacyService';
import './style.scss';

const TermsPrivacy = props => {
  const [termsprivacy, setTermsPrivacy] = useState(null);
  const [tabTitle, setTabTitle] = useState('');
  const [tabDescription, setTabDescription] = useState('');

  let termsPrivacyArr;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    fetchTermsConditions();
  }, []);

  const fetchTermsConditions = () => {
    const params = {
      type: props.cmsPageType
    };
    TermsAndPrivacyService.getTermsAndPrivacyService(params)
      .then(res => {
        let data = res.data.data;
        setTermsPrivacy(data);
        setTabTitle(data.terms_cond.title);
        setTabDescription(data.terms_cond.description);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const handleActiveTab = (title, description) => {
    setTabTitle(title);
    setTabDescription(description);
  };

  if (termsprivacy) {
    termsPrivacyArr = Object.keys(termsprivacy).map(function(key) {
      return termsprivacy[key];
    });
  }

  return (
    <Fragment>
      <section className="terms-privacy-wrapper">
        <div className="banner-wrapper">
          <img src={termsBanner} className="img-fluid" alt="page-banner" />
          <div className="banner-overlay">
            <h1>{tabTitle}</h1>
          </div>
        </div>
        <div className="promotions-nav container">
          <ul className="nav nav-tabs" id="nav-tab" role="tablist">
            {termsPrivacyArr &&
              termsPrivacyArr.map((category, i) => {
                return (
                  <li key={category.title}>
                    <a
                      className={
                        tabTitle === category.title
                          ? 'nav-item nav-link active'
                          : 'nav-item nav-link'
                      }
                      onClick={() =>
                        handleActiveTab(category.title, category.description)
                      }
                    >
                      {category.title}
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>
        <div className="terms-privacy-body">
          <div
            className="container"
            dangerouslySetInnerHTML={{
              __html: tabDescription
            }}
          />
        </div>
      </section>
    </Fragment>
  );
};

export default TermsPrivacy;
