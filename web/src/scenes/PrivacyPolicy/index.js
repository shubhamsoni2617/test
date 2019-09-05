import React, { Fragment, useState, useEffect } from "react";
import banner from "../../assets/images/Bitmap Copy 2.png";
import TermsAndPrivacyService from "../../shared/services/TermsAndPrivacyService";
import './style.scss';

// Haven't got the design yet, will be quite similar to Terms and conditions page
//based on the api. might need to do little tweaks

const PrivacyPolicy = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(null);

  useEffect(() => {
    fetchTermsConditions();
  }, []);

  const fetchTermsConditions = () => {
    const params = {
      type: 2
    };
    TermsAndPrivacyService.getTermsAndPrivacyService(params)
      .then(res => {
        console.log(res.data.data);
        setPrivacyPolicy(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    privacyPolicy && (
      <Fragment>
        <section className="privacy-policy-wrapper">
          <div className="banner-wrapper">
            <img src={banner} className="img-fluid" alt="page-banner" />
            <div className="banner-overlay">
              <h1>{privacyPolicy[0].title}</h1>
            </div>
          </div>
          <div className="privacy-policy-body">
            <div className="container"
            dangerouslySetInnerHTML={{
              __html: privacyPolicy[0].description
            }}
          />
          </div>
        </section>
      </Fragment>
    )
  );
};

export default PrivacyPolicy;
