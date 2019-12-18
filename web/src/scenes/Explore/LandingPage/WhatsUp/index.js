import React from 'react';
import './style.scss';
import Utilities from '../../../../shared/utilities';
import Image from '../../../../shared/components/Image';
import { Link } from 'react-router-dom';
import EventHeading from '../../../../shared/components/EventHeading';

const WhatsUp = ({ whatsUpData }) => {
  const calculateLength = str => {
    if (str && str.length > 30) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <section className="whtsup-wrapper">
      <div className="container-fluid custom-container">
        <div className="section-top-wrapper">
          <h2>{whatsUpData && whatsUpData.heading}</h2>
        </div>
        <div className="whtsup-container">
          {whatsUpData &&
            whatsUpData.data &&
            whatsUpData.data.map(
              ({ title, description, genre, image, id, type }, index) => {
                return (
                  <Link
                    className="item-wrapper"
                    to={
                      type === 'multi_show_template'
                        ? `/explore/2/${id}`
                        : `/explore/1/${id}`
                    }
                    key={title}
                  >
                    <div className="image-wrapper">
                      <div className="item-img">
                        <Image src={image} type="Horizontal" />
                      </div>
                      {genre && (
                        <span className="category">
                          {genre.toString().replace(',', '/')}
                        </span>
                      )}
                    </div>
                    <div className="image-bottom-desc">
                      <EventHeading
                        title={title}
                        lines={1}
                        height={Utilities.mobilecheck() ? 20 : 23}
                        // size={13}
                        allowTooltip={calculateLength(title)}
                      />
                      <p>
                        {Utilities.showLimitedChars(
                          description,
                          Utilities.mobilecheck() ? 130 : 150
                        )}
                      </p>
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

export default WhatsUp;
