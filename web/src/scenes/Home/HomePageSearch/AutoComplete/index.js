import React, { useState, useEffect, useRef } from 'react';
import SearchService from '../../../../shared/services/SearchService';
import Constants from '../../../../shared/constants';
import useDebounce from '../../../../shared/hooks/useDebounce';
import RecentlySearched from './RecentlySearched';
import loaderImage from '../../../../assets/images/loader.svg';
import previousArrow from '../../../../assets/images/next.svg';
import searchImage from '../../../../assets/images/search.svg';
import cross from '../../../../assets/images/cross-grey.svg';
import { setLocalStorage, setValuesInLocalStorage } from './setLocalStorage';
import searchImageBlue from '../../../../assets/images/search-blue.svg';
import './style.scss';
import navigateToLink from '../../../../shared/navigateToLink';
import Utilities from '../../../../shared/utilities';

const Autocomplete = ({ history, buttonActiveHandler }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [initialUserInput, setInitialUserInput] = useState('');
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const debouncedSearchTerm = useDebounce(userInput, 500);
  const node = useRef(null);
  const inputRef = useRef(null);
  useEffect(() => {
    setLocalStorage();
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, []);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchSearchSuggestionsService(debouncedSearchTerm);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowSuggestions(false);
    setIsFocused(false);
    buttonActiveHandler(false);
  };

  const focusHandler = () => {
    setShowSuggestions(false);
    setIsFocused(false);
    buttonActiveHandler(false);
  };

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
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = question => {
    setShowSuggestions(false);
    setUserInput(question);
    setValuesInLocalStorage(question);
  };

  const addFixedBody = () => {
    if (Utilities.mobilecheck()) {
      document.getElementsByTagName('body')[0].classList.add('fixed-body');
    }
  };
  const removeFixedBody = () => {
    if (Utilities.mobilecheck()) {
      document.getElementsByTagName('body')[0].classList.remove('fixed-body');
    }
  };

  const onKeyDown = e => {
    // e.preventDefault();
    e.stopPropagation();
    if (!initialUserInput) {
      setInitialUserInput(userInput);
    }
    if (!userInput.trim().length && e.keyCode === 13) {
      return;
    }
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setValuesInLocalStorage(userInput);
      if (activeSuggestion === -1) {
        history.push(`/search-results?q=${userInput}`);
      } else {
        let selectedSuggestion = suggestions[activeSuggestion];
        navigateToLink(
          history,
          selectedSuggestion.type,
          selectedSuggestion.category,
          selectedSuggestion.id,
          selectedSuggestion.code,
          selectedSuggestion.tid
        );
      }
      removeFixedBody();
      setSuggestions([]);
      inputRef.current.blur();
      setUserInput('');
      setIsFocused(false);
    } else if (e.keyCode === 38) {
      e.preventDefault();

      if (activeSuggestion === -1) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion === suggestions.length - 1) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;
  if (showSuggestions && userInput.length > 2) {
    if (suggestions && suggestions.length) {
      suggestionsListComponent = (
        <div className="search-popup-wrapper">
          <ul className="suggestions">
            {suggestions.map((suggestion, index) => {
              return (
                <li
                  className={
                    index === activeSuggestion ? `suggestion-selected` : ``
                  }
                  key={suggestion.id}
                  onClick={() => {
                    onClick(suggestion.title);
                    navigateToLink(
                      history,
                      suggestion.type,
                      suggestion.category,
                      suggestion.id,
                      suggestion.code,
                      suggestion.tid
                    );
                    setUserInput('');
                    removeFixedBody();
                    setIsFocused(false);
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
                history.push(`/search-results?q=${userInput}`);
                removeFixedBody();
                setIsFocused(false);
              }}
              className="search-link-all-results"
            >
              See all results from <strong>{userInput}</strong>
            </div>
          </ul>
        </div>
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
    <div
      ref={node}
      className={`autocomplete ${
        Utilities.mobilecheck() && isFocused ? `search-open` : ``
      }`}
    >
      <div className="search-popup-topbar">
        {Utilities.mobilecheck() && (
          <button
            className="search-popup-back"
            onClick={() => {
              setShowSuggestions(false);
              setIsFocused(false);
              removeFixedBody();
            }}
          >
            <img src={previousArrow} alt="previous-btn" />
          </button>
        )}
        <input
          ref={inputRef}
          type="text"
          spellCheck={false}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder="Search experiences…"
          onClick={() => addFixedBody()}
          className="search-inputtype"
          onFocus={() => {
            setIsFocused(true);
            buttonActiveHandler(true);
            addFixedBody();
          }}
        />
        {userInput && (
          <button
            onClick={() => {
              setUserInput('');
              inputRef.current.focus();
            }}
            className="search-overlap-crossicon"
          >
            <img src={cross} className="img-fluid active" alt="search-icon" />
          </button>
        )}
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            setIsFocused(!isFocused);
            !isFocused ? inputRef.current.focus() : inputRef.current.blur();
            if (!userInput.trim().length) {
              return;
            }
            if (userInput.length > 2) {
              onClick(userInput);
              history.push(`/search-results?q=${userInput}`);
              removeFixedBody();
              setUserInput('');
            }
          }}
        >
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
        <RecentlySearched history={history} focusHandler={focusHandler} />
      )}
    </div>
  );
};

export default Autocomplete;
