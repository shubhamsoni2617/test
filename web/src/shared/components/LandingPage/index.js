import React from 'react';
import './style.scss';
import yearsIcon from '../../../assets/images/Years-icon.svg';
import ticketsIcon from '../../../assets/images/tickets-icon.svg';
import partnersIcon from '../../../assets/images/Partners-icon.svg';
import eventIcon from '../../../assets/images/Events-icon.svg';
import getStartedimg1 from '../../../assets/images/Tile-1.png';
import getStartedimg2 from '../../../assets/images/Tile-2.png';
import getStartedimg3 from '../../../assets/images/Tile-3.png';
import article1 from '../../../assets/images/Bitmap.png';
import article2 from '../../../assets/images/article-2.jpg';
import article3 from '../../../assets/images/bitmap-3.png';
import article4 from '../../../assets/images/Bitmap-4.png';
import downloadIcon from '../../../assets/images/download-icon-blue.svg';
import video1 from '../../../assets/images/video-1.png';
import video2 from '../../../assets/images/video-2.png';

const LandingPage = () => {
    return (
        <div class="b2b-landing">
            {/* SISTIC banner starts here */}
            <section>
                <div class="event-wrapper">
                    <div class="event-banner">
                        <div class="banner-content">
                            <h2>About Us</h2>
                            <p>Customer satisfaction is a priority at Ingersoll Rand. We are committed to better understanding customer perspectives and refining our offerings to meet and exceed their expectations for reliability, energy efficiency and sustainability.</p>
                            <p>Duis posuere, metus a venenatis ultricies, orci nisl elementum turpis, quis placerat odio nunc quis ligula. Fusce sagittis sagittis molestie.</p>
                            <a href="#">Know More</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* SISTIC event ticket blog */}
            <section>
                <div class="event-list">
                    <div class="event-list-icon">
                        <img src={yearsIcon} alt="Years-icon" />
                        <div class="year-content">
                            <span>20</span>
                            <p>Years Ticketing</p>
                        </div>
                    </div>
                    <div class="event-list-icon">
                        <img src={ticketsIcon} alt="tickets-icon" />
                        <div class="year-content">
                            <span>1.8m</span>
                            <p>Tickets</p>
                        </div>
                    </div>
                    <div class="event-list-icon">
                        <img src={partnersIcon} alt="Partners-icon" />
                        <div class="year-content">
                            <span>300</span>
                            <p>Partnerships with promotors,<br /> venues & attractions</p>
                        </div>
                    </div>
                    <div class="event-list-icon">
                        <img src={eventIcon} alt="Events-icon" />
                        <div class="year-content">
                            <span>1200</span>
                            <p>Events</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* get started */}
            <section>
                <div class="getstarted-block">
                    <h2>Get Started</h2>
                    <div class="container">
                        <div class="row d-flex justify-content-center">
                            <div class="col-lg-4 getstarted-content">
                                <div class="view">
                                    <div class="front">
                                        <p class="programmes-img"><img src={getStartedimg1} alt="reach-img" /></p>
                                        <h3 class="programmes-text">Sell ticket with us</h3>
                                    </div>
                                    <div class="mask">
                                        <div class="mask_view">
                                            <h3>System Licensing</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.orci nisl elementum turpis, quis placerat odio nunc quis ligula </p>
                                            <a href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 getstarted-content">
                                <div class="view">
                                    <div class="front">
                                        <p class="programmes-img"><img src={getStartedimg2} alt="reach-img" /></p>
                                        <h3 class="programmes-text">System Licensing</h3>
                                    </div>
                                    <div class="mask">
                                        <div class="mask_view">
                                            <h3>System Licensing</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.orci nisl elementum turpis, quis placerat odio nunc quis ligula </p>
                                            <a href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 getstarted-content">
                                <div class="view">
                                    <div class="front">
                                        <p class="programmes-img"><img src={getStartedimg3} alt="reach-img" /></p>
                                        <h3 class="programmes-text">Be our Partner</h3>
                                    </div>
                                    <div class="mask">
                                        <div class="mask_view">
                                            <h3>System Licensing</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.orci nisl elementum turpis, quis placerat odio nunc quis ligula </p>
                                            <a href="#">Find out more</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="article-wrapper">
                    <div class="container">
                        <div class="article-heading">
                            <h2>Media</h2>
                        </div>
                        <div class="article-box">
                            <div class="article">
                                <div class="article-img">
                                    <img src={article1} alt="article-1" class="img-fluid" />
                                </div>
                                <div class="article-content">
                                    <a href="#"><span>Ebook</span></a>
                                    <h2>Ebook About SISTIC</h2>
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
                                    <h2>Ticketing Newsletter</h2>
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
                                    <h2>Essential Guide: Social Media of Events</h2>
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
                                    <a href="#"><span>Ebook</span></a>
                                    <h2>10 Ways to Promote Events Online</h2>
                                    <p>Lorem ipsum dolor sit amet, ipsu consectetur adipiscing elit.</p>
                                </div>
                                <div class="download-icon">
                                    <img src={downloadIcon} alt="download" />
                                </div>
                            </div>
                        </div>
                        <div class="article-bottom">
                            <a href="#">View all Media</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* video break starts here */}
            <section>
                <div class="video-wrapper">
                    <div class="container">
                        <div class="video-heading">
                            <h2>Video Break</h2>
                        </div>
                        <div class="video-box">
                            <div class="video">
                                <div class="video-img">
                                    <img src={video1} alt="article-4" />
                                </div>
                                <div class="video-content">
                                    <h3>SISTIC- The Phantom of Opera</h3>
                                    <span>26 May 2019</span>
                                    <p>The world’s most popular musical makes its way to Singapore. Opens April 2019. Now on Pre-sale, book your tickets through SISTIC.</p>
                                    <a href="#">Learn More ></a>
                                </div>
                            </div>

                            <div class="video">
                                <div class="video-img">
                                    <img src={video2} alt="article-4" />
                                </div>
                                <div class="video-content">
                                    <h3>SISTIC - Unbelievable Trevor Noah Loud & Clear! Facebook</h3>
                                    <span>8 Jun 2019 </span>
                                    <p>The world’s most popular musical makes its way to Singapore. Opens April 2019. Now on Pre-sale, book your tickets through SISTIC.</p>
                                    <a href="#">Learn More ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default LandingPage