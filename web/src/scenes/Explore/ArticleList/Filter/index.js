import React, { useState } from 'react';
import BackButton from '../../../../assets/images/next.svg';
import ShimmerEffect from '../../../../shared/components/ShimmerEffect';

const Filter = ({
  dataToFilter,
  handleFilters,
  filterTitle,
  selectOrClearAllHandler,
  showHeader,
  closeFilters,
  handleFiltersForMobile
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
        {dataToFilter.length ? (
          dataToFilter.map(data => {
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
          })
        ) : (
          <ShimmerEffect
            propCls="shm_col-xs-6 col-md-12"
            height={65}
            count={1}
            type="TILE"
          />
        )}
      </ul>

      {showHeader && (
        <div className={`filter-fixed-btn`}>
          <button
            onClick={() => {
              closeFilters();
              handleFiltersForMobile(filterTitle);
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
