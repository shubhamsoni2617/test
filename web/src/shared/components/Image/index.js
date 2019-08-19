import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import BigBanner from '../../../assets/images/big_banner.png';
import Horizontal from  '../../../assets/images/horizontal.png';
import Vertical from  '../../../assets/images/vertical.png';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: props.src,
      errored: false
    };
  }

  onError = () => {
    let newImg ;
    switch (this.props.type)
    {

        case 'Vertical':
        newImg = Vertical
        break;

        case 'BigBanner':
        newImg = BigBanner
        break;

        default:
        newImg = Horizontal
    }

    if (! this.state.errored) {
      this.setState({
        src: newImg,
        errored: true,
      });
    }
  }

  render() {
    let { src} = this.state;
    if(! src){
      src="assets.png"
    }
    const {className} = this.props;
    return (
     <img
       className = {className}
        src={src}
        onError ={() => this.onError()}
      />
    );
  }
}
