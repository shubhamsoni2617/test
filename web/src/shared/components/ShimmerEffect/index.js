import React, { Component } from 'react';
import './style.scss';

function TileShimmer(props){

      var h = [];
      for (let i = 0; i < props.count; i++) {
        h.push(
          <div key={i} className={props.propCls}  style={{padding: 0, paddingRight: '10px'}}>
            <div className="contentLoader ListView" style={{padding: 0, backgroundColor: 'transparent', border: 'none', margin: 0}}>
              <div className="shm_row">
                  <div className="animated-background " style={{ height: props.height, margin: 0 }}> </div>
                <div className="shm_col-sm-12" style={{padding: 0}}>
                  <div className="animated-backgroundlarge firstRow" style={{ width: '30%', height: '20px' , marginBottom: '11px' }}> </div>
                  <div className="animated-backgroundlarge secondRow" style={{ width: '80%', height: '16px' , marginBottom: '10px' }}> </div>
                  <div className="animated-backgroundlarge secondRow" style={{ width: '95%', height: '36px' , marginBottom: '15px' }}> </div>
                  <div className="animated-backgroundlarge secondRow" style={{ width: '80%', height: '16px' , marginBottom: '10px' }}> </div>
                </div>

              </div>
            </div>
          </div>
        );
      }

      return h;
}

function Shimmer(props){

  var h = [];
      for (let i = 0; i < props.count; i++) {
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

function ListShimmer(props){

  var h = [];
      for (let i = 0; i < props.count; i++) {
        h.push(
          <div key={i} className={props.propCls}>
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

function GridShimmer(props){

  var h = [];
  for (let i = 0; i < props.count; i++) {
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

function BannerShimmer(props){

  return (
    <div className={props.propCls}>
      <div className="contentLoader ListView">
        <div className="shm_row">
        <div className="col-md-12">
        <div className="shm_col-sm-12">
            <div className="animated-background main" style={{ height: props.height }}> </div>
          </div>
          <div className="shm_col-sm-12">
            <div className="animated-background boxLoader"> </div>
            <div className="animated-background boxLoader"> </div>
            <div className="animated-background boxLoader"> </div>
            <div className="animated-background boxLoader"> </div>
            <div className="animated-background boxLoader"> </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}

function DetailShimmer(props){

  return (
    <div className="shimmer-container">
    <div className={props.propCls}>
      <div className="contentLoader ListView">
        <div className="shm_row">
        <div className="col-md-8">
        <div className="shm_col-sm-12">
            <div className="animated-background main" style={{ height: props.height }}> </div>
          </div>
          <div className="shm_col-sm-12">
            <div className="animated-background boxLoader"> </div>
            <div className="animated-background boxLoader"> </div>
            <div className="animated-background boxLoader"> </div>
            <div className="animated-background boxLoader"> </div>
            <div className="animated-background boxLoader"> </div>
          </div>
        </div>
        <div className="col-md-4">
        <div className="shm_col-sm-12">
            <div className="animated-backgroundlarge secondRow" style={{ height: '25px' , marginBottom: '50px' }}> </div>
            <div className="animated-backgroundlarge secondRow" style={{ height: '25px', marginBottom: '50px' }}> </div>
            <div className="animated-backgroundlarge firstRow" style={{ height: '50px',  marginBottom: '50px' }}> </div>
            <div className="animated-backgroundlarge firstRow" style={{ height: '25px', marginBottom: '50px' }}> </div>
            <div className="animated-backgroundlarge secondRow" style={{ height: '40px',  marginBottom: '50px' }}> </div>
          </div>
        </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default class ShimmerEffect extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let props = this.props;
    let count = props.count ? props.count : 1;
    let shimmer = null;
  switch(props.type){
    case "LIST":
      shimmer = <ListShimmer {...props} />;
      break;
    case "GRID":
    shimmer = <GridShimmer {...props} />;
      break;

    case "DETAIL":
    shimmer = <DetailShimmer  {...props} />;
      break;

    case "BANNER":
    shimmer = <BannerShimmer {...props} />;
    break;
    case "TILE":
    shimmer = <TileShimmer {...props} />;
    break;

    default:
  }

    // if (!props.visible) return null;
    return (
      <div className="shm_row">
      {shimmer}
        {/* {props.visible ? (props.type == 'list' ? listShimmer() : (props.type == 'grid' ? gridShimmer() : shimmer())) : ''} */}
        {/* {props.detail ? props.homepage ? bannerShimmer() : detailShimmer() : listShimmer()} */}
      </div>
    )
  };
}

