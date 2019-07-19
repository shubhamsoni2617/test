import React, { Component } from 'react'
import Filters from '../../shared/components/Filters';
import SortBy from '../../shared/components/SortBy';
import Card from '../../shared/components/Card';
import './style.scss';

export default class Events extends Component {
  
  constructor(props){
    super(props);
    let detail
  }

  componentDidMount () {
    
  } 

  render() {
    
    return (
        <section className="promotions-wrapper">
            <div className="container-fluid">
                <div className="wrapper-events-listing">
                    <Filters />
                    <div className="events-listing">
                        <SortBy />
                        <div className="events-section">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}