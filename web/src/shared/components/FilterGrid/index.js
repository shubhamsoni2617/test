import React, { useState, useEffect, memo } from "react";
import { CSSTransitionGroup } from "react-transition-group";

const FilterGrid = props => {
  const [limit, setLimit] = useState(5);
  const [activeClass, setActiveClass] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    let data = [...props.data];
    setData(data);
  }, [props.data]);

  const selectAll = (status) => {
    let ids = [];
    if (status){
      let items = [...props.data];
      items.map(item => {
        ids.push(item.id);
      });
    }
    setActiveClass(status);
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
    props.handleFilters(props.category, data[key].id, e.target.checked);
  };

  if(!data.length) return null;

  return (
    <div className="filter-grid">
      <div className="filter-grid-heading">
        <h3>{props.title}</h3>
        <ul>
          <li className={activeClass ? "active" : ""}>
            <a onClick={() => selectAll(true)}>Select all</a>
          </li>
          <li className={activeClass ? "" : "active"}>
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
              data.slice(0, limit).map((item, key) => {
                let id = "item-" + item.id;
                let isChecked = false;
                if (props.selectedFilter && props.selectedFilter.indexOf(item.id) > -1) {
                  isChecked = true;
                }
                return (
                  <li key={key}>
                    <input
                      checked={isChecked}
                      onChange={e => onChange(e, key)}
                      className="styled-checkbox"
                      type="checkbox"
                      id={id}
                      value=""
                    />
                    <label htmlFor={id}>
                      {item.name}{" "}
                      {item.events_count ? `(${item.events_count})` : ""}
                    </label>
                  </li>
                );
              })}
          </CSSTransitionGroup>
        </ul>
        {data.length > limit && (
          <a onClick={() => toggle(true)} className="view-all-filters">
            + {data.length - limit} More
          </a>
        )}
        {data.length == limit && (
          <a onClick={() => toggle(false)} className="view-all-filters">
            Show Less
          </a>
        )}
      </div>
    </div>
  );
};
export default memo(FilterGrid);
