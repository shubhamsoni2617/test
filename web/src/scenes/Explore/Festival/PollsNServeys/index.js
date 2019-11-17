import React, { Fragment } from 'react';
import './style.scss';
import pollsSurveys from '../../../../assets/images/polls-surveys.png';
import Image from '../../../../shared/components/Image';

const PollsNServeys = ({ sectionSeven }) => {
  return (
    <section className="polls-survey">
      <div className="container-fluid">
        <div className="polls-wrapper">
          {sectionSeven &&
            sectionSeven.map(
              ({
                heading,
                button_text,
                button_url,
                description,
                image,
                title
              }) => {
                return (
                  <Fragment key={heading}>
                    {heading && <h2>{heading}</h2>}
                    <div className="polls-box">
                      <div className="polls-img">
                        <Image src={image} type="MediumHorizontal" />
                      </div>
                      <div className="polls-cont">
                        {title && <h2>{title}</h2>}
                        <p
                          dangerouslySetInnerHTML={{ __html: description }}
                        ></p>
                        {button_text && <a href={button_url}>{button_text}</a>}
                      </div>
                    </div>
                  </Fragment>
                );
              }
            )}
        </div>
      </div>
    </section>
  );
};

export default PollsNServeys;