import React, { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import VenueFilter from '../VenueFilter';
import { Submenu } from '../Submenu';
import Utilities from '../../utilities';

function ShowMoreButton(props) {
  return (
    <a
      href="/"
      onClick={e => {
        e.preventDefault();
        props.onClick();
      }}
      className="view-all-filters"
    >
      {props.title}
    </a>
  );
}

const FilterGrid = props => {
  const [limit, setLimit] = useState(props.limit);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [activeClass, setActiveClass] = useState('');
  const [data, setData] = useState([]);
  const [panelDisplay, setPanelDisplay] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const element = useRef(null);

  useEffect(() => {
    setData(props.data || []);
    if (Utilities.mobilecheck()) {
      setLimit(props.data.length);
    }
  }, [props.data]);

  useEffect(() => {
    if (props.selectedFilter) {
      setSelectedFilters(props.selectedFilter);
    }
  }, [props.selectedFilter]);

  useEffect(() => {
    if (selectedFilters) {
      let text = `Select ${props.title}`;
      if (selectedFilters && selectedFilters.length) {
        let selectedValue = props.data.filter(
          item => item.id == selectedFilters[0]
        );
        text = `${selectedValue[0] && selectedValue[0].name}`;
        if (selectedFilters.length > 1) {
          text = `${text} and ${selectedFilters.length - 1} more `;
        }
      }
      setButtonText(text);
    }
  }, [selectedFilters]);

  const selectAll = status => {
    let items = [];
    if (status) items = [...props.data].map(item => item.id);
    setActiveClass(status);
    setSelectedFilters(items);
    applyFilters(items, !Utilities.mobilecheck());
  };

  const resetFilters = () => {
    let newFilterValue = [];
    setSelectedFilters(newFilterValue);
    applyFilters(newFilterValue, false);
  };

  const onChange = (e, id) => {
    let newFilterValue = [...selectedFilters];
    if (e.target.checked) {
      newFilterValue.push(id);
    } else {
      const index = selectedFilters.indexOf(id);
      if (index > -1) newFilterValue.splice(index, 1);
    }
    setSelectedFilters(newFilterValue);
    let status = true;
    if (Utilities.mobilecheck()) {
      status = false;
    }
    applyFilters(newFilterValue, status);
  };

  const applyFilters = (newFilterValue, status = true) => {
    let newFilterObject = {};
    if (status) {
      newFilterObject[props.category] = newFilterValue || selectedFilters;
    }
    newFilterObject['local' + props.category] =
      newFilterValue || selectedFilters;
    props.handleFilters(newFilterObject, status);
    
  };

  if (!data.length) return null;

  return (
    <div className="filter-grid">
      <div className="filter-grid-heading">
        <h3>{props.title}</h3>
        <ul>
          <li className={activeClass ? 'active' : ''}>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                selectAll(true);
              }}
            >
              Select all
            </a>
          </li>
          <li className={activeClass ? '' : 'active'}>
            <a
              href="/"
              onClick={e => {
                e.preventDefault();
                selectAll(false);
              }}
            >
              Clear
            </a>
          </li>
        </ul>
      </div>
      <Submenu>
        {(menueStatus, setMenuStatus) => (
          <>
            <button
              className={`backbutton ${menueStatus ? 'active' : ''}`}
              type="button"
              onClick={() => setMenuStatus(!menueStatus)}
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
                      // resetFilters && resetFilters();
                      setMenuStatus(false);
                    }}
                  >
                    <img src="../../assets/images/next.svg"></img>
                  </button>
                  <h3>
                    {props.title}
                    <button
                      className="homepage-clear-filter"
                      onClick={() => selectAll(false)}
                    >
                      Clear Filters
                    </button>
                  </h3>
                </div>
              </div>
              <div className="filters-panel open">
                <ul>
                  {/* <CSSTransitionGroup
                    transitionName="dropdown"
                    transitionEnter={true}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                  > */}
                  {data.length &&
                    data.slice(0, limit).map((item, key) => {
                      let id = 'item-' + item.id;
                      let isChecked = false;
                      let index;
                      if (selectedFilters) {
                        index = selectedFilters.indexOf(item.id);
                        isChecked = index > -1;
                      }
                      return (
                        <li key={key}>
                          <input
                            checked={isChecked}
                            onChange={e => onChange(e, data[key].id)}
                            className="styled-checkbox"
                            type="checkbox"
                            id={id}
                            value=""
                          />
                          <label htmlFor={id}>
                            {item.name}{' '}
                            {item.events_count ? `(${item.events_count})` : ''}
                            {item.attractions ? `(${item.attractions})` : ''}
                          </label>
                        </li>
                      );
                    })}
                  {/* </CSSTransitionGroup> */}
                </ul>
                {props.limit !== data.length && !Utilities.mobilecheck() ? (
                  <>
                    {data.length > limit && (
                      <ShowMoreButton
                        title={`+ ${`${data.length - limit} More`}`}
                        onClick={() => {
                          props.showPanel
                            ? setPanelDisplay(true)
                            : setLimit(data.length);
                        }}
                      />
                    )}
                    {data.length === limit && (
                      <ShowMoreButton
                        title={'- Show Less'}
                        onClick={() => {
                          props.showPanel
                            ? setPanelDisplay(true)
                            : setLimit(props.limit);
                        }}
                      />
                    )}
                  </>
                ) : null}

                <VenueFilter
                  ref={element}
                  onChange={onChange}
                  setPanelDisplay={setPanelDisplay}
                  panelDisplay={panelDisplay}
                  venueData={data}
                  {...props}
                />
              </div>
              <div
                className={`filter-fixed-btn ${menueStatus ? 'show' : 'hide'}`}
              >
                <button
                  onClick={() => {
                    setMenuStatus(false);
                    applyFilters();
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
};
export default memo(FilterGrid);

ShowMoreButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

FilterGrid.propTypes = {
  category: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  selectedFilter: PropTypes.array,
  showPanel: PropTypes.bool
};
