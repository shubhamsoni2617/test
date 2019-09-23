import React from 'react';
import "./style.scss";
import TeamImg from '../../../../src/assets/images/team.png';

const OurTeam = ({

}) => {
  return (
    <div className="row container our-team">
      <div className="col-lg-5">
        <h4>careers at SISTIC</h4>
        <h1>Join Our Team</h1>
        <h5>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five.
      </h5>
      <button>See Job openings --></button>
      </div>
      <div className="col-lg-7">
        <img src={TeamImg} alt="team" />
      </div>
    </div>
  );
};

export default OurTeam;
