import React from 'react';
import './style.scss';
import Stixcloud from '../../../../src/assets/images/System-licensing/stix-cloud.png';

const TicketingSystem = ({ ticketingSystem }) => {
  console.log(ticketingSystem);
  return (
    <section>
      <div className="ticket-system">
        <div className="container-fluid custom-container">
          <div className="row">
            <div className="col-md-6 mb-5">
              <h2 className="section-title">
                {ticketingSystem && ticketingSystem.title}
              </h2>
              {ticketingSystem && (
                <div
                  className="stixxloud"
                  dangerouslySetInnerHTML={{
                    __html: ticketingSystem.description
                  }}
                />
              )}
              {/* <div className="stixxloud">
                <ul>
                  <li
                    className=""
                    dangerouslySetInnerHTML={{
                      __html: ticketingSystem && ticketingSystem.description
                    }}
                  ></li>
                </ul>
              </div> */}
            </div>
            <div className="col-md-6 ticket-system-img">
              <img src={Stixcloud} className="img-fluid" alt="stixcloud" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketingSystem;
