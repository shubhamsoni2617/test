import React, { Component } from 'react';
import { Link } from "react-router-dom";
import BreadcumbBanner from '../../../assets/images/promotions-banner.png';
import './style.scss'

const Breadcrumb = (props) => {
    const { breadCrumbData } = props;
    return (
        <section className="breadcrumbs">
            <div className="banner-wrapper">
                <img src={BreadcumbBanner} className="img-fluid" alt="page-banner" />
            </div>
            <div className="banner-overlay">
                <div className="container-fluid">
                    <h1>{breadCrumbData.page}  {breadCrumbData.count ? '(' + breadCrumbData.count + ')' : ''}</h1>
                    <ul className="breadcrumb">
                        {breadCrumbData.breadcrumb_slug && breadCrumbData.breadcrumb_slug.map((link) => {
                            return <li><Link to={link.path}>{link.title}</Link></li>
                        })}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Breadcrumb;