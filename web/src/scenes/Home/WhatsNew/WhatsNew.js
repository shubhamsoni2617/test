import React, { Component } from "react";
import { Link } from "react-router-dom";
import Carousel from "../../../shared/components/Carousel";
import HomeService from "../../../shared/services/HomeService";
import rightArrow from "../../../assets/images/right-arrow.svg";

class whatsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newReleases: []
    };
  }
  componentDidMount() {
    const params = {
      client: 1
      // first: 1,
      // limit: 10,
    };

    HomeService.getNewRelease(params)
      .then(res => {
        this.setState({ newReleases: res.data.data });
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <section className="whats-new">
        <div className="container-fluid">
          <div className="section-top-wrapper">
            <h2 className="section-title">What's New</h2>
            <div className="carousel-dots">
              <Link to="/events">
                See all{" "}
                <img src={rightArrow} className="img-fluid" alt="arrow" />
              </Link>
            </div>
          </div>
          <Carousel
            imgArray={this.state.newReleases}
            arrows={true}
            slidesToShow={6}
            slidesToScroll={6}
          />
        </div>
      </section>
    );
  }
}

export default whatsNew;
