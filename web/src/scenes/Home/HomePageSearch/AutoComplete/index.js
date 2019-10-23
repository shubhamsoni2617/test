import React, { useState, useEffect, useRef } from 'react';
import SearchService from '../../../../shared/services/SearchService';
import Constants from '../../../../shared/constants';
import useDebounce from '../../../../shared/hooks/useDebounce';
import RecentlySearched from './RecentlySearched';
import loaderImage from '../../../../assets/images/loader.svg';
import previousArrow from '../../../../assets/images/next.svg';
import searchImage from '../../../../assets/images/search.svg';
import searchImageBlue from '../../../../assets/images/search-blue.svg';
import './style.scss';
import navigateToLink from '../../../../shared/navigateToLink';
import Utilities from '../../../../shared/utilities';

const Autocomplete = props => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(userInput, 500);
  const node = useRef(null);
  useEffect(() => {
    let storageValues = JSON.parse(localStorage.getItem('recentlySearched'));
    if (!storageValues || !storageValues.length) {
      let recentlySearched = [];
      localStorage.setItem(
        'recentlySearched',
        JSON.stringify(recentlySearched)
      );
    }
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);
  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowSuggestions(false);
    setIsFocused(false);
    props.buttonActiveHandler(false)
  };

  const focusHandler = () => {
    setIsFocused(false);
    props.buttonActiveHandler(false)
  };

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
      limit: 6,
      first: 0,
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
    setActiveSuggestion(0);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = question => {
    setActiveSuggestion(0);
    setShowSuggestions(false);
    setUserInput(question);
    storageValuesHandler(question);
  };

  const storageValuesHandler = question => {
    let storageValues = JSON.parse(localStorage.getItem('recentlySearched'));
    if (storageValues) {
      if (storageValues.length > 7) {
        storageValues.shift();
      }
      if (storageValues.indexOf(question) === -1) {
        storageValues.push(question);
        localStorage.setItem('recentlySearched', JSON.stringify(storageValues));
      }
    }
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      storageValuesHandler(userInput);
      props.history.push(`/search-results?q=${userInput}`);
    }
  };

  const userInputHandler = value => {
    setUserInput(value);
  };

  let suggestionsListComponent;
  if (showSuggestions && userInput) {
    if (suggestions && suggestions.length) {
      suggestionsListComponent = (
        <div className="search-popup-wrapper">
          {/* {Utilities.mobilecheck() && (
            <input
              type="text"
              onChange={onChange}
              onKeyDown={onKeyDown}
              value={userInput}
              className="search-inputtype mobile"
              onFocus={() => {
                setIsFocused(true);
              }}
            />
          )} */}
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => {
              return (
                <li
                  className={`${
                    index === activeSuggestion ? `suggestion-active` : ``
                    }`}
                  key={suggestion.id}
                  onClick={() => {
                    onClick(suggestion.title);
                    navigateToLink(
                      props.history,
                      suggestion.type,
                      suggestion.category,
                      suggestion.id,
                      suggestion.code
                    );
                    Utilities.mobilecheck() && document.getElementsByTagName("body")[0].classList.remove("fixed-body");
                    setIsFocused(false)

                  }}
                >
                  <h4 className="suggestion-title">{suggestion.title}</h4>
                  {suggestion.type === 'event' ||
                    suggestion.type === 'attractions' ? (
                      <button>{suggestion.category}</button>
                    ) : (
                      <p>{suggestion.category}</p>
                    )}
                </li>
              );
            })}
            <div
              onClick={() => {
                onClick(userInput);
                props.history.push(`/search-results?q=${userInput}`);
                Utilities.mobilecheck() && document.getElementsByTagName("body")[0].classList.remove("fixed-body");
                // return Utilities.mobilecheck() ? setIsFocused(false) : null
                setIsFocused(false)
              }}
              className="search-link-all-results"
            >
              See all results form <strong>{userInput}</strong>
            </div>
          </ul>
        </div >
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
    <div ref={node} className={`autocomplete ${Utilities.mobilecheck() && isFocused ? `search-open` : ``}`}>
      <div className="search-popup-topbar">
        {Utilities.mobilecheck() && <button className="search-popup-back" onClick={() => {
          setShowSuggestions(false);
          setIsFocused(false);
          Utilities.mobilecheck() && document.getElementsByTagName("body")[0].classList.remove("fixed-body");
          props.history.goBack();
        }}>
          <img src={previousArrow} alt="previous-btn" />
        </button>}
        <input
          type="text"
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          onClick={() => {
            Utilities.mobilecheck() && document.getElementsByTagName("body")[0].classList.add("fixed-body");
          }}
          className="search-inputtype"
          onFocus={() => {
            setIsFocused(true);
            props.buttonActiveHandler(true);
            Utilities.mobilecheck() && document.getElementsByTagName("body")[0].classList.add("fixed-body");
          }}
        />
        <button type="submit" className="search-btn">
          <img src={searchImage} className="img-fluid" alt="search-icon" />
          <img
            src={searchImageBlue}
            className="img-fluid active"
            alt="search-icon"
          />
        </button>
      </div>

      {suggestionsListComponent}
      {isFocused && !userInput && (
        <RecentlySearched
          {...props}
          focusHandler={focusHandler}
          userInputHandler={userInputHandler}
        // onChange={onChange}
        // onKeyDown={onKeyDown}
        // value={userInput}
        />
      )}
    </div>
  );
};

export default Autocomplete;
