import React, { Fragment, useState, useEffect } from "react";
import banner from "../../assets/images/Bitmap Copy.png";
import TermsAndPrivacyService from "../../shared/services/TermsAndPrivacyService";
import './style.scss';

const TermsConditions = () => {
const [termsCondtions, setTermsCondition] = useState(null);

  useEffect(() => {
    fetchTermsConditions();
  }, []);

  const fetchTermsConditions = () => {
    const params = {
      type: 1
    };
    TermsAndPrivacyService.getTermsAndPrivacyService(params)
      .then(res => {
        console.log(res.data.data);
        setTermsCondition(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    termsCondtions && (
      <Fragment>
        <section className="terms-condition-wrapper">
          <div className="banner-wrapper">
            <img src={banner} className="img-fluid" alt="page-banner" />
            <div className="banner-overlay">
            <h1>{termsCondtions[0].title}</h1>
          </div>
          </div>
          <div className="terms-condition-body">
            <div className="container"
              dangerouslySetInnerHTML={{
                __html: termsCondtions[0].description
              }}
            />
          </div>
        </section>
      </Fragment>
    )
  );
};

export default TermsConditions;
