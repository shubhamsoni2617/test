import React, { Component } from "react";
import Slider from "react-slick";
import './style.scss';
import HomeService from '../../../shared/services/HomeService';
import Utilities from '../../../shared/utilities';

const mainSliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    centerPadding: Utilities.mobilecheck() ? "60px" : "200px" ,
    slidesToShow: 1,
    speed: 500,
    arrows: true
};
const thumbSliderSettings = {
    centerMode: false,
    infinite: true,
    speed: 500,
    slidesToShow: Utilities.mobilecheck() ? 6 : 13,
    slidesToScroll: 1,
    focusOnSelect: true,
    arrows: true
};


export default class HomePageCarouselContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null,
            posts: [],
            errorMsg: '',
            sliderBackgroudImage: 0
        };
    }

    componentDidMount() {
        HomeService.getRotationalBanner()
            .then(res => {
                if (res && res.data) {
                    this.setState({ posts: res.data.data, sliderBackgroudImage: res.data.data.length - 1 })
                }
            })
            .catch(err => {
                if (err && err.res) {
                    console.log(err.res);
                }
            });

        this.setState({
            nav1: this.mainSlider,
            nav2: this.thumbSlider
        });

    }

    changeBackgroundImage = (index) => {
        this.setState({ sliderBackgroudImage: index })
    }

    render() {
        const { posts, errorMsg, sliderBackgroudImage } = this.state;



        if (posts && posts.length == 0) {
            // return null;
        }

        return (
            <div className="banner">
                <div className="banner-carousel">
                {posts.length > 0 && <div className="active-banner-image">
                    <img src={posts[sliderBackgroudImage].full_image} /></div>}
                    <Slider {...mainSliderSettings}
                        asNavFor={this.thumbSlider}
                        ref={slider => (this.mainSlider = slider)}
                        afterChange={(index) => this.changeBackgroundImage(index)}
                        className="slider-for">

                        {
                            posts.length ?
                                posts.map((post, key) => <div>
                                    <img onClick={sliderBackgroudImage == key ? ()=> window.open("someLink", "_blank") : ''} src={post.full_image} alt="image1" className="img1 img-responsive"></img>
                                </div>) :
                                null
                        }
                        {
                            errorMsg ? <div>{errorMsg}</div> : null
                        }



                    </Slider>
                </div>
                <div className="banner-thumbnail">
                    <Slider {...thumbSliderSettings}
                        asNavFor={this.mainSlider}
                        ref={slider => (this.thumbSlider = slider)}
                        focusOnSelect={true}
                        swipe={false}
                    >
                        {
                            posts.length ?
                                posts.map(post => <div>
                                    <img src={post.full_image} alt="image1" className="img img-responsive"></img>
                                </div>) :
                                null
                        }
                        {
                            errorMsg ? <div>{errorMsg}</div> : null
                        }
                    </Slider>
                </div>
            </div>
        );
    }
}