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
  const [activeSelectButton, setActiveSelectButton] = useState(false)

  const activeSelectButtonhandler = () => {
    setActiveSelectButton(!activeSelectButton)
  }
  const onChange = (e, id) => {
    console.log(e.target.checked);
    handleFilters(id, e.target.checked, filterTitle);
  };
  return (
    <div className="filter-grid">
      <div className="filter-grid-heading">
        {showHeader && (
          <button type="button" onClick={closeFilters}>
            <img src={BackButton} alt="back"></img>
          </button>
        )}
        <h3>{filterTitle}</h3>
        <ul>
          {!showHeader && (
            <li onClick={() => {
              selectOrClearAllHandler(true, filterTitle);
              activeSelectButtonhandler()
            }} className={`${activeSelectButton ? `active` : ``}`}>
              <span
              >
                Select all
          </span></li>
          )}
          <li onClick={() => {
            selectOrClearAllHandler(false, filterTitle);
            activeSelectButtonhandler()
          }} className={`${!activeSelectButton ? `active` : ``}`}>
            <span
            >
              Clear
        </span>
          </li>
        </ul>
      </div>
      <div className="filters-panel">
        <ul>
          {dataToFilter.map(data => {
            return (
              <li key={data.id}>
                <input
                  className="styled-checkbox"
                  type="checkbox"
                  id={data.id}
                  checked={data.isChecked}
                  onChange={e => onChange(e, data.id)}
                />
                <label htmlFor={data.id}>{data.name}({data.count})</label>
              </li>
            );
          })}
        </ul>
      </div>
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
