import React from 'react';
import './style.scss';
import Image from '../../../../shared/components/Image';

const TicketDeals = ({ sectionFive }) => {
  return sectionFive && sectionFive.length > 0 ? (
    <section className="deal-wrapper">
      <div className="container-fluid">
        <div className="tickets">
          {sectionFive && sectionFive.heading && <h2>{sectionFive.heading}</h2>}
          <div className="tickets-deal">
            {sectionFive &&
              sectionFive.sub_section_five.map((elem, index) => {
                return (
                  <div className="deal">
                    <a href={elem.url} key={index}>
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
