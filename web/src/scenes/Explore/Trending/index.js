import React from 'react';
import './style.scss';
import Trending1 from '../../../assets/images/trending1.png';

const Trending = ({}) => {
  return (
    <section className="trending-wrapper">
      <div className="container-fluid">
        <div class="section-top-wrapper">
          <h2>Trending</h2>
        </div>
        <div className="grid-container">
          <div className="item">
            <img src={Trending1} alt="" className="img-fluid" />
          </div>
          <div className="item">
            <img src={Trending1} alt="" className="img-fluid" />
          </div>
          <div className="item">
            <img src={Trending1} alt="" className="img-fluid" />
          </div>
          <div className="item">
            <img src={Trending1} alt="" className="img-fluid" />
          </div>
          <div className="item">
            <img src={Trending1} alt="" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trending;
