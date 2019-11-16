import React, { Component } from "react";
import Slider from "react-slick";
import './style.scss';
import HomeService from '../../../shared/services/HomeService';

const mainSliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    focusOnSelect: true,
    centerPadding: "360px",
    slidesToShow: 1,
    speed: 500,
    arrows: true
};
const thumbSliderSettings = {
    centerMode: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
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
            <div>
                {posts.length > 0 && <div>
                    <img src={posts[sliderBackgroudImage].full_image} /></div>}

                <Slider {...mainSliderSettings}
                    asNavFor={this.thumbSlider}
                    ref={slider => (this.mainSlider = slider)}
                    afterChange={(index) => console.log(index)}
                    afterChange={(index) => this.changeBackgroundImage(index)}
                    className="slider-for">

                    {
                        posts.length ?
                            posts.map(post => <div>
                                <img src={post.full_image} alt="image1" className="img1 img-responsive"></img>
                            </div>) :
                            null
                    }
                    {
                        errorMsg ? <div>{errorMsg}</div> : null
                    }



                </Slider>

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
        );
    }
}