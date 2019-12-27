import React, { useState, useEffect } from 'react';
import './style.scss';
import HomeService from '../../services/HomeService';
import nextarrow from '../../../assets/images/next-arrow-white.svg';
import ReactPlayer from 'react-player';
import { CSSTransition } from 'react-transition-group';
import Utilities from '../../utilities';
import Image from '../Image';
import popupClose from '../../../assets/images/cross.svg';

const HotShowPopup = () => {
  const [popupData, setPopupData] = useState([]);
  const [flag, setFlag] = useState(false);
  const [flashsaleClass, setFlashsaleClass] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('hotshow')) {
      setTimeout(() => setFlag(true), 1000);
      let params = { client: 1 };
      HomeService.getFlashSale(params)
        .then(res => {
          setPopupData(res.data.data);
          if (
            (res.data.data.length && !Utilities.mobilecheck()) ||
            (Utilities.mobilecheck() &&
              res.data.data[0].hide_smartphone !== '1')
          ) {
            setFlashsaleClass(true);
            addOverlayClass();
          } else {
            setPopupData([]);
            HomeService.getHotShowPopupData()
              .then(res => {
                setPopupData(res.data.data);
                if (res.data.data.length) addOverlayClass();
              })
              .catch(() => {
                removeOverlayClass();
              });
          }
        })
        .catch(() => {
          removeOverlayClass();
        });
    }
  }, []);

  const removeOverlayClass = () => {
    sessionStorage.setItem('hotshow', false);
    setFlag(false);
    document.body.classList.remove('hotshowpopup-overlay');
  };

  const addOverlayClass = () =>
    document.body.classList.add('hotshowpopup-overlay');

  return (
    // <CSSTransitionGroup
    //   transitionName="hotshow"
    //   transitionEnter={true}
    //   transitionEnterTimeout={500}
    //   transitionLeaveTimeout={500}
    // >
    <>
      {flag && popupData.length && (
        <div
          className={`hotshow-popup ${
            flashsaleClass ? `flashsale-wrapper` : ``
          }`}
        >
          <div
            className="hotshow-overlay"
            onClick={() => {
              console.log('test');
              removeOverlayClass();
            }}
          />
          <div className="hotshow container">
            {flashsaleClass && (
              <span onClick={removeOverlayClass}>
                <img src={popupClose} alt="Close Popup" />
              </span>
            )}
            {!flashsaleClass && (
              <div className="hotshow-topbar">
                <div className="hotshow-topbar-left">
                  <span>
                    We are anticipating very high demand for the following show
                    {popupData.length === 1 ? '' : '(s)'}.
                  </span>
                </div>
                <div className="hotshow-topbar-right">
                  <span onClick={() => removeOverlayClass()}>
                    Continue to SISTIC <img src={nextarrow} alt="" />
                  </span>
                </div>
              </div>
            )}

            <div className="hotshow-wrapper">
              {popupData.length === 2 &&
                popupData &&
                popupData.map((objData, index) => {
                  return (
                    <div className="hotshow-block" key={index}>
                      <div className="hotshowimg">
                        {objData.type && objData.type.id === 2 ? (
                          <ReactPlayer
                            className="react-player"
                            url={objData.video_url}
                            controls={true}
                            width="100%"
                            height="100%"
                          />
                        ) : (
                          <Image
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
                        {objData.buttons &&
                          objData.buttons.length > 0 &&
                          objData.buttons.map((obj, idx) => {
                            let styleObj = {
                              background: obj.b_color,
                              color: obj.b_font_color
                            };
                            return (
                              <div key={idx}>
                                <a
                                  href={obj.b_url}
                                  rel="noopener noreferrer"
                                  target="_blank"
                                  style={styleObj}
                                >
                                  {obj.b_name}
                                </a>
                              </div>
                            );
                          })}
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
                      <a href={objData.navigation_link} className="hotshowimg">
                        {objData.type && objData.type.id === 2 ? (
                          <ReactPlayer url={objData.video_url} controls />
                        ) : (
                          <Image
                            src={objData.full_image}
                            alt=""
                            className="img-fluid"
                          />
                        )}
                      </a>
                      <div className="hotshow-content">
                        {objData.title && (
                          <a href={objData.navigation_link}>{objData.title}</a>
                        )}
                        {objData.description && (
                          <div
                            dangerouslySetInnerHTML={{
                              __html: objData.description
                            }}
                          />
                        )}

                        {objData.buttons &&
                          objData.buttons.length > 0 &&
                          objData.buttons.map((obj, idx) => {
                            let styleObj = {
                              background: obj.b_color,
                              color: obj.b_font_color
                            };
                            return (
                              <div key={idx}>
                                <a href={obj.b_url} style={styleObj}>
                                  {obj.b_name}
                                </a>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
      {/* </CSSTransitionGroup> */}
    </>
  );
};
export default HotShowPopup;
