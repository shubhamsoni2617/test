import React, { Component } from 'react';
import './style.scss';
import ArrowBlue from  '../../../assets/images/right-arrow-blue.svg';
import Carousel from '../Carousel';

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
                 <a href="/">See all <img src={ArrowBlue} className="img-fluid"
                    alt="arrow" /></a>
                 <div className="dots-group">
                    <span className="active"><a href="/"></a></span>
                    <span><a href="/"></a></span>
                    <span><a href="/"></a></span>
                 </div>
              </div>
           </div>
           {/* <div className="grid-container">
           {data.map((obj, idx) => {
              return <div className="item">
              <div className="item-wrapper">
                 <div className="item-img">
                    <img src="assets/images/explore.png" className="img-fluid" alt="explore" />
                 </div>
                 <span className="category concert">{obj.primary_genre}</span>
                 <p>{obj.price}</p>
                 <p>{obj.event_status}</p>
                 <p>{obj.event_date}</p>
                 <h3>{obj.title}</h3>
                 <p>{obj.venue_name}</p>
              </div>
           </div>
           })}
              
           </div> */}
            <Carousel imgArray={data} arrows={true} />
           <div className="carousel-navigation">
              <div className="left-navigation">
                 <a href="/">
                 <img src="assets/images/left-arrow-blue.svg" className="img-fluid" alt="left-navigation" />
                 </a>
              </div>
              <div className="right-navigation">
                 <a href="/">
                 <img src="assets/images/right-arrow-blue.svg" className="img-fluid" alt="right-navigation" />
                 </a>
              </div>
           </div>
        </div>
     </section>
    );
  }
}

