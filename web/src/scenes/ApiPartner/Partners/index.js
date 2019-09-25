import React from 'react';
import './style.scss';
import codpartner from '../../../assets/images/cod.png';
import showpartner from '../../../assets/images/show.png';
import galaxypartner from '../../../assets/images/galaxy-macau-vector-logo.png';

const Partners = ({

}) => {
    return (
       <div className="work-with-partners">
           <div className="container">
           <h2>View some of the partners that we work with:</h2>
            <ul className="partners-list">
                    <li><a href=""><img src={codpartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={showpartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={galaxypartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={codpartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={showpartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={galaxypartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={codpartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={showpartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={galaxypartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={codpartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={showpartner} alt="api-parrtner-cod" /></a></li>
                    <li><a href=""><img src={galaxypartner} alt="api-parrtner-cod" /></a></li>
                </ul>
            </div>
        </div>
    )
}
export default Partners;