import React, { Component } from 'react';
import Slider from "react-slick";
import './style.scss';

const Arrow = ()=>{
  return null;
}

export default class EventCarousel extends Component {
  baseUrl = 'https://s3.amazonaws.com/static.neostack.com/img/react-slick';
  constructor(props){
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
    
  }

  componentDidMount () {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  } 

  
  render() {
    const settings1 ={
      nextArrow : <Arrow />,
      prevArrow : <Arrow />,
      className: "center",
      centerMode: true,
    }
    const settings2 ={
      className: "center",
      centerMode: true,
    }
    return (
      <div className="banner-carousel">
        <Slider asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)} {...settings1}>
          <div>
            <img src={this.baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={this.baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={this.baseUrl + "/abstract03.jpg"} />
          </div>
          {/* <div>
            <img src={this.baseUrl + "/abstract04.jpg"} />
          </div> */}
           <div>
            <video src="https://www.youtube.com/channel/UCfyaNRK-Vm4COx_x8f284MQ" />
          </div>
        </Slider>
        <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          {...settings2}
        >
         <div>
            <img src={this.baseUrl + "/abstract01.jpg"} />
          </div>
          <div>
            <img src={this.baseUrl + "/abstract02.jpg"} />
          </div>
          <div>
            <img src={this.baseUrl + "/abstract03.jpg"} />
          </div>
          {/* <div>
            <img src={this.baseUrl + "/abstract04.jpg"} />
          </div> */}
           <div>
            <ReactPlayer />
          </div>
        </Slider>
      </div>
    );
  }
}

