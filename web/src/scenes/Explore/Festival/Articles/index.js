import React from 'react';
import './style.scss';
import CustomSectionTwo from '../../../Home//CustomSectionTwo';

const Articles = ({ sectionSix }) => {
  return (
    <div className="home-page-wrapper">
      <CustomSectionTwo
        customData={sectionSix && sectionSix.sub_section_six}
        heading={sectionSix && sectionSix.heading}
      />
    </div>
  );
};

export default Articles;
