import React from 'react';
import Slider from "react-slick";
import popupClose from '../../../assets/images/cross.svg';
import Image from '../../../shared/components/Image';

const SeatMap = (props) => {

  const { imgArr, heading, handleClose } = props; // these two are required props

  const settings1 = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
  }

  return (
    <div className="modal" id="exampleModal">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            {heading && <h5 className="modal-title" id="exampleModalLabel">{heading}</h5>}
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true"><img src={popupClose} onClick={() => handleClose()} alt="Close Popup" /></span>
            </button>
          </div>
          <div className="modal-body">
            <div className="seatmap-gallery">
              <Slider
                {...settings1}
                adaptiveHeight={false}
              >
                {imgArr.map((obj, idx) => {
                  return <Image src={obj} type='BigBanner' />
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeatMap;
