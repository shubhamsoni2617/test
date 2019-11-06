import React from 'react';
import Sifa from '../../assets/images/sifa.png';
import Festival from '../../assets/images/festival.png';
import Chinese from '../../assets/images/chinese.png'
import Chritmas from '../../assets/images/christmas.png'
import './style.scss';

const Explore = () => {
    return (
        <div className="explore-wrapper">
            <section className="explore-page-banner">
                <div className="banner-content">
                    <h3>Kurios: Cabinet of Curiosities Cirque du Soleil</h3>
                    <p>Cirque du Soleil arrives in Singapore with its most acclaimed touring show to date called, KURIOS –
                        Cabinet of
                    Curiosities. Kurios will premier under a new grey-and-white Big Top from 6 July 2019…</p>
                    <a>Read More</a>
                </div>
                <div className="banner-slider">
                    <img src="assets/images/explore-banner.png" alt="explore-slider" />
                </div>
            </section>

            <section className="whtsup-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="image-wrapper">
                                <img src={Sifa} alt="sifa" />
                                <span className="category"></span>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>SIFA 2019</h3>
                                <p>Singapore International Festival of Arts (SIFA) presents captivating and diverse works
                                    across theatre, music, dance,
                                film and visual arts.</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="image-wrapper">
                                <img src={Festival} alt="festival" />
                                <span className="category">Festival</span>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>Mid-Autumn Festival</h3>
                                <p>The Mid-Autumn Festival is a harvest festival celebrated notably by the Chinese,
                                Vietnamese</p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="image-wrapper">
                                <img src={Chinese} alt="chinese" />
                                <span className="category"></span>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>Chinese New Year 2019</h3>
                                <p>Chinese New Year is the Chinese festival that celebrates the beginning of a new year .
                            </p>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="image-wrapper">
                                <img src={Chritmas} />
                                <span className="category"></span>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>Christmas</h3>
                                <p>Christmas is an annual festival commemorating the birth of Jesus Christ observed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="articles-wrapper">
                <div className="container-fluid">
                    <div className="articles-item">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="category-group">
                                    <ul>
                                        <li><a>Musical</a></li>
                                        <li><a>Currently Showing</a></li>
                                        <li><a>Phantom of Opera</a></li>
                                    </ul>
                                </div>
                                <h3>We Can Dance by Daily tous les jours19’s Best Ever Opera lorem Ipsum Sit Dolor Amet Gems
                                Lorem ipsum</h3>
                                <div className="article-place-date">
                                    <span className="article-place">By Larva May </span>
                                    <span className="date">13 Jan 2019</span>
                                </div>
                                <p>Artists who are ground-breaking in their fields have always inspired me lorem Ipsum Sit
                                Dolor Amet Gems Lorem ipsum.. <a>More</a></p>
                            </div>
                            <div className="col-md-5">
                                <img src="assets/images/explore-article.png" alt="article" />
                            </div>
                        </div>
                    </div>
                    <div className="articles-item">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="category-group">
                                    <ul>
                                        <li><a>Musical</a></li>
                                        <li><a>Currently Showing</a></li>
                                        <li><a>Phantom of Opera</a></li>
                                    </ul>
                                </div>
                                <h3>We Can Dance by Daily tous les jours19’s Best Ever Opera lorem Ipsum Sit Dolor Amet Gems
                                Lorem ipsum</h3>
                                <div className="article-place-date">
                                    <span className="article-place">By Larva May </span>
                                    <span className="date">13 Jan 2019</span>
                                </div>
                                <p>Artists who are ground-breaking in their fields have always inspired me lorem Ipsum Sit
                                Dolor Amet Gems Lorem ipsum.. <a>More</a></p>
                            </div>
                            <div className="col-md-5">
                                <img src="assets/images/article1.png" alt="article" />
                            </div>
                        </div>
                    </div>
                    <div className="articles-item">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="category-group">
                                    <ul>
                                        <li><a>Musical</a></li>
                                        <li><a>Currently Showing</a></li>
                                        <li><a>Phantom of Opera</a></li>
                                    </ul>
                                </div>
                                <h3>We Can Dance by Daily tous les jours19’s Best Ever Opera lorem Ipsum Sit Dolor Amet Gems
                                Lorem ipsum</h3>
                                <div className="article-place-date">
                                    <span className="article-place">By Larva May </span>
                                    <span className="date">13 Jan 2019</span>
                                </div>
                                <p>Artists who are ground-breaking in their fields have always inspired me lorem Ipsum Sit
                                Dolor Amet Gems Lorem ipsum.. <a>More</a></p>
                            </div>
                            <div className="col-md-5">
                                <img src="assets/images/article1.png" alt="article-images" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Explore;