import React from 'react';
import './style.scss';
import Trending1 from '../../../../assets/images/trending1.png';
import Image from '../../../../shared/components/Image';

const Trending = ({}) => {
  const trendingImage = [
    { imgPath: Trending1 },
    { imgPath: Trending1 },
    { imgPath: Trending1 },
    { imgPath: Trending1 },
    { imgPath: Trending1 }
  ];
  return (
    <section className="trending-wrapper">
      <div className="container-fluid">
        <div class="section-top-wrapper">
          <h2>Trending</h2>
        </div>
        <div className="grid-container">
          {trendingImage &&
            trendingImage.map(({ imgPath }, index) => {
              return (
                <div className="item" key={index}>
                  <Image src={imgPath} type="Horizontal" />
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Trending;
