import React, { Component } from 'react';
import AccordionSection from '../../../shared/components/AccordionSection';
import EventCarousel from '../../../shared/components/EventCarousel';
import ArticleSection from '../../../shared/components/ArticleSection';
import SimilarPicksSection from '../../../shared/components/SimilarPicksSection';


import './style.scss';

export default class EventsDetail extends Component {
  
  constructor(props){
    super(props);
    this.children = [{
        'data' : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
        'heading': 'Price Details'
    }];
  }

  componentDidMount () {
    
  } 

  render() {
    return (
        <div>
            <EventCarousel />
            <AccordionSection />
            <AccordionSection  children={this.children} />
            <ArticleSection />
            <SimilarPicksSection />
        </div>
    );
  }
}

