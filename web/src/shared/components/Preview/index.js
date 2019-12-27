import React, { useState, useRef, useEffect } from 'react';
import './style.scss';
// import DayPickerInput from 'react-day-picker/DayPickerInput';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import moment from 'moment';
import usePrevious from '../../../shared/hooks/usePrevious';
import query from '../../../shared/HelperFunctions/queryString';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show
    ? 'modal-preview display-block'
    : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <h5>Pick a date</h5>
      <section className="modal-main">{children}</section>
    </div>
  );
};

const Preview = ({ history, urlDate }) => {
  const [currentDate, setCurrentDate] = useState('');
  const prevCurrentDate = usePrevious(currentDate);

  return (
    <>
      <Modal show={true}>
        <div>
          <DayPicker
            showOverlay={false}
            selectedDays={
              currentDate ? [new Date(currentDate)] : [new Date(urlDate)]
            }
            onDayClick={day => {
              setCurrentDate(moment(day).format('YYYY-MM-DD'));
            }}
            placeholder={`YYYY-MM-DD`}
          />
        </div>
        <button
          onClick={() => {
            if (currentDate && history && urlDate !== currentDate) {
              let search = `date=${currentDate}`;
              history.push({
                search
              });
              window.location.reload();
            }
          }}
        >
          Preview
        </button>
      </Modal>
    </>
  );
};

export default Preview;
