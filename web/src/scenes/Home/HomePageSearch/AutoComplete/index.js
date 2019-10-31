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

const Autocomplete = props => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
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
    if (currentIndex > -1 && suggestions[currentIndex]) {
      setUserInput(suggestions[currentIndex].title);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (userInput === '') {
      setCurrentIndex(-1);
    }
  }, [userInput]);

  useEffect(() => {
    if (currentIndex === -1) {
      if (debouncedSearchTerm) {
        setIsSearching(true);
        fetchSearchSuggestionsService(debouncedSearchTerm);
      } else {
        setSuggestions([]);
      }
    }
  }, [debouncedSearchTerm]);

  const handleClick = e => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShowSuggestions(false);
    setIsFocused(false);
    props.buttonActiveHandler(false);
  };

  const focusHandler = () => {
    setShowSuggestions(false);
    setIsFocused(false);
    props.buttonActiveHandler(false);
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
    storageValuesHandler(question);
  };

  const storageValuesHandler = question => {
    setValuesInLocalStorage(question);
  };

  const onKeyDown = e => {
    e.stopPropagation();
    console.log('keycode', currentIndex);
    if (
      userInput &&
      suggestions.length &&
      currentIndex === suggestions.length - 1
    ) {
      setCurrentIndex(0);
    }
    if (!userInput.trim().length && e.keyCode === 13) {
      return;
    }
    if (e.keyCode === 13) {
      setShowSuggestions(false);
      storageValuesHandler(userInput);
      props.history.push(`/search-results?q=${userInput}`);
      Utilities.mobilecheck() &&
        document.getElementsByTagName('body')[0].classList.remove('fixed-body');
      setSuggestions([]);
      setCurrentIndex(-1);
      inputRef.current.blur();
      setUserInput('');
      setIsFocused(false);
    }
    if (
      e.keyCode === 40 &&
      userInput &&
      currentIndex < suggestions.length - 1
    ) {
      if (currentIndex === -1) {
        setSuggestions([{ title: userInput }, ...suggestions]);
        setCurrentIndex(currentIndex + 2);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }
    if (e.keyCode === 38 && userInput && currentIndex > 0) {
      console.log('keycode', e.keyCode, currentIndex - 1);

      setCurrentIndex(currentIndex - 1);
    }
  };

  const userInputHandler = value => {
    setUserInput('');
  };

  let suggestionsListComponent;
  if (showSuggestions && userInput.length > 2) {
    if (suggestions && suggestions.length) {
      suggestionsListComponent = (
        <div className="search-popup-wrapper">
          <ul className="suggestions">
            {suggestions.slice(1).map((suggestion, index) => {
              return (
                <li
                  className={`${
                    index + 1 === currentIndex ? `suggestion-selected` : ``
                    }`}
                  key={suggestion.id}
                  onClick={() => {
                    onClick(suggestion.title);
                    navigateToLink(
                      props.history,
                      suggestion.type,
                      suggestion.category,
                      suggestion.id,
                      suggestion.code,
                      suggestion.tid
                    );
                    setUserInput('');
                    Utilities.mobilecheck() &&
                      document
                        .getElementsByTagName('body')[0]
                        .classList.remove('fixed-body');
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
                props.history.push(`/search-results?q=${userInput}`);
                Utilities.mobilecheck() &&
                  document
                    .getElementsByTagName('body')[0]
                    .classList.remove('fixed-body');

                setIsFocused(false);
              }}
              className="search-link-all-results"
            >
              See all results from{' '}
              <strong>
                {currentIndex == -1 ? userInput : suggestions[0].title}
              </strong>
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
              Utilities.mobilecheck() &&
                document
                  .getElementsByTagName('body')[0]
                  .classList.remove('fixed-body');
              props.history.goBack();
            }}
          >
            <img src={previousArrow} alt="previous-btn" />
          </button>
        )}
        <input
          ref={inputRef}
          type="text"
          autoComplete={false}
          autoCorrect={false}
          spellCheck={false}
          onChange={onChange}
          onKeyDown={onKeyDown}
          value={userInput}
          placeholder="Search experiences…"
          onClick={() => {
            Utilities.mobilecheck() &&
              document
                .getElementsByTagName('body')[0]
                .classList.add('fixed-body');
          }}
          className="search-inputtype"
          onFocus={() => {
            setIsFocused(true);
            props.buttonActiveHandler(true);
            Utilities.mobilecheck() &&
              document
                .getElementsByTagName('body')[0]
                .classList.add('fixed-body');
          }}
        />
        <button
          onClick={() => {
            setUserInput('');
            inputRef.current.focus();
          }}
          className="search-overlap-crossicon"
        >
          <img src={cross} className="img-fluid active" alt="search-icon" />
        </button>
        <button
          type="submit"
          className="search-btn"
          onClick={() => {
            if (!userInput.trim().length) {
              return;
            }
            if (userInput.length > 2) {
              onClick(userInput);
              props.history.push(`/search-results?q=${userInput}`);
              Utilities.mobilecheck() &&
                document
                  .getElementsByTagName('body')[0]
                  .classList.remove('fixed-body');
            }
            setIsFocused(false);
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
        <RecentlySearched
          {...props}
          focusHandler={focusHandler}
          userInputHandler={userInputHandler}
          storageValuesHandler={storageValuesHandler}
        />
      )}
    </div>
  );
};

export default Autocomplete;
