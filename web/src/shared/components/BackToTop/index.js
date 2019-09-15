import React from 'react';
import scrollTop from '../../../assets/images/arrow-to-top.svg';
import PropTypes from 'prop-types';

class BackToTop extends React.Component {
  state = {
    intervalId: 0,
    thePosition: false
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <span className="scroll-top" onClick={this.scrollToTop}>
          <img src={scrollTop} alt="Scroll to top" />
        </span>
      );
    }
  };

  render() {
    return <React.Fragment>{this.renderGoTopIcon()}</React.Fragment>;
  }
}

export default BackToTop;

BackToTop.propTypes = {
  delayInMs: PropTypes.string.isRequired,
  scrollStepInPx: PropTypes.string.isRequired
};
