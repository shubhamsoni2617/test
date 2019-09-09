import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import './style.scss';

const Autocomplete = props => {
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [helperText, setHelperText] = useState(null);

  const onChange = e => {
    const { suggestions, categories } = props;
    let userInput = e.currentTarget.value;
    let helperText = null;
    let allSuggestions = [];

    suggestions.flatMap(element =>
      element.category_id.map(category =>
        categories.findIndex(categoryObj => {
          if (categoryObj.id === category) {
            allSuggestions.push({
              ...element,
              category_id: category,
              category_name: categoryObj.name
            });
          }
        })
      )
    );

    let filteredSuggestions = allSuggestions.filter(
      suggestion =>
        suggestion.question.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    if (userInput.length < 3) {
      filteredSuggestions = [];
      helperText = "Please enter atleast 3 characters";
    }
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(showSuggestions);
    setUserInput(userInput);
    setHelperText(helperText);
  };

  const onClick = (e, questionId) => {
    props.onQuestionIdChange(questionId);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
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
        <em>{helperText}</em>
      ) : (
        <ul className="suggestions">
          {filteredSuggestions.map(suggestion => (
            <li key={suggestion.id + suggestion.category_id}>
              <Link
                to={`/faq/${suggestion.category_name
                  .replace(/\s/g, "-")
                  .toLowerCase()}`}
                className="nav-item"
                onClick={e => {
                  onClick(e, suggestion.id);
                }}
              >
              <span className="faq-qus">{suggestion.question}</span>
              <span className="faq-qus-category">in {suggestion.category_name}</span> 
              </Link>
            </li> 
          ))}
        </ul>
      )}
      {filteredSuggestions.length===0 && userInput.length >3 ?<span className="no-suggestions">you are on your own</span>: null}
    </Fragment>
  );
};

export default Autocomplete;
