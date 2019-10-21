import React, { Fragment, useState, useEffect } from 'react';
import termsBanner from '../../assets/images/tc-banner.png';
import privacyBanner from '../../assets/images/Privacy.png';
import TermsAndPrivacyService from '../../shared/services/TermsAndPrivacyService';
import './style.scss';
import ShimmerEffect from '../../shared/components/ShimmerEffect';

const TermsPrivacy = props => {
  const [termsprivacy, setTermsPrivacy] = useState(null);

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
        setTimeout(() => {
          setTermsPrivacy(res.data.data);
        }, 700);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <Fragment>
      <section className="terms-privacy-wrapper">
        <div className="banner-wrapper">
          {props.cmsPageType === 1 ? (
            <img src={termsBanner} className="img-fluid" alt="page-banner" />
          ) : (
            <img src={privacyBanner} className="img-fluid" alt="page-banner" />
          )}

          <div className="banner-overlay">
            {props.cmsPageType === 1 && termsprivacy
              ? termsprivacy && <h1>{termsprivacy.terms_cond.title}</h1>
              : termsprivacy && <h1>{termsprivacy.privacy_policy.title}</h1>}
          </div>
        </div>
        {termsprivacy && props.cmsPageType === 1 ? (
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
        )}
      </section>
    </Fragment>
  );
};

export default TermsPrivacy;
