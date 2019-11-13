import React, { Fragment, useState, useEffect } from 'react';
import termsBanner from '../../assets/images/tc-banner.png';
import TermsAndPrivacyService from '../../shared/services/TermsAndPrivacyService';
import './style.scss';
import { Link } from 'react-router-dom';
import LoaderImg from '../../assets/images/loader.gif';

const TermsPrivacy = ({ cmsPageType }) => {
  const [termsprivacy, setTermsPrivacy] = useState(null);
  const [tabTitle, setTabTitle] = useState('');
  const [tabDescription, setTabDescription] = useState('');
  const [loading, setLoading] = useState(false);

  let termsPrivacyArr;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    fetchTermsConditions();
  }, []);

  const fetchTermsConditions = () => {
    TermsAndPrivacyService.getTermsAndPrivacyService()
      .then(res => {
        setLoading(true);
        let data = res.data.data;
        setTimeout(() => {
          setTermsPrivacy(data);
          cmsPageTypeRendering(cmsPageType, data);
          setLoading(false);
        }, 1000);
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
  const handleActiveTab = (title, description) => {
    setTabTitle(title);
    setTabDescription(description);
  };

  const renderSpecificLink = title => {
    switch (title) {
      case 'Terms and Conditions of Ticket Sales ':
        return '/terms-and-conditions';
      case 'Privacy Policy':
        return '/privacy-policy';
      case 'Conditions of Access of  SISTIC Website':
        return '/condition-of-access';
      case 'Transaction Security':
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
        {loading && (
          <div className="text-center">
            <img height="50" width="50" src={LoaderImg} />
          </div>
        )}
        {!loading && (
          <div className="promotions-nav container">
            <ul className="nav nav-tabs" id="nav-tab" role="tablist">
              {termsPrivacyArr &&
                termsPrivacyArr.map((category, i) => {
                  return (
                    <li key={category.title}>
                      <Link
                        to={renderSpecificLink(category.title)}
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
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </div>
        )}
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
