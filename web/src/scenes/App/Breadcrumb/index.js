import React from 'react';
import PropTypes from 'prop-types';

import { Link } from "react-router-dom";
import './style.scss'

const Breadcrumb = (props) => {
    const { breadCrumbData } = props;
    console.log("length", props.breadCrumbData.breadcrumb_slug)
    return (
        <section className="breadcrumbs">
            <div className="banner-wrapper">
                <img src={breadCrumbData.page_banner} className="img-fluid" alt="page-banner" />
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


