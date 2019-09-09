import React, { useState, useEffect, memo } from "react";
import BigBanner from "../../../assets/images/big_banner.png";
import Horizontal from "../../../assets/images/horizontal.png";
import Vertical from "../../../assets/images/vertical.png";
import Tile from "../../../assets/images/Vertical Tile.png";
import Small from '../../../assets/images/small.png';
import "./style.scss";

function Image(props) {
  const [source, SetSource] = useState(!props.largeImage ? props.src : props.largeImage);

  const [className, setClassName] = useState("");
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    SetSource(!props.largeImage ? props.src : props.largeImage);
  }, [props.src])

  const onLoad = src => {
    setTimeout(() => {
    setClassName("loaded");
    }, 1000);
  };

  const onError = () => {
    let newImg;
    switch (props.type) {
      case "Vertical":
        newImg = Vertical;
        break;

      case "Tile":
        newImg = Tile;
        break;

      case "BigBanner":
        newImg = BigBanner;
        break;
        case 'Small':
        newImg = Small
        break;
      default:
        newImg = Horizontal;
    }

    if (!errored) {
      SetSource(newImg);
      setErrored(true);
    }
  };

  return (
      <div class="image-conatiner">
          <img
          className={`image ${props.className} ${className}`}
          src={source}
          onLoad={() => onLoad()}
        />
        <img
          className={`image ${props.className} preview ${className}`}
          src={props.src}
          onError={() => onError()}
        />
      </div>
  );
}

export default memo(Image);
