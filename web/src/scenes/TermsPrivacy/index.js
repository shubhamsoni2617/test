import React, { Fragment, useState, useEffect } from 'react';
import termsBanner from '../../assets/images/tc-banner.png';
import privacyBanner from '../../assets/images/Privacy.png';

import TermsAndPrivacyService from '../../shared/services/TermsAndPrivacyService';
import './style.scss';

const TermsPrivacy = props => {
  const [termsprivacy, setTermsPrivacy] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchTermsConditions();
  }, []);

  const fetchTermsConditions = () => {
    const params = {
      type: props.cmsPageType
    };
    TermsAndPrivacyService.getTermsAndPrivacyService(params)
      .then(res => {
        setTermsPrivacy(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    termsprivacy && (
      <Fragment>
        <section className="terms-privacy-wrapper">
          <div className="banner-wrapper">
            {props.cmsPageType === 1 ? (
              <img src={termsBanner} className="img-fluid" alt="page-banner" />
            ) : (
              <img
                src={privacyBanner}
                className="img-fluid"
                alt="page-banner"
              />
            )}

            <div className="banner-overlay">
              <h1>{termsprivacy[0].title}</h1>
            </div>
          </div>
          <div className="terms-privacy-body">
            <div
              className="container"
              dangerouslySetInnerHTML={{
                __html: termsprivacy[0].description
              }}
            />
          </div>
        </section>
      </Fragment>
    )
  );
};

export default TermsPrivacy;
