import React, { Component } from 'react'
import Tab from '../Tab';
import './style.scss';

export default class Tabs extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
    
  } 

  render() {
    return (
      <div>
        <Tab />
      </div>
    )
  }
}