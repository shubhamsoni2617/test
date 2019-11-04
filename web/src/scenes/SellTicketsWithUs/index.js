import React from 'react';
import './style.scss';
import eventIcon1 from '../../../src/assets/images/Years-icon.svg';
import eventIcon2 from '../../../src/assets/images/tickets-icon.svg';
import eventIcon3 from '../../../src/assets/images/Partners-icon.svg';
import eventIcon4 from '../../../src/assets/images/events-icon.svg';
import teamImg1 from '../../../src/assets/images/team-img.jpg';
import teamImg2 from '../../../src/assets/images/reach-img.jpg';
import teamImg3 from '../../../src/assets/images/data-img.jpg';
import teamImg4 from '../../../src/assets/images/customer-img.jpg';
import helpContent from '../../../src/assets/images/still-img .png';
import downloadIcon from '../../../src/assets/images/download-icon.svg';
import article1 from '../../../src/assets/images/article-1.png';
import article2 from '../../../src/assets/images/article-2.jpg';
import article3 from '../../../src/assets/images/article-3.jpg';
import article4 from '../../../src/assets/images/article-4.jpg';
import article5 from '../../../src/assets/images/article-5.jpg';
import article6 from '../../../src/assets/images/article-6.jpg';
import article7 from '../../../src/assets/images/article-7.jpg';
import article8 from '../../../src/assets/images/article-8.jpg';

const SellTicketsWithUs = () => {
    return (
        <div>
            {/* SISTIC banner starts here */}
            <section>
                <div class="event-wrapper">
                    <div class="event-banner">
                        <div class="banner-content">
                            <h2>Let's Grow Together</h2>
                            <p>Customer satisfaction is a priority at Ingersoll Rand, We are commited to better understanding
                                customer perspective and refining our offerings to meet and exceed their expectations for
                        reliability.</p>
                            <a href="#">Submit event enquiry</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* SISTIC event ticket blog */}
            <section>
                <div class="event-list">
                    <div class="event-list-icon">
                        <img src={eventIcon1} alt="Years-icon" />
                        <div class="year-content">
                            <span>20</span>
                            <p>Years Ticketing</p>
                        </div>
                    </div>
                    <div class="event-list-icon">
                        <img src={eventIcon2} alt="tickets-icon" />
                        <div class="year-content">
                            <span>1.8m</span>
                            <p>Tickets</p>
                        </div>
                    </div>
                    <div class="event-list-icon">
                        <img src={eventIcon3} alt="Partners-icon" />
                        <div class="year-content">
                            <span>300</span>
                            <p>Partnerships with promotors,<br /> venues & attractions</p>
                        </div>
                    </div>
                    <div class="event-list-icon">
                        <img src={eventIcon4} alt="Events-icon" />
                        <div class="year-content">
                            <span>1200</span>
                            <p>Events</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SISTIC strength */}
            <section>
                <div class="strength-wrapper">
                    <h2>SISTIC Strengths</h2>
                    <div class="container">
                        <div class="team-wrapper">
                            <div class="team-content">
                                <h2>Team and Technology</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit
                                    amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                            Mauris malesuada nisi sit amet augue accumsan.</p>
                                <a href="#">Know More</a>
                            </div>
                            <div class="team-img">
                                <img src={teamImg1} alt="team-img" />
                            </div>
                        </div>
                        <div class="team-wrapper">
                            <div class="team-content">
                                <h2>Reach- 6 Marketing Channles</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit
                                    amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                            Mauris malesuada nisi sit amet augue accumsan.</p>
                                <a href="#">Know More</a>
                            </div>
                            <div class="team-img">
                                <img src={teamImg2} alt="reach-img" />
                            </div>
                        </div>
                        <div class="team-wrapper">
                            <div class="team-content">
                                <h2>Data Analytics & Business Intellegence Tools</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit
                                    amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                            Mauris malesuada nisi sit amet augue accumsan.</p>
                                <a href="#">Know More</a>
                            </div>
                            <div class="team-img">
                                <img src={teamImg3} alt="data-img" />
                            </div>
                        </div>
                        <div class="team-wrapper">
                            <div class="team-content">
                                <h2>Customer Service & Venue Collection</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit
                                    amet tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie.
                            Mauris malesuada nisi sit amet augue accumsan.</p>
                                <a href="#">Know More</a>
                            </div>
                            <div class="team-img">
                                <img src={teamImg4} alt="customer-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* stucked help section */}
            <section>
                <div class="container">
                    <div class="help-wrapper">
                        <div class="help-content">
                            <h2>Still Stucked, We help!</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet
                                tempor nibh finibus et. Aenean eu enim justo. Vestibulum aliquam hendrerit molestie. Mauris
                        malesuada nisi sit amet augue accumsan.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas varius tortor nibh, sit amet
                        tempor nibh finibus et. Aenean eu enim justo.</p>
                        </div>
                        <div class="help-img">
                            <img src={helpContent} alt="Call-img" />
                        </div>
                    </div>
                </div>
            </section>

            {/* selling form */}
            <section>
                <div class="container">
                    <div class="selling-head">
                        <h2>Start Selling!</h2>
                        <p>Please complete this confidential form so that we can assess your ticketing needs and contact you.
                            This form is for venues and show promoters who want to sell tickets to their events through SISTIC.</p>
                        <span> Please Note: We do not sell personally owned tickets through this form</span>
                    </div>

                    <div class="selling-form">
                        <form>
                            <div class="form-info">
                                <div class="seller-info-heading">
                                    <h2>Seller Information</h2>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="seller-info">
                                            <input type="text" name="uname" placeholder="Name*" class="form-control" />
                                            <input type="email" name="email" placeholder="Email*" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="seller-info">
                                            <input type="text" name="cname" placeholder="Company Name" class="form-control" />
                                            <input type="number" name="phone" placeholder="Contact No.*" class="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-info">
                                <div class="seller-info-heading">
                                    <h2>Event Information</h2>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="seller-info">
                                            <input type="text" name="ename" placeholder="Event Name*" class="form-control" />
                                            <input type="text" name="vname" placeholder="Venue Name*" class="form-control" />
                                            <input type="text" name="tpride" placeholder="Ticket Pride (SGD)" class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="seller-info">
                                            <input type="text" name="event-date" placeholder="Event Date" class="form-control" />
                                            <input type="text" name="ecapacity" placeholder="Event Capacity (pax)*" class="form-control" />
                                            <textarea placeholder="Additional Information"></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-info security-info">
                                        <div class="security-check">
                                            <div class="seller-info-heading">
                                                <h2>Security Check</h2>
                                            </div>
                                            <div class="seller-info capcha-text">
                                                <input type="text" name="ename" placeholder="Type the word above" class="form-control" />
                                            </div>
                                        </div>
                                        <div class="submit-btn">
                                            <button type="submit" class="btn submit">Submit</button>
                                            <button type="submit" class="btn reset">Reset</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* articles section starts here */}
            <section>
                <div class="article-wrapper">
                    <div class="container">
                        <div class="article-heading">
                            <h2>Articles</h2>
                        </div>
                        <div class="article-box">
                            <div class="article">
                                <div class="article-img">
                                    <img src={article1} alt="article-1" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Hot Show Support</span></a>
                                    <h3>Master Piece in Motion</h3>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                            <div class="article">
                                <div class="article-img">
                                    <img src={article2} alt="article-2" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Sales Channels</span></a>
                                    <h3>Mosaic Music Series</h3>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                            <div class="article">
                                <div class="article-img">
                                    <img src={article3} alt="article-3" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Digital Experience</span></a>
                                    <h3>National Museum of Singapore</h3>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                            <div class="article">
                                <div class="article-img">
                                    <img src={article4} alt="article-4" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Ticket Insurance</span></a>
                                    <h3>Alladin- Buy 4 Tickets</h3>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                            {/* article box row 2 */}
                            <div class="article">
                                <div class="article-img">
                                    <img src={article5} alt="article-5" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Customer Service Hotline</span></a>
                                    <h3>Shakespeare's Globe 2019</h3>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                            <div class="article">
                                <div class="article-img">
                                    <img src={article6} alt="article-6" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Entertainment</span></a>
                                    <h3>ACT 3 International- The Rainbow Fish</h3>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                            <div class="article">
                                <div class="article-img">
                                    <img src={article7} alt="article-7" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Digital Experience</span></a>
                                    <h3>SSO National Day Concert</h3>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                            <div class="article">
                                <div class="article-img">
                                    <img src={article8} alt="article-8" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Hot Show Support</span></a>
                                    <h3>GSS2019 | Kurios</h3>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SellTicketsWithUs;