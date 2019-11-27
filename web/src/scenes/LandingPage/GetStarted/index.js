import React from 'react';
import getStartedimg1 from '../../../assets/images/Tile-1.png';
import getStartedimg2 from '../../../assets/images/Tile-2.png';
import getStartedimg3 from '../../../assets/images/Tile-3.png';
import { Link } from 'react-router-dom';
const GetStarted = ({ getStartedData }) => {
  let imgArr = [getStartedimg1, getStartedimg2, getStartedimg3];
  let navigateArr = [
    '/corporate/ticket-with-us',
    '/corporate/ticketing-technology',
    '/corporate/partner-with-us'
  ];
  if (getStartedData) {
    getStartedData = getStartedData.map((el, i) => {
      return {
        ...el,
        img: imgArr[i],
        button_link: el.button_link || navigateArr[i]
      };
    });
  }
  return (
    <section>
      <div className="getstarted-block">
        <h2>Get Started</h2>
        <div className="container">
          <div className="row d-flex justify-content-center">
            {getStartedData &&
              getStartedData.map(getStarted => {
                return (
                  <div
                    className="col-lg-4 getstarted-content"
                    key={getStarted.title}
                  >
                    <div className="view">
                      <div className="front">
                        <p className="programmes-img">
                          <img src={getStarted.img} alt="reach-img" />
                        </p>
                        <h3 className="programmes-text">{getStarted.title}</h3>
                      </div>
                      <div className="mask">
                        <div className="mask_view">
                          <div className="mask_content">
                            <h3>{getStarted.title}</h3>
                            <div
                              className="text-center sub-text"
                              dangerouslySetInnerHTML={{
                                __html: getStarted.description
                              }}
                            />
                          </div>
                          <Link to={getStarted.button_link}>
                            {getStarted.button_text}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
