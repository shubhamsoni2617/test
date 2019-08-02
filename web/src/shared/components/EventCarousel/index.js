import React, { Component } from 'react';
import Slider from "react-slick";

import './style.scss';

export default class EventCarousel extends Component {
  baseUrl = 'https://s3.amazonaws.com/static.neostack.com/img/react-slick';
  constructor(props){
    super(props);
    // this.baseUrl = 'https://s3.amazonaws.com/static.neostack.com/img/react-slick';
    
  }

  componentDidMount () {
    
  } 

  render() {
    const settings = {
      customPaging: function(i) {
        return (
          <a>
            <img src={`${this.baseUrl}/abstract0${i + 1}.jpg`} />
          </a>
        );
      },
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="banner-carousel">
        <Slider {...settings}>
          <div>
            <img src={this.baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={this.baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={this.baseUrl + "/abstract03.jpg"} />
          </div>
          <div>
            <img src={this.baseUrl + "/abstract04.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}

