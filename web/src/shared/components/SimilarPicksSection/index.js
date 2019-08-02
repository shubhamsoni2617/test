import React, { Component } from 'react';
import './style.scss';

export default class AccordionSection extends Component {
  
  constructor(props){
    super(props);
    
  }

  componentDidMount () {
    
  }

  render() {
    return (
        <section className="similar-picks">
        <div className="container-fluid">
           <div className="section-top-wrapper">
              <h2>Similar Picks</h2>
              <div className="carousel-dots">
                 <a href="/">See all <img src="assets/images/right-arrow-blue.svg" className="img-fluid"
                    alt="arrow" /></a>
                 <div className="dots-group">
                    <span className="active"><a href="/"></a></span>
                    <span><a href="/"></a></span>
                    <span><a href="/"></a></span>
                 </div>
              </div>
           </div>
           <div className="grid-container">
              <div className="item">
                 <div className="item-wrapper">
                    <div className="item-img">
                       <img src="assets/images/explore.png" className="img-fluid" alt="explore" />
                    </div>
                    <span className="category concert">Concert</span>
                    <p>Fri, 3 May 2019</p>
                    <h3>SSO Red Balloon Series: Rhythums, Rites </h3>
                    <p>Esplanade Concert Hall</p>
                 </div>
              </div>
              <div className="item">
                 <div className="item-wrapper">
                    <div className="item-img">
                       <img src="assets/images/pride-passion.jpg" className="img-fluid" alt="pride-passion" />
                    </div>
                    <span className="category dance">Dance</span>
                    <p>Sun, 8 Dec 2019</p>
                    <h3>Singapore Dance Theatre - Season Pass 2019</h3>
                    <p>Various Venues </p>
                 </div>
              </div>
              <div className="item">
                 <div className="item-wrapper">                           
                    <div className="item-img">
                       <img src="assets/images/aladdin.jpg" className="img-fluid" alt="aladdin" />
                    </div>
                    <span className="category musical">Musical</span>
                    <p>Sun, 11 Aug 2019</p>
                    <h3>Aladdin - The Hit Broadway Musical</h3>
                    <p>Sands Theatre at Marina Bay Sands </p>
                 </div>
              </div>
              <div className="item">
                 <div className="item-wrapper">                           
                    <div className="item-img">
                       <img src="assets/images/pride-passion.jpg" className="img-fluid" alt="pride-passion" />
                    </div>                           
                    <span className="category dance">Dance</span>
                    <p>Sun, 8 Dec 2019</p>
                    <h3>Singapore Dance Theatre - Season Pass 2019</h3>
                    <p>Various Venues</p>
                 </div>
              </div>
              <div className="item">
                 <div className="item-wrapper">
                    <div className="item-img">
                       <img src="assets/images/aladdin.jpg" className="img-fluid" alt="aladdin" />
                    </div>                           
                    <span className="category musical">Musical</span>
                    <p>Sun, 11 Aug 2019</p>
                    <h3>Aladdin - The Hit Broadway Musical</h3>
                    <p>Sands Theatre at Marina Bay Sands</p>
                 </div>
              </div>
           </div>
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

