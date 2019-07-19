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
      <div>
        <Filters />
        <SortBy />
        <Card />
      </div>
    )
  }
}