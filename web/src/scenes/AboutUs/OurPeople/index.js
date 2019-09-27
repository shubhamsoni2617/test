import React from 'react';
import './style.scss';

import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import people4 from '../../../assets/images/people4.png';

const OurPeople = ({

}) => {
  return (
    <div className="our-people-wrapper">
      <div className="container">
        <div className="our-people-desc">
          <h3>Our People</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris malesuada nisi sit amet augue accumsan tincidunt. Maecenas tincidunt, velit ac porttitor pulvinar, tortor eros facilisis libero, vitae commodo nunc quam et ligula. Ut nec ipsum sapien.</p>
        </div>
        <div className="our-people-image">
          <ul>
            <li>
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
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurPeople;
