import React, { useState, useEffect ,createRef } from 'react';
// import Slider from "react-slick";
import './style.scss';
import ReactPlayer from 'react-player';
import playIcon from '../../../assets/images/play.svg';
import videoImage from '../../../assets/images/slide1.jpg';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';

const EventCarousel = (props) => {

  const [imageArray, setImageArray] = useState([]);
  // const [navSmall, setNavSmall] = useState(null);

  useEffect(() => {

    let temp = [];
    for(let i=0; i<props.images.length; i++){

      temp.push({original: props.images[i].full_image, thumbnail: props.images[i].thumb_image})
    }
    setImageArray(temp);
  }, [props.images])

  const renderLeftNav = (onClick, disabled) => {
    return (
      <button
        className='image-gallery-custom-nav prev'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  const renderRightNav = (onClick, disabled) => {
    return (
      <button
        className='image-gallery-custom-nav next'
        disabled={disabled}
        onClick={onClick}/>
    )
  }

  return (
    <div className="banner-carousel">
    <ImageGallery
      items={imageArray}
      renderLeftNav={renderLeftNav}
      renderRightNav={renderRightNav} />
    </div>
  );

}

export default EventCarousel;
