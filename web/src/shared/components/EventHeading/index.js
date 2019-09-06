import React, { useState, useEffect, useRef } from "react";
import Tooltip from "../Tooltip";
import "./style.scss";

function EventHeading(props) {
  const [allowTooltip, setAllowTooltip] = useState(props.allowTooltip);
  const [styleObj, setStyleObj] = useState(null);
  const element = useRef();

  useEffect(() => {
    if (
      !allowTooltip &&
      ((props.lines == 1 && element.current.scrollWidth > element.current.offsetWidth + 150)
      ||
      (props.lines > 1 && element.current.scrollHeight > element.current.offsetHeight))
    ) {
      setAllowTooltip(true);
    }
    if (element.current.offsetHeight >= props.height * props.lines) {
      setStyleObj({
        overflow: "hidden",
        "text-overflow": "ellipsis",
        display: props.lines == 1 ? "block" : "-webkit-box",
        "line-height": `${props.height}px`,
        "max-height": `${props.height * props.lines}px`,
        "min-height": `${props.height * props.lines}px`,
        "-webkit-line-clamp": `${props.lines}`,
        "-webkit-box-orient": "vertical",
        "margin-bottom": props.noMargin ? "0px":"15px",
        width: "91%",
        "font-size": props.size,
        "font-weight": props.weight
      });
    }
  }, [element.current]);

  if (!props.title) {
    return null;
  }

  if (allowTooltip) {
    return (
      <Tooltip title={props.title} height={props.height * props.lines + 5}>
        <h3 style={styleObj} ref={element}>
          {props.title}
        </h3>
      </Tooltip>
    );
  }

  return (
    <h3 style={styleObj} ref={element}>
      {props.title}
    </h3>
  );
}

export default EventHeading;
