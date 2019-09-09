import React, { Component, useState, useEffect, Fragment } from "react";
import banner from "../../assets/images/Bitmap Copy 2.png";
import Constants from "../../shared/constants";
import Buttontext from "./ButtonText";
import IconsNavigate from "./IconsNavigate";
import Images from "./Images";
import WhereBuyTicketsService from "../../shared/services/WhereBuyTicketsService";
import ApiPartnerService from "../../shared/services/ApiPartnersService";
import './style.scss';

const WhereBuyTickets = () => {
  const [whereBuyTicketsDetails, setwhereBuyTicketsDetails] = useState(null);
  const [apiPartners, setapiPartners] = useState(null);

  const fetchWhereBuyTickets = () => {
    const params = {
      client: Constants.CLIENT
    };
    WhereBuyTicketsService.getWhereBuyTickets(params)
      .then(res => {
        console.log(res.data.data);
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
        console.log(res.data.data);
        setapiPartners(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchWhereBuyTickets();
    fetchApiPartners();
  }, []);

  const titleWithDescription = (title, description) => {
    return (
      <div>
        <h1 id={title}>{title}</h1>
        {
          <div
            dangerouslySetInnerHTML={{
              __html: description
            }}
          />
        }
        <Buttontext title={title} />
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
          <div className="">
          {whereBuyTicketsDetails.map((category, i) => {
            let className;
            if(category.title==='SISTIC Singapore'){
                className="sistic-singapore-section"
            }else if(category.title==='Mobile App'){
              className="mobile-app-section"
            }else if(category.title==='Find an Agent'){
              className="agent-section"
            }else if(category.title==='API Partners'){
              className="api-partners-section"
            }else if(category.title==='Hotline @ +65 6348 5555'){
              className="hotline-section"
            }
           return <div className={className} key={category.title}>
              {i % 2 === 0 ? (
                <Fragment>
                  <div className="container">
                    <div className="wtbt-desc">
                      <div className="wtbt-content">
                        {titleWithDescription(category.title, category.description)}
                      </div>
                      <div className="wtbt-image">
                        <Images title={category.title} />
                      </div>
                    </div>
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  <div className="container">
                    <div className="wtbt-desc">
                      {apiPartners && (
                        <div className="wtbt-image">
                          <Images title={category.title} apiPartners={apiPartners} />                        
                        </div>
                      )}
                      <div className="wtbt-content">
                        {titleWithDescription(category.title, category.description)}
                      </div>
                    </div>
                  </div>
                </Fragment>
              )}
            </div>
          })}
          </div>
        </Fragment>
      )}
      </section>
    </Fragment>
  );
};

export default WhereBuyTickets;
