import React, { Component } from 'react';

export default class SeatMap extends Component {
    render(){
        const { imgArr } = this.props;
        return (
            <div>
                {imgArr.map((obj,idx) => {
                   return  <img src={obj} />
                })}
            </div>
        )
    }
}