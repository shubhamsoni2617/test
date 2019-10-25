import React from 'react';
import './style.scss';
import Stixcloud from '../../../../src/assets/images/System-licensing/stix-cloud.png';

const TicketingSystem = ({ ticketingSystem }) => {
  console.log(ticketingSystem);
  return (
    <section>
      <div className="ticket-system">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 mb-5">
              <h2 className="section-title">
                {ticketingSystem && ticketingSystem.title}
              </h2>
              <div className="stixxloud">
                <h4>Stixcloud</h4>
                <ul>
                    <li
                    className=""
                    dangerouslySetInnerHTML={{
                        __html: ticketingSystem && ticketingSystem.description
                    }}
                    ></li>
                </ul>
               
                {/* <ul>
                  <li>- Event Configuration Tool</li>
                  <li>- Online Sales Booking Engine</li>
                  <li>- Ticket Sales &amp; Managemen</li>
                  <li>- Access Control System</li>
                  <li>- Open API</li>
                  <li>- Business Intelligence</li>
                </ul> */}
              </div>
            </div>
            <div className="col-md-6 text-right">
              <img src={Stixcloud} className="img-fluid" alt="stixcloud" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketingSystem;
