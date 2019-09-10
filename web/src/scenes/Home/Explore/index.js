import React, { Component } from "react";
import "./style.scss";
import { Link } from "react-scroll";

class Explore extends Component {
  render() {
    const explore = [
      {
        id: "1",
        img: "assets/images/explore-01.jpg"
      },
      {
        id: "2",
        img: "assets/images/explore-02.jpg"
      },
      {
        id: "3",
        img: "assets/images/explore-02.jpg"
      },
      {
        id: "4",
        img: "assets/images/explore-02.jpg"
      },
      {
        id: "5",
        img: "assets/images/explore-02.jpg"
      }
    ];
    return (
      <section className="explore">
        <div className="container-fluid">
          <div className="section-top-wrapper">
            <h2>Explore</h2>
            <div className="carousel-dots">
              <a href="javascript:void(0)">
                See all{" "}
                <img
                  src="assets/images/right-arrow.svg"
                  className="img-fluid"
                  alt="arrow"
                />
              </a>
            </div>
          </div>
          <span className="explore-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            varius tortor nibh, sit amet tempor nibh finibus et. Aenean eu enim
            justo.{" "}
          </span>
          <div className="grid-container">
            <div className="item">
              <div className="item-wrapper explore-article">
                <div className="explore-image item-img">
                  <img
                    src={explore[0].img}
                    className="img-fluid"
                    alt="explore"
                  />
                </div>
                <div className="explore-text-wrapper">
                  <span className="explore-category">Article</span>
                  <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
                </div>
              </div>
            </div>
            {explore.slice(1, explore.length).map((exp, index) => {
              return (
                <div key={index} className="item explore-rightside-content">
                  <div className="item-wrapper">
                    <div className="explore-image item-img">
                      <img src={exp.img} className="img-fluid" alt="explore" />
                    </div>
                    <div className="explore-text-wrapper">
                      <span className="explore-category">Quiz</span>
                      <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;
