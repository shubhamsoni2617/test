import React, { Fragment, useState, useEffect } from "react";
import banner from "../../assets/images/Bitmap Copy.png";
import TermsAndPrivacyService from "../../shared/services/TermsAndPrivacyService";

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
        <img src={banner} className="img-fluid" alt="page-banner" />
        <h1>{termsCondtions[0].title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: termsCondtions[0].description
          }}
        />
      </Fragment>
    )
  );
};

export default TermsConditions;
