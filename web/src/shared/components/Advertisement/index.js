import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import closeAd from '../../../assets/images/close-ad.svg';
import closeAdhover from '../../../assets/images/cross.svg';
import AdvertisementService from '../../services/AdvertisementService';
import Constants from '../../constants';
const Advertisement = props => {
  const refValue = useRef();
  const [homeAdv, setHomeAdv] = useState(
    props.response && props.response.leaderBoardData
      ? props.response.leaderBoardData.data
      : null
  );

  const handleClose = () => {
    sessionStorage.setItem('advertisment', false);
    refValue.current.flag = false;
    refValue.current.classList.remove('show-add');
  };

  useEffect(() => {
    refValue.current.flag = true;
    if (
      props.history.location.pathname === '/' ||
      props.history.location.pathname.split('/')[1] === 'attractions' ||
      props.history.location.pathname.split('/')[1] === 'promotions' ||
      props.history.location.pathname.split('/')[1] === 'explore'
    ) {
      !sessionStorage.getItem('advertisment') &&
        refValue.current.classList.add('show-add');
    }
    const unlisten = props.history.listen(location => {
      setTimeout(() => {
        if (location.pathname !== '/') {
          if (
            location.pathname.split('/')[1] === 'attractions' ||
            location.pathname.split('/')[1] === 'promotions' ||
            location.pathname.split('/')[1] === 'explore'
          ) {
            !sessionStorage.getItem('advertisment') &&
              refValue.current.classList.add('show-add');
          } else {
            refValue.current.classList.remove('show-add');
          }
        } else if (refValue.current.flag) {
          !sessionStorage.getItem('advertisment') &&
            refValue.current.classList.add('show-add');
        }
      }, 2000);
    });
    return () => {
      unlisten();
    };
  }, [refValue]);

  useEffect(() => {
    if (window.__INITIAL_DATA__ && window.__INITIAL_DATA__.leaderBoardData) {
      setHomeAdv(window.__INITIAL_DATA__.leaderBoardData.data);
    } else {
      getLeaderboardImage();
    }
  }, []);

  const getLeaderboardImage = () => {
    const params = {
      client: Constants.CLIENT,
      page: 1,
      limit: 1,
      first: 0
    };
    AdvertisementService.getLeaderboardImage(params)
      .then(res => {
        if (res && res.data) {
          setHomeAdv(res.data.data);
        }
      })
      .catch(err => {
        if (err && err.response) {
          console.log(err.response.data);
        }
      });
  };

  if (homeAdv && homeAdv.length === 0)
    return <div className={`show-add no-ads`} ref={refValue}></div>;

  return (
    <div className="homeTop" ref={refValue}>
      {homeAdv &&
        homeAdv.map(elem => {
          return (
            <div key={elem.title}>
              <a href={elem && elem.navigation_link} target="_blank">
                <img
                  src={elem && elem.full_image}
                  alt={elem && elem.alt_text}
                  className="img-fluid"
                  title={elem && elem.title}
                />
              </a>
              <button
                type="button"
                className="ads-close"
                aria-label="Close"
                onClick={() => handleClose()}
              >
                <img src={closeAd} className="img-fluid" alt="close" />
                <img
                  src={closeAdhover}
                  className="img-fluid hover-img"
                  alt="close"
                />
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default Advertisement;

Advertisement.propTypes = {
  history: PropTypes.object.isRequired
};
