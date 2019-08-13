import React, { Component } from 'react';
import './style.scss';

export default class ShimmerEffect extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    let count = props.count ? props.count : 1;

    let shimmer = () => {
      var h = [];
      for (let i = 0; i < count; i++) {
        h.push(
          <div key={i} className={props.columnCls}>
            <div className="contentLoader ">
              <div className="animated-backgroundlarge firstRow"> </div>
              <div className="animated-backgroundlarge secondRow" style={{ height: '8px', width: '85%' }}> </div>
              <div className="animated-backgroundlarge secondRow" style={{ height: '8px', width: '75%' }}> </div>
              <div className="animated-backgroundlarge secondRow" style={{ height: '8px', width: '65%' }}> </div>
              <div className="animated-background" style={{ height: props.height, marginBottom: '0px' }}> </div>

            </div>
          </div>
        );
      }

      return h;
    }

    let listShimmer = () => {
      var h = [];
      for (let i = 0; i < count; i++) {
        h.push(
          <div key={i} className='shm_col-xs-5'>
            <div className="contentLoader ListView">
              <div className="shm_row">
                <div className="shm_col-sm-12">
                  <div className="animated-background " style={{ height: props.height }}> </div>
                </div>
                <div className="shm_col-sm-12">
                  <div className="animated-backgroundlarge firstRow" style={{ height: '25px' , marginBottom: '15px' }}> </div>
                  <div className="animated-backgroundlarge secondRow" style={{ height: '10px', marginBottom: '15px' }}> </div>
                  <div className="animated-backgroundlarge secondRow" style={{ height: '10px',  marginBottom: '15px' }}> </div>
                  <div className="animated-backgroundlarge secondRow" style={{ height: '10px', marginBottom: '15px' }}> </div>
                  <div className="animated-backgroundlarge secondRow" style={{ height: '10px',  marginBottom: '15px' }}> </div>
                </div>

              </div>
            </div>
          </div>
        );
      }

      return h;

    }

    let gridShimmer = () => {
      var h = [];
      for (let i = 0; i < count; i++) {
        h.push(
          <div key={i} className={props.columnCls}>
            <div className="contentLoader">
              <div className="animated-background " style={{ height: props.height }}> </div>
              <div className="animated-backgroundlarge firstRow" style={{ height: '10px', marginBottom: '10px' }}> </div>
              <div className="animated-backgroundlarge secondRow" style={{ height: '10px', width: '80%', marginBottom: '10px' }}> </div>
              <div className="animated-backgroundlarge secondRow" style={{ height: '10px', width: '70%' }}> </div>

            </div>
          </div>
        );
      }

      return h;

    }

    // if (!props.visible) return null;
    return (
      <div className="shm_row">
        {/* {props.visible ? (props.type == 'list' ? listShimmer() : (props.type == 'grid' ? gridShimmer() : shimmer())) : ''} */}
        {listShimmer()}
      </div>
    )
  };
}

