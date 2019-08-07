import React, { Component } from 'react';
import './style.scss';

import ArrowBlue from '../../../assets/images/right-arrow-blue.svg'
import Article1 from '../../../assets/images/article1.png'
import Image from '../Image';

export default class ArticleSection extends Component {

  constructor(props){
    super(props);

  }

  componentDidMount () {

  }

  render() {
    return (
        <section className="event-articles">
        <div className="container-fluid">
           <div className="section-top-wrapper">
              <h2>Articles</h2>
              <div className="carousel-dots">
                 <a >See all <img src={ArrowBlue} className="img-fluid" alt="arrow"/></a>
              </div>
           </div>
           <div className="grid-container">
              <div className="item">
                 <div className="item-wrapper">
                    <div className="item-img">
                       <Image src={Article1} className="img-fluid" alt="article" type='Vertical' />
                    </div>
                    <h3>A Guide to SIFA 2019’s Music-centric Gems</h3>
                    <p>Artists who are ground-breaking in their fields have always inspired me... <a >More</a></p>
                 </div>
              </div>
              <div className="item">
                 <div className="item-wrapper">
                    <div className="item-img">
                       <Image src={Article1} className="img-fluid" alt="article" type='Vertical'/>
                    </div>
                    <h3>Best Ever Opera Lorem Ipsum Sit Dolor Amet</h3>
                    <p>Artists who are ground-breaking in their fields have always inspired me... <a >More</a></p>
                 </div>
              </div>
              <div className="item">
                 <div className="item-wrapper">
                    <div className="item-img">
                       <Image src={Article1} className="img-fluid" alt="article"  type='Vertical'/>
                    </div>
                    <h3>Mauris malesuada nisi sit amet augue</h3>
                    <p>Artists who are ground-breaking in their fields have always inspired me... <a >More</a></p>
                 </div>
              </div>
           </div>
        </div>
     </section>
    );
  }
}

