import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";


const CurrentlyShowing = () => {

    var imgArray = [
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
        { path: "../../img/cat.jpg", title: "title1", description: "some description" },
    ];

    var items = imgArray.map((elem) => {
        return (
            <div className="item">
                <div className="st-item-wrapper">
                    <div className="st-currently-showing-img st-item-img">
                        <img src="assets/images/atul-khatri.jpg" className="img-fluid" alt="atul-khatri" />
                    </div>
                    <span className="st-category st-comedy">Comedy</span>
                    <p className="st-currently-showing-date">Thu, 2 May 2019</p>
                    <p className="st-item-title">Atul Khatri - Live in Singapore</p>
                    <p className="st-currently-showing-place">Sota Concert Hall</p>
                </div>
            </div>
        )
    })


    return (
        <div>
            {/* currently showing section start  */}
            <section className="st-currently-showing">
                <div className="container-fluid">
                    <div className="st-section-top-wrapper">
                        <h3 className="st-section-title">Currently Showing</h3>
                        <div className="st-carousel-dots">
                            <a href="/">See all <img src="assets/images/right-arrow.svg" className="img-fluid"
                                alt="arrow" /></a>
                            <div className="st-dots-group">
                                <span className="active"><a href="/"></a></span>
                                <span><a href="/"></a></span>
                                <span><a href="/"></a></span>
                            </div>
                        </div>
                    </div>
                    <div className="grid-container">

                        <AliceCarousel
                            mouseDragEnabled
                            items={items}
                            // responsive={responsive}
                            infinite={false}
                            buttonsDisabled={false}
                            dotsDisabled={false}
                            // onInitialized={handleOnSlideChange}
                        />
                        {/* <div className="item">
                            <div className="st-item-wrapper">
                                <div className="st-currently-showing-img st-item-img">
                                    <img src="assets/images/atul-khatri.jpg" className="img-fluid" alt="atul-khatri" />
                                </div>
                                <span className="st-category st-comedy">Comedy</span>
                                <p className="st-currently-showing-date">Thu, 2 May 2019</p>
                                <p className="st-item-title">Atul Khatri - Live in Singapore</p>
                                <p className="st-currently-showing-place">Sota Concert Hall</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="st-item-wrapper">
                                <div className="st-currently-showing-img st-item-img">
                                    <img src="assets/images/kurios.png" className="img-fluid" alt="Kurios" />
                                </div>
                                <span className="st-category st-musical">Musical</span>
                                <p className="st-currently-showing-date">Thu, 2 May 2019</p>
                                <p className="st-item-title">Atul Khatri - Live in Singapore</p>
                                <p className="st-currently-showing-place">Sota Concert Hall</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="st-item-wrapper">
                                <div className="st-currently-showing-img st-item-img">
                                    <img src="assets/images/panthom-of-opera.jpg" className="img-fluid"
                                        alt="panthom-of-opera" />
                                </div>
                                <span className="st-category st-musical">Musical</span>
                                <p className="st-currently-showing-date">Sun, 21 Jul 2019</p>
                                <p className="st-item-title">KURIOS – Cabinet of Curiosities</p>
                                <p className="st-currently-showing-place">Marina Bay Sands Singapore</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="st-item-wrapper">
                                <div className="st-currently-showing-img st-item-img">
                                    <img src="assets/images/atul-khatri.jpg" className="img-fluid" alt="atul-khatri" />
                                </div>
                                <span className="st-category st-comedy">Comedy</span>
                                <p className="st-currently-showing-date">Thu, 2 May 2019</p>
                                <p className="st-item-title">Atul Khatri - Live in Singapore</p>
                                <p className="st-currently-showing-place">Sota Concert Hall</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="st-item-wrapper">
                                <div className="st-currently-showing-img st-item-img">
                                    <img src="assets/images/kurios.png" className="img-fluid" alt="Kurios" />
                                </div>
                                <span className="st-category st-musical">Musical</span>
                                <p className="st-currently-showing-date">Sun, 21 Jul 2019</p>
                                <p className="st-item-title">KURIOS – Cabinet of Curiosities</p>
                                <p className="st-currently-showing-place">Marina Bay Sands Singapore</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="st-item-wrapper">
                                <div className="st-currently-showing-img st-item-img">
                                    <img src="assets/images/panthom-of-opera.jpg" className="img-fluid"
                                        alt="panthom-of-opera" />
                                </div>
                                <span className="st-category st-musical">Musical</span>
                                <p className="st-currently-showing-date">Sat, 8 Jun 2019</p>
                                <p className="st-item-title">The Phantom of Opera</p>
                                <p className="st-currently-showing-place">Sands Theatre at Marina Bay </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CurrentlyShowing;