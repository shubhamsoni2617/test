import React, { useState, useEffect, memo } from "react";
import { CSSTransitionGroup } from "react-transition-group";

const FilterGrid = props => {
  const [limit, setLimit] = useState(5);
  const [activeClass, setActiveClass] = useState('');
  const [data, setData] = useState(props.data);

  const selectAll = status => {
    let items = [...data];
    let ids = [];
    items.map(item => {
      item.isChecked = status;
      ids.push(item.id);
    });
    setActiveClass(status);
    if (!status) {
      ids = [];
    }
    props.handleFilters(`${props.category}-check-uncheck`, ids);
  };

  const toggle = status => {
    if (status) {
      setLimit(props.data.length);
    } else {
      setLimit(5);
    }
  };

  const onChange = (e, key) => {
    let temp = [...data];
    temp[key].isChecked = e.target.checked;
    setData(temp);
    props.handleFilters(props.category, temp[key].id, e.target.checked);
  };
  return (
    <div className="filter-grid">
      <div className="filter-grid-heading">
        <h3>{props.title}</h3>
        <ul>
          <li
            className={activeClass ? "active" : ""}
          >
            <a onClick={() => selectAll(true)}>Select all</a>
          </li>
          <li
            className={activeClass ? "" : "active"}
          >
            <a onClick={() => selectAll(false)}>Clear</a>
          </li>
        </ul>
      </div>
      <div className="filters-panel">
        <ul>
          <CSSTransitionGroup
            transitionName="dropdown"
            transitionEnter={true}
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            {data.length &&
              data.slice(0, limit).map((genre, key) => {
                let id = "genre-" + genre.id;
                return (
                  <li key={key}>
                    <input
                      checked={genre.isChecked}
                      onChange={e => onChange(e, key)}
                      className="styled-checkbox"
                      type="checkbox"
                      id={id}
                      value=""
                    />
                    <label htmlFor={id}>
                      {genre.name} {genre.events_count ? `(${genre.events_count})` : ''}
                    </label>
                  </li>
                );
              })}
          </CSSTransitionGroup>
        </ul>
        {data.length > limit && (
          <a
            onClick={() => toggle(true)}
            className="view-all-filters"
          >
            + {data.length - limit} More
          </a>
        )}
        {data.length == limit && (
          <a
            onClick={() => toggle(false)}
            className="view-all-filters"
          >
            Show Less
          </a>
        )}
      </div>
    </div>
  );
};
export default memo(FilterGrid);
