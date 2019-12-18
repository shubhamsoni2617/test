import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import moment from 'moment';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? 'modal-preview display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <section className="modal-main">{children}</section>
    </div>
  );
};

const Preview = props => {
  return (
    <>
      <Modal show={true}>
        <div>
          <DayPickerInput
            onDayChange={day => console.log(day)}
            placeholder={`YYYY-MM-DD`}
          />
        </div>
        <button>Preview</button>
      </Modal>
    </>
  );
};

export default Preview;