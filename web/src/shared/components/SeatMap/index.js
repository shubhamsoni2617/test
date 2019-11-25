import React, { useState } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import PropTypes from 'prop-types';

const SeatMap = props => {
  const { imgArr, handleClose } = props;
  const [photoIndex, setPhotoIdx] = useState(0);

  return (
    <Lightbox
      mainSrc={imgArr[photoIndex]}
      nextSrc={
        imgArr.length > 1 ? imgArr[(photoIndex + 1) % imgArr.length] : false
      }
      prevSrc={
        imgArr.length > 1
          ? imgArr[(photoIndex + imgArr.length - 1) % imgArr.length]
          : false
      }
      onCloseRequest={() => {
        document.body.classList.remove('fixed-body');
        handleClose();
      }}
      onMovePrevRequest={() =>
        setPhotoIdx((photoIndex + imgArr.length - 1) % imgArr.length)
      }
      onMoveNextRequest={() => setPhotoIdx((photoIndex + 1) % imgArr.length)}
    />
  );
};

export default SeatMap;

SeatMap.propTypes = {
  imgArr: PropTypes.array.isRequired,
  handleClose: PropTypes.func.isRequired
};
