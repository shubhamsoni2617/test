import React, { useState, useEffect, useRef, memo } from "react";
import closeNews from "../../../assets/images/close-ad.svg";
import "./style.scss";
import HomeService from "../../../shared/services/HomeService";

const NewsTicker = props => {
  const { homePageRef } = props;
  const [newsTicker, setNewsTicker] = useState([]);
  const refValue = useRef();
  const refMarquee = useRef();
  useEffect(() => {
    HomeService.getNewsTicker({
      client: 1
    })
      .then(res => {
        setNewsTicker(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!props.modal && refMarquee.current) refMarquee.current.start();
  }, [refMarquee.current, props.modal]);

  const handleClose = () => {
    sessionStorage.setItem('ticker', false);
    refValue.current.classList.remove("hide-news");
    homePageRef.current.classList.add("news-ticker-hide");
  };
  const handleOnclick = desc => {
    refMarquee.current.stop();
    props.showNewsTicker({ modal: true, modalContent: desc });
  };
  const handleMarquee = () => {
    if (!props.modal) refMarquee.current.start();
  };

  if (newsTicker.length == 0) {
    return null;
  }

  return (
    <>
      <div className={`ticker-wrap ${!sessionStorage.getItem('ticker') ? 'hide-news' : ''}`} ref={refValue}>
        <div className="ticker-container">
          <div className="ticker">
            <marquee
              behavior="scroll"
              onMouseEnter={() => refMarquee.current.stop()}
              onMouseLeave={() => handleMarquee()}
              ref={refMarquee}
            >
              <div>
                {newsTicker.map((content, index) => {
                  let string = content.description;
                  let stringLength = 180;
                  if (string.length > 180)
                    string = `${string.substring(0, stringLength)}...`;

                  return (
                    <div
                      key={index}
                      key={content.title}
                      dangerouslySetInnerHTML={{ __html: string }}
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
    </>
  );
};
export default memo(NewsTicker);
