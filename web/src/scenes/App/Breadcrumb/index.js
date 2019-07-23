import React, { Component } from 'react'
import './style.scss'

export default class Breadcrumb extends Component {

   render() {

      return (
        <section className="banner">
            <div className="banner-wrapper">
                <img src="assets/images/promotions-banner.png" className="img-fluid" alt="page-banner" />
            </div>
            <div className="banner-overlay">
            <div className="container-fluid">
                <h1>Promotions (24)</h1>
                <ul className="breadcrumb">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Promotion</a></li>
                </ul>
            </div>
            </div>
        </section>
      )
   }
}