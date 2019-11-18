import React from 'react';
import './style.scss';
import Sifa from '../../../../assets/images/sifa.png';
import Utilities from '../../../../shared/utilities';
import Image from '../../../../shared/components/Image';

const WhatsUp = ({ whatsUpData }) => {
  return (
    <section className="whtsup-wrapper">
      <div className="container-fluid">
        <div class="section-top-wrapper">
          <h2>{whatsUpData && whatsUpData.heading}</h2>
        </div>
        <div className="whtsup-container">
          {whatsUpData &&
            whatsUpData.data &&
            whatsUpData.data.map(
              ({ title, description, genre, image }, index) => {
                return (
                  <div className="item-wrapper" key={title}>
                    <div className="image-wrapper">
                      <div class="item-img">
                        <Image src={image && image[0]} type="Horizontal" />
                      </div>
                      {genre && (
                        <span className="category">
                          {genre.toString().replace(',', '/')}
                        </span>
                      )}
                    </div>
                    <div className="image-bottom-desc">
                      <h3>
                        {Utilities.showLimitedChars(
                          title,
                          Utilities.mobilecheck() ? 25 : 50
                        )}
                      </h3>
                      <p>
                        {Utilities.showLimitedChars(
                          description,
                          Utilities.mobilecheck() ? 75 : 150
                        )}
                      </p>
                    </div>
                  </div>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default WhatsUp;
