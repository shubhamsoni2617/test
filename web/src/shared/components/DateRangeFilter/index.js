import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { formatDate, parseDate } from 'react-day-picker/moment';
import Utilities from '../../utilities';
import 'react-day-picker/lib/style.css';
import 'react-tabs/style/react-tabs.css';
import 'react-input-range/lib/css/index.css';
import tickWhite from '../../../assets/images/tick-white.svg';

function DateRangeFilter(props) {
  const element = useRef(null);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [flag, setFlag] = useState(true);

  // useEffect(() => {
  //   setFlag(false);
  // }, [props.filterFlag]);

  useEffect(() => {
    const getDate = dateStr => {
      const date = new Date(dateStr);
      return date.toString() === 'Invalid Date' ? '' : date;
    };
    setTo(
      props.filteredDateRange && props.filteredDateRange.to
        ? getDate(props.filteredDateRange.to)
        : ''
    );
    setFrom(
      props.filteredDateRange && props.filteredDateRange.from
        ? getDate(props.filteredDateRange.from)
        : ''
    );
  }, [props.filteredDateRange]);

  const clearCalender = () => {
    props.handleFilters({
      localfilteredDateRange: {
        from: '',
        to: ''
      }
    });
  };

  const showFromMonth = () => {
    if (!from) {
      return;
    }
    if (moment(to).diff(moment(from), 'months') < 2) {
      element.current.getDayPicker().showMonth(from);
    }
  };

  // Date Range methods
  const handleFromChange = fromDate => {
    setFrom(fromDate);
    if (Utilities.mobilecheck() && props.autoSubmit && fromDate && to) {
      filterByDateRange(fromDate, to);
    }
  };

  const handleToChange = toDate => {
    setTo(toDate);
    showFromMonth();
    if (Utilities.mobilecheck() && props.autoSubmit && from && toDate) {
      filterByDateRange(from, toDate);
    }
  };

  const filterByDateRange = (fromDate, toDate) => {
    props.handleFilters(
      Utilities.mobilecheck()
        ? {
          localfilteredDateRange: {
            from: moment(fromDate).format('YYYY-MM-DD'),
            to: moment(toDate).format('YYYY-MM-DD')
          }
        }
        : {
          filteredDateRange: {
            from: moment(fromDate).format('YYYY-MM-DD'),
            to: moment(toDate).format('YYYY-MM-DD')
          }
        }
    );
  };

  const modifiers = { start: from, end: to };

  return (
    <div className="filter-grid date-range">
      <div className="filter-grid-heading">
        <h3>Selected Date range</h3>
        <ul>
          <li className="active clear">
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                clearCalender();
              }}
            >
              Clear
            </a>
          </li>
        </ul>
      </div>
      <div className={`select-date select-range ${flag ? 'active' : ''}`}>
        <button onClick={() => setFlag(!flag)}>Select Date</button>
      </div>
      <div className={`filters-panel ${flag ? 'open' : ''}`}>
        <div className="date-input-to">
          <label>From</label>
          <span className="InputFromTo">
            <DayPickerInput
              value={from}
              placeholder="mm/dd/yyyy"
              format="MM/DD/YYYY"
              showOverlay={false}
              formatDate={formatDate}
              parseDate={parseDate}
              inputProps={{ readOnly: true }}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { before: new Date(), after: to },
                fromMonth: new Date(),
                toMonth: to ? new Date(moment(to).format('YYYY-MM-DD')) : null,
                modifiers,
                numberOfMonths: 1,
                onDayClick: () => element.current.getInput().focus()
              }}
              onDayChange={handleFromChange}
            />
          </span>
        </div>
        <div className="date-input-from">
          <label>To</label>
          <span className="InputFromTo-to">
            <DayPickerInput
              ref={element}
              inputProps={{ readOnly: true }}
              value={to}
              placeholder="mm/dd/yyyy"
              format="MM/DD/YYYY"
              showOverlay={false}
              formatDate={formatDate}
              parseDate={parseDate}
              dayPickerProps={{
                selectedDays: [from, { from, to }],
                disabledDays: { before: from },
                modifiers,
                month: from
                  ? new Date(moment(from).format('YYYY-MM-DD'))
                  : null,
                fromMonth: from
                  ? new Date(moment(from).format('YYYY-MM-DD'))
                  : new Date(),
                numberOfMonths: 1
                //   onDayClick: () => this.from.getInput().focus()
              }}
              onDayChange={handleToChange}
            />
          </span>
        </div>
        {from && to && props.autoSubmit && (
          <a
            href="/"
            onClick={e => {
              e.preventDefault();
              filterByDateRange(from, to);
            }}
            className="cal-apply-btn active"
          >
            <img src={tickWhite} className="active" alt="tick" />
          </a>
        )}
        {!props.autoSubmit && (
          <button
            className="btn buy-btn cal-search"
            onClick={e => {
              e.preventDefault();
              filterByDateRange(from, to);
            }}
            disabled={from && to ? false : true}
          >
            Search
          </button>
        )}
      </div>
    </div>
  );
}
DateRangeFilter.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  filteredDateRange: PropTypes.object.isRequired
};

export default DateRangeFilter;
