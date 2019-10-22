import React, { Fragment, useState, useEffect } from 'react';
import termsBanner from '../../assets/images/tc-banner.png';
import privacyBanner from '../../assets/images/Privacy.png';
import TermsAndPrivacyService from '../../shared/services/TermsAndPrivacyService';
import './style.scss';
import ShimmerEffect from '../../shared/components/ShimmerEffect';

const TermsPrivacy = props => {
  const [termsprivacy, setTermsPrivacy] = useState(null);
  const [tabTitle, setTabTitle] = useState('');
  const [tabDescription, setTabDescription] = useState('');
  const [isShimmerOn, setIsShimmerOn] = useState(false);

  let termsPrivacyArr;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    fetchTermsConditions();
  }, []);

  useEffect(() => {
    setIsShimmerOn(true);
    setTimeout(() => {
      setIsShimmerOn(false);
    }, 1000);
  }, [tabTitle]);

  const fetchTermsConditions = () => {
    const params = {
      type: props.cmsPageType
    };
    TermsAndPrivacyService.getTermsAndPrivacyService(params)
      .then(res => {
        let data = res.data.data;
        setTimeout(() => {
          setTermsPrivacy(data);
          setTabTitle(data.terms_cond.title);
          setTabDescription(data.terms_cond.description);
        }, 1000);
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
        {/* <div className="banner-wrapper">
          {props.cmsPageType === 1 ? (
            <img src={termsBanner} className="img-fluid" alt="page-banner" />
          ) : (
            <img src={privacyBanner} className="img-fluid" alt="page-banner" />
          )}

          <div className="banner-overlay">
            {props.cmsPageType === 1 && termsprivacy
              ? termsprivacy && <h1>{tabTitle}</h1>
              : termsprivacy && <h1>{termsprivacy.privacy_policy.title}</h1>}
          </div>
        </div> */}

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
          {isShimmerOn ? (
            <div className="container">
              <ShimmerEffect
                propCls="shm_col-xs-6 col-md-12"
                height={200}
                count={2}
                type="TILE"
              />
            </div>
          ) : (
            <div
              className="container"
              dangerouslySetInnerHTML={{
                __html: tabDescription
              }}
            />
          )}
        </div>
        {/* {termsprivacy && props.cmsPageType === 1 ? (
          <div className="terms-privacy-body">
            <div
              className="container"
              dangerouslySetInnerHTML={{
                __html: termsprivacy.terms_cond.description
              }}
            />
          </div>
        ) : termsprivacy && props.cmsPageType === 2 ? (
          <div className="terms-privacy-body">
            <div
              className="container"
              dangerouslySetInnerHTML={{
                __html: termsprivacy.privacy_policy.description
              }}
            />
          </div>
        ) : (
          <ShimmerEffect
            propCls="shm_col-xs-6 col-md-12"
            height={80}
            count={3}
            type="TILE"
          />
        )} */}
      </section>
    </Fragment>
  );
};

export default TermsPrivacy;
