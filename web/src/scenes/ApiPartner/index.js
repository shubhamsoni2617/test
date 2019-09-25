import React, { Component } from 'react';
import './style.scss';
import ApiBanner from './ApiBanner';
import Partners from './Partners';
import ContactUs from './ContactUs';

class ApiPartner extends Component {
    render() {
        return (
            <div className="apipartners-wrapper">
                <ApiBanner />
                <Partners />
                <ContactUs />
            </div>
        )
    }
}
export default ApiPartner;
