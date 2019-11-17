import React, { Fragment } from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Utilities from '../../../../shared/utilities';

const EventItem = ({ title, description, button_url, button_text, image }) => {
  return (
    <div className="event" key={title}>
      <Image src={image} type="Horizontal" />
      <div className="event-desc">
        <h2>
          {Utilities.showLimitedChars(
            title,
            Utilities.mobilecheck() ? 25 : 40
          )}
        </h2>
        <p
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        {button_text && (
          <a href={button_url}>{button_text}</a>
        )}
      </div>
    </div>
  )
}

const FestivalEventLineUp = ({ sectionOne, sectionTwo }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <section className="featured-wrapper">
      <div className="container-fluid featured-container">
        <div className="featured-box">
          <div className="featured">
            {sectionOne && sectionOne[0] && <h2>{sectionOne[0].heading}</h2>}
            <a
              className="featured-title-link"
              href={sectionOne && sectionOne[0] && sectionOne[0].url}
              target="_blank"
            >
              <Image
                src={sectionOne && sectionOne[0] && sectionOne[0].image}
                type="Vertical"
              />

              {sectionOne && sectionOne[0] && (
                <h3>
                  {Utilities.showLimitedChars(
                    sectionOne[0].title,
                    Utilities.mobilecheck() ? 25 : 50
                  )}
                </h3>
              )}
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    sectionOne && sectionOne[0] && sectionOne[0].description
                }}
              ></p>
            </a>
          </div>
          <div className="festival-lineup">
            <h2>{sectionTwo && sectionTwo.heading}</h2>
            <div className="festival-event">
              {Utilities.mobilecheck() ? sectionTwo &&
                sectionTwo.sub_section_two.map(
                  ({
                    title,
                    button_text,
                    button_url,
                    description,
                    image
                  }) => {
                    return (
                      <EventItem title={title} description={description} button_url={button_url} button_text={button_text} image={image} />
                    );
                  }
                ) : <Slider {...settings}>
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
                          <EventItem title={title} description={description} button_url={button_url} button_text={button_text} image={image} />
                        );
                      }
                    )}
                </Slider>}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FestivalEventLineUp;