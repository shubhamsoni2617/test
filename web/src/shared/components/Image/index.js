import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Horizontal from '../../../assets/images/horizontal.png';
import Vertical from '../../../assets/images/vertical.png';
import Tile from '../../../assets/images/Vertical Tile.png';
import Small from '../../../assets/images/small.png';
import Medium from '../../../assets/images/noimage.png';
import MediumVertical from '../../../assets/images/mediumVertical.png';
import MediumHorizontal from '../../../assets/images/mediumHorizontal.jpg';
import HorizontalMin from '../../../assets/images/HorizontalMin.png';
import VerticalTopPic from '../../../assets/images/rsz_vertical.png';
// import BigBannerMobile from '../../../assets/images/big_banner.png';
// import BigBanner from '../../../assets/images/big_banner.png';
import NoImage from '../../../assets/images/No image-.png';
import Smaller from '../../../assets/images/smaller.png';
import './style.scss';

function Image(props) {
  const [source, SetSource] = useState(
    !props.largeImage ? props.src : props.largeImage
  );

  const [className, setClassName] = useState('');
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    SetSource(!props.largeImage ? props.src : props.largeImage);
    if (!props.src) onError();
    setTimeout(() => {
      setClassName('loaded');
    }, 3000);
  }, [props.src, props.largeImage]);

  const onLoad = () => {
    setTimeout(() => {
      setClassName('loaded');
    }, 500);
  };

  const onError = () => {
    let newImg;
    switch (props.type) {
      case 'Vertical':
        newImg = Vertical;
        break;
      case 'MediumVertical':
        newImg = MediumVertical;
        break;
      case 'MediumHorizontal':
        newImg = MediumHorizontal;
        break;
      case 'Tile':
        newImg = Tile;
        break;

      case 'HorizontalMin':
        newImg = HorizontalMin;
        break;
      case 'VerticalTopPic':
        newImg = VerticalTopPic;
        break;

      // case 'BigBanner':
      //   newImg = BigBanner;
      //   break;

      // case 'BigBannerMobile':
      //   newImg = BigBannerMobile;
      //   break;

      case 'Medium':
        newImg = Medium;
        break;
      case 'Small':
        newImg = Small;
        break;
      case 'VdoSmall':
        newImg = NoImage;
        break;
      case 'Smaller':
        newImg = Smaller;
        break;
      default:
        newImg = Horizontal;
    }

    if (!errored) {
      SetSource(newImg);
      setErrored(true);
    }
  };

  return (
    <div className="image-conatiner">
      <img
        className={`image ${props.className || ''} ${className}`}
        src={source}
        alt="pic"
        onLoad={() => onLoad()}
      />
      <img
        className={`image ${props.className || ''} preview ${className}`}
        src={props.src}
        alt="pic"
        onError={() => onError()}
      />
    </div>
  );
}

export default memo(Image);

Image.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  largeImage: PropTypes.string,
  alt: PropTypes.string,
  type: PropTypes.string
};
