import React, { useState } from 'react';
import './style.scss';
import Autocomplete from './AutoComplete';

const HomePageSearch = ({ history, mostViewed }) => {
  const [buttonActive, setButtonActive] = useState(false);
  const buttonActiveHandler = value => {
    setButtonActive(value);
  };
  return (
    <div className={`header-search ${buttonActive ? `active` : ``}`}>
      <Autocomplete
        history={history}
        buttonActiveHandler={buttonActiveHandler}
        mostViewed={mostViewed}
      />
    </div>
  );
};

export default HomePageSearch;
