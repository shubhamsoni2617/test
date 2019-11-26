import React, { Fragment, useState, useEffect } from 'react';
import termsBanner from '../../assets/images/tc-banner.png';
import TermsAndPrivacyService from '../../shared/services/TermsAndPrivacyService';
import './style.scss';

const TermsPrivacy = ({ cmsPageType }) => {
  const [termsprivacy, setTermsPrivacy] = useState(null);
  const [tabTitle, setTabTitle] = useState('');
  const [tabDescription, setTabDescription] = useState('');
  const [tabIndex, setTabIndex] = useState(0);


  let termsPrivacyArr;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    fetchTermsConditions();
  }, []);

  const fetchTermsConditions = () => {
    TermsAndPrivacyService.getTermsAndPrivacyService()
      .then(res => {
        let data = res.data.data;
        setTermsPrivacy(data);
        cmsPageTypeRendering(cmsPageType, data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const cmsPageTypeRendering = (pageType, data) => {
    switch (pageType) {
      case 1:
        setTabTitle(data.terms_cond.title);
        setTabDescription(data.terms_cond.description);
        break;
      case 2:
        setTabTitle(data.privacy_policy.title);
        setTabDescription(data.privacy_policy.description);
        break;
      case 3:
        setTabTitle(data.conditions.title);
        setTabDescription(data.conditions.description);
        break;
      case 4:
        setTabTitle(data.transaction_security.title);
        setTabDescription(data.transaction_security.description);
        break;
    }
  };

  const handleActiveTab = (title, description,i) => {
    setTabTitle(title);
    setTabDescription(description);
    setTabIndex(i)
    let shareUrl = window.location.origin + renderSpecificLink(i);
    window.history.pushState('string', 'Title', shareUrl);
  };

  const renderSpecificLink = index => {
    switch (index) {
      case 0:
        return '/terms-and-conditions';
      case 1:
        return '/privacy-policy';
      case 2:
        return '/condition-of-access';
      case 3:
        return '/transaction-security';
    }
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
                        handleActiveTab(category.title, category.description,i)
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
