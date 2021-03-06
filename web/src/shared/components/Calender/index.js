import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Link } from 'react-router-dom';
import 'react-day-picker/lib/style.css';
import tickArrow from '../../../assets/images/tick-grey.svg';
import moment from 'moment';
import tickArrowWhite from '../../../assets/images/tick-white.svg';
import crossArrow from '../../../assets/images/cross-grey.svg';
import crossArrowWhite from '../../../assets/images/cross-white.svg';
import './style.scss';

const Calender = props => {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [enteredTo, setEnteredTo] = useState(null);

  const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  };

  const handleDayClick = day => {
    const range = DateUtils.addDayToRange(day, { from: from, to: to });
    setFrom(range.from);
    setTo(range.to);
  };

  const handleDayMouseEnter = day => {
    if (!isSelectingFirstDay(from, to, day)) {
      setEnteredTo(day);
    }
  };

  const handleResetClick = () => {
    setFrom(null);
    setTo(null);
    setEnteredTo(null);
  };

  const formatDate = date => {
    return moment(date).format('DD MMM YYYY');
  };

  const modifiers = {
    start: from,
    end: to ? to : enteredTo,
    currentDay: new Date()
  };

  const selectedDays = [from, { from, to: to ? to : enteredTo }];

  let fromDateValue = from ? formatDate(from) : null;
  let toDateValue = to ? formatDate(to) : null;

  return (
    <div>
      <DayPicker
        className="Range"
        numberOfMonths={1}
        fromMonth={new Date()}
        selectedDays={selectedDays}
        disabledDays={{ before: new Date() }}
        modifiers={modifiers}
        onDayClick={handleDayClick}
        onDayMouseEnter={handleDayMouseEnter}
        captionElement={({ date }) => (
          <div className="DayPicker-Caption" role="heading">
            <div>{moment(date).format('MMMM YYYY')}</div>
          </div>
        )}
      />

      <div className="calender-action">
        <form>
          <div className="form-group">
            <label>From</label>
            <input
              type="text"
              className="form-control"
              defaultValue={fromDateValue}
              disabled
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <input
              type="text"
              className="form-control"
              defaultValue={toDateValue}
              disabled
            />
          </div>
          <div className="calender-action-btn">
            <a
              href="/"
              className="cal-cancel-btn"
              onClick={e => {
                e.preventDefault();
                handleResetClick();
              }}
            >
              <img src={crossArrow} alt="" />
              <img src={crossArrowWhite} alt="cross-arrow" className="active" />
            </a>
            {fromDateValue !== null && toDateValue !== null ? (
              <Link
                to={
                  '/events/search?s=' +
                  moment(fromDateValue).format('YYYY-MM-DD') +
                  '--' +
                  moment(toDateValue).format('YYYY-MM-DD')
                }
                className="cal-apply-btn active"
                onClick={() => {
                  if (props.submenuRef && props.submenuRef.current) {
                    props.submenuRef.current.style.display = 'none';
                  }
                  props.handleEnter(false);
                }}
              >
                <img src={tickArrow} alt="" />
                <img src={tickArrowWhite} className="active" alt="" />
              </Link>
            ) : (
              <Link className="cal-apply-btn">
                <img src={tickArrow} alt="" />
                <img src={tickArrowWhite} className="active" alt="" />
              </Link>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default Calender;

Calender.propTypes = {
  handleEnter: PropTypes.func
};
