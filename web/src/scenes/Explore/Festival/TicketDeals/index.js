import React from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';

const TicketDeals = ({ sectionFive }) => {
  return (
    <section className="deal-wrapper">
      <div className="container-fluid">
        <div className="tickets">
          {sectionFive && sectionFive.heading && <h2>{sectionFive.heading}</h2>}
          <div className="tickets-deal">
            {sectionFive &&
              sectionFive.sub_section_five.map((elem, index) => {
                return (
                  <a href={elem.url} key={index}>
                    <div className="deal">
                      <Image src={elem.image} type="Vertical" />
                      <h3>{elem.title}</h3>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TicketDeals;
