import React from 'react';
import Music from '../../../../assets/images/music.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MusicFestival = ({ sectionThree }) => {
  const settings = {
    arrows: true,
    dots: false,
    infinite: false,
    autoplay: true,
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
                        <img src={Music} alt="music" />
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
            {/* <div className="music-fest-box">
              <div className="fest-img">
                <img src={Music} alt="music" />
              </div>
              <div className="fest-cont">
                <h2>A Spoonful Of Sherman</h2>
                <span>Day 1</span>
                <p>
                  A Spoonful of Sherman is a musical revue created by Robert J.
                  Sherman which celebrates three generations of his song writing
                  family’s century-long musical journey.
                </p>
                <p>
                  Fresh from the West End, A Spoonful of Sherman is making its
                  Asian Premiere right here in Singapore! Featuring
                  Oscar-winning songs from films such as Mary Poppins, Chitty
                  Chitty Bang Bang, The Jungle Book and Winnie the Pooh, which
                  have entertained the world for more than 60 years, this
                  musical revue is sure to take you on a nostalgic trip down
                  memory lane!
                </p>
              </div>
            </div>

            <div className="music-fest-box">
              <div className="fest-img">
                <img src={Music} alt="music" />
              </div>
              <div className="fest-cont">
                <h2>A Spoonful Of Sherman</h2>
                <span>Day 1</span>
                <p>
                  A Spoonful of Sherman is a musical revue created by Robert J.
                  Sherman which celebrates three generations of his song writing
                  family’s century-long musical journey.
                </p>
                <p>
                  Fresh from the West End, A Spoonful of Sherman is making its
                  Asian Premiere right here in Singapore! Featuring
                  Oscar-winning songs from films such as Mary Poppins, Chitty
                  Chitty Bang Bang, The Jungle Book and Winnie the Pooh, which
                  have entertained the world for more than 60 years, this
                  musical revue is sure to take you on a nostalgic trip down
                  memory lane!
                </p>
              </div>
            </div>

            <div className="music-fest-box">
              <div className="fest-img">
                <img src={Music} alt="music" />
              </div>
              <div className="fest-cont">
                <h2>A Spoonful Of Sherman</h2>
                <span>Day 1</span>
                <p>
                  A Spoonful of Sherman is a musical revue created by Robert J.
                  Sherman which celebrates three generations of his song writing
                  family’s century-long musical journey.
                </p>
                <p>
                  Fresh from the West End, A Spoonful of Sherman is making its
                  Asian Premiere right here in Singapore! Featuring
                  Oscar-winning songs from films such as Mary Poppins, Chitty
                  Chitty Bang Bang, The Jungle Book and Winnie the Pooh, which
                  have entertained the world for more than 60 years, this
                  musical revue is sure to take you on a nostalgic trip down
                  memory lane!
                </p>
              </div>
            </div> */}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default MusicFestival;
