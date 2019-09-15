import React, { Fragment, useState, useEffect } from "react";
import banner from "../../assets/images/tc-banner.png";
import TermsAndPrivacyService from "../../shared/services/TermsAndPrivacyService";
import "./style.scss";

const TermsPrivacy = props => {
  const [termsprivacy, setTermsPrivacy] = useState(null);

  useEffect(() => {
    fetchTermsConditions();
  }, []);

  const fetchTermsConditions = () => {
    const params = {
      type: props.cmsPageType
    };
    TermsAndPrivacyService.getTermsAndPrivacyService(params)
      .then(res => {
        console.log(res.data.data);
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
            <img src={banner} className="img-fluid" alt="page-banner" />
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
