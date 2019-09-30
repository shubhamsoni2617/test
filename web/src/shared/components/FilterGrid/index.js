import React, { useState, useEffect, useRef, memo } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CSSTransitionGroup } from 'react-transition-group';
import VenueFilter from '../VenueFilter';
import Submenu from '../Submenu';

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
  const [activeClass, setActiveClass] = useState('');
  const [data, setData] = useState([]);
  const [panelDisplay, setPanelDisplay] = useState(false);
  const element = useRef(null);

  useEffect(() => {
    let data = [...props.data];
    setData(data);
  }, [props.data]);

  const selectAll = status => {
    let items = [];
    if (status) items = [...props.data].map(item => item.id);
    setActiveClass(status);
    let newFilterObject = {};
    newFilterObject[props.category] = items;
    props.handleFilters(newFilterObject);
  };

  const onChange = (e, id) => {
    let newFilterValue = [...props.selectedFilter];
    if (e.target.checked) {
      newFilterValue.push(id);
    } else {
      const index = props.selectedFilter.indexOf(id);
      if (index > -1) newFilterValue.splice(index, 1);
    }
    let newFilterObject = {};
    newFilterObject[props.category] = newFilterValue;
    props.handleFilters(newFilterObject);
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
      <Submenu
        heading={props.title}
        buttonText={`Select ${props.title}`}
        submenuClass="submenu-wrap"
      >
        <div className="filters-panel open">
          <ul>
            <CSSTransitionGroup
              transitionName="dropdown"
              transitionEnter={true}
              transitionEnterTimeout={300}
              transitionLeaveTimeout={300}
            >
              {data.length &&
                data.slice(0, limit).map((item, key) => {
                  let id = 'item-' + item.id;
                  let isChecked = false;
                  let index;
                  if (props.selectedFilter) {
                    index = props.selectedFilter.indexOf(item.id);
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
                      </label>
                    </li>
                  );
                })}
            </CSSTransitionGroup>
          </ul>
          {props.limit !== data.length ? (
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
