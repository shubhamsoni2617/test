import React, { memo, useState } from 'react';
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
  const [play, setPlay] = useState(false);
  const [items, setItems] = useState(images);
  const [index, setIndex] = useState(0);

  const renderItem = item => {
    console.log(item.playing);

    return (
      <div className="image-gallery-image">
        {item.video_url !== '' && (
          <div className="videoimg" style={{ width: '100%' }}>
            <img src={videoImage} alt="video-pic" />
            <ReactPlayer
              pip={true}
              onPlay={() => {
                item.playing = true;
              }}
              playing={item.playing}
              url={item.video_url}
              controls={true}
            />
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

  const renderLeftNav = (onClick, disabled) => {
    return (
      <button
        className="image-gallery-custom-nav prev"
        disabled={disabled}
        onClick={onClick}
      />
    );
  };

  const renderRightNav = (onClick, disabled) => {
    return (
      <button
        className="image-gallery-custom-nav next"
        disabled={disabled}
        onClick={onClick}
      />
    );
  };

  const pauseVideoOnSlide = index => {
    items.map(item => {
      item.playing = false;
    });
    setItems(items);
    setIndex(index);
  };

  return (
    <div id="banner-carousel" className="banner-carousel">
      {items && items.length > 0 ? (
        <ImageGallery
          items={items}
          renderItem={renderItem}
          renderThumbInner={renderThumbInner}
          infinite={false}
          // showNav={false}
          showFullscreenButton={false}
          showPlayButton={false}
          // disableThumbnailScroll={true}
          renderLeftNav={renderLeftNav}
          renderRightNav={renderRightNav}
          onSlide={index => pauseVideoOnSlide(index)}
        />
      ) : (
        <div className="image-gallery-image">
          <Image largeImage="" src="" type="BigBanner" />
        </div>
      )}
    </div>
  );
};

export default memo(EventCarousel);

EventCarousel.propTypes = {
  images: PropTypes.array.isRequired
};
