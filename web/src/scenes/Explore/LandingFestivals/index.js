import React from 'react';
import './style.scss';
import Arrow from '../../../assets/images/right-arrow.svg';
import GreatWine from '../../../assets/images/great-wine.png';
import chrolFest from '../../../assets/images/choral-festival.png';
import nightFest from '../../../assets/images/nightfest.png';
import sentosaFest from '../../../assets/images/sentosa-fest.png';

const LandingFestivals = ({}) => {
  return (
    <section className="festivals-wrapper">
      <div className="container-fluid">
        <div class="section-top-wrapper">
          <h2>Festivals</h2>
          <div class="carousel-dots">
            <a href="">
              See all <img src={Arrow} class="img-fluid" alt="arrow" />
            </a>
          </div>
        </div>
        <div className="festivals-container">
          <div className="item-wrapper">
            <div className="image-wrapper">
              <div class="item-img">
                <img src={GreatWine} alt="sifa" />
              </div>
            </div>
            <div className="image-bottom-desc">
              <h3>The GREAT Wine & Dine Festival</h3>
              <p>
                Indulge in delectable offerings through live demonstrations and
                hands-on masterclasses by Resorts WorldTM Sentosa’s celebrity
                chefs and patissiers.
              </p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="image-wrapper">
              <div class="item-img">
                <img src={chrolFest} alt="festival" />
              </div>
            </div>
            <div className="image-bottom-desc">
              <h3>Choral Festival 2019</h3>
              <p>
                The Choral Festival 2019 is a harvest festival celebrated
                notably by the Chinese, Vietnamese
              </p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="image-wrapper">
              <div class="item-img">
                <img src={nightFest} alt="chinese" />
              </div>
            </div>
            <div className="image-bottom-desc">
              <h3>Singapore Night Festival</h3>
              <p>
                The Singapore Night Festival is an annual street festival held
                over two weekends celebrating the arts and Singapore’s rich
                cultural heritage.
              </p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="image-wrapper">
              <div class="item-img">
                <img src={sentosaFest} alt="Chritmas" />
              </div>
            </div>
            <div className="image-bottom-desc">
              <h3>Sentosa GrillFest 2019</h3>
              <p>
                Sentosa GrillFest is back – bigger and better at that! Make time
                to feast at Singapore’s only food street by the beach
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingFestivals;
