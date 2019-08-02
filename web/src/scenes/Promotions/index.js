import React, { Component } from 'react'
import Tabs from '../../shared/components/Tabs';
import './style.scss';

export default class Promotions extends Component {
  
  constructor(props){
    super(props);
  }

  componentDidMount () {
    
  } 

  render() {
    return (
        <section className="promotions-wrapper">
               <div className="container-fluid">
                  <div className="container">
                    <Tabs />
                </div>
            </div>
        </section>
    )
  }
}