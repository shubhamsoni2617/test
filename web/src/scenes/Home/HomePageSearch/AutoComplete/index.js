import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchService from '../../../../shared/services/SearchService';
import Constants from '../../../../shared/constants';
import useDebounce from '../../../../shared/hooks/useDebounce';
import RecentlySearched from './RecentlySearched';
import loaderImage from '../../../../assets/images/loader.svg';
const Autocomplete = props => {
  // console.log(JSON.parse(localStorage.getItem('recentlySearched')));

  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const debouncedSearchTerm = useDebounce(userInput, 500);

  useEffect(() => {
    let storageValues = JSON.parse(localStorage.getItem('recentlySearched'));
    if (!storageValues || !storageValues.length) {
      let recentlySearched = [];
      localStorage.setItem(
        'recentlySearched',
        JSON.stringify(recentlySearched)
      );
    }
  }, []);
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);

      fetchSearchSuggestionsService(debouncedSearchTerm);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchSuggestionsService = debouncedSearchTerm => {
    const params = {
      client: Constants.CLIENT,
      limit: 10,
      first: 1,
      search: debouncedSearchTerm
    };
    SearchService.getSearchSuggestions(params)
      .then(res => {
        setSuggestions(res.data.data);
        setIsSearching(false);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const onChange = e => {
    const userInput = e.currentTarget.value;

    setActiveSuggestion(0);

    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = question => {
    setActiveSuggestion(0);

    setShowSuggestions(false);
    setUserInput(question);

    let storageValues = JSON.parse(localStorage.getItem('recentlySearched'));
    if (storageValues) {
      if (storageValues.length > 8) {
        storageValues.shift();
      }
      storageValues.push(question);
      localStorage.setItem('recentlySearched', JSON.stringify(storageValues));
    }

    console.log(storageValues);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (suggestions && suggestions.length) {
      suggestionsListComponent = (
        <>
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => {
              return (
                <>
                  <li
                    className={`${
                      index === activeSuggestion ? `suggestion-active` : ``
                    }`}
                    key={suggestion.id}
                    onClick={() => onClick(suggestion.title)}
                  >
                    {suggestion.title}
                  </li>
                  <button>{suggestion.category}</button>
                </>
              );
            })}

            <li
              onClick={() => {
                onClick(userInput);
                props.history.push(`/search-results?q=${userInput}`);
              }}
            >
              See all Results for {userInput}
            </li>
          </ul>
        </>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          {isSearching && <img className="filter-loader" src={loaderImage} />}
        </div>
      );
    }
  }

  return (
    <div className="autocomplete">
      <input
        type="text"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={userInput}
        onFocus={() => setIsFocused(true)}
        onBlur={() => {
          setIsFocused(false);
          setShowSuggestions(false);
        }}
      />
      {suggestionsListComponent}
      {isFocused && !userInput ? <RecentlySearched {...props} /> : null}
    </div>
  );
};

export default Autocomplete;
