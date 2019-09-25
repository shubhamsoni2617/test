import React from 'react';
import './style.scss';

const ContactUs = ({

}) => {
    return (
        <div className="contact-us banner-overlay">
            <h1 className="text-center contact-us-header">Contact Us</h1>
            <div className="container">
                <div className="contact-us-block">
                    <div className="contact-we-are-at">
                        <div className="we-are-at">
                            <h3>We are at</h3>
                            <h5>SISTIC.com Pte Ltd</h5>
                            <p>10 Eunos Road 8, #03-04,</p> 
                            <p>Singapore Post Centre </p>
                            <p>Singapore 408600</p>
                            <p>(accessible via Singapore Post </p>
                            <p>Centre Main Lift Lobby on Level 1)</p>
                            <a href="#">Open in Maps</a>
                        </div>
                        <div className="contactus-hotline-number">
                            <h4>Hotline Number</h4>
                            <p>+65 6348 5555</p>           
                        </div>
                    </div>
                    <div className="customer-enquiry-wrapper">
                        <div className="customer-enquiry">
                            <h3 className="heading-text">Corporate Enquiries</h3>
                            <h5 className="text-success"></h5>
                            <form>
                                <div className="form-group">
                                    <select name="enquiry" className="form-control">
                                        <option>Request Type*</option>
                                        <option>option1</option>
                                        <option>option2</option>
                                        <option>option3</option>
                                        <option>option4</option>
                                        <option>option5</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input name="name" className="form-control" type="text" placeholder="Full Name*" value="" required />
                                </div>
                                <div className="form-group">
                                    <input name="email" className="form-control" type="email" placeholder="Email*" value="" required />
                                </div>
                                <div className="form-group">
                                    <input name="phone" className="form-control" type="text" placeholder="Mobile No.*" value="" required />
                                </div>
                                <div className="form-group has-error">
                                    <textarea name="message" className="form-control" rows="5" placeholder="" cols="30" value="" required />
                                    <span className="error-msg">Please complete all fields</span>
                                </div>
                                <input className="form-control btn-info" type="submit" value="Submit" />
                                <span className="help-text">Looking to sell tickets with us? Contact us <a href="#">here</a>.</span>
                            </form>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
    )
}
export default ContactUs;