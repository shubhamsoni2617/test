import React, { useState, useEffect } from "react";
import "./style.scss";

function EventStatus(props) {
  console.log(props);
  const { status, color, background, paddingLeft, paddingRight } = props;
  const [styleObj, setStyleObj] = useState(null);
  useEffect(() => {
    setStyleObj({
      color,
      background,
      paddingLeft,
      paddingRight
    });
  }, [status, color, background, paddingLeft, paddingRight]);
  if (!status) {
    return null;
  }
  return <span style={styleObj}>{status}</span>;
}

export default EventStatus;
