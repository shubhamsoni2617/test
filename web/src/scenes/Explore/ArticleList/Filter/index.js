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
  const [activeSelectButton, setActiveSelectButton] = useState(false);

  const activeSelectButtonhandler = toggle => {
    setActiveSelectButton(toggle);
  };
  const onChange = (e, id) => {
    handleFilters(id, e.target.checked, filterTitle);
  };
  return (
    <div className="filter-grid">
      <div className="filter-grid-heading">
        {showHeader && (
          <button
            type="button"
            onClick={() => closeFilters(filterTitle, 'back')}
          >
            <img src={BackButton} alt="back"></img>
          </button>
        )}
        <h3>{filterTitle}</h3>
        <ul>
          {!showHeader && (
            <li
              onClick={() => {
                selectOrClearAllHandler(true, filterTitle);
                activeSelectButtonhandler(true);
              }}
              className={`${activeSelectButton ? `active` : ``}`}
            >
              <span>Select all</span>
            </li>
          )}
          <li
            onClick={() => {
              selectOrClearAllHandler(false, filterTitle);
              activeSelectButtonhandler(false);
            }}
            className={`${!activeSelectButton ? `active` : ``}`}
          >
            <span>Clear Filter</span>
          </li>
        </ul>
      </div>
      <div className="filters-panel">
        <ul>
          {dataToFilter.length ? (
            dataToFilter.map(data => {
              return (
                <li key={data.id}>
                  <input
                    type="checkbox"
                    className="styled-checkbox"
                    id={data.id}
                    checked={data.isChecked}
                    onChange={e => onChange(e, data.id)}
                  />
                  <label htmlFor={data.id}>
                    {data.name} ({data.count})
                  </label>
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
      </div>

      {showHeader && (
        <div className={`filter-fixed-btn`}>
          <button
            onClick={() => {
              closeFilters(filterTitle, 'apply');
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
