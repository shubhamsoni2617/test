import React from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';

const TicketDeals = ({ sectionFive }) => {
  return sectionFive &&
    sectionFive.sub_section_five &&
    sectionFive.sub_section_five.length > 0 ? (
    <section className="deal-wrapper">
      <div className="container-fluid custom-container">
        <div className="tickets">
          {sectionFive && sectionFive.heading && <h2>{sectionFive.heading}</h2>}
          <div className="tickets-deal">
            {sectionFive &&
              sectionFive.sub_section_five.map((elem, index) => {
                return (
                  <div className="deal" key={index}>
                    <a href={elem.url}>
                      <Image src={elem.uri} type="Vertical" />
                      <h3>{elem.title}</h3>
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default TicketDeals;
