import React, { useState, useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import Horizontal from '../../../assets/images/horizontal.png';
import Vertical from '../../../assets/images/vertical.png';
import Tile from '../../../assets/images/tile.png';
import Small from '../../../assets/images/small.png';
import Medium from '../../../assets/images/medium.png';
import MediumVertical from '../../../assets/images/mediumVertical.png';
import MediumHorizontal from '../../../assets/images/mediumHorizontal.png';
import TopPicks from '../../../assets/images/topPicks.png';
import HorizontalMin from '../../../assets/images/HorizontalMin.png';
import VerticalTopPic from '../../../assets/images/verticalTopPic.png';
// import BigBannerMobile from '../../../assets/images/BigBannerMobile.png';
import BigBanner from '../../../assets/images/BigBanner.png';
import NoImage from '../../../assets/images/NoImage.png';
import Smaller from '../../../assets/images/smaller.png';
import Promotion from '../../../assets/images/promotion.png';
import SimilarPicks from '../../../assets/images/similarPicks.png';
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
      case 'TopPicks':
        newImg = TopPicks;
        break;
      case 'HorizontalMin':
        newImg = HorizontalMin;
        break;
      case 'VerticalTopPic':
        newImg = VerticalTopPic;
        break;

      case 'BigBanner':
        newImg = BigBanner;
        break;

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
      case 'Promotion':
        newImg = Promotion;
        break;
      case 'SimilarPicksImg':
        newImg = SimilarPicks;
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
