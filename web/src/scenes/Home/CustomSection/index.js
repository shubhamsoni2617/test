import React, { Fragment, useState, useEffect } from 'react';
import CustomSectionOne from './CustomSectionOne';
import CustomSectioTwo from './CustomSectionTwo';
import AdvertisementService from '../../../shared/services/AdvertisementService';
import Constants from '../../../shared/constants';
import CustomSectionThree from './CustomSectionThree';

const CustomSection = () => {
  const [customSectionTwo, setCustomSectionTwo] = useState([]);
  const [customSectionThree, setCustomSectionThree] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCustomizeSectionTwo();
    getCustomizeSectionThree();
  }, []);
  const getCustomizeSectionTwo = () => {
    const params = {
      client: Constants.CLIENT
    };
    AdvertisementService.getCustomizeSectionTwo(params)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setCustomSectionTwo(res.data.data);
            setLoading(false);
          }, 2000);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  };
  const getCustomizeSectionThree = () => {
    const params = {
      client: Constants.CLIENT
    };
    AdvertisementService.getCustomizeSectionThree(params)
      .then(res => {
        if (res && res.data) {
          setTimeout(() => {
            setCustomSectionThree(res.data.data);
          }, 2000);
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
      <CustomSectioTwo customSectionTwo={customSectionTwo} loading={loading} />
      <CustomSectionThree customSectionThree={customSectionThree} />
    </Fragment>
  );
};

export default CustomSection;
