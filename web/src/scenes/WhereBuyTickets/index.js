import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import banner from '../../assets/images/location-banner.png';
import Constants from '../../shared/constants';
import IconsNavigate from './IconsNavigate';
import WhereBuyTicketsService from '../../shared/services/WhereBuyTicketsService';
import ApiPartnerService from '../../shared/services/ApiPartnersService';
import './style.scss';
import Content from './Content';
import ShimmerEffect from '../../shared/components/ShimmerEffect';

const WhereBuyTicket = () => {
  const [whereBuyTicketsDetails, setwhereBuyTicketsDetails] = useState(null);
  const [apiPartners, setapiPartners] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    fetchWhereBuyTickets();
    fetchApiPartners();
  }, []);

  const fetchWhereBuyTickets = () => {
    const params = {
      client: Constants.CLIENT
    };
    WhereBuyTicketsService.getWhereBuyTickets(params)
      .then(res => {
        setTimeout(() => {
          setwhereBuyTicketsDetails(res.data.data);
        }, 700);
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

  return (
    <Fragment>
      <section className="where-to-buy-tickets">
        <div className="banner-wrapper">
          <img src={banner} className="img-fluid" alt="page-banner" />
          <div className="banner-overlay">
            <h1>Where to Buy Tickets</h1>
          </div>
        </div>
        {whereBuyTicketsDetails ? (
          <Fragment>
            <IconsNavigate tabsArray={whereBuyTicketsDetails} />
            <Content
              whereBuyTicketsDetails={whereBuyTicketsDetails}
              apiPartners={apiPartners}
            />
          </Fragment>
        ) : (
          <ShimmerEffect
            propCls="shm_col-xs-6 col-md-12"
            height={80}
            count={3}
            type="TILE"
          />
        )}
      </section>
    </Fragment>
  );
};

export default WhereBuyTicket;
