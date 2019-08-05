import React, { Component } from 'react';
import popupClose from '../../../assets/images/cross.svg';

export default class SeatMap extends Component {
    render(){
        const { imgArr } = this.props;
        return (
            <div className="modal" id="exampleModal">
                <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg " role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Seat Map</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><img src={popupClose} alt="Close Popup" /></span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="seatmap-gallery">
                                {imgArr.map((obj,idx) => {
                                    return  <img src={obj} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}