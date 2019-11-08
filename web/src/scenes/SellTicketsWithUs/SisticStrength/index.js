import React from 'react';
import './style.scss';
import teamImg1 from '../../../../src/assets/images/team-img.jpg';
import teamImg2 from '../../../../src/assets/images/reach-img.jpg';
import teamImg3 from '../../../../src/assets/images/data-img.jpg';
import teamImg4 from '../../../../src/assets/images/customer-img.jpg';

const SisticStrength = ({ content }) => {
  let imgArr = [teamImg1, teamImg2, teamImg3, teamImg4];
  content &&
    content.map((contentDetail, index) => {
      contentDetail.image = imgArr[index];
    });

  return (
    <section>
      <div className="strength-wrapper">
        <h2>SISTIC Strengths</h2>
        <div className="container">
          {content &&
            content
              .slice(0, 4)
              .map(
                (
                  { title, description, button_text, button_link, image },
                  index
                ) => {
                  return (
                    <div className="team-wrapper" key={index}>
                      <div className="team-content">
                        <h2>{title}</h2>
                        <p
                          dangerouslySetInnerHTML={{ __html: description }}
                        ></p>
                        <a href={button_link}>{button_text}</a>
                      </div>
                      <div className="team-img">
                        <img src={image} alt="team-img" />
                      </div>
                    </div>
                  );
                }
              )}
          {/* <div className="team-wrapper">
            <div className="team-content">
              <h2>Team and Technology</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                Mauris malesuada nisi sit amet augue accumsan.
              </p>
              <a href="#">Know More</a>
            </div>
            <div className="team-img">
              <img src={teamImg1} alt="team-img" />
            </div>
          </div>
          <div className="team-wrapper">
            <div className="team-content">
              <h2>Reach- 6 Marketing Channles</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                Mauris malesuada nisi sit amet augue accumsan.
              </p>
              <a href="#">Know More</a>
            </div>
            <div className="team-img">
              <img src={teamImg2} alt="reach-img" />
            </div>
          </div>
          <div className="team-wrapper">
            <div className="team-content">
              <h2>Data Analytics & Business Intellegence Tools</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                Mauris malesuada nisi sit amet augue accumsan.
              </p>
              <a href="#">Know More</a>
            </div>
            <div className="team-img">
              <img src={teamImg3} alt="data-img" />
            </div>
          </div>
          <div className="team-wrapper">
            <div className="team-content">
              <h2>Customer Service & Venue Collection</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas varius tortor nibh, sit amet tempor nibh finibus et.
                Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                Mauris malesuada nisi sit amet augue accumsan.
              </p>
              <a href="#">Know More</a>
            </div>
            <div className="team-img">
              <img src={teamImg4} alt="customer-img" />
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default SisticStrength;
