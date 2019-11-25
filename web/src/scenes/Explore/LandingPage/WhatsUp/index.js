import React from 'react';
import './style.scss';
import Utilities from '../../../../shared/utilities';
import Image from '../../../../shared/components/Image';
import { Link } from 'react-router-dom';
import EventHeading from '../../../../shared/components/EventHeading';

const WhatsUp = ({ whatsUpData }) => {
  return (
    <section className="whtsup-wrapper">
      <div className="container-fluid">
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
                        ? `/explore/festival/${id}`
                        : `/explore/article/${id}`
                    }
                    key={title}
                  >
                    <div className="image-wrapper">
                      <div className="item-img">
                        <Image src={image && image[0]} type="Horizontal" />
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
                        allowTooltip={true}
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
