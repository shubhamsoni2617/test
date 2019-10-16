import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import closeAd from '../../../assets/images/close-ad.svg';
import AdvertisementService from '../../services/AdvertisementService';
import Constants from '../../constants';
const Advertisement = props => {
  const refValue = useRef();
  const [homeAdv, setHomeAdv] = useState([]);

  const handleClose = () => {
    sessionStorage.setItem('advertisment', false);
    refValue.current.flag = false;
    refValue.current.classList.remove('show-add');
  };

  useEffect(() => {
    refValue.current.flag = true;
    if (props.history.location.pathname === '/') {
      !sessionStorage.getItem('advertisment') &&
        refValue.current.classList.add('show-add');
    }
    const unlisten = props.history.listen(location => {
      setTimeout(() => {
        if (location.pathname !== '/') {
          refValue.current.classList.remove('show-add');
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
    getLeaderboardImage();
  }, []);

  const getLeaderboardImage = () => {
    const params = {
      client: Constants.CLIENT,
      page: 1
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
  return (
    <div className="top-ads" ref={refValue}>
      {homeAdv &&
        homeAdv.map(elem => {
          return (
            <div className="container-fluid" key={elem.title}>
              <a href={elem && elem.navigation_link} target="_blank">
                <div className="ads-image">
                  <img
                    src={elem && elem.full_image}
                    alt={elem && elem.alt_text}
                    className="img-fluid"
                    title={elem && elem.title}
                  />
                </div>
              </a>
              <button
                type="button"
                className="ads-close"
                aria-label="Close"
                onClick={() => handleClose()}
              >
                <img src={closeAd} className="img-fluid" alt="close" />
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
