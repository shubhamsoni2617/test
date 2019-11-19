import React from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';

const Trending = ({ trending }) => {
  return (
    <section className="trending-wrapper">
      <div className="container-fluid">
        {trending && (
          <div className="section-top-wrapper">
            <h2>{trending.heading}</h2>
          </div>
        )}
        <div className="grid-container">
          {trending &&
            trending.sub_section_six &&
            trending.sub_section_six.map(({ image, url }, index) => {
              return (
                <div className="item" key={index}>
                  <a href={url} target="_blank">
                    <Image src={image} type="Horizontal" />
                  </a>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
