import React from 'react';
import './style.scss';
import Img from '../../../../../src/assets/images/illustration.svg';
import Image from '../../../../shared/components/Image';

const CustomSectioTwo = ({ customSectionTwo }) => {
  console.log(customSectionTwo);
  return (
    <div className="container row">
      {customSectionTwo &&
        customSectionTwo.map((elem, i) => {
          return (
            <div key={i}>
              <h1>{elem.title}</h1>
              <div className="col-lg-8" style={{ margin: '20px' }}>
                <Image src={elem.full_image} alt={elem.alt} type="BigBanner" />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default CustomSectioTwo;
