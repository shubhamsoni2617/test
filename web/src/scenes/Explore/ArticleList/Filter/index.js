import React, { useState } from 'react';
import BackButton from '../../../../assets/images/next.svg';

const Filter = ({
  dataToFilter,
  handleFilters,
  filterTitle,
  selectOrClearAllHandler,
  showHeader,
  closeFilters
}) => {
  console.log(dataToFilter);
  const onChange = (e, id) => {
    console.log(e.target.checked);
    handleFilters(id, e.target.checked, filterTitle);
  };
  return (
    <div>
      <div className="filter-grid-heading">
        {showHeader && (
          <button type="button" onClick={closeFilters}>
            <img src={BackButton} alt="back"></img>
          </button>
        )}
        <h3>{filterTitle}</h3>
        {!showHeader && (
          <span
            onClick={() => {
              selectOrClearAllHandler(true, filterTitle);
            }}
          >
            Select all
          </span>
        )}
        <span
          onClick={() => {
            selectOrClearAllHandler(false, filterTitle);
          }}
        >
          Clear
        </span>
      </div>
      <ul>
        {dataToFilter.map(data => {
          return (
            <li key={data.id}>
              <input
                type="checkbox"
                id={data.id}
                checked={data.isChecked}
                onChange={e => onChange(e, data.id)}
              />
              <label htmlFor={data.id}>{data.name}</label>
              <span>({data.count})</span>
            </li>
          );
        })}
      </ul>

      {showHeader && (
        <div className={`filter-fixed-btn`}>
          <button
            onClick={() => {
              closeFilters();
              //   handleFilters(id, targetChecked, filterTitle);
            }}
          >
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

export default Filter;
