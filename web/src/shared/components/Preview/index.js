import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import closeAd from '../../../assets/images/close-ad.svg';
import AdvertisementService from '../../services/AdvertisementService';
import Constants from '../../constants';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

const Preview = props => {
  return (
    <>
      <h1>React Modal</h1>
      <Modal show={true}>
        <p>Modal</p>
        <p>Data</p>
      </Modal>
      <button type="button">Open</button>
    </>
  );
};

export default Preview;
