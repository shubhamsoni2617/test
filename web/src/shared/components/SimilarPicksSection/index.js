import React, { Component } from 'react';
import './style.scss';
import ArrowBlue from  '../../../assets/images/right-arrow-blue.svg';
import Carousel from '../Carousel';
import { Link } from "react-router-dom";

export default class SimilarPicksSection extends Component {

  constructor(props){
    super(props);

  }



  render() {
     const { data } = this.props;
    return (
        <section className="similar-picks">
        <div className="container-fluid">
           <div className="section-top-wrapper">
              <h2>Similar Picks</h2>
              <div className="carousel-dots">
              <Link to="/events">See all <img src={ArrowBlue} className="img-fluid"
                    alt="arrow" /></Link>
              </div>
           </div>
            <Carousel imgArray={data} arrows={true} slidesToShow={5} slidesToScroll={5} />
        </div>
     </section>
    );
  }
}

