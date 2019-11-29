import React from 'react';
import { Scrollbar } from 'react-scrollbars-custom';
import './style.scss';

function CustomScrollbar(props) {
  return (
    <Scrollbar
      trackYProps={{
        renderer: props => {
          const { elementRef, ...restProps } = props;
          return <div {...restProps} ref={elementRef} className="trackY" />;
        }
      }}
      thumbYProps={{
        renderer: props => {
          const { elementRef, ...restProps } = props;
          return <div {...restProps} ref={elementRef} className="tHuMbY" />;
        }
      }}
    >
      {props.children}
    </Scrollbar>
  );
}

export default CustomScrollbar;
