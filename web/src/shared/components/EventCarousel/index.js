import React, { memo } from "react";
// import Slider from "react-slick";
import "./style.scss";
import ReactPlayer from "react-player";
import playIcon from "../../../assets/images/play.svg";
import videoImage from "../../../assets/images/slide1.jpg";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Image from "../Image";
const EventCarousel = props => {
  const renderItem = item => {
    return (
      <div className="image-gallery-image">
        {item.video_url !== "" && (
          <div className="videoimg" style={{ width: "100%" }}>
            <img src={videoImage} alt="video-pic" />
            <ReactPlayer url={item.video_url} controls={true} />
          </div>
        )}
        {item.video_url === "" && (
          <Image largeImage={item.full_image} src={item.thumb_image} />
        )}
      </div>
    );
  };

  const renderThumbInner = item => {
    return (
      <div className="image-gallery-thumbnail-inner">
        {item.video_url !== "" && (
          <div className="videoimg" style={{ width: 130 }}>
            <img src={playIcon} className="play-icon" alt="Play Icon" />
            <Image largeImage={item.thumb_image} src={item.thumb_image} />
          </div>
        )}
        {item.video_url === "" && (
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
      <ImageGallery
        items={props.images}
        renderItem={renderItem}
        renderThumbInner={renderThumbInner}
        infinite={false}
        showNav={false}
        showFullscreenButton={false}
        showPlayButton={false}
      />
    </div>
  );
};

export default memo(EventCarousel);
