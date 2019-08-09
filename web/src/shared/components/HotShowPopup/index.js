import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./style.scss";
import HomeService from "../../services/HomeService";
import nextarrow from "../../../assets/images/next-arrow-white.svg";
import ReactPlayer from "react-player";
import { CSSTransitionGroup } from "react-transition-group";

const HotShowPopup = (props) => {
  const [popupData, setPopupData] = useState([]);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    setTimeout(() => setFlag(true), 1000);
    HomeService.getHotShowPopupData()
      .then(res => {
        setPopupData(res.data.data);
        if (res.data.data.length) addOverlayClass();
      })
      .catch(err => {
        removeOverlayClass();
      });
  }, []);

  const body = document.body;
  const removeOverlayClass = () => {
    setFlag(false);
    body.classList.remove("hotshowpopup-overlay");
  }

  const addOverlayClass = () => body.classList.add("hotshowpopup-overlay");

  return (
    <CSSTransitionGroup
      transitionName="hotshow"
      transitionEnter={true}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      {flag && popupData.length && <div className="hotshow-popup">
        <div className="hotshow-overlay" />
        <div className="hotshow container">
          <div className="hotshow-topbar">
            <div className="hotshow-topbar-left">
              <span>
                We are anticipating very high demand for the following show(s).
              </span>
            </div>
            <div className="hotshow-topbar-right">
              <span onClick={() => removeOverlayClass()}>
                Continue to SISTIC <img src={nextarrow} alt="" />
              </span>
            </div>
          </div>

          <div className="hotshow-wrapper">
            {popupData.length === 2 &&
              popupData &&
              popupData.map((objData, index) => {
                return (
                  <div className="hotshow-block" key={index}>
                    <div className="hotshowimg">
                      {objData.type && objData.type.id === 2 ? (
                        <ReactPlayer url={objData.video_url} controls={true} />
                      ) : (
                          <img
                            src={objData.full_image}
                            alt=""
                            className="img-fluid"
                          />
                        )}
                    </div>

                    <div className="hotshow-content">
                      {objData.description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: objData.description
                          }}
                        />
                      )}
                      {objData.buttons && objData.buttons.length > 0 && (
                        objData.buttons.map((obj, idx) => {
                          let styleObj ={background :obj.b_color, color: obj.b_font_color}
                          return <div>
                            <a
                              href={obj.b_url}
                              target="_blank"
                              style={styleObj}
                            >
                              {obj.b_name}
                            </a>
                          </div>
                        })

                      )}
                    </div>
                  </div>
                );
              })}
            {popupData.length === 1 &&
              popupData &&
              popupData.map((objData, index) => {
                return (
                  <div
                    className="hotshow-block hotshow-block-fullwidth"
                    key={index}
                  >
                    <div className="hotshowimg">
                      {objData.type && objData.type.id === 2 ? (
                        <ReactPlayer url={objData.video_url} controls />
                      ) : (
                          <img
                            src={objData.full_image}
                            alt=""
                            className="img-fluid"
                          />
                        )}
                    </div>
                    <div className="hotshow-content">
                      {objData.description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: objData.description
                          }}
                        />
                      )}

                      {objData.buttons && objData.buttons.length > 0 && (
                        objData.buttons.map((obj, idx) => {
                          let styleObj ={background :obj.b_color, color: obj.b_font_color}
                          return <div>
                            <a
                              href={obj.b_url}
                              target="_blank"
                              style={styleObj}
                            >
                              {obj.b_name}
                            </a>
                          </div>
                        })

                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>}
    </CSSTransitionGroup>
  );
};
export default HotShowPopup;
