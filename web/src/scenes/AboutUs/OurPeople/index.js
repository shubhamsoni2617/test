import React from 'react';
import './style.scss';

import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import people4 from '../../../assets/images/people4.png';
import Image from '../../../shared/components/Image';

const OurPeople = ({ content }) => {
  return (
    <div className="our-people-wrapper">
      <div className="container-fluid custom-container">
        <div className="our-people-desc">
          <h3>{content && content[3].title}</h3>
          <p
            dangerouslySetInnerHTML={{
              __html: content && content[3].description
            }}
          ></p>
        </div>
        <div className="our-people-image">
          <ul>
            {content &&
              content.people.map(({ name, position, image }, index) => {
                return (
                  <li key={index}>
                    <Image src={image && image} alt="people" type='Medium' className="img-fluid" />
                    <h5>{name}</h5>
                    <span>{position}</span>
                  </li>
                );
              })}
            {/* <li>
              <img src={people2} alt="people" />
              <h5>Johnathan</h5>
              <span>Founder</span>
            </li>
            <li>
              <img src={people2} alt="people" />
              <h5>Johnathan</h5>
              <span>Founder</span>
            </li>
            <li>
              <img src={people3} alt="people" />
              <h5>Natasha</h5>
              <span>Founder</span>
            </li>
            <li>
              <img src={people4} alt="people" />
              <h5>Jangua</h5>
              <span>Founder</span>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
