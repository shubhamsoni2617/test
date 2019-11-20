import React, { memo } from 'react';
import PropTypes from 'prop-types';
// import Slider from "react-slick";
import './style.scss';
import ReactPlayer from 'react-player';
import playIcon from '../../../assets/images/play.svg';
import videoImage from '../../../assets/images/slide1.jpg';
import 'react-image-gallery/styles/css/image-gallery.css';
import ImageGallery from 'react-image-gallery';
import Image from '../Image';
import Utilities from '../../utilities';
const EventCarousel = ({ images }) => {
  const renderItem = item => {
    return (
      <div className="image-gallery-image">
        {item.video_url !== '' && (
          <div className="videoimg" style={{ width: '100%' }}>
            <img src={videoImage} alt="video-pic" />
            <ReactPlayer url={item.video_url} controls={true} />
          </div>
        )}
        {item.video_url === '' && (
          <Image
            largeImage={item.full_image}
            src={item.thumb_image}
            type="BigBanner"
          />
        )}
      </div>
    );
  };

  const renderThumbInner = item => {
    return (
      <div className="image-gallery-thumbnail-inner">
        {item.video_url !== '' && (
          <div className="videoimg" style={{ width: 130 }}>
            <img src={playIcon} className="play-icon" alt="Play Icon" />
            <Image largeImage={item.thumb_image} src={item.thumb_image} />
          </div>
        )}
        {item.video_url === '' && (
          <div style={{ width: 130 }}>
            <Image largeImage={item.thumb_image} src={item.thumb_image} />
          </div>
        )}
        <span className="border-bottom-active"></span>
      </div>
    );
  };

  return (
    <div className="banner-carousel">
      {images.length > 0 ? (
        <ImageGallery
          items={images}
          renderItem={renderItem}
          renderThumbInner={renderThumbInner}
          infinite={false}
          showNav={false}
          showFullscreenButton={false}
          showPlayButton={false}
        />
      ) : (
        <div className="image-gallery-image">
          <Image largeImage="" src="" type= "BigBanner"/>
        </div>
      )}
    </div>
  );
};

export default memo(EventCarousel);

EventCarousel.propTypes = {
  images: PropTypes.array.isRequired
};
