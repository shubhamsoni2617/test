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
                      <img src={imgPath.img} alt="tile1" />
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
            {/* <div className="col-lg-3 col-6">
              <div className="why-sistic-innerblock">
                <img src={Tile1} alt="tile1" />
                <div className="why-sistic-content">
                  <h3>Manage Complex Ticketing Features</h3>
                  <p className="sub-text">
                    The STiXCloud system offers an online service for resellers
                    based overseas - like travel agents and concierge services -
                    to access live inventory and transact tickets, enabling the
                    tickets to be available to an international audience
                    familiar with buying through their preferred local channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="why-sistic-innerblock">
                <img src={Tile2} alt="tile2" />
                <div className="why-sistic-content">
                  <h3>Global Sales Network</h3>
                  <p className="sub-text">
                    The STiXCloud system offers an online service for resellers
                    based overseas - like travel agents and concierge services -
                    to access live inventory and transact tickets, enabling the
                    tickets to be available to an international audience
                    familiar with buying through their preferred local channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="why-sistic-innerblock">
                <img src={Tile3} alt="tile3" />
                <div className="why-sistic-content">
                  <h3>Easy API Integration</h3>
                  <p className="sub-text">
                    The STiXCloud system offers an online service for resellers
                    based overseas - like travel agents and concierge services -
                    to access live inventory and transact tickets, enabling the
                    tickets to be available to an international audience
                    familiar with buying through their preferred local channels.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-6">
              <div className="why-sistic-innerblock">
                <img src={Tile4} alt="tile4" />
                <div className="why-sistic-content">
                  <h3>Local Support</h3>
                  <p className="sub-text">
                    The STiXCloud system offers an online service for resellers
                    based overseas - like travel agents and concierge services -
                    to access live inventory and transact tickets, enabling the
                    tickets to be available to an international audience
                    familiar with buying through their preferred local channels.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySistic;
