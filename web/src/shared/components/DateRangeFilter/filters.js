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
import { Submenu } from '../Submenu';

function DateRangeFilter(props) {
  const element = useRef(null);
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [flag, setFlag] = useState(true);
  const [buttonText, setButtonText] = useState('');

  // useEffect(() => {
  //   setFlag(false);
  // }, [props.filterFlag]);

  useEffect(() => {
    let text = `Select Date `;
    if (
      props.selectedFilter.from &&
      props.selectedFilter.from !== '' &&
      props.selectedFilter.to !== ''
    ) {
      setButtonText(
        `${moment(props.selectedFilter.from).format('D-MMM-YYYY')} - ${moment(
          props.selectedFilter.to
        ).format('D-MMM-YYYY')}`
      );
    } else {
      setButtonText(text);
    }
  }, [props.selectedFilter]);

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
    if (Utilities.mobilecheck()) {
      props.handleFilters({
        localfilteredDateRange: {
          from: '',
          to: ''
        }
      });
    } else {
      props.handleFilters({
        filteredDateRange: {
          from: '',
          to: ''
        }
      });
    }
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
        <h3>Date Range</h3>
        <ul>
          {/* <li className="active clear">
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                clearCalender();
              }}
            >
              Clear
            </a>
          </li> */}
          <li className={from || to ? 'active' : ''}>
            {(from || to) && (
              <a
                href="/"
                onClick={e => {
                  e.preventDefault();
                  clearCalender();
                }}
              >
                Clear
              </a>
            )}
            {!from && !to && <span>Clear</span>}
          </li>
        </ul>
      </div>

      <Submenu>
        {(menueStatus, setMenuStatus) => (
          <>
            <button
              className={`backbutton ${menueStatus ? 'active' : ''}`}
              type="button"
              onClick={() => {
                setMenuStatus(!menueStatus);
                props.setFixed(true);
              }}
            >
              {buttonText}
            </button>
            <div
              className={`submenu-holder submenu-wrap ${
                menueStatus ? 'active' : ''
              }`}
            >
              <div className="subholder-wrapper">
                <div className="filter-heading">
                  <button
                    type="button"
                    onClick={() => {
                      setMenuStatus(false);
                      props.setFixed(false);
                    }}
                  >
                    <img src="../../assets/images/next.svg"></img>
                  </button>
                  <h3>
                    {props.title}
                    <button
                      className="homepage-clear-filter"
                      onClick={() => clearCalender()}
                    >
                      Clear Filters
                    </button>
                  </h3>
                </div>
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
                        toMonth: to
                          ? new Date(moment(to).format('YYYY-MM-DD'))
                          : null,
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
                    Apply
                  </button>
                )}
              </div>

              <div
                className={`filter-fixed-btn ${menueStatus ? 'show' : 'hide'}`}
              >
                <button
                  onClick={() => {
                    setMenuStatus(false);
                    props.setFixed(false);
                    props.toggleFilterSection();
                    props.handleFilters(
                      {
                        filteredDateRange: {
                          from:
                            from && to ? moment(from).format('YYYY-MM-DD') : '',
                          to: from && to ? moment(to).format('YYYY-MM-DD') : ''
                        }
                      },
                      true
                    );
                  }}
                >
                  Apply
                </button>
              </div>
            </div>
          </>
        )}
      </Submenu>
    </div>
  );
}
DateRangeFilter.propTypes = {
  handleFilters: PropTypes.func.isRequired,
  filteredDateRange: PropTypes.object.isRequired
};

export default DateRangeFilter;
