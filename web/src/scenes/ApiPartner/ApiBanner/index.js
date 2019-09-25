import React from 'react';
import './style.scss';
import apibanner from '../../../assets/images/api-partners-banner.png'

const ApiBanner = ({

}) => {
    return (
    <div className="apipartnerheader">
        <div className="container">
          <div className="apipartnerheader-banner">
            <div className="banner-desc">
                <p>API Partners</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam bibendum leo justo, vel placerat libero ornare at. Pellentesque sed dapibus felis. Integer quis dictum ante, in molestie orci. Mauris eget justo fringilla, ornare sem a, congue diam. Suspendisse sed erat mollis, mattis nisi ac, lacinia tortor.</p>
                <div className="banner-title"/>
            </div>
            <div className="banner-image">
                <img src={apibanner} alt="api-partners" />
            </div>
          </div>
        </div>
    </div>
    )
}
export default ApiBanner;