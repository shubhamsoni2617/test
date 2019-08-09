import React, { Component } from 'react';
import searchImage from '../../../assets/images/search.svg';
import searchImageBlue from '../../../assets/images/search-blue.svg';
import prevArrowWhiteImage from '../../../assets/images/prev-arrow-white.svg';
import recentSearchIconImage from '../../../assets/images/recent-search-icon.svg';
import closeBlueColorImage from '../../../assets/images/close-blue-color.svg';
import eventImage from '../../../assets/images/kurios-joker.jpg';
import './style.scss';

class HomePageSearch extends Component {
  handleSubmit=(e)=>{
    e.preventDefault();
  }
    render() {
        return (
            <div className="header-search">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="Search experiences" className="form-control" />
                    <button type="submit" className="search-btn">
                        <img src={searchImage} className="img-fluid" alt="search-icon" />
                        <img src={searchImageBlue} className="img-fluid active" alt="search-icon" />
                    </button>
                    <div className="searched-wrapper">
                        <div className="header-search-fixed">
                            <div className="back-arrow">
                                <img src={prevArrowWhiteImage} alt="" />
                            </div>
                            <div className="header-search">
                                <input type="text" placeholder="Search experiences..." className="form-control" />
                                <button type="submit" className="search-btn">
                                    <img src={searchImage} className="img-fluid" alt="search-icon" />
                                    <img src={searchImageBlue} className="img-fluid active" alt="search-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="recently-search">
                            <h3>Recently Searched</h3>
                            <ul>
                                <li>
                                    <span><img src={recentSearchIconImage} alt="" /> Music</span>
                                    <a onClick={(e) => e.preventDefault()} className="search-listing-close-btn"><img src={closeBlueColorImage} alt="" /></a>
                                </li>
                                <li>
                                    <span><img src={recentSearchIconImage} alt="" /> pretty</span>
                                    <a onClick={(e) => e.preventDefault()} className="search-listing-close-btn"><img src={closeBlueColorImage} alt="" /></a>
                                </li>
                                <li>
                                    <span><img src={recentSearchIconImage} alt="" /> dance india</span>
                                    <a onClick={(e) => e.preventDefault()} className="search-listing-close-btn"><img src={closeBlueColorImage} alt="" /></a>
                                </li>
                                <li>
                                    <span><img src={recentSearchIconImage} alt="" /> vivaratna</span>
                                    <a onClick={(e) => e.preventDefault()} className="search-listing-close-btn"><img src={closeBlueColorImage} alt="" /></a>
                                </li>
                                <li>
                                    <span><img src={recentSearchIconImage} alt="" /> kurio</span>
                                    <a onClick={(e) => e.preventDefault()} className="search-listing-close-btn"><img src={closeBlueColorImage} alt="" /></a>
                                </li>
                                <li>
                                    <span><img src={recentSearchIconImage} alt="" /> balle</span>
                                    <a onClick={(e) => e.preventDefault()} className="search-listing-close-btn"><img src={closeBlueColorImage} alt="" /></a>
                                </li>
                                <li>
                                    <span><img src={recentSearchIconImage} alt="" /> katy</span>
                                    <a onClick={(e) => e.preventDefault()} className="search-listing-close-btn"><img src={closeBlueColorImage} alt="" /></a>
                                </li>
                                <li>
                                    <span><img src={recentSearchIconImage} alt="" /> phant</span>
                                    <a onClick={(e) => e.preventDefault()} className="search-listing-close-btn">
                                        <img src={closeBlueColorImage} alt="" /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="most-viewed">
                            <h3>Most Viewed</h3>
                            <ul>
                                <li>
                                    <div className="most-viewed-img">
                                        <img src={eventImage} className="img-fluid" alt="" />
                                    </div>
                                    <span className="category musical">Musical</span>
                                    <h4>KURIOS – Cabinet of Curiosities</h4>
                                </li>
                                <li>
                                    <div className="most-viewed-img">
                                        <img src={eventImage} className="img-fluid" alt="" />
                                    </div>                                    <span className="category dance">Dance</span>
                                    <h4>Ballet Under The Stars</h4>
                                </li>
                                <li>
                                    <div className="most-viewed-img">
                                        <img src={eventImage} className="img-fluid" alt="" />
                                    </div>
                                    <span className="category musical">Musical</span>
                                    <h4>The Phantom of The Opera</h4>
                                </li>
                            </ul>
                        </div>
                        {/* <div className="searched-filter">
                            <ul>
                                <li>
                                    <h4>The Phantom Of The Opera</h4>
                                    <a href="/" className="search-link musical category">Musical</a>
                                </li>
                                <li>
                                    <h4>Phantogram</h4>
                                    <a href="/" className="search-link musical category">Musical</a>
                                </li>
                                <li>
                                    <h4>Phangs lorem ipsum sit dolor amet</h4>
                                    <a href="/" className="search-link">FAQ</a>
                                </li>
                                <li>
                                    <h4>Phantom Personality</h4>
                                    <a href="/" className="search-link">Quiz</a>
                                </li>
                                <li>
                                    <h4>There Was a Phantom</h4>
                                    <a href="/" className="search-link">Article</a>
                                </li>
                                <li>
                                    <h4>Phantom offer</h4>
                                    <a href="/" className="search-link">Offers</a>
                                </li>
                                <li><a href="/" className="all-results-search">See all results from<strong>Ph</strong></a></li>
                            </ul>
                        </div> */}
                    </div>
                </form>
            </div>
        );
    }
}

export default HomePageSearch;
