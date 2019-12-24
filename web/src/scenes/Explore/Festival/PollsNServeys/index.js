import React from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import Utilities from '../../../../shared/utilities';

const PollsNServeys = ({ sectionSeven }) => {
  return sectionSeven && (sectionSeven.image || sectionSeven.heading) ? (
    <section className="polls-survey">
      <div className="container-fluid custom-container">
        <div className="polls-wrapper">
          {sectionSeven.heading && <h2>{sectionSeven.heading}</h2>}
          <div className="polls-box">
            <div className="polls-img">
              <Image src={sectionSeven.image} type="BigBanner" />
            </div>
            <div className="polls-cont">
              {sectionSeven.title && <h2>{sectionSeven.title}</h2>}
              <p
                dangerouslySetInnerHTML={{
                  __html: Utilities.showLimitedChars(
                    sectionSeven.description,
                    500
                  )
                }}
              ></p>
              {sectionSeven.button_text && (
                <a href={sectionSeven.button_url}>{sectionSeven.button_text}</a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};
export default PollsNServeys;
