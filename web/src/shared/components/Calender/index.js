import React, { useState } from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import { Link, Redirect } from 'react-router-dom';
import 'react-day-picker/lib/style.css';
import './style.scss';

const Calender = (props) => {

    const [from, setFrom] = useState(null);
    const [to, setTo] = useState(null);
    const [enteredTo, setEnteredTo] = useState(null);
    const [redirectTo, setRedirectTo] = useState(false);

    const isSelectingFirstDay = (from, to, day) => {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
        const isRangeSelected = from && to;
        return !from || isBeforeFirstDay || isRangeSelected;
    }

    const handleDayClick = (day) => {
        if (from && to && day >= from && day <= to) {
            handleResetClick();
            return;
        }
        if (isSelectingFirstDay(from, to, day)) {
            setFrom(day);
            setTo(null);
            setEnteredTo(null);
        } else {
            setTo(day);
            setEnteredTo(day);
        }
    }

    const handleDayMouseEnter = (day) => {
        if (!isSelectingFirstDay(from, to, day)) {
            setEnteredTo(day)
        }
    }

    const handleResetClick = () => {
        setFrom(null);
        setTo(null);
        setEnteredTo(null);
    }

    const handleRedirectClick = () => {
        setRedirectTo(true)
    }

    const formatDate = (date) => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        return (
            date.getDate() + '-' + monthNames[date.getMonth()] + '-' + date.getFullYear()
        );
    }

    const modifiersStyles = {
        currentDay: {
            color: 'red',
            backgroundColor: 'white',
        },
    };


    if (redirectTo) {
        return (
            <Redirect
                to={{
                    pathname: '/event',
                    data: {
                        from: from,
                        to: to
                    }
                }}
            />
        );
    }

    const modifiers = { start: from, end: enteredTo, currentDay: new Date };
    const disabledDays = { before: from };
    const selectedDays = [from, { from, to: enteredTo }];

    var fromDateValue = from ? formatDate(from) : null;
    var toDateValue = to ? formatDate(to) : null;

    return (
        <div>
            <DayPicker
                className="Range"
                numberOfMonths={1}
                fromMonth={from}
                selectedDays={selectedDays}
                disabledDays={disabledDays}
                modifiers={modifiers}
                modifiersStyles={modifiersStyles}
                onDayClick={handleDayClick}
                onDayMouseEnter={handleDayMouseEnter}
            />

            <div className="calender-action">
                <form>
                    <div className="form-group">
                        <label>From</label>
                        <input type="text" className="form-control" placeholder="06 May 2019"
                            defaultValue={fromDateValue}
                            disabled
                        />
                    </div>
                    <div className="form-group">
                        <label>To</label>
                        <input type="text" className="form-control" placeholder="15 May 2019"
                            defaultValue={toDateValue}
                            disabled
                        />
                    </div>
                    <div className="calender-action-btn">
                        <Link to="/" className="cal-cancel-btn" onClick={handleResetClick}>
                            <img src="assets/images/cross-grey.svg" className="" alt="" />
                            <img src="assets/images/cross-white.svg" alt="" className="active" />
                        </Link>
                        <Link to="/" className="cal-apply-btn active" onClick={handleRedirectClick}>
                            <img src="assets/images/tick-grey.svg" className="" alt="" />
                            <img src="assets/images/tick-white.svg" className="active" alt="" />
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Calender;