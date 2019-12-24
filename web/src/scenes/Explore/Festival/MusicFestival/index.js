import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../../../../shared/components/Image';
import Utilities from '../../../../shared/utilities';

const MusicFestival = ({ sectionThree }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true
  };

  return sectionThree &&
    ((sectionThree.sub_section_three &&
      sectionThree.sub_section_three.length > 0) ||
      sectionThree.heading) ? (
      <section>
        <div className="container-fluid custom-container">
          <div className="music-fest">
            <h2>{sectionThree.heading}</h2>
            <Slider {...settings}>
              {sectionThree.sub_section_three &&
                sectionThree.sub_section_three.map(
                  ({ description, title, url, image }) => {
                    return (
                      <div className="music-fest-box" key={title}>
                        <div className="fest-img">
                          <Image src={image} type="BigBanner" />
                        </div>
                        <div className="fest-cont">
                          <h2>{title}</h2>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: Utilities.showLimitedChars(description, 500)
                            }}
                          ></p>
                        </div>
                      </div>
                    );
                  }
                )}
            </Slider>
          </div>
        </div>
      </section>
    ) : null;
};

export default MusicFestival;
