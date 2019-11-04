import React from 'react';
import getStartedimg1 from '../../../assets/images/Tile-1.png';
import getStartedimg2 from '../../../assets/images/Tile-2.png';
import getStartedimg3 from '../../../assets/images/Tile-3.png';
const GetStarted = ({ getStartedData }) => {
  let imgArr = [getStartedimg1, getStartedimg2, getStartedimg3];

  if (getStartedData) {
    getStartedData = getStartedData.map((el, i) => {
      return { ...el, img: imgArr[i] };
    });
  }
  return (
    <section>
      <div class="getstarted-block">
        <h2>Get Started</h2>
        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-4 getstarted-content">
              {getStartedData &&
                getStartedData.map(getStarted => {
                  return (
                    <div class="view">
                      <div class="front">
                        <p class="programmes-img">
                          <img src={getStarted.img} alt="reach-img" />
                        </p>
                        <h3 class="programmes-text">{getStarted.title}</h3>
                      </div>
                      <div class="mask">
                        <div class="mask_view">
                          <h3>{getStarted.title}</h3>
                          <div
                            className="text-center sub-text"
                            dangerouslySetInnerHTML={{
                              __html: getStarted.description
                            }}
                          />
                          <a href={getStarted.button_link}>
                            {getStarted.button_text}
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
