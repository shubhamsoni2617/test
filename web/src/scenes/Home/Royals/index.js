import React from 'react';
import './style.scss';
import Img from '../../../../src/assets/images/illustration.svg';

const Royals = ({}) => {
  return (
    <div className="container row">
      <div className="col-lg-8" style={{ margin: '20px' }}>
        <img src={Img} width="800" height="500" alt="Img" />
      </div>
      <div className="col-lg-3" style={{ margin: '20px' }}>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
          justo.
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={Img} width="200" height="200" alt="Img" />
          </div>
          <div className="col-lg-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src={Img} width="200" height="200" alt="Img" />
          </div>
          <div className="col-lg-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          </div>
        </div>
      </div>
    </div>
  );
};

export default Royals;
