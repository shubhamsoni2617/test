import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';
import Arrow from '../../../../assets/images/right-arrow.svg';
import Image from '../../../../shared/components/Image';
import Utilities from '../../../../shared/utilities';
import EventHeading from '../../../../shared/components/EventHeading';

const LandingFestivals = ({ festivals }) => {
  const calculateLength = str => {
    if (str && str.length > 30) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section className="festivals-wrapper">
      <div className="container-fluid custom-container">
        <div className="section-top-wrapper">
          <h2>{festivals && festivals.heading}</h2>
          <div className="carousel-dots">
            <Link to={`/explore/articles?c=${festivals.id}`}>
              See all <img src={Arrow} className="img-fluid" alt="arrow" />
            </Link>
          </div>
        </div>
        <div className="festivals-container">
          {festivals &&
            festivals.data &&
            festivals.data.map(
              ({ thumb_image, title, description, id, type }, index) => {
                return (
                  <Link
                    to={
                      type === 'multi_show_template'
                        ? `/explore/2/${id}`
                        : `/explore/1/${id}`
                    }
                    className="item-wrapper"
                    key={index}
                  >
                    <div className="image-wrapper">
                      <div className="item-img">
                        <Image src={thumb_image} type="Horizontal" />
                      </div>
                    </div>
                    <div className="image-bottom-desc">
                      <EventHeading
                        title={title}
                        lines={1}
                        height={Utilities.mobilecheck() ? 20 : 23}
                        // size={13}
                        allowTooltip={calculateLength(title)}
                      />
                      <p
                        dangerouslySetInnerHTML={{
                          __html: Utilities.showLimitedChars(
                            description &&
                              description.replace(/(<([^>]+)>)/gi, ''),
                            150
                          )
                        }}
                      ></p>
                    </div>
                  </Link>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default LandingFestivals;
