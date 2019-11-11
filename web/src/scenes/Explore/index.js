import React from 'react';
import './style.scss';
import bannerImg from '../../assets/images/explore-banner2.png';
import Sifa from '../../assets/images/sifa.png';
import Festival from '../../assets/images/festival.png';
import Chinese from '../../assets/images/chinese.png'
import Chritmas from '../../assets/images/christmas.png'
import Article from '../../assets/images/explore-article.png';
import ArticleHall from '../../assets/images/article-hall.png';
import Arrow from '../../assets/images/right-arrow.svg';
import GreatWine from '../../assets/images/great-wine.png';
import chrolFest from '../../assets/images/choral-festival.png';
import nightFest from '../../assets/images/nightfest.png';
import sentosaFest from '../../assets/images/sentosa-fest.png';
import Mumford from '../../assets/images/mumford.png';
import Guide from '../../assets/images/guides.png';
import Survey from '../../assets/images/survey.png';
import reviewSmall from '../../assets/images/review-small.png';
import guideSmall from '../../assets/images/guide-small.png';
import surveySmall from '../../assets/images/survey-small.png';
import rightArrow from '../../assets/images/right-arrow.svg';
import Trending1 from '../../assets/images/trending1.png';
import Trending2 from '../../assets/images/trending2.png';
import Trending3 from '../../assets/images/trending3.png';

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
                    <img src={bannerImg} alt="explore-slider" />
                </div>
            </section>
            <section className="whtsup-wrapper">
                <div className="container-fluid">
                    <div class="section-top-wrapper">
                        <h2>What’s Up</h2>
                    </div>
                    <div className="whtsup-container">
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <div class="item-img">
                                    <img src={Sifa} alt="sifa" />
                                </div>
                                <span className="category">Festival</span>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>SIFA 2019</h3>
                                <p>Singapore International Festival of Arts (SIFA) presents captivating and diverse works
                                    across theatre, music, dance,
                                    film and visual arts.</p>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <div class="item-img">
                                    <img src={Festival} alt="festival" />
                                </div>
                                <span className="category">Festival</span>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>Mid-Autumn Festival</h3>
                                <p>The Mid-Autumn Festival is a harvest festival celebrated notably by the Chinese,
                                Vietnamese</p>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <div class="item-img">
                                    <img src={Chinese} alt="chinese" />
                                </div>
                                <span className="category">Festival</span>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>Chinese New Year 2019</h3>
                                <p>Chinese New Year is the Chinese festival that celebrates the beginning of a new year .
                            </p>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <div class="item-img">
                                    <img src={Chritmas} alt="Chritmas" />
                                </div>
                                <span className="category">Festival</span>
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
                    <div class="section-top-wrapper">
                        <h2>Articles</h2>
                        <div class="carousel-dots">
                            <a href="">More from Articles <img src={Arrow} class="img-fluid" alt="arrow" /></a>
                        </div>
                    </div>
                    <div className="articles-item-wrapper">
                        <div className="articles-item">
                            <div className="article-item-desc">
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
                            <div className="article-item-img">
                                <img src={Article} alt="article" />
                            </div>
                        </div>
                        <div className="articles-item">
                            <div className="article-item-desc">
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
                            <div className="article-item-img">
                                <img src={ArticleHall} alt="article" />
                            </div>
                        </div>
                        <div className="articles-item">
                            <div className="article-item-desc">
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
                            <div className="article-item-img">
                                <img src={Article} alt="article" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="festivals-wrapper">
                <div className="container-fluid">
                    <div class="section-top-wrapper">
                        <h2>Festivals</h2>
                        <div class="carousel-dots">
                            <a href="">See all <img src={Arrow} class="img-fluid" alt="arrow" /></a>
                        </div>
                    </div>
                    <div className="festivals-container">
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <div class="item-img">
                                    <img src={GreatWine} alt="sifa" />
                                </div>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>The GREAT Wine & Dine Festival</h3>
                                <p>Indulge in delectable offerings through live demonstrations and hands-on masterclasses by Resorts WorldTM Sentosa’s celebrity chefs and patissiers.</p>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <div class="item-img">
                                    <img src={chrolFest} alt="festival" />
                                </div>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>Choral Festival 2019</h3>
                                <p>The Choral Festival 2019 is a harvest festival celebrated notably by the Chinese, Vietnamese</p>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <div class="item-img">
                                    <img src={nightFest} alt="chinese" />
                                </div>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>Singapore Night Festival</h3>
                                <p>The Singapore Night Festival is an annual street festival held over two weekends celebrating the arts and Singapore’s rich cultural heritage.
                            </p>
                            </div>
                        </div>
                        <div className="item-wrapper">
                            <div className="image-wrapper">
                                <div class="item-img">
                                    <img src={sentosaFest} alt="Chritmas" />
                                </div>
                            </div>
                            <div className="image-bottom-desc">
                                <h3>Sentosa GrillFest 2019</h3>
                                <p>Sentosa GrillFest is back – bigger and better at that! Make time to feast at Singapore’s only food street by the beach</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="review-guide-surveys-wrapper">
                <div className="container-fluid">
                    <div className="rgs-wrapper">
                        <div class="reviews-item">
                            <div className="section-title">
                                <h3>Reviews</h3>
                            </div>
                            <div className="active-review">
                                <img src={Mumford} alt="" />
                                <h3>Singapore Neon Lights Festival 2019 - Mumford & Sons Honne</h3>
                            </div>
                            <div className="all-reviews">
                                <span className="review-subtext">By Larva May</span>
                                <div className="review-item-wrapper">
                                    <div className="review-item">
                                        <div className="review-item-image">
                                            <img src={reviewSmall} alt="review" />
                                        </div>
                                        <div className="review-content">
                                            <h3>Crowd by Gisèle Vienne</h3>
                                            <span>By Larva May</span>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-item-image">
                                            <img src={reviewSmall} alt="review" />
                                        </div>
                                        <div className="review-content">
                                            <h3>Crowd by Gisèle Vienne</h3>
                                            <span>By Larva May</span>
                                        </div>
                                    </div>
                                    <a href="">More from Reviews <img src={rightArrow} alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="reviews-item">
                            <div className="section-title">
                                <h3>Guides</h3>
                            </div>
                            <div className="active-review">
                                <img src={Guide} alt="" />
                                <h3>Singapore Neon Lights Festival 2019 - Mumford & Sons Honne</h3>
                            </div>
                            <div className="all-reviews">
                                <span className="review-subtext">By Larva May</span>
                                <div className="review-item-wrapper">
                                    <div className="review-item">
                                        <div className="review-item-image">
                                            <img src={guideSmall} alt="review" />
                                        </div>
                                        <div className="review-content">
                                            <h3>Crowd by Gisèle Vienne</h3>
                                            <span>By Larva May</span>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-item-image">
                                            <img src={guideSmall} alt="review" />
                                        </div>
                                        <div className="review-content">
                                            <h3>Crowd by Gisèle Vienne</h3>
                                            <span>By Larva May</span>
                                        </div>
                                    </div>
                                    <a href="">More from Reviews <img src={rightArrow} alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                        <div class="reviews-item">
                            <div className="section-title">
                                <h3>Surveys/ Quizzes</h3>
                            </div>
                            <div className="active-review">
                                <img src={Survey} alt="" />
                                <h3>Singapore Neon Lights Festival 2019 - Mumford & Sons Honne</h3>
                            </div>
                            <div className="all-reviews">
                                <span className="review-subtext">By Larva May</span>
                                <div className="review-item-wrapper">
                                    <div className="review-item">
                                        <div className="review-item-image">
                                            <img src={surveySmall} alt="review" />
                                        </div>
                                        <div className="review-content">
                                            <h3>Crowd by Gisèle Vienne</h3>
                                            <span>By Larva May</span>
                                        </div>
                                    </div>
                                    <div className="review-item">
                                        <div className="review-item-image">
                                            <img src={surveySmall} alt="review" />
                                        </div>
                                        <div className="review-content">
                                            <h3>Crowd by Gisèle Vienne</h3>
                                            <span>By Larva May</span>
                                        </div>
                                    </div>
                                    <a href="">More from Reviews <img src={rightArrow} alt="arrow" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="trending-wrapper">
                <div className="container-fluid">
                    <div class="section-top-wrapper">
                        <h2>Trending</h2>
                    </div>
                    <div className="grid-container">
                        <div className="item">
                            <img src={Trending1} alt="" />
                        </div>
                        {/* <div className="item">
                            <img src={Trending1} alt="" />
                        </div>
                        <div className="item">
                            <img src={Trending1} alt="" />
                        </div>
                        <div className="item">
                            <img src={Trending1} alt="" />
                        </div>
                        <div className="item">
                            <img src={Trending1} alt="" />
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Explore;