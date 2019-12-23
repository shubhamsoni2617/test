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
      <h5>Please pick a date</h5>
      <section className="modal-main">{children}</section>
    </div>
  );
};

const Preview = props => {
  const [currentDate, setCurrentDate] = useState('');
  return (
    <>
      <Modal show={true}>
        <div>
          <DayPickerInput
            onDayChange={day =>
              setCurrentDate(moment(day).format('YYYY-MM-DD'))
            }
            placeholder={`YYYY-MM-DD`}
          />
        </div>
        <button
          onClick={() => {
            props.previewDate(currentDate);
          }}
        >
          Preview
        </button>
      </Modal>
    </>
  );
};

export default Preview;
