import React, { useState, useEffect } from 'react';
import './style.scss';
import B2BService from '../../shared/services/B2BService';
import Constants from '../../shared/constants';
import Tile1 from '../../../src/assets/images/System-licensing/tile-1.png';
import Tile2 from '../../../src/assets/images/System-licensing/tile-2.png';
import Tile3 from '../../../src/assets/images/System-licensing/tile-3.png';
import Tile4 from '../../../src/assets/images/System-licensing/tile-4.png';

const SystemLicensing = ({}) => {
  const [systemLicensing, setSystemLicensing] = useState([]);
  useEffect(() => {
    const params = {
      client: Constants.CLIENT
    };
    B2BService.getSystemLicensing(params)
      .then(res => {
        if (res && res.data) {
          setSystemLicensing(res.data);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response);
        }
      });
  }, []);
  console.log(systemLicensing);
  return (
    <div>
      <section>
        <div className="event-wrapper">
          <div className="event-banner">
            <div className="banner-content col-lg-7">
              <h2>System Licensing</h2>
              <p className="sub-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                in tellus vel lorem auctor lobortis. Donec ultricies massa eu
                quam hendrerit fringilla.
              </p>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="why-sistic">
          <div className="container-fluid">
            <h2 className="text-center section-title">Why SISTIC</h2>
            <div className="row no-gutters">
              <div className="col-lg-3 col-6">
                <div className="why-sistic-innerblock">
                  <img src={Tile1} alt="tile1" />
                  <div className="why-sistic-content">
                    <h3>Manage Complex Ticketing Features</h3>
                    <p className="sub-text">
                      The STiXCloud system offers an online service for
                      resellers based overseas - like travel agents and
                      concierge services - to access live inventory and transact
                      tickets, enabling the tickets to be available to an
                      international audience familiar with buying through their
                      preferred local channels.
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
                      The STiXCloud system offers an online service for
                      resellers based overseas - like travel agents and
                      concierge services - to access live inventory and transact
                      tickets, enabling the tickets to be available to an
                      international audience familiar with buying through their
                      preferred local channels.
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
                      The STiXCloud system offers an online service for
                      resellers based overseas - like travel agents and
                      concierge services - to access live inventory and transact
                      tickets, enabling the tickets to be available to an
                      international audience familiar with buying through their
                      preferred local channels.
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
                      The STiXCloud system offers an online service for
                      resellers based overseas - like travel agents and
                      concierge services - to access live inventory and transact
                      tickets, enabling the tickets to be available to an
                      international audience familiar with buying through their
                      preferred local channels.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SystemLicensing;
