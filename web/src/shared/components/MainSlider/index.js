import React from 'react';
import './style.scss';

export class MainSlider extends React.Component {
  state = {
    slideTotal: this.props.slides.length - 1,
    slideCurrent: 0,
    slides: this.props.slides,
    height: '0px',
    slideDir: 'right',
    thumbnail: [],
    auto: this.props.auto,
    count: 1,
    interval: 0
  };

  componentDidMount() {
    this.playAutoSlider(this.state.slideCurrent);
  }

  componentWillUnmount() {
    clearInterval(this.state.slideCurrent);
  }

  playAutoSlider(currSlide) {
    clearInterval(this.state.interval);
    let initInterval = true;
    let self = this;
    let slide = [];
    let slideDir = self.state.slideDir;
    let slideTotal = self.state.slides.length - 1;
    this.props.slides.forEach(slid => {
      let slideobject = {
        class: 'slider-single proactivede',
        element: slid
      };
      slide.push(slideobject);
    });

    this.state.slides.forEach((slid, index) => {
      slid.class = 'slider-single preactivede';
    });
    this.state.height = document.getElementsByClassName(
      'slider-single'
    )[0].clientHeight;
    let interval = setInterval(function counter() {
      let slideCounter;
      self.activateThumbnail(self.state.slideCurrent);
      if (slideDir == 'right') {
        self.slideInRight();
      } else if (slideDir == 'left') {
        self.slideInLeft();
      }
      intervalTimer = 3000;

      if (initInterval) {
        slideCounter =
          currSlide != slideTotal ? self.state.slideCurrent + 1 : 0;
        initInterval = false;
      } else {
        slideCounter =
          self.state.slideCurrent != slideTotal
            ? self.state.slideCurrent + 1
            : 0;
      }

      self.setState(
        state => ({
          slideCurrent: slideCounter,
          interval: interval
        }),
        () => {}
      );
    }, 3000);
  }

  activateThumbnail(slideCurrent) {
    let updateTnail = [];
    this.props.thumbnail.forEach(slide => {
      let slideobject = {
        class: 'inactive',
        element: slide
      };
      updateTnail.push(slideobject);
    });
    let { slideTotal } = this.state;

    if (slideCurrent < slideTotal) {
      slideCurrent++;
    } else {
      slideCurrent = 0;
    }

    let activethumbnail = updateTnail[slideCurrent];
    activethumbnail.class = 'active';
    this.setState({
      thumbnail: updateTnail
    });
  }

  slideInRight() {
    let { slideCurrent, slideTotal, slides } = this.state;

    let preactiveSlide, proactiveSlide;
    let slide = this.state.slides;

    if (slideCurrent > 0) {
      preactiveSlide = slide[slideCurrent - 1];
    } else {
      preactiveSlide = slide[slideTotal];
    }

    let activeSlide = slide[slideCurrent];
    if (slideCurrent < slideTotal) {
      proactiveSlide = slide[slideCurrent + 1];
    } else {
      proactiveSlide = slide[0];
    }

    slide.forEach((slid, index) => {
      if (slid.class.includes('preactivede')) {
        slid.class = 'slider-single proactivede';
      }
      if (slid.class.includes('preactive')) {
        slid.class = 'slider-single preactivede';
      }
    });

    preactiveSlide.class = 'slider-single preactive';
    activeSlide.class = 'slider-single active';
    proactiveSlide.class = 'slider-single proactive';
    this.setState((prevState, props) => {
      return { slides: slide, slideCurrent };
    });
    if (document.getElementsByClassName('slider-single active').length > 0) {
      setTimeout(() => {
        // let height = document.getElementsByClassName("slider-single active")[0].clientHeight;
        this.setState((prevState, props) => {
          return { height: '342px' };
        });
      }, 500);
    }
  }

  slideInLeft() {
    let { slideCurrent, slideTotal } = this.state;
    let preactiveSlide, proactiveSlide;

    let slide = this.state.slides;
    if (slideCurrent < slideTotal) {
      proactiveSlide = slide[slideCurrent + 1];
    } else {
      proactiveSlide = slide[0];
    }
    var activeSlide = slide[slideCurrent];
    if (slideCurrent > 0) {
      preactiveSlide = slide[slideCurrent - 1];
    } else {
      preactiveSlide = slide[slideTotal];
    }
    slide.forEach((slid, index) => {
      if (slid.class.includes('proactivede')) {
        slid.class = 'slider-single preactivede';
      }
      if (slid.class.includes('proactive')) {
        slid.class = 'slider-single proactivede';
      }
    });
    preactiveSlide.class = 'slider-single preactive';
    activeSlide.class = 'slider-single active';
    proactiveSlide.class = 'slider-single proactive';
    this.setState(
      (prevState, props) => {
        return { slides: slide, slideCurrent };
      },
      () => {
        if (
          document.getElementsByClassName('slider-single active').length > 0
        ) {
          setTimeout(() => {
            // let height = document.getElementsByClassName("slider-single active")[0].clientHeight;
            this.setState((prevState, props) => {
              return { height: '342px' };
            });
          }, 500);
        }
      }
    );
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.slides && prevProps.slides[0] && this.props.slides[0]) {
      if (prevProps.slideCurrent != this.props.slideCurrent) {
        let currentSlide = this.props.slideCurrent;
        this.setState(
          {
            interval: 0
          },
          () => {}
        );
        this.playAutoSlider(this.props.slideCurrent);
        this.setState(
          state => ({
            slideCurrent: currentSlide
          }),
          () => {}
        );
      }
    }
  }

  render() {
    console.log(this.props);
    const { slides, thumbnail } = this.state;

    return (
      <div>
        <div
          className="react-3d-carousel"
          style={{ height: this.state.height }}
        >
          {this.state.slides && this.state.slides.length > 0 && (
            <div className="slider-container">
              <div className="slider-content">
                {slides.map((slider, index) => {
                  return (
                    <div className={slider.class} key={index}>
                      <div className="slider-left">
                        <div>
                          <i className="fa fa-arrow-left"></i>
                        </div>
                      </div>
                      <div className="slider-right">
                        <div>
                          <i className="fa fa-arrow-right"></i>
                        </div>
                      </div>

                      <div className="slider-single-content">
                        {slider.element}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        <div className="thumbnail-content">
          {thumbnail &&
            thumbnail.map((slider, index) => {
              return (
                <div className={`thumbnail-single ${slider.class}`} key={index}>
                  <div className="thumbnail-single-content">
                    {slider.element}
                  </div>
                </div>
              );
            })}
        </div>

        {/* <div className="icons">
                    <div>
                        <div>
                            <span >Left</span>
                        </div>
                    </div>
                    <div>
                        <div >
                            <span >Right</span>
                        </div>
                    </div>
                </div> */}
      </div>
    );
  }
}
