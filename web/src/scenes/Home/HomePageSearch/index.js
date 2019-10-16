import React, { useState } from 'react';
import './style.scss';
import Autocomplete from './AutoComplete';

const HomePageSearch = props => {
  const [buttonActive, setButtonActive] = useState(false)

  const buttonActiveHandler = (value) => {
    setButtonActive(value)
  }
  return (
    <div className={`header-search ${buttonActive ? `active` : ``}`}>
      <Autocomplete {...props} buttonActiveHandler={buttonActiveHandler} />
    </div>
  );
};

export default HomePageSearch;
