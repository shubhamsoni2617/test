import React, { useState, useEffect, useRef } from "react";
import closeNews from "../../../assets/images/close-ad.svg";
import "./style.scss";
import HomeService from "../../../shared/services/HomeService";
import popupClose from "../../../assets/images/cross.svg";

const NewsTicker = props => {
  const { homePageRef } = props;
  const [newsTicker, setNewsTicker] = useState([]);
  const [des, setDes] = useState();
  const [show, setShow] = useState(false);
  const refValue = useRef();
  const refMarquee = useRef();
  useEffect(() => {
    const params = {
      client: 1
    };
    HomeService.getNewsTicker(params)
      .then(res => {
        setNewsTicker(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  const handleClose = () => {
    refValue.current.classList.remove("hide-news");
    homePageRef.current.classList.add("news-ticker-hide");
  };
  const handleOnclick = des => {
    refMarquee.current.stop();
    setDes(des);
    setShow(true);
  };
  return (
    <div>
      <div
        className={
          window.location.pathname === "/" ? "ticker-wrap hide-news" : "hide"
        }
        ref={refValue}
      >
        <div className="ticker-container">
          <div className="ticker">
            <marquee
              behavior="scroll"
              onMouseEnter={() => refMarquee.current.stop()}
              onMouseLeave={() => refMarquee.current.start()}
              ref={refMarquee}
            >
              <div>
                {newsTicker.map((content, index) => {
                  let string = content.description;
                  let stringLength = 180;
                  let trimmedString = string.substring(0, stringLength);
                  return (
                    <div
                      key={content.title}
                      dangerouslySetInnerHTML={{ __html: content.title }}
                      onClick={() => {
                        handleOnclick(content.description);
                      }}
                    />
                  );
                })}
              </div>
            </marquee>
          </div>
        </div>
        <span className="close-ticker" onClick={() => handleClose()}>
          <img src={closeNews} alt="Close" />
        </span>
      </div>
      <div className="modal" style={{ display: show ? "block" : "none" }}>
        <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-n">
              <button
                type="button"
                className="close"
                onClick={() => {
                  refMarquee.current.start();
                  setShow(false);
                }}
              >
                <span aria-hidden="true">
                  <img src={popupClose} alt="Close Popup" />
                </span>
              </button>
            </div>
            <div className="modal-body">
              <div className="notice">
                <div dangerouslySetInnerHTML={{ __html: des }} />
              </div>
            </div>
            <div className="modal-footer border-n" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsTicker;
