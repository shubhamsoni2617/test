import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

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
    // props.onQuestionIdChange(questionId);
    setFilteredSuggestions([]);
    setShowSuggestions(false);
    setUserInput(e.currentTarget.innerText);
  };

  return (
    <Fragment>
      <input
        className="inputAuto"
        type="text"
        onChange={onChange}
        value={userInput}
      />
      {helperText ? (
        <em>{helperText}</em>
      ) : (
        <ul className="suggestions">
          {filteredSuggestions.map(suggestion => (
            <div key={suggestion.id + suggestion.category_id}>
              <Link
                to={`/faq/${suggestion.category_name
                  .replace(/\s/g, "-")
                  .toLowerCase()}/${suggestion.id}`}
                className="nav-item"
                onClick={e => {
                  onClick(e, suggestion.id);
                }}
              >
                {suggestion.question} in {suggestion.category_name}
              </Link>
              <br />
            </div>
          ))}
        </ul>
      )}
    </Fragment>
  );
};

export default Autocomplete;
