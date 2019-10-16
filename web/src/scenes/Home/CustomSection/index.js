import React, { Fragment, useState, useEffect } from 'react';
import CustomSectionOne from './CustomSectionOne';
import CustomSectioTwo from './CustomSectionTwo';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Constants from '../../../shared/constants';

const CustomSection = () => {
  const [customSectionTwo, setCustomSectionTwo] = useState([]);
  useEffect(() => {
    getCustomizeSectionTwo();
  }, []);
  const getCustomizeSectionTwo = () => {
    const params = {
      client: Constants.CLIENT
    };
    AdvertisementService.getCustomizeSectionTwo(params)
      .then(res => {
        if (res && res.data) {
          setCustomSectionTwo(res.data.data);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  };
  return (
    <Fragment>
      <CustomSectionOne api={AdvertisementService.getCustomizeSectionOne} />
      <CustomSectioTwo customSectionTwo={customSectionTwo} />
    </Fragment>
  );
};

export default CustomSection;
