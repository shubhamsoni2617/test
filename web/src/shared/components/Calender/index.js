import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';


class Calender extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            from: null,
            to: null,
            enteredTo: null
        };
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleDayMouseEnter = this.handleDayMouseEnter.bind(this);
    }

    isSelectingFirstDay(from, to, day) {
        const isBeforeFirstDay = from && DateUtils.isDayBefore(day, from);
        const isRangeSelected = from && to;
        return !from || isBeforeFirstDay || isRangeSelected;
    }

    handleDayClick(day) {
        const { from, to } = this.state;
        if (from && to && day >= from && day <= to) {
            return;
        }
        if (this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                from: day,
                to: null,
                enteredTo: null,
            });
        } else {
            this.setState({
                to: day,
                enteredTo: day,
            });
        }
    }

    handleDayMouseEnter(day) {
        const { from, to } = this.state;
        if (!this.isSelectingFirstDay(from, to, day)) {
            this.setState({
                enteredTo: day,
            });
        }
    }


    formatDate(date) {
        return (
            date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate()
        );
    }

    render() {


        const { from, to, enteredTo } = this.state;
        const modifiers = { start: from, end: enteredTo };
        const disabledDays = { before: from };
        const selectedDays = [from, { from, to: enteredTo }];

        var fromDate = from ? new Date(from) : "";
        var toDate = to ? new Date(from) : "";
        var fromDateValue = fromDate ? this.formatDate(fromDate) : null;
        var toDateValue = toDate ? this.formatDate(toDate) : null;

        return (
            <div>
                <DayPicker
                    className="Range"
                    numberOfMonths={1}
                    fromMonth={from}
                    selectedDays={selectedDays}
                    disabledDays={disabledDays}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                    onDayMouseEnter={this.handleDayMouseEnter}
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
                            <a href="/" className="cal-cancel-btn">
                                <img src="assets/images/cross-grey.svg" className="" alt="" />
                                <img src="assets/images/cross-white.svg" alt="" className="active" />
                            </a>
                            <a href="/" className="cal-apply-btn active">
                                <img src="assets/images/tick-grey.svg" className="" alt="" />
                                <img src="assets/images/tick-white.svg" className="active" alt="" />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default Calender;