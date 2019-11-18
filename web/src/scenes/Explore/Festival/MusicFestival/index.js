import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from '../../../../shared/components/Image';

const MusicFestival = ({ sectionThree }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section>
      <div className="container-fluid">
        <div className="music-fest">
          <h2>{sectionThree && sectionThree.heading}</h2>
          <Slider {...settings}>
            {sectionThree &&
              sectionThree.sub_section_three.map(
                ({ description, title, url, image }) => {
                  return (
                    <div className="music-fest-box" key={title}>
                      <div className="fest-img">
                        <Image src={image} type="MediumHorizontal" />
                      </div>
                      <div className="fest-cont">
                        <h2>{title}</h2>
                        <span>Day 1</span>
                        <p
                          dangerouslySetInnerHTML={{ __html: description }}
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
  );
};

export default MusicFestival;
