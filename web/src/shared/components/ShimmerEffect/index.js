import React, { Component } from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  visible:false,
  height:150,
  count:1,
  type:'grid'
}

export default class ShimmerEffect extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props;
        let count = props.count ? props.count : 1;
        let shimmer = function () {
            var h = [];
            for (let i = 0; i < count; i++) {
                h.push(
                    <div key={i} className={props.columnCls}>
                        <div className="contentLoader ">
                             <div className="animated-backgroundlarge firstRow"> </div>
                            <div className="animated-backgroundlarge secondRow" style={{height:'8px', width:'85%'}}> </div>
                            <div className="animated-backgroundlarge secondRow" style={{height:'8px', width:'75%'}}> </div>
                            <div className="animated-backgroundlarge secondRow" style={{height:'8px', width:'65%'}}> </div>
                            <div className="animated-background" style={{height: props.height, marginBottom:'0px'}}> </div>

                        </div>
                    </div>
                );
            }

            return h;
        }

        let listShimmer = function() {
            var h = [];
           for (let i = 0; i < count; i++) {
                h.push(
                    <div key={i} className="gsc_col-xs-12">
                    <div className="contentLoader ListView">
                            <div className="gsc_row">
                                <div className="gsc_col-xs-12 gsc_col-sm-4">
                                    <div className="animated-background " style={{height: props.height}}> </div>
                                </div>
                                <div className="gsc_col-xs-12 gsc_col-sm-8">
                                    <div className="animated-backgroundlarge firstRow" style={{height:'25px', width:'88%', marginBottom:'15px'}}> </div>
                                    <div className="animated-backgroundlarge secondRow" style={{height:'10px', width:'85%', marginBottom:'15px'}}> </div>
                                    <div className="animated-backgroundlarge secondRow" style={{height:'10px', width:'75%', marginBottom:'15px'}}> </div>
                                    <div className="animated-backgroundlarge secondRow" style={{height:'10px', width:'65%', marginBottom:'15px'}}> </div>
                                    <div className="animated-backgroundlarge secondRow" style={{height:'10px', width:'55%', marginBottom:'15px'}}> </div>
                                </div>

                            </div>
                        </div>
                    </div>
                );
            }

            return h;

        }

        let gridShimmer = function() {
            var h = [];
           for (let i = 0; i < count; i++) {
                h.push(
                    <div key={i} className={props.columnCls}>
                        <div className="contentLoader">
                            <div className="animated-background " style={{height: props.height}}> </div>
                            <div className="animated-backgroundlarge firstRow" style={{height:'10px', marginBottom:'10px'}}> </div>
                            <div className="animated-backgroundlarge secondRow" style={{height:'10px', width:'80%', marginBottom:'10px'}}> </div>
                            <div className="animated-backgroundlarge secondRow" style={{height:'10px', width:'70%'}}> </div>

                        </div>
                    </div>
                );
            }

            return h;

        }

        if (!props.visible) return null;

        return (
            <div className="gsc_row">
                {props.visible ? (props.type == 'list' ? listShimmer() : (props.type == 'grid' ? gridShimmer() : shimmer())) : ''}
            </div>
        )
    };
}

ShimmerEffect.propTypes = {
   count: PropTypes.number.isRequired,
   height: PropTypes.number.isRequired,
   visible: PropTypes.bool,
   type: PropTypes.string && function(props,propName,componentName){
      let value = props[propName];
      var converttoarray=value.split(',');
      var checker=function(arrayvalue){
        return (arrayvalue.indexOf('list')>-1||arrayvalue.indexOf('grid')>-1||arrayvalue.indexOf('')>-1);
      }
        return (converttoarray.every(checker)) ?  null: new Error(propName + ' in ' + componentName + " should have only grid or list(empty value will be considered as grid)") ;
    }
}

ShimmerEffect.defaultProps = defaultProps;
