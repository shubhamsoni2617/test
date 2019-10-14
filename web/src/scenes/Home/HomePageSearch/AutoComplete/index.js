import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchService from '../../../../shared/services/SearchService';
import Constants from '../../../../shared/constants';
import useDebounce from '../../../../shared/hooks/useDebounce';

const Autocomplete = props => {
  const [activeSuggestion, setActiveSuggestion] = useState(0);
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  //   useEffect(() => {
  //     fetchSearchSuggestionsService();
  //   }, [userInput]);
  const debouncedSearchTerm = useDebounce(userInput, 500);
  useEffect(() => {
    // if (!suggestions) {
    //   fetchSearchSuggestionsService(debouncedSearchTerm);
    // }
    if (debouncedSearchTerm) {
      console.log('debounce');
      setIsSearching(true);
      // searchCharacters(debouncedSearchTerm).then(results => {
      //   setIsSearching(false);
      //   setResults(results);
      // });
      fetchSearchSuggestionsService(debouncedSearchTerm);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchSuggestionsService = debouncedSearchTerm => {
    console.log('test');
    const params = {
      client: Constants.CLIENT,
      limit: 8,
      first: 1,
      search: debouncedSearchTerm
    };
    SearchService.getSearchSuggestions(params)
      .then(res => {
        setIsSearching(false);
        console.log(res.data.data);
        if (!res.data.data) {
          setSuggestions([]);
        } else {
          setSuggestions(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
  const onChange = e => {
    // const { suggestions } = props;
    const userInput = e.currentTarget.value;
    const filteredSuggestions = suggestions;

    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
    setUserInput(e.currentTarget.value);
  };

  const onClick = question => {
    // console.log(e.currentTarget.value);
    setActiveSuggestion(0);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(question);
  };

  const onKeyDown = e => {
    if (e.keyCode === 13) {
      setActiveSuggestion(0);
      setShowSuggestions(false);
      setUserInput(filteredSuggestions[activeSuggestion].title);
    } else if (e.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }
      setActiveSuggestion(activeSuggestion - 1);
    } else if (e.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }
      setActiveSuggestion(activeSuggestion + 1);
    }
  };

  let suggestionsListComponent;

  if (showSuggestions && userInput) {
    if (suggestions.length) {
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
                    key={suggestion.title}
                    onClick={() => onClick(suggestion.title)}
                  >
                    <h4 className="suggestion-title">{suggestion.title}</h4>
                    <button>{suggestion.category}</button>
                  </li>
                </>
              );
            })}
            <div className="search-link-all-results">
              <Link to={`/search-results?q=${userInput}`}>
                See all Results for <strong>{userInput}</strong>
              </Link>
            </div>
          </ul>
        </>
      );
    } else {
      suggestionsListComponent = (
        <div className="no-suggestions">
          <p>No suggestions, you're on your own!</p>
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
      />
      {suggestionsListComponent}
      <Link to={`/search-results?q=${userInput}`}>
        See all Results for {userInput}
      </Link>
    </div>
  );
};

export default Autocomplete;
