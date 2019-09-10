import React, { useState } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const SeatMap = props => {
  const { imgArr, handleClose } = props; // these two are required props
  const [photoIndex, setPhotoIdx] = useState(0);

  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true
  };

  return (
    <Lightbox
      mainSrc={imgArr[photoIndex]}
      nextSrc={imgArr[(photoIndex + 1) % imgArr.length]}
      prevSrc={imgArr[(photoIndex + imgArr.length - 1) % imgArr.length]}
      onCloseRequest={() => handleClose()}
      onMovePrevRequest={() =>
        setPhotoIdx((photoIndex + imgArr.length - 1) % imgArr.length)
      }
      onMoveNextRequest={() => setPhotoIdx((photoIndex + 1) % imgArr.length)}
    />
  );
};

export default SeatMap;
