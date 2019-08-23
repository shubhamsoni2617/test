import React, { Component } from "react";
import EventBreadcrumbImage from "../../assets/images/events.png";
import FindEvent from "./FindEvent";
import MobileApp from "./MobileApp";
import FindAgent from "./FindAgent";
import ApiPartners from "./ApiPartners";
import ContactUs from "./ContactUs";
import IconsNavigate from "./IconsNavigate";
import Constants from "../../shared/constants";
import WhereBuyTicketsService from "../../shared/services/WhereBuyTicketsService";

import appleImage from "../../assets/images/apple.svg";
import androidImage from "../../assets/images/android.png";

class WhereBuyTickets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whereBuyTicketsDetails: []
    };
  }

  componentDidMount() {
    this.fetchWhereBuyTickets();
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

  render() {
    console.table(this.state.whereBuyTicketsDetails);
    return (
      <React.Fragment>
        <div>
          <img
            src={EventBreadcrumbImage}
            className="img-fluid"
            alt="page-banner"
          />
          <div>
            <h1>Where to Buy Tickets</h1>
          </div>
          {this.state.whereBuyTicketsDetails &&
            this.state.whereBuyTicketsDetails.map((category, i) => {
              return i % 2 === 0 ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div>
                    <h1 id="Website">{category.title}</h1>
                    {
                      <div
                        dangerouslySetInnerHTML={{
                          __html: category.description
                        }}
                      />
                    }
                    <button>Find an Event</button>
                  </div>
                  <img
                    style={{ marginLeft: "200px" }}
                    src="assets/images/ballet.jpg"
                    alt="video"
                  />
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img
                    style={{ marginRight: "200px" }}
                    src="assets/images/ballet.jpg"
                    alt="video"
                  />
                  <div>
                    <div>
                      <h1 id="Website">{category.title}</h1>
                      {
                        <div
                          dangerouslySetInnerHTML={{
                            __html: category.description
                          }}
                        />
                      }
                    </div>

                    <div
                      className="download-option"
                      style={{ display: "flex", flexDirection: "row" }}
                    >
                      <a>
                        <img src={appleImage} className="ios" alt="" />
                        <span>
                          Available on the
                          <br />
                          <strong>App Store</strong>
                        </span>
                      </a>
                      <a>
                        <img src={androidImage} className="android" alt="" />
                        <span>
                          Get it on
                          <br />
                          <strong>Play Store</strong>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </React.Fragment>
    );
  }
}

export default WhereBuyTickets;
