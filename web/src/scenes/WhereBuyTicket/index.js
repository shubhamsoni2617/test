import React, { useState, useEffect, Fragment } from 'react';
import banner from '../../assets/images/location-banner.png';
import Constants from '../../shared/constants';
// import Buttontext from './ButtonText';
import IconsNavigate from './IconsNavigate';
// import Images from './Images';
import WhereBuyTicketsService from '../../shared/services/WhereBuyTicketsService';
import ApiPartnerService from '../../shared/services/ApiPartnersService';
import './style.scss';

const WhereBuyTicket = () => {
  const [whereBuyTicketsDetails, setwhereBuyTicketsDetails] = useState(null);
  const [apiPartners, setapiPartners] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchWhereBuyTickets();
    fetchApiPartners();
  }, []);

  const fetchWhereBuyTickets = () => {
    const params = {
      client: Constants.CLIENT
    };
    WhereBuyTicketsService.getWhereBuyTickets(params)
      .then(res => {
        setwhereBuyTicketsDetails(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const fetchApiPartners = () => {
    const params = {
      client: Constants.CLIENT,
      first: 0,
      limit: 6
    };
    ApiPartnerService.getApiPartnersService(params)
      .then(res => {
        setapiPartners(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  const titleWithDescription = (title, description) => {
    let contact = null;
    if (title === 'Hotline @ +65 6348 5555') {
      contact = (
        <>
          Hotline @ <a href="tel:+65 6348 5555">+65 6348 5555</a>
        </>
      );
    }
    return (
      <div>
        <h1 id={title}>{!contact ? title : contact}</h1>
        {
          <div
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        }
        {/* <Buttontext className="wtbt-btn" title={title} /> */}
      </div>
    );
  };

  return (
    <Fragment>
      <section className="where-to-buy-tickets">
        <div className="banner-wrapper">
          <img src={banner} className="img-fluid" alt="page-banner" />
          <div className="banner-overlay">
            <h1>Where to Buy Tickets</h1>
          </div>
        </div>
        {whereBuyTicketsDetails && (
          <Fragment>
            <IconsNavigate tabsArray={whereBuyTicketsDetails} />
            <Fragment>
              <div className="container">
                <div className="wtbt-desc">
                  <div className="wtbt-content">
                    <h1 id={whereBuyTicketsDetails[0].title}>
                      {whereBuyTicketsDetails[0].title}
                    </h1>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: whereBuyTicketsDetails[0].description
                      }}
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          </Fragment>
        )}
      </section>
    </Fragment>
  );
};

export default WhereBuyTicket;
