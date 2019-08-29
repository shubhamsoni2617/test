import React, { Component, useState, useEffect, Fragment } from "react";
import banner from "../../assets/images/Bitmap Copy 2.png";
import Constants from "../../shared/constants";
import Buttontext from "./ButtonText";
import IconsNavigate from "./IconsNavigate";
import Images from "./Images";
import WhereBuyTicketsService from "../../shared/services/WhereBuyTicketsService";
import ApiPartnerService from "../../shared/services/ApiPartnersService";

const WhereBuyTickets = () => {
  const [whereBuyTicketsDetails, setwhereBuyTicketsDetails] = useState(null);
  const [apiPartners, setapiPartners] = useState(null);

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
      <img src={banner} className="img-fluid" alt="page-banner" />
      <div>
        <h1>Where to Buy Tickets</h1>
      </div>
      {whereBuyTicketsDetails && (
        <Fragment>
          <IconsNavigate tabsArray={whereBuyTicketsDetails} />
          {whereBuyTicketsDetails.map((category, i) => (
            <div
              key={category.title}
              style={{ display: "flex", flexDirection: "row" }}
            >
              {i % 2 === 0 ? (
                <Fragment>
                  {titleWithDescription(category.title, category.description)}
                  <Images title={category.title} />
                </Fragment>
              ) : (
                <Fragment>
                  {apiPartners && (
                    <Images title={category.title} apiPartners={apiPartners} />
                  )}
                  {titleWithDescription(category.title, category.description)}
                </Fragment>
              )}
            </div>
          ))}
        </Fragment>
      )}
    </Fragment>
  );
};

export default WhereBuyTickets;
