import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Arrow from '../../../../assets/images/right-arrow.svg';
import Image from '../../../../shared/components/Image';

const LandingFestivals = ({ festivals }) => {
  return (
    <section className="festivals-wrapper">
      <div className="container-fluid">
        <div class="section-top-wrapper">
          <h2>{festivals && festivals.heading}</h2>
          <div class="carousel-dots">
            <Link to="/explore/festival">
              See all <img src={Arrow} class="img-fluid" alt="arrow" />
            </Link>
          </div>
        </div>
        <div className="festivals-container">
          {festivals &&
            festivals.data &&
            festivals.data.map(({ thumb_image, title, description }, index) => {
              return (
                <div className="item-wrapper" key={index}>
                  <div className="image-wrapper">
                    <div class="item-img">
                      <Image src={thumb_image} type="Horizontal" />
                    </div>
                  </div>
                  <div className="image-bottom-desc">
                    <h3>{title}</h3>
                    <p dangerouslySetInnerHTML={{ __html: description }}></p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default LandingFestivals;
