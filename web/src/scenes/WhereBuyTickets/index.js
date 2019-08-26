import React, { Component, Fragment } from "react";
import EventBreadcrumbImage from "../../assets/images/events.png";

import Constants from "../../shared/constants";
import Buttontext from "./ButtonText";
import IconsNavigate from "./IconsNavigate";
import Images from "./Images";

import WhereBuyTicketsService from "../../shared/services/WhereBuyTicketsService";
import ApiPartnerService from "../../shared/services/ApiPartnersService";

class WhereBuyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whereBuyTicketsDetails: [],
      apiPartners: []
    };
  }

  componentDidMount() {
    this.fetchWhereBuyTickets();

    this.fetchApiPartners();
  }

  fetchWhereBuyTickets = () => {
    const params = {
      client: Constants.CLIENT
    };
    WhereBuyTicketsService.getWhereBuyTickets(params)
      .then(res => {
        this.setState({
          whereBuyTicketsDetails: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  fetchApiPartners = () => {
    const params = {
      client: Constants.CLIENT,
      first: 0,
      limit: 6
    };
    ApiPartnerService.getApiPartnersService(params)
      .then(res => {
        this.setState({
          apiPartners: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  titleWithDescription(title, description) {
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
  }

  render() {
    console.table(this.state.apiPartners);
    let { whereBuyTicketsDetails } = this.state;
    return (
      <Fragment>
        <img
          src={EventBreadcrumbImage}
          className="img-fluid"
          alt="page-banner"
        />
        <div>
          <h1>Where to Buy Tickets</h1>
        </div>
        {whereBuyTicketsDetails && (
          <IconsNavigate tabsArray={whereBuyTicketsDetails} />
        )}
        {whereBuyTicketsDetails &&
          whereBuyTicketsDetails.map((category, i) => {
            return (
              <div
                key={category.title}
                style={{ display: "flex", flexDirection: "row" }}
              >
                {i % 2 === 0 ? (
                  <Fragment>
                    {this.titleWithDescription(
                      category.title,
                      category.description
                    )}
                    <Images title={category.title} />
                  </Fragment>
                ) : (
                  <Fragment>
                    <Images
                      title={category.title}
                      apiPartners={this.state.apiPartners}
                    />
                    {this.titleWithDescription(
                      category.title,
                      category.description
                    )}
                  </Fragment>
                )}
              </div>
            );
          })}
      </Fragment>
    );
  }
}

export default WhereBuyTickets;
