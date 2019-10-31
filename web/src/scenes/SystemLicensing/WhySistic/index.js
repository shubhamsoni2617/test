import React from 'react';
import './style.scss';
import Tile1 from '../../../../src/assets/images/System-licensing/tile-1.png';
import Tile2 from '../../../../src/assets/images/System-licensing/tile-2.png';
import Tile3 from '../../../../src/assets/images/System-licensing/tile-3.png';
import Tile4 from '../../../../src/assets/images/System-licensing/tile-4.png';

const WhySistic = ({ whySistic }) => {
  let imgArr = [{ img: Tile1 }, { img: Tile2 }, { img: Tile3 }, { img: Tile4 }];
  let imgArrObj = Object.assign({}, imgArr);

  whySistic &&
    whySistic.map((elem, i) => {
      elem.imgPath = imgArrObj[i];
    });

  return (
    <section>
      <div className="why-sistic">
        <div className="container-fluid">
          <h2 className="text-center section-title">Why SISTIC</h2>
          <div className="row no-gutters">
            {whySistic &&
              whySistic.map(({ title, description, imgPath }, i) => {
                return (
                  <div className="col-lg-3 col-6" key={title}>
                    <div className="why-sistic-innerblock">
                      <img src={imgPath.img} alt={title} />
                      <div className="why-sistic-content">
                        <h3>{title}</h3>
                        <p
                          className="sub-text"
                          dangerouslySetInnerHTML={{ __html: description }}
                        ></p>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySistic;
