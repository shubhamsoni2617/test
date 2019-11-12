import React from 'react';
import yearsIcon from '../../../assets/images/Years-icon.svg';
import ticketsIcon from '../../../assets/images/tickets-icon.svg';
import partnersIcon from '../../../assets/images/Partners-icon.svg';
import eventIcon from '../../../assets/images/events-icon.svg';
const Banner = ({ bannerData }) => {
  return (
    <>
      <section>
        <div className="event-wrapper">
          <div className="event-banner">
            {bannerData && (
              <div className="banner-content">
                <h2>{bannerData.banner_title}</h2>

                <div
                  className="text-center sub-text"
                  dangerouslySetInnerHTML={{
                    __html: bannerData.banner_description
                  }}
                />
                <a href={bannerData.button_link}>{bannerData.button_text}</a>
              </div>
            )}
          </div>
        </div>
      </section>
      <section>
        <div className="event-list">
          <div className="event-list-icon">
            <img src={yearsIcon} alt="Years-icon" />
            <div className="year-content">
              {bannerData && <span>{bannerData.year}</span>}
              <p>Years Ticketing</p>
            </div>
          </div>
          <div className="event-list-icon">
            <img src={ticketsIcon} alt="tickets-icon" />
            <div className="year-content">
              {bannerData && <span>{bannerData.tickets}</span>}
              <p>Tickets</p>
            </div>
          </div>
          <div className="event-list-icon">
            <img src={partnersIcon} alt="Partners-icon" />
            <div className="year-content">
              {bannerData && <span>{bannerData.partnership}</span>}
              <p>
                Partnerships with promotors,
                <br /> venues & attractions
              </p>
            </div>
          </div>
          <div className="event-list-icon">
            <img src={eventIcon} alt="Events-icon" />
            <div className="year-content">
              {bannerData && <span>{bannerData.events}</span>}
              <p>Events</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
