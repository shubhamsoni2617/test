import React, { Component } from 'react'
import Card from '../Card';
import './style.scss';

export default class Tab extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
    
  } 

  render() {
    return (
      <div>
        <Card />
      </div>
    )
  }
}