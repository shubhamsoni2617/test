import React, { useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Link, Redirect } from 'react-router-dom';
import 'react-day-picker/lib/style.css';
import tickArrow from '../../../assets/images/tick-grey.svg';
import moment from 'moment';
import tickArrowWhite from '../../../assets/images/tick-white.svg';
import crossArrow from '../../../assets/images/cross-grey.svg';
import crossArrowWhite from '../../../assets/images/cross-white.svg';
import './style.scss';

const Calender = (props) => {
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [enteredTo, setEnteredTo] = useState(null);

  const isSelectingFirstDay = (from, to, day) => {
    const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
    const isRangeSelected = from && to;
    return !from || isBeforeFirstDay || isRangeSelected;
  }

  const handleDayClick = (day) => {
    const range = DateUtils.addDayToRange(day, {from: from, to: to});
    setFrom(range.from)
    setTo(range.to);

  }

  const handleDayMouseEnter = (day) => {
    if (!isSelectingFirstDay(from, to, day)) {
      setEnteredTo(day);
    }
  }

  const handleResetClick = () => {
    setFrom(null);
    setTo(null);
    setEnteredTo(null);
  }

  const formatDate = (date) => {
    return moment(date).format('DD MMM YYYY');
  }

  const modifiers = { start: from, end: to ? to : enteredTo, currentDay: new Date };
  const disabledDays = { before: from };
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
        // selectedDays={[from, { from, to }]}
        disabledDays={{before: new Date()}}
        modifiers={modifiers}
        onDayClick={handleDayClick}
        onDayMouseEnter={handleDayMouseEnter}
        captionElement={({ date, localeUtils }) => (
          <div className="DayPicker-Caption" role="heading"><div>{moment(date).format('MMMM')}</div></div>
        )}
      />

      <div className="calender-action">
        <form>
          <div className="form-group">
            <label>From</label>
            <input type="text" className="form-control"
              defaultValue={fromDateValue}
              disabled
            />
          </div>
          <div className="form-group">
            <label>To</label>
            <input type="text" className="form-control"
              defaultValue={toDateValue}
              disabled
            />
          </div>
          <div className="calender-action-btn">
            <a className="cal-cancel-btn" onClick={handleResetClick}>
              <img src={crossArrow} alt="" />
              <img src={crossArrowWhite} alt="" className="active" />
            </a>
            <Link
              to={'/events/search?s=' + moment(fromDateValue).format('DD-MM-YYYY') + '--' + moment(toDateValue).format('DD-MM-YYYY')}
              className="cal-apply-btn active"
              onClick={() => {
                props.handleEnter(false)
              }}
            >
              <img src={tickArrow} alt="" />
              <img src={tickArrowWhite} className="active" alt="" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Calender;
