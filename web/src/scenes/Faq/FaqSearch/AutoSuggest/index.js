import React, { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const AutoSuggest = props => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [userInput, setUserInput] = useState('');
  const [helperText, setHelperText] = useState(null);

  const onChange = e => {
    const { suggestions, categories } = props;
    let userInput = e.currentTarget.value;
    let helperText = null;
    let allSuggestions = [];
    if (suggestions && categories) {
      allSuggestions = suggestions.reduce((acc, element) => {
        element.category_id.map(category =>
          categories.findIndex(categoryObj => {
            if (categoryObj.id === category) {
              acc.push({
                ...element,
                category_id: category,
                category_name: categoryObj.name
              });
            }
          })
        );
        return acc;
      }, []);
    }

    let filteredSuggestions = allSuggestions.filter(
      suggestion =>
        suggestion.question.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    if (userInput.length < 3) {
      filteredSuggestions = [];
      helperText = 'Please enter atleast 3 characters';
    }
    if (filteredSuggestions.length === 0) {
      setShowSuggestions(true);
    }
    setFilteredSuggestions(filteredSuggestions);

    setUserInput(userInput);
    setHelperText(helperText);
  };

  useEffect(() => {
    setFilteredSuggestions([]);
  }, [props.setFilteredSuggestions]);

  const onClick = question => {
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(question);
  };

  return (
    <Fragment>
      <div className="faq-input-group">
        <input
          className="faq-input"
          placeholder="Ask a question…"
          type="text"
          onChange={onChange}
          value={userInput}
        />
      </div>
      {helperText ? (
        <span className="faq-search-error">{helperText}</span>
      ) : (
        <ul className="suggestions">
          {filteredSuggestions.map(suggestion => (
            <li key={suggestion.id + suggestion.category_id}>
              <Link
                to={`/faq/${suggestion.category_name
                  .replace(/\s/g, '-')
                  .toLowerCase()}?id=${suggestion.id}`}
                className="nav-item"
                onClick={() => {
                  onClick(suggestion.question);
                }}
              >
                <span className="faq-qus">{suggestion.question}</span>
                <span className="faq-qus-category">
                  in {suggestion.category_name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {filteredSuggestions.length === 0 &&
      userInput.length > 3 &&
      showSuggestions ? (
        <span className="no-suggestions">you are on your own</span>
      ) : null}
    </Fragment>
  );
};

export default AutoSuggest;
