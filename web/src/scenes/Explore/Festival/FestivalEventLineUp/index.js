import React from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Utilities from '../../../../shared/utilities';

const EventItem = ({ title, description, button_url, button_text, image }) => {
  return (
    <a href={button_url} className="event" key={title} target="_blank">
      <Image src={image} type="Horizontal" />
      <div className="event-desc">
        <div>
          <h2>
            {Utilities.showLimitedChars(
              title,
              Utilities.mobilecheck() ? 25 : 50
            )}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html:
                description &&
                Utilities.showLimitedChars(
                  description.replace(/(<([^>]+)>)/gi, ''),
                  256
                )
            }}
          ></p>
        </div>
        {button_text && (
          <a href={button_url} target="_blank">
            {button_text}
          </a>
        )}
      </div>
    </a>
  );
};

const FestivalEventLineUp = ({ sectionOne, sectionTwo }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (sectionOne && (sectionOne.heading || sectionOne.image)) ||
    (sectionTwo &&
      (sectionTwo.heading ||
        (sectionTwo.sub_section_two && sectionTwo.sub_section_two > 0))) ? (
    <section className="featured-wrapper">
      <div className="container-fluid custom-container featured-container">
        <div className="featured-box">
          {sectionOne && (sectionOne.heading || sectionOne.image) && (
            <div className="featured">
              {sectionOne && sectionOne.title && (
                <h3>
                  {Utilities.showLimitedChars(
                    sectionOne.heading,
                    Utilities.mobilecheck() ? 25 : 60
                  )}
                </h3>
              )}
              <a
                className="featured-title-link"
                href={sectionOne && sectionOne.url}
                target="_blank"
              >
                <Image src={sectionOne && sectionOne.image} type="Vertical" />

                {sectionOne && sectionOne.title && (
                  <h3>
                    {Utilities.showLimitedChars(
                      sectionOne.title,
                      Utilities.mobilecheck() ? 25 : 50
                    )}
                  </h3>
                )}
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      sectionOne &&
                      sectionOne.description &&
                      Utilities.showLimitedChars(
                        sectionOne.description.replace(/(<([^>]+)>)/gi, ''),
                        80
                      )
                  }}
                ></p>
              </a>
            </div>
          )}
          {sectionTwo &&
            sectionTwo.sub_section_two &&
            sectionTwo.sub_section_two.length > 0 && (
              <div className="festival-lineup">
                <h2>{sectionTwo && sectionTwo.heading}</h2>
                <div className="festival-event">
                  {Utilities.mobilecheck() ? (
                    sectionTwo &&
                    sectionTwo.sub_section_two.map(
                      ({
                        title,
                        button_text,
                        button_url,
                        description,
                        image
                      }) => {
                        return (
                          <EventItem
                            title={title}
                            description={description}
                            button_url={button_url}
                            button_text={button_text}
                            image={image}
                          />
                        );
                      }
                    )
                  ) : (
                    <Slider {...settings}>
                      {sectionTwo &&
                        sectionTwo.sub_section_two.map(
                          ({
                            title,
                            button_text,
                            button_url,
                            description,
                            image
                          }) => {
                            return (
                              <EventItem
                                key={title}
                                title={title}
                                description={description}
                                button_url={button_url}
                                button_text={button_text}
                                image={image}
                              />
                            );
                          }
                        )}
                    </Slider>
                  )}
                </div>
              </div>
            )}
        </div>
      </div>
    </section>
  ) : null;
};

export default FestivalEventLineUp;
