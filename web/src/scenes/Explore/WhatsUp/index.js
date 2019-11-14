import React from 'react';
import './style.scss';
import Sifa from '../../../assets/images/sifa.png';
import Festival from '../../../assets/images/festival.png';
import Chinese from '../../../assets/images/chinese.png';
import Chritmas from '../../../assets/images/christmas.png';

const WhatsUp = ({}) => {
  return (
    <section className="whtsup-wrapper">
      <div className="container-fluid">
        <div class="section-top-wrapper">
          <h2>What’s Up</h2>
        </div>
        <div className="whtsup-container">
          <div className="item-wrapper">
            <div className="image-wrapper">
              <div class="item-img">
                <img src={Sifa} alt="sifa" />
              </div>
              <span className="category">Festival</span>
            </div>
            <div className="image-bottom-desc">
              <h3>SIFA 2019</h3>
              <p>
                Singapore International Festival of Arts (SIFA) presents
                captivating and diverse works across theatre, music, dance, film
                and visual arts.
              </p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="image-wrapper">
              <div class="item-img">
                <img src={Festival} alt="festival" />
              </div>
              <span className="category">Festival</span>
            </div>
            <div className="image-bottom-desc">
              <h3>Mid-Autumn Festival</h3>
              <p>
                The Mid-Autumn Festival is a harvest festival celebrated notably
                by the Chinese, Vietnamese
              </p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="image-wrapper">
              <div class="item-img">
                <img src={Chinese} alt="chinese" />
              </div>
              <span className="category">Festival</span>
            </div>
            <div className="image-bottom-desc">
              <h3>Chinese New Year 2019</h3>
              <p>
                Chinese New Year is the Chinese festival that celebrates the
                beginning of a new year .
              </p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="image-wrapper">
              <div class="item-img">
                <img src={Chritmas} alt="Chritmas" />
              </div>
              <span className="category">Festival</span>
            </div>
            <div className="image-bottom-desc">
              <h3>Christmas</h3>
              <p>
                Christmas is an annual festival commemorating the birth of Jesus
                Christ observed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsUp;
